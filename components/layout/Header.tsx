'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo variant="light" size="sm" href="/" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {mainNavigation.map((item) =>
                item.children ? (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    isActive={isActive(item.href)}
                  />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-bronze'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Desktop Right: Phone + CTA — hidden until phone number is configured */}
            {/* <div className="hidden md:flex items-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold text-cream hover:text-bronze transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/quote"
                className="rounded-lg bg-bronze px-5 py-2.5 text-sm font-semibold text-white hover:bg-bronze/90 transition-all hover-lift shadow-md"
              >
                Free Instant Quote
              </Link>
            </div> */}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-cream hover:text-white transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
