'use client';

import { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  const toggleSection = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] md:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-charcoal z-[70] md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-5">
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-5 pb-6">
              {mainNavigation.map((item) => (
                <div key={item.label} className="border-b border-white/10">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="flex items-center justify-between w-full py-4 text-left text-base font-medium text-slate-200 hover:text-white transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            expanded === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-4 space-y-1">
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="block py-2 text-sm text-bronze font-medium hover:text-bronze-light transition-colors"
                              >
                                View All {item.label}
                              </Link>
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2 text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-4 text-base font-medium text-slate-200 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-5 border-t border-white/10 space-y-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-cream text-cream font-semibold hover:bg-cream hover:text-charcoal transition-all"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/quote"
                onClick={onClose}
                className="flex items-center justify-center w-full py-3 rounded-lg bg-bronze text-white font-semibold hover:bg-bronze/90 transition-all"
              >
                Get Free Instant Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
