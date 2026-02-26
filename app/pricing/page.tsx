import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Camera,
  Calculator,
  CalendarCheck,
  CheckCircle,
  Truck,
  DollarSign,
  ShieldCheck,
  Ban,
  Scale,
  CreditCard,
  Percent,
  Package,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { pricingFaqs } from '@/data/faqs';
import HeroSection from '@/components/sections/HeroSection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/sections/TrustBadges';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

// ── SEO Metadata ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Transparent Pricing | ${siteConfig.name}`,
  description:
    'Volume-based junk removal pricing at $46/cubic yard. No hidden fees, no surprises. Get a free instant photo quote from Thompson Craft LLC in Central New Mexico.',
  alternates: { canonical: `${siteConfig.baseUrl}/pricing` },
  openGraph: {
    title: `Transparent Pricing | ${siteConfig.name}`,
    description:
      'Volume-based junk removal pricing at $46/cubic yard. No hidden fees, no surprises. Get a free instant photo quote.',
    url: `${siteConfig.baseUrl}/pricing`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.baseUrl}/images/pricing/truck-volume.jpg`,
        width: 1200,
        height: 675,
        alt: 'Thompson Craft LLC volume-based pricing',
      },
    ],
  },
};

// ── Page Component ───────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        backgroundImage="/images/pricing/truck-volume.jpg"
        backgroundAlt="Junk removal truck with volume measurement markings"
        badge="Simple & Honest"
        headline="Transparent, Volume-Based Pricing"
        subtext="No hidden fees. No surprise charges. Just honest pricing based on the space your items use in our truck."
        primaryCta={{ label: 'Contact Us for a Quote', href: '/contact' }}
      />

      {/* How Pricing Works */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="How Our Pricing Works"
              subtitle="Four simple steps from photos to a clean space"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative text-center p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover-bronze-border transition-smooth hover-lift group h-full">
                  <div className="w-14 h-14 rounded-full bg-bronze text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center mx-auto mb-4 group-hover:bg-bronze transition-colors">
                    <step.icon className="w-6 h-6 text-bronze group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rate callout */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 mx-auto max-w-2xl text-center p-8 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
              <p className="text-2xl font-bold text-emerald-900">
                Our Rate: $46 per cubic yard (compressed)
              </p>
              <p className="mt-3 text-emerald-800">
                Most competitors charge by &quot;minimum load&quot; or &quot;truck
                size&quot; — we only charge for the space you actually use.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Volume Guide */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Common Item Volumes"
              subtitle="See how much space typical items take up in our truck"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Volume table */}
            <ScrollReveal direction="left">
              <div className="bg-cream rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="space-y-4">
                  {volumeGuide.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0"
                    >
                      <span className="text-slate-700 font-medium">{item.item}</span>
                      <span className="text-bronze font-bold whitespace-nowrap ml-4">
                        {item.volume}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-600 italic">
                  Volumes are estimates of compressed truck space. Your instant quote
                  will provide exact pricing based on your photos.
                </p>
              </div>
            </ScrollReveal>

            {/* Volume tiers visual */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-charcoal">
                  Truck Load Estimates
                </h3>
                <p className="text-slate-700">
                  Our trucks hold approximately 15 cubic yards. Here&apos;s what
                  different load sizes typically cost:
                </p>
                <div className="space-y-4">
                  {loadTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="rounded-xl border-2 border-slate-200 bg-cream p-6 hover:border-bronze transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-charcoal">
                          {tier.name}
                        </h4>
                        <span className="text-lg font-bold text-bronze">
                          {tier.price}
                        </span>
                      </div>
                      {/* Visual bar */}
                      <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full bg-bronze rounded-full transition-all"
                          style={{ width: tier.percent }}
                        />
                      </div>
                      <p className="text-sm text-slate-600">{tier.examples}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Affects Your Price */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What Affects Your Price"
              subtitle="Understand the factors that go into your quote"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingFactors.map((factor, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-lg hover-bronze-border transition-smooth h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center">
                    <factor.icon className="w-6 h-6 text-bronze" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* No Hidden Fees Guarantee */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal p-12 lg:p-16 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full bg-bronze flex items-center justify-center mx-auto mb-8">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Our No Hidden Fees Guarantee
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                We believe in radical pricing transparency. The price we quote is the
                price you pay — period.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {guarantees.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <CheckCircle className="w-8 h-8 text-bronze-light mx-auto mb-3" />
                    <p className="text-white font-semibold text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="How We Compare"
              subtitle="See why volume-based pricing is fairer for you"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">
                      <span className="text-bronze-light">Thompson Craft LLC</span>
                    </th>
                    <th className="text-center p-4 font-semibold text-slate-400">
                      Typical Competitors
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-cream'}
                    >
                      <td className="p-4 text-charcoal font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        <span className="text-emerald-600 font-semibold">
                          {row.us}
                        </span>
                      </td>
                      <td className="p-4 text-center text-slate-500">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <TrustBadges variant="light" layout="row" />
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FAQAccordion
        title="Pricing Questions"
        subtitle="Everything you need to know about how we price our services"
        faqs={pricingFaqs}
        variant="light"
      />

      {/* CTA */}
      <CTASection
        headline="Ready for a Free Estimate?"
        subtext="Contact us today for accurate, transparent pricing based on volume. No obligation, no pressure."
        primaryCta={{ label: 'Contact Us Today', href: '/contact' }}
        footnote="No commitment required • Price confirmed on-site before work begins"
        variant="bronze"
      />
    </>
  );
}

// ── Data Constants ───────────────────────────────────────────────────

const pricingSteps: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Camera,
    title: 'Upload Photos',
    description:
      'Take 2-3 photos of your junk. Our AI system analyzes volume and provides instant estimates.',
  },
  {
    icon: Calculator,
    title: 'Get Instant Quote',
    description:
      'Receive transparent pricing based on actual cubic yards your items will occupy (compressed).',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Pickup',
    description:
      'Choose same-day or schedule ahead. We arrive on time in our window.',
  },
  {
    icon: CheckCircle,
    title: 'Final Price Confirmed',
    description:
      'We measure actual volume loaded. You only pay for space used — often less than the estimate!',
  },
];

const volumeGuide = [
  { item: 'Standard Couch', volume: '1.5–2 cu yd' },
  { item: 'Queen Mattress & Box Spring', volume: '2–2.5 cu yd' },
  { item: 'Refrigerator', volume: '1.5–2.5 cu yd' },
  { item: 'Washer/Dryer Set', volume: '2.5–3 cu yd' },
  { item: 'Office Desk', volume: '1–1.5 cu yd' },
  { item: 'Dining Table + 4 Chairs', volume: '2–3 cu yd' },
  { item: 'Hot Tub', volume: '4–6 cu yd' },
  { item: 'Yard Waste (pickup truck load)', volume: '3–4 cu yd' },
];

const loadTiers = [
  {
    name: 'Minimum Load',
    price: '~$92',
    percent: '13%',
    examples: 'A few small items, single piece of furniture, or a couple of bags.',
  },
  {
    name: 'Quarter Load',
    price: '~$173',
    percent: '25%',
    examples:
      'Small apartment cleanout, a couch + mattress, or a bathroom renovation.',
  },
  {
    name: 'Half Load',
    price: '~$345',
    percent: '50%',
    examples:
      'Garage cleanout, several rooms of furniture, or a medium renovation.',
  },
  {
    name: 'Full Load',
    price: '~$690',
    percent: '100%',
    examples:
      'Full estate cleanout, whole-home renovation debris, or commercial cleanout.',
  },
];

const pricingFactors: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Package,
    title: 'Volume (Cubic Yards)',
    description:
      'The primary factor. We measure compressed truck space, not loose pile size. Our AI photo analysis provides accurate estimates.',
  },
  {
    icon: Scale,
    title: 'Weight of Items',
    description:
      'Standard items are included in the volume price. Extremely heavy materials like concrete or dirt may have a nominal surcharge, disclosed upfront.',
  },
  {
    icon: Truck,
    title: 'Accessibility',
    description:
      'Standard interior removal from any floor is included at no extra charge. We carry items from basements, attics, and tight spaces.',
  },
  {
    icon: Ban,
    title: 'Item Type',
    description:
      'Most items are accepted. Hazardous materials (paint, chemicals, asbestos, medical waste) cannot be removed. We\'ll let you know upfront.',
  },
  {
    icon: Percent,
    title: 'No Travel Fees',
    description:
      'Our pricing is all-inclusive within Central New Mexico. No fuel surcharges, trip fees, or hidden costs regardless of location.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description:
      'Pay after the job is done and approved. We accept cash, cards, Venmo, Zelle, and checks. No upfront deposits required.',
  },
];

const guarantees = [
  'No fuel surcharges',
  'No hidden trip fees',
  'No bait-and-switch',
  'Price locked before work',
];

const comparisonRows = [
  {
    feature: 'Pricing Model',
    us: 'Per cubic yard (exact)',
    them: '"Minimum load" (vague)',
  },
  {
    feature: 'Upfront Quote',
    us: 'Free AI photo quote',
    them: 'Phone estimate only',
  },
  {
    feature: 'On-site Confirmation',
    us: 'Price confirmed before work',
    them: 'Price changes on arrival',
  },
  {
    feature: 'Travel Fees',
    us: 'None — all-inclusive',
    them: 'Often charged separately',
  },
  {
    feature: 'Recycling/Donation',
    us: '80% diverted from landfill',
    them: 'Mostly landfill',
  },
  {
    feature: 'Interior Removal',
    us: 'Included, any floor',
    them: 'Often extra per flight',
  },
];
