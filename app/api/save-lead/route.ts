import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json();

    // Send to Zapier webhook (which connects to Go High Level)
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    if (!zapierWebhookUrl) {
      console.error('ZAPIER_WEBHOOK_URL not configured');
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        address: `${leadData.address}, ${leadData.city}, ${leadData.zip}`,
        photos: leadData.photos.map((p: any) => p.url).join(', '),
        notes: leadData.notes || '',
        estimatedVolume: leadData.estimate.estimatedVolume,
        priceRange: leadData.estimate.priceRange,
        reasoning: leadData.estimate.reasoning,
        confidence: leadData.estimate.confidence,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Zapier');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}
