import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/sections/ScrollReveal';
import type { HowItWorksProps } from '@/types';

export default function HowItWorks({
  title = 'How It Works',
  subtitle,
  steps,
  variant = 'light',
}: HowItWorksProps) {
  const bgClass =
    variant === 'dark'
      ? 'rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal p-12 lg:p-16 shadow-2xl'
      : '';
  const stepBg = variant === 'dark' ? 'bg-white/10 border border-white/20' : 'bg-white border border-slate-200';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-charcoal';
  const descColor = variant === 'dark' ? 'text-slate-300' : 'text-slate-700';

  return (
    <div className={bgClass}>
      <SectionHeading title={title} subtitle={subtitle} variant={variant} />

      <div className="space-y-6 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className={`flex items-start gap-4 p-6 rounded-xl ${stepBg}`}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bronze text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${titleColor}`}>{step.title}</h3>
                <p className={`${descColor} leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
