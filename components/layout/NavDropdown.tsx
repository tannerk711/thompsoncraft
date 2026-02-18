'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { NavItem } from '@/types';

interface NavDropdownProps {
  item: NavItem;
  isActive: boolean;
}

export default function NavDropdown({ item, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    openTimer.current = setTimeout(() => setOpen(true), 150);
  }, []);

  const handleLeave = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isActive
            ? 'text-bronze'
            : 'text-slate-200 hover:text-white'
        }`}
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>

      {open && item.children && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div className="glass-dark rounded-xl shadow-2xl py-3 min-w-[240px]">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
