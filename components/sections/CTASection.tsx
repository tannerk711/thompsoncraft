import Button from '@/components/ui/Button';
import type { CTASectionProps } from '@/types';

export default function CTASection({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  footnote,
  variant = 'bronze',
}: CTASectionProps) {
  const containerStyles =
    variant === 'bronze'
      ? 'rounded-3xl bg-bronze p-12 lg:p-16 shadow-2xl'
      : 'rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal p-12 lg:p-16 shadow-2xl';

  const primaryVariant = variant === 'bronze' ? 'white' : 'bronze';
  const secondaryVariant = 'outline';

  return (
    <div className={`${containerStyles} text-center`}>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {headline}
      </h2>
      <p className="mt-6 text-xl leading-8 text-white max-w-2xl mx-auto">
        {subtext}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href={primaryCta.href} variant={primaryVariant} size="lg">
          {primaryCta.label}
        </Button>
        {secondaryCta && (
          <Button
            href={secondaryCta.href}
            variant={secondaryVariant}
            size="lg"
          >
            {secondaryCta.label}
          </Button>
        )}
      </div>
      {footnote && (
        <p className="mt-8 text-sm text-white">{footnote}</p>
      )}
    </div>
  );
}
