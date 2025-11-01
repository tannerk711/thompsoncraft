import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: NextRequest) {
  try {
    const { photos, notes } = await request.json();

    if (!photos || photos.length === 0) {
      return NextResponse.json(
        { error: 'At least one photo is required' },
        { status: 400 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Build the prompt with photo URLs
    const photoPrompts = photos
      .map(
        (photo: any, index: number) =>
          `Photo ${index + 1}: ${photo.url}`
      )
      .join('\n');

    const prompt = `You are an expert junk removal estimator. Analyze these photos of items that need to be removed and provide an accurate estimate.

${photoPrompts}

${notes ? `Additional notes from customer: ${notes}` : ''}

Based on the photos, provide:
1. Estimated volume (in cubic yards)
2. Price range (based on $75-150 per cubic yard)
3. Brief reasoning for your estimate
4. Confidence level (High/Medium/Low)

Format your response as JSON with these exact keys:
{
  "estimatedVolume": "X-Y cubic yards",
  "priceRange": "$XXX-$YYY",
  "reasoning": "Brief explanation",
  "confidence": "High/Medium/Low"
}`;

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            ...photos.map((photo: any) => ({
              type: 'image' as const,
              source: {
                type: 'url' as const,
                url: photo.url,
              },
            })),
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

    // Extract JSON from the response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }

    const estimate = JSON.parse(jsonMatch[0]);

    return NextResponse.json(estimate);
  } catch (error) {
    console.error('Error generating estimate:', error);
    return NextResponse.json(
      { error: 'Failed to generate estimate' },
      { status: 500 }
    );
  }
}
