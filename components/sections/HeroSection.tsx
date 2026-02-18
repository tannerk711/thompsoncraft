import Image from 'next/image';
import Button from '@/components/ui/Button';
import type { HeroSectionProps } from '@/types';
import { ShieldCheck, Clock, Leaf } from 'lucide-react';

export default function HeroSection({
  backgroundImage,
  backgroundAlt,
  badge,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  showTrustIndicators = false,
  overlayOpacity = 'bg-black/70',
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover"
        />
        <div className={`absolute inset-0 ${overlayOpacity}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          {badge && (
            <div className="mb-8 inline-flex items-center rounded-full bg-charcoal/40 backdrop-blur-md px-4 py-2 text-sm font-medium text-cream border-2 border-bronze-light shadow-lg drop-shadow-lg">
              <svg
                className="w-5 h-5 mr-2 text-bronze-light"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {badge}
            </div>
          )}

          <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight">
            <span className="block text-bronze-light drop-shadow-2xl">
              {headline}
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-200 max-w-2xl mx-auto drop-shadow-lg">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryCta.href} variant="bronze" size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          {showTrustIndicators && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-cream drop-shadow-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-bronze" />
                <span className="font-medium">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-bronze" />
                <span className="font-medium">Same-Day Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-bronze" />
                <span className="font-medium">80% Recycled or Donated</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
