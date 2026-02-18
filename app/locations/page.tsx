import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/site';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/sections/TrustBadges';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.name}`,
  description:
    'Professional junk removal across the Treasure Valley. Serving Boise, Meridian, Nampa, Eagle, and Garden City with same-day service and transparent pricing.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/locations`,
  },
  openGraph: {
    title: `Service Areas | ${siteConfig.name}`,
    description:
      'Professional junk removal across the Treasure Valley. Serving Boise, Meridian, Nampa, Eagle, and Garden City.',
    url: `${siteConfig.baseUrl}/locations`,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function LocationsIndexPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        backgroundImage="/images/locations/boise-hero.jpg"
        backgroundAlt="Treasure Valley Idaho service area"
        badge="Treasure Valley Coverage"
        headline="Serving the Treasure Valley"
        subtext="From Boise to Nampa and everywhere in between, our professional junk removal team is ready to serve your neighborhood with same-day availability and transparent pricing."
        primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
        secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
      />

      {/* Location Cards Grid */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Service Areas"
              subtitle="Professional junk removal with local expertise in every community we serve"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <ScrollReveal key={location.slug} delay={index * 0.05}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover-lift transition-smooth hover:shadow-xl hover:border-bronze"
                >
                  {/* City Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={location.heroImage}
                      alt={`Junk removal in ${location.city}, Idaho`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-bronze text-white text-sm font-semibold rounded-full">
                        <MapPin className="w-3.5 h-3.5" />
                        {location.city}, ID
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                      {location.city} Junk Removal
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-3">
                      {location.description}
                    </p>

                    {/* Neighborhoods preview */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {location.neighborhoods.slice(0, 4).map((n) => (
                        <span
                          key={n}
                          className="text-xs px-2.5 py-1 bg-cream rounded-full text-slate-500"
                        >
                          {n}
                        </span>
                      ))}
                      {location.neighborhoods.length > 4 && (
                        <span className="text-xs px-2.5 py-1 bg-cream rounded-full text-bronze font-medium">
                          +{location.neighborhoods.length - 4} more
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-2 text-bronze font-semibold text-sm group-hover:gap-3 transition-all">
                      View {location.city} Service Area
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <TrustBadges layout="row" />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTASection
            headline="Ready for Junk-Free Living?"
            subtext="No matter where you are in the Treasure Valley, we provide fast, professional junk removal with transparent pricing and eco-friendly disposal."
            primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
            secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
            variant="bronze"
          />
        </div>
      </section>
    </>
  );
}
