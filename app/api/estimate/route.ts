import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';

// Configure maximum duration for this serverless function (Vercel)
export const maxDuration = 15; // 15 seconds (Pro plan - gives buffer for mobile)

// Validation schema
const estimateRequestSchema = z.object({
  photos: z.array(z.object({
    url: z.string().url().max(500),
    publicId: z.string().max(200).optional(),
    // Accept valid URLs or empty strings, convert empty to undefined
    thumbnail: z.string().max(500).optional()
      .transform(val => val && val.trim() !== '' ? val : undefined)
      .pipe(z.string().url().max(500).optional()),
  })).min(1).max(10),
  notes: z.string().max(500).optional(),
});

// Helper function to convert image URL to base64 with SSRF protection
async function urlToBase64(url: string): Promise<{ base64: string; mediaType: string }> {
  // SECURITY: Validate URL is from allowed domain (Cloudinary only)
  const allowedDomain = 'res.cloudinary.com';
  let urlObj: URL;

  try {
    urlObj = new URL(url);
  } catch (err) {
    throw new Error('Invalid URL format');
  }

  if (!urlObj.hostname.endsWith(allowedDomain)) {
    throw new Error('Invalid image source - must be from Cloudinary');
  }

  // SECURITY: Prevent redirects to internal services
  // Add timeout to prevent hanging on slow connections
  const response = await fetch(url, {
    redirect: 'error',
    signal: AbortSignal.timeout(5000), // 5 second timeout per image
  });

  // SECURITY: Validate content-type is actually an image
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    throw new Error('Invalid content type - must be an image');
  }

  // SECURITY: Check content-length to prevent memory exhaustion
  const contentLength = response.headers.get('content-length');
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (contentLength && parseInt(contentLength) > maxSize) {
    throw new Error('Image too large - maximum 10MB');
  }

  const buffer = await response.arrayBuffer();

  // SECURITY: Double-check actual size after download
  if (buffer.byteLength > maxSize) {
    throw new Error('Image too large - maximum 10MB');
  }

  const base64 = Buffer.from(buffer).toString('base64');
  const mediaType = contentType.split('/')[1] || 'jpeg';

  return { base64, mediaType };
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const rawData = await request.json();
    const validationResult = estimateRequestSchema.safeParse(rawData);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid request data',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    const { photos, notes } = validationResult.data;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const anthropic = new Anthropic({ apiKey });

    // Convert all photos to base64
    // OPTIMIZATION: Use thumbnails instead of full images for faster processing on mobile
    const imageContents = await Promise.all(
      photos.map(async (photo: any, index: number) => {
        try {
          // Use thumbnail if available (much smaller, faster for mobile), fallback to full URL
          const imageUrl = photo.thumbnail || photo.url;
          const { base64, mediaType } = await urlToBase64(imageUrl);
          return {
            type: 'image' as const,
            source: {
              type: 'base64' as const,
              media_type: `image/${mediaType}` as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
              data: base64,
            },
          };
        } catch (err) {
          throw new Error(`Failed to process photo ${index + 1}: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
      })
    );

    const prompt = `You are a junk removal estimator. Analyze the photos and provide an accurate estimate.

${notes ? `Customer notes: ${notes}` : ''}

CRITICAL: Estimate LOADED truck volume after items are broken down and compressed. Don't add raw volumes.

Volume Guidelines (compressed):
- Couch: 1.5-2.25 cy | Loveseat: 1.1-1.5 cy | Chair: 0.4-0.75 cy
- Mattress: 1.5-2.25 cy | Boxes (sm/med/lg): 0.15/0.3/0.5 cy
- Appliances: Mini 1.5 cy, Full 2.5 cy | Desk: 1.5-2.25 cy

Rules: Items compress 20-30%. Be conservative. Typical job = 4-8 cy. Rate: $46/cy.

Return JSON:
{
  "detectedItems": [{"item": "description", "volume": "~X cy"}],
  "volumeBreakdown": {"conservative": "X cubic yards", "midRange": "X cubic yards", "high": "X cubic yards"},
  "estimatedVolume": "X-Y cubic yards",
  "priceRange": "$XXX-$XXX",
  "recommendedPrice": "$XXX-$XXX",
  "reasoning": "Brief methodology",
  "confidence": "High/Medium/Low"
}`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            ...imageContents,
            {
              type: 'text' as const,
              text: prompt,
            },
          ],
        },
      ],
    });

    // Parse the response
    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : '';

    // Extract JSON from the response with multiple fallback strategies
    let estimate;
    try {
      // Strategy 1: Try direct parse (if Claude returns pure JSON)
      estimate = JSON.parse(responseText);
    } catch {
      try {
        // Strategy 2: Extract JSON with regex (find first { to last })
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error('No JSON found in response');
        }
        estimate = JSON.parse(jsonMatch[0]);
      } catch {
        // Strategy 3: Look for JSON in code blocks
        const codeBlockMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (codeBlockMatch) {
          estimate = JSON.parse(codeBlockMatch[1]);
        } else {
          // Log the response in development for debugging
          if (process.env.NODE_ENV !== 'production') {
            console.error('Failed to parse AI response:', responseText);
          }
          throw new Error('Failed to parse AI response');
        }
      }
    }

    return NextResponse.json(estimate);
  } catch (error: any) {
    // Only log errors in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error generating estimate:', error);
    }

    // Provide more helpful error messages for common issues
    let errorMessage = 'An error occurred';

    if (error.message) {
      if (error.message.includes('timeout') || error.message.includes('aborted')) {
        errorMessage = 'Request timed out - please try with fewer or smaller photos';
      } else if (error.message.includes('too large')) {
        errorMessage = 'One or more photos are too large - please use smaller images';
      } else if (process.env.NODE_ENV !== 'production') {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      {
        error: 'Failed to generate estimate',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
