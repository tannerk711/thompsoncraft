import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Zap,
  Camera,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig } from '@/data/site';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/sections/TrustBadges';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// ── SEO Metadata ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    'Get in touch with Thompson Craft LLC for junk removal in Central New Mexico. Email us or get a free instant photo quote online. We respond in 60 minutes.',
  alternates: { canonical: `${siteConfig.baseUrl}/contact` },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      'Get in touch with Thompson Craft LLC for junk removal in Central New Mexico. Email us or get a free instant photo quote.',
    url: `${siteConfig.baseUrl}/contact`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.baseUrl}/images/contact/contact-hero.jpg`,
        width: 1200,
        height: 675,
        alt: 'Contact Thompson Craft LLC',
      },
    ],
  },
};

// ── Page Component ───────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD ContactPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: siteConfig.name,
            url: siteConfig.baseUrl,
            telephone: siteConfig.phoneHref.replace('tel:', ''),
            email: siteConfig.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.zip,
            },
            openingHours: 'Mo-Sa 07:00-19:00, Su 09:00-17:00',
            areaServed: {
              '@type': 'Place',
              name: 'Central New Mexico',
            },
          }),
        }}
      />

      {/* Hero */}
      <HeroSection
        backgroundImage="/images/contact/contact-hero.jpg"
        backgroundAlt="Contact the Thompson Craft LLC team"
        badge="We're Here to Help"
        headline="Get In Touch"
        subtext="Have a question or ready to schedule your junk removal? Reach out by email and we'll respond within 60 minutes."
        primaryCta={{ label: 'Send Us an Email', href: `mailto:${siteConfig.email}` }}
      />

      {/* Get Your Free Quote CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-bronze to-bronze-dark p-12 lg:p-16 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Get Your Free Instant Quote
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Skip the phone tag. Upload a few photos and our AI-powered system
                will calculate an accurate quote in minutes — no obligation, no
                pressure.
              </p>
              <Button href="/quote" variant="white" size="lg" icon={ArrowRight}>
                Start Your Free Quote
              </Button>
              <p className="mt-6 text-sm text-white/80">
                Takes less than 2 minutes • No account required • Instant results
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Reach Us Directly"
              subtitle="Prefer to talk to a real person? We're here for you."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a
                  href={method.href}
                  className="block text-center p-8 rounded-2xl bg-cream border-2 border-slate-200 shadow-md hover:shadow-xl hover-bronze-border transition-smooth hover-lift group h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-cream-dark flex items-center justify-center mx-auto mb-6 group-hover:bg-bronze transition-colors">
                    <method.icon className="w-8 h-8 text-bronze group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {method.title}
                  </h3>
                  <p className="text-bronze font-semibold text-lg mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-slate-600">{method.note}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 60-Minute Response Guarantee */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal p-12 lg:p-16 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-bronze/20 px-4 py-2 text-sm font-medium text-bronze-light mb-6">
                    <Zap className="w-4 h-4" />
                    <span>Our Promise</span>
                  </div>
                  <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    60-Minute Response Guarantee
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed mb-8">
                    When you reach out, we don&apos;t leave you waiting. Every quote
                    request, phone call, and email gets a response within 60 minutes
                    during business hours.
                  </p>
                  <div className="space-y-4">
                    {responseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bronze flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-slate-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-block rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-10">
                    <Clock className="w-16 h-16 text-bronze-light mx-auto mb-4" />
                    <div className="text-7xl font-bold text-white mb-2">60</div>
                    <p className="text-2xl font-semibold text-bronze-light">
                      Minutes or Less
                    </p>
                    <p className="mt-3 text-slate-400 text-sm">
                      Average response time during business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Service Area"
              subtitle="Proudly serving Central New Mexico"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209867.0!2d-106.7!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220e5b5e388c59%3A0xf2f9e5b3c5f9c9a9!2sRio%20Rancho%2C%20NM!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thompson Craft LLC service area map"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={area.href}
                  className="flex items-center gap-2 p-3 rounded-lg bg-cream border border-slate-200 hover:border-bronze hover:shadow-md transition-all text-center justify-center"
                >
                  <MapPin className="w-4 h-4 text-bronze flex-shrink-0" />
                  <span className="text-sm font-semibold text-charcoal">
                    {area.city}
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <TrustBadges variant="light" layout="grid" />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for Stress-Free Junk Removal?"
        subtext="Reach out today for a free estimate. We provide accurate, transparent pricing — no commitment required."
        primaryCta={{ label: 'Email Us Today', href: `mailto:${siteConfig.email}` }}
        footnote="Same-day service available • Licensed & insured • 80% recycled or donated"
        variant="charcoal"
      />
    </>
  );
}

// ── Data Constants ───────────────────────────────────────────────────

const contactMethods: Array<{
  icon: LucideIcon;
  title: string;
  value: string;
  note: string;
  href: string;
}> = [
  {
    icon: Mail,
    title: 'Email Us',
    value: siteConfig.email,
    note: 'We respond within 60 minutes',
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: `${siteConfig.address.city}, ${siteConfig.address.state}`,
    note: 'Serving all of Central New Mexico',
    href: 'https://www.google.com/maps/place/Rio+Rancho,+NM',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: siteConfig.hours,
    note: 'Same-day service available',
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageSquare,
    title: 'Quick Response',
    value: '60 Minutes or Less',
    note: 'During business hours',
    href: `mailto:${siteConfig.email}`,
  },
];

const responseFeatures = [
  'Quote requests answered with a detailed estimate and scheduling options',
  'Every inquiry gets a personal response — no auto-replies',
  'Email inquiries answered promptly during business hours',
  'Same-day scheduling available for most Central New Mexico locations',
];

const serviceAreas = [
  { city: 'Rio Rancho', href: '/locations/rio-rancho' },
  { city: 'Albuquerque', href: '/locations/albuquerque' },
  { city: 'Corrales', href: '/locations/corrales' },
  { city: 'Los Ranchos', href: '/locations/los-ranchos' },
  { city: 'Sandia Heights', href: '/locations/sandia-heights' },
  { city: 'North Albuquerque Acres', href: '/locations/north-albuquerque-acres' },
  { city: 'Los Lunas', href: '/locations/los-lunas' },
  { city: 'Santa Fe', href: '/locations/santa-fe' },
];
