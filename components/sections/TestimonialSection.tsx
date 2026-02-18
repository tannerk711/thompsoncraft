import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/sections/ScrollReveal';
import type { TestimonialSectionProps } from '@/types';

export default function TestimonialSection({
  title = 'What Our Customers Say',
  subtitle = 'Real reviews from real Treasure Valley residents',
  testimonials,
  variant = 'light',
}: TestimonialSectionProps) {
  const cardBg =
    variant === 'dark'
      ? 'bg-white/10 border border-white/20 backdrop-blur-sm'
      : 'bg-white border border-slate-200 shadow-md';
  const quoteColor = variant === 'dark' ? 'text-slate-200' : 'text-slate-700';
  const nameColor = variant === 'dark' ? 'text-white' : 'text-charcoal';
  const locationColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const borderColor = variant === 'dark' ? 'border-white/20' : 'border-slate-200';

  return (
    <div>
      <SectionHeading title={title} subtitle={subtitle} variant={variant} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.id} delay={index * 0.1}>
            <div
              className={`rounded-2xl p-8 hover-lift transition-smooth hover:shadow-xl ${cardBg}`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-bronze"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`${quoteColor} leading-relaxed italic mb-6`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className={`border-t ${borderColor} pt-4`}>
                <p className={`font-bold ${nameColor}`}>{testimonial.name}</p>
                <p className={`text-sm ${locationColor}`}>
                  {testimonial.location}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
