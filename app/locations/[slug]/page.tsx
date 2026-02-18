import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { services } from '@/data/services';
import { getTestimonialsByIds } from '@/data/testimonials';
import { siteConfig } from '@/data/site';
import { generateLocationMetadata, generateLocationJsonLd } from '@/lib/metadata';
import HeroSection from '@/components/sections/HeroSection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/sections/TrustBadges';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

// ── Static params for build-time generation ────────────────────────

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

// ── Per-page SEO metadata ──────────────────────────────────────────

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return generateLocationMetadata(location);
}

// ── Page Component ─────────────────────────────────────────────────

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  const testimonials = getTestimonialsByIds(location.testimonialIds);
  const jsonLd = generateLocationJsonLd(location);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        backgroundImage={location.heroImage}
        backgroundAlt={`Junk removal in ${location.city}, Idaho`}
        badge={`Serving ${location.city}`}
        headline={location.heroHeadline}
        subtext={location.description}
        primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
        secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
        showTrustIndicators
      />

      {/* Service Area Description & Highlights */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={`Why ${location.city} Chooses Junkyard Gentlemen`}
              subtitle="Local expertise, fast service, and transparent pricing"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {location.serviceHighlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-bronze" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {highlight}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Local Landmarks */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                Serving Areas Near
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {location.landmarks.map((landmark) => (
                  <span
                    key={landmark}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm text-slate-600 shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-bronze" />
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={`${location.city} Neighborhoods We Serve`}
              subtitle={`Full coverage across ${location.city} and surrounding areas`}
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {location.neighborhoods.map((neighborhood, index) => (
              <ScrollReveal key={neighborhood} delay={index * 0.03}>
                <div className="flex items-center gap-3 bg-cream rounded-xl border border-slate-200 px-5 py-4">
                  <MapPin className="w-4 h-4 text-bronze flex-shrink-0" />
                  <span className="text-charcoal font-medium text-sm">
                    {neighborhood}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={`Services Available in ${location.city}`}
              subtitle="Full-service junk removal for residential, commercial, and construction needs"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <ScrollReveal key={service.slug} delay={index * 0.05}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover-lift transition-smooth hover:shadow-xl hover:border-bronze"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                      <ServiceIcon className="w-6 h-6 text-bronze" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-charcoal mb-1 group-hover:text-bronze transition-colors">
                        {service.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-bronze text-sm font-semibold group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-bronze font-semibold hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <TestimonialSection
              title={`What ${location.city} Customers Say`}
              subtitle={`Real reviews from our ${location.city} area clients`}
              testimonials={testimonials}
            />
          </div>
        </section>
      )}

      {/* Service Area Map */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={`${location.city} Service Area`}
              subtitle="We cover the entire area — no extra travel charges"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location.city + ', Idaho')}&zoom=12`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city}, Idaho service area map`}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <TrustBadges layout="row" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FAQAccordion
            title={`${location.city} Junk Removal FAQs`}
            subtitle={`Common questions about our ${location.city} service`}
            faqs={location.faqs}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTASection
            headline={`Get Your Instant ${location.city} Junk Quote`}
            subtext={`Ready to clear the clutter? Upload photos of what you need removed and get a free price estimate for ${location.city} junk removal in minutes.`}
            primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
            secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
            variant="charcoal"
          />
        </div>
      </section>
    </>
  );
}
