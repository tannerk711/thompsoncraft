import type { LucideIcon } from 'lucide-react';

// ── Site Configuration ──────────────────────────────────────────────

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  baseUrl: string;
  hours: string;
}

// ── Navigation ──────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ── Service Pages ───────────────────────────────────────────────────

export interface WhatWeRemoveItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface PricingFactor {
  title: string;
  description: string;
}

export interface BeforeAfterPair {
  before: string;
  after: string;
  caption: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroImage: string;
  heroHeadline: string;
  heroSubtext: string;
  meta: {
    title: string;
    description: string;
  };
  whatWeRemove: WhatWeRemoveItem[];
  howItWorks: HowItWorksStep[];
  pricingFactors: PricingFactor[];
  faqs: FAQ[];
  beforeAfterImages: BeforeAfterPair[];
  testimonialIds: string[];
}

// ── Location Pages ──────────────────────────────────────────────────

export interface LocationPage {
  slug: string;
  city: string;
  heroImage: string;
  heroHeadline: string;
  meta: {
    title: string;
    description: string;
  };
  description: string;
  neighborhoods: string[];
  landmarks: string[];
  serviceHighlights: string[];
  faqs: FAQ[];
  testimonialIds: string[];
}

// ── Testimonials ────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  service: string;
  rating: number;
}

// ── FAQs ────────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

// ── Component Props ─────────────────────────────────────────────────

export interface HeroSectionProps {
  backgroundImage: string;
  backgroundAlt: string;
  badge?: string;
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showTrustIndicators?: boolean;
  overlayOpacity?: string;
}

export interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  variant?: 'light' | 'dark';
}

export interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: 'light' | 'dark';
}

export interface CTASectionProps {
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  footnote?: string;
  variant?: 'bronze' | 'charcoal';
}

export interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: HowItWorksStep[];
  variant?: 'light' | 'dark';
}

export interface TrustBadgesProps {
  variant?: 'light' | 'dark';
  layout?: 'row' | 'grid';
}

export interface BeforeAfterGalleryProps {
  title?: string;
  subtitle?: string;
  pairs: BeforeAfterPair[];
}
