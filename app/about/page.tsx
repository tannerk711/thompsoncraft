import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Crown,
  Sparkles,
  Users,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Recycle,
  Handshake,
  TreePine,
  Leaf,
  Target,
  Heart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { testimonials } from '@/data/testimonials';
import HeroSection from '@/components/sections/HeroSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/sections/TrustBadges';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

// ── SEO Metadata ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    'Meet Thompson Craft LLC — Central New Mexico\'s trusted junk removal team. Locally owned, eco-friendly, and committed to respectful, professional service across the Rio Rancho and Albuquerque area.',
  alternates: { canonical: `${siteConfig.baseUrl}/about` },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      'Meet Thompson Craft LLC — Central New Mexico\'s trusted junk removal team. Locally owned, eco-friendly, and committed to respectful service.',
    url: `${siteConfig.baseUrl}/about`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.baseUrl}/images/about/team-hero.jpg`,
        width: 1200,
        height: 675,
        alt: 'The Thompson Craft LLC team',
      },
    ],
  },
};

// ── Page Component ───────────────────────────────────────────────────

export default function AboutPage() {
  // Pick 3 diverse testimonials for the page
  const featuredTestimonials = [
    testimonials[0],
    testimonials[2],
    testimonials[4],
  ];

  return (
    <>
      {/* JSON-LD Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.baseUrl,
            telephone: siteConfig.phoneHref.replace('tel:', ''),
            email: siteConfig.email,
            description: siteConfig.tagline,
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.zip,
            },
            areaServed: {
              '@type': 'Place',
              name: 'Central New Mexico',
            },
          }),
        }}
      />

      {/* Hero */}
      <HeroSection
        backgroundImage="/images/about/team-hero.jpg"
        backgroundAlt="The Thompson Craft LLC professional junk removal team"
        badge="Locally Owned & Operated"
        headline="Meet Thompson Craft LLC"
        subtext="We're not just a junk removal company — we're your neighbors. Based in Rio Rancho, we bring respect, reliability, and eco-friendly practices to every job across Central New Mexico."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      {/* Our Story */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Story"
              subtitle="How a simple idea became Central New Mexico's most trusted junk removal service"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Thompson Craft LLC was born from a simple observation: junk removal
                  didn&apos;t have to be stressful, disrespectful, or wasteful. Too many
                  companies treat your property carelessly, leave messes behind, and send
                  everything straight to the landfill.
                </p>
                <p>
                  We set out to change that. As proud New Mexico residents, we built a
                  company around the values our community deserves — professionalism,
                  honesty, and environmental responsibility. Every team member is
                  background-checked, uniformed, and trained to treat your home like
                  their own.
                </p>
                <p>
                  Today, we&apos;ve completed hundreds of cleanouts across Central New Mexico,
                  diverting more than 80% of collected items from landfills through our
                  network of local charities and recycling partners. We&apos;re proud to be
                  the junk removal company Rio Rancho and Albuquerque trust most.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 rounded-2xl bg-white border-2 border-bronze/20 shadow-md">
                  <div className="text-4xl font-bold text-bronze mb-1">500+</div>
                  <p className="text-sm font-semibold text-charcoal">Jobs Completed</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white border-2 border-bronze/20 shadow-md">
                  <div className="text-4xl font-bold text-bronze mb-1">80%</div>
                  <p className="text-sm font-semibold text-charcoal">Recycled/Donated</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white border-2 border-bronze/20 shadow-md">
                  <div className="text-4xl font-bold text-bronze mb-1">5★</div>
                  <p className="text-sm font-semibold text-charcoal">Average Rating</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white border-2 border-bronze/20 shadow-md">
                  <div className="text-4xl font-bold text-bronze mb-1">12+</div>
                  <p className="text-sm font-semibold text-charcoal">Donation Partners</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Why We're Different"
              subtitle="Not all junk removal services are created equal. Experience the difference of working with true professionals."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-md hover:shadow-xl hover-bronze-border transition-smooth hover-lift group h-full">
                  <div className="w-14 h-14 rounded-full bg-cream-dark flex items-center justify-center mb-6 group-hover:bg-bronze transition-colors">
                    <reason.icon className="w-7 h-7 text-bronze group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we do"
            />
          </ScrollReveal>

          <div className="rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bronze flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Giving Back to Central New Mexico"
              subtitle="We believe a great business lifts up its community"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image
                  src="/images/about/community.jpg"
                  alt="Thompson Craft LLC team volunteering in the community"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Every item we collect gets a second chance. We partner with over 12
                  local organizations to ensure usable goods find new homes instead of
                  landfills.
                </p>
                <div className="space-y-4">
                  {communityHighlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-cream border border-slate-200"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bronze flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Environmental Commitment"
              subtitle="Keeping New Mexico beautiful, one pickup at a time"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {ecoStats.map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center p-6 rounded-2xl ${stat.bg} border-2 ${stat.border} hover-lift transition-smooth`}
                    >
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: stat.iconBg }}>
                        <stat.icon className="w-7 h-7" style={{ color: stat.iconColor }} />
                      </div>
                      <div className="text-4xl font-bold mb-1" style={{ color: stat.iconColor }}>
                        {stat.value}
                      </div>
                      <p className="text-sm font-semibold text-charcoal">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We sort every load by hand, separating recyclables, donatable items,
                  and true waste. Our network of local partners ensures that furniture
                  goes to families in need, metals get recycled, electronics are properly
                  processed, and yard waste becomes compost.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image
                  src="/images/about/eco-commitment.jpg"
                  alt="Eco-friendly sorting and recycling operations"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <TrustBadges variant="light" layout="grid" />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Real reviews from real Central New Mexico residents"
        testimonials={featuredTestimonials}
        variant="light"
      />

      {/* CTA */}
      <CTASection
        headline="Ready to Experience the Difference?"
        subtext="See why Central New Mexico homeowners and businesses trust Thompson Craft LLC for respectful, eco-friendly junk removal."
        primaryCta={{ label: 'Contact Us Today', href: '/contact' }}
        footnote="Same-day service available • Licensed & insured"
        variant="bronze"
      />
    </>
  );
}

// ── Data Constants ───────────────────────────────────────────────────

const whyChooseUs: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Crown,
    title: 'Respectful Service',
    description:
      'We treat your property like our own. No property damage, no mess left behind, and always courteous service.',
  },
  {
    icon: Sparkles,
    title: 'Spotless Cleanup',
    description:
      "We sweep and clean the area after removal. You won't even know we were there (except your junk will be gone).",
  },
  {
    icon: Users,
    title: 'Professional Team',
    description:
      'Uniformed, background-checked professionals. Not just anyone with a truck — actual trained specialists.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthy & Insured',
    description:
      'Fully licensed and insured with comprehensive liability coverage. Your property is protected.',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    description:
      'We respect your schedule. Arrive when promised, finish when estimated. No surprises.',
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    description:
      'Locally owned and operated. We donate usable items to Central New Mexico charities and families in need.',
  },
];

const companyValues: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Heart,
    title: 'Respect Above All',
    description:
      "Every customer, every property, every item gets treated with care. We understand that what's junk to one person may hold memories for another.",
  },
  {
    icon: Target,
    title: 'Radical Transparency',
    description:
      'No hidden fees, no surprise charges, no bait-and-switch. Our volume-based pricing means you always know exactly what you\'re paying for.',
  },
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description:
      "We sort every load by hand to maximize recycling and donation. Landfill is our last resort, not our first stop.",
  },
  {
    icon: Handshake,
    title: 'Community Partnership',
    description:
      'We partner with 12+ local charities, recyclers, and donation centers to ensure your items find new purpose and support neighbors in need.',
  },
];

const communityHighlights: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: HeartHandshake,
    title: 'Habitat for Humanity ReStore',
    description:
      'Furniture, appliances, and building materials donated weekly to support affordable housing in Central New Mexico.',
  },
  {
    icon: Recycle,
    title: 'Central New Mexico Recycling Network',
    description:
      'Metals, electronics, wood, and plastics sorted and sent to local recycling partners instead of the landfill.',
  },
  {
    icon: Users,
    title: 'Local Charity Partnerships',
    description:
      'Usable clothing, household goods, and personal items go to Goodwill, local shelters, and families in need.',
  },
];

const ecoStats: Array<{
  icon: LucideIcon;
  value: string;
  label: string;
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
}> = [
  {
    icon: Recycle,
    value: '80%',
    label: 'Recycled or Donated',
    bg: 'bg-gradient-to-br from-emerald-50 to-white',
    border: 'border-emerald-200',
    iconBg: 'rgb(209 250 229)',
    iconColor: 'rgb(5 150 105)',
  },
  {
    icon: Handshake,
    value: '12+',
    label: 'Local Partners',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    border: 'border-blue-200',
    iconBg: 'rgb(219 234 254)',
    iconColor: 'rgb(37 99 235)',
  },
  {
    icon: TreePine,
    value: '500+',
    label: 'Tons Diverted',
    bg: 'bg-gradient-to-br from-bronze/10 to-white',
    border: 'border-bronze/30',
    iconBg: 'rgba(180, 130, 45, 0.1)',
    iconColor: 'hsl(43 74% 39%)',
  },
];
