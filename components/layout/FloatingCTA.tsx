'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquareQuote } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/quote') return null;

  return (
    <Link
      href="/quote"
      aria-label="Get a free instant quote"
      className={`fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-bronze text-white shadow-xl hover:bg-bronze/90 transition-all ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <MessageSquareQuote className="w-6 h-6" />
    </Link>
  );
}
