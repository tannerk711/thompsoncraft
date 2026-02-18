import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getTestimonialsByIds } from '@/data/testimonials';
import { generateServiceMetadata, generateServiceJsonLd } from '@/lib/metadata';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQAccordion from '@/components/sections/FAQAccordion';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { DollarSign } from 'lucide-react';

// ── Static params for build-time generation ────────────────────────

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// ── Per-page SEO metadata ──────────────────────────────────────────

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return generateServiceMetadata(service);
}

// ── Page Component ─────────────────────────────────────────────────

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const testimonials = getTestimonialsByIds(service.testimonialIds);
  const jsonLd = generateServiceJsonLd(service);
  const ServiceIcon = service.icon;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        backgroundImage={service.heroImage}
        backgroundAlt={service.name}
        badge="Professional Service"
        headline={service.heroHeadline}
        subtext={service.heroSubtext}
        primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
        secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
        showTrustIndicators
      />

      {/* What We Remove */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What We Remove"
              subtitle={`Our ${service.name.toLowerCase()} service covers a wide range of items`}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whatWeRemove.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover-lift transition-smooth hover:shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center mb-4">
                      <ItemIcon className="w-6 h-6 text-bronze" />
                    </div>
                    <h3 className="font-bold text-charcoal mb-2">{item.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <HowItWorks
            title={`How ${service.name} Works`}
            subtitle="Our simple process from quote to cleanup"
            steps={service.howItWorks}
          />
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What Affects Your Price"
              subtitle="Transparent, volume-based pricing with no hidden fees"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.pricingFactors.map((factor, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-bronze" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">
                      {factor.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FAQAccordion
            title={`${service.name} FAQs`}
            subtitle="Common questions about this service"
            faqs={service.faqs}
          />
        </div>
      </section>

      {/* Before & After Gallery (conditional) */}
      {service.beforeAfterImages.length > 0 && (
        <section className="py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <BeforeAfterGallery pairs={service.beforeAfterImages} />
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <TestimonialSection
              title="What Our Customers Say"
              subtitle={`Real reviews from ${service.name.toLowerCase()} customers`}
              testimonials={testimonials}
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTASection
            headline="Get Your Free Instant Quote"
            subtext={`Ready for ${service.name.toLowerCase()}? Upload a few photos and get a price estimate in minutes.`}
            primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
            secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
            variant="charcoal"
          />
        </div>
      </section>
    </>
  );
}
