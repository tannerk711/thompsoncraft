import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Free Instant Quote | Thompson Craft LLC',
  description:
    'Upload photos of your junk and get an instant AI-powered quote. No obligation, no waiting. Professional junk removal in Rio Rancho and Central New Mexico.',
  alternates: {
    canonical: 'https://thompsoncraftllc.com/quote',
  },
  openGraph: {
    title: 'Get Your Free Instant Quote | Thompson Craft LLC',
    description:
      'Upload photos and get an instant junk removal quote. No obligation, no waiting.',
    url: 'https://thompsoncraftllc.com/quote',
    siteName: 'Thompson Craft LLC',
    type: 'website',
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
