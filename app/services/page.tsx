import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description:
    'Professional junk removal services in Boise and the Treasure Valley. Estate cleanouts, residential & commercial junk removal, construction debris, appliance removal, and more.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/services`,
  },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description:
      'Professional junk removal services in Boise and the Treasure Valley.',
    url: `${siteConfig.baseUrl}/services`,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        backgroundImage="/images/services/residential-junk-removal-hero.jpg"
        backgroundAlt="Professional junk removal services"
        badge="Full-Service Junk Removal"
        headline="Our Services"
        subtext="From single-item pickups to full property cleanouts, we handle it all with professionalism, transparency, and care for the environment."
        primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
        secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
      />

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What We Do"
              subtitle="Professional junk removal services tailored to your needs"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <ScrollReveal key={service.slug} delay={index * 0.05}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-200 p-8 shadow-md hover-lift transition-smooth hover:shadow-xl hover:border-bronze"
                  >
                    <div className="w-14 h-14 rounded-xl bg-bronze/10 flex items-center justify-center mb-6 group-hover:bg-bronze/20 transition-colors">
                      <ServiceIcon className="w-7 h-7 text-bronze" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.heroSubtext.length > 120
                        ? service.heroSubtext.slice(0, 120) + '...'
                        : service.heroSubtext}
                    </p>
                    <span className="inline-flex items-center gap-2 text-bronze font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTASection
            headline="Not Sure Which Service You Need?"
            subtext="No worries — upload photos of what you need removed and we'll figure out the rest. Our AI-powered quote system handles everything."
            primaryCta={{ label: 'Get Your Free Quote', href: '/quote' }}
            secondaryCta={{ label: 'Call (844) 543-JUNK', href: 'tel:+18445435865' }}
            variant="bronze"
          />
        </div>
      </section>
    </>
  );
}
