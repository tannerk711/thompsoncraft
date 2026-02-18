import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Free Instant Quote | Junkyard Gentlemen',
  description:
    'Upload photos of your junk and get an instant AI-powered quote. No obligation, no waiting. Professional junk removal in Boise and the Treasure Valley.',
  alternates: {
    canonical: 'https://junkhaulerboise.com/quote',
  },
  openGraph: {
    title: 'Get Your Free Instant Quote | Junkyard Gentlemen',
    description:
      'Upload photos and get an instant junk removal quote. No obligation, no waiting.',
    url: 'https://junkhaulerboise.com/quote',
    siteName: 'Junkyard Gentlemen',
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
