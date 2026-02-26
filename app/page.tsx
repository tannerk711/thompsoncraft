import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Crown,
  Sparkles,
  Users,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Building2,
  Snowflake,
  TrendingUp,
  HardHat,
  Home as HomeIcon,
  Building,
  Package,
  Sofa,
  Plug,
  TreePine,
  Bath,
  Monitor,
  Store,
  UtensilsCrossed,
  Recycle,
  Handshake,
  Shirt,
  Factory,
  Smartphone,
  Armchair,
  Gift,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import HeroSection from '@/components/sections/HeroSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import ScrollReveal from '@/components/sections/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/site';
import { getTestimonialsByIds } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Thompson Craft LLC | Professional Junk Removal in Rio Rancho & Central New Mexico',
  description:
    'Professional junk removal in Rio Rancho and Central New Mexico. Same-day service, transparent pricing at $46/cubic yard, eco-friendly disposal. Free instant photo quotes. Licensed & insured.',
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: 'Thompson Craft LLC | Professional Junk Removal Rio Rancho',
    description:
      'Professional, stress-free junk removal with white-glove service throughout Central New Mexico. Eco-friendly, respectful, and reliable.',
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.baseUrl}/images/home/home-hero.jpg`,
        width: 1920,
        height: 1080,
        alt: 'Thompson Craft LLC - Professional Junk Removal in Rio Rancho',
      },
    ],
  },
};

const homepageTestimonials = getTestimonialsByIds([
  'sarah-mitchell',
  'mike-thompson',
  'jennifer-rodriguez',
]);

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: 'Professional junk removal in Rio Rancho and Central New Mexico.',
  url: siteConfig.baseUrl,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Rio Rancho' },
    { '@type': 'City', name: 'Albuquerque' },
    { '@type': 'City', name: 'Corrales' },
    { '@type': 'City', name: 'Los Ranchos de Albuquerque' },
    { '@type': 'City', name: 'Sandia Heights' },
    { '@type': 'City', name: 'North Albuquerque Acres' },
    { '@type': 'City', name: 'Los Lunas' },
    { '@type': 'City', name: 'Santa Fe' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/home/home-hero.jpg"
        backgroundAlt="Professional movers loading furniture onto junk removal truck in Central New Mexico"
        badge="Professional Central New Mexico Junk Removal"
        headline="Professional Junk Removal Service"
        subtext="Respectful, stress-free service that treats your property with care. Serving Rio Rancho and Central New Mexico with eco-friendly junk removal you can trust."
        primaryCta={{ href: '/contact', label: 'Get In Touch' }}
        showTrustIndicators
      />

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Why Professional Service Matters */}
        <ScrollReveal className="mx-auto mt-32 max-w-7xl">
          <SectionHeading
            title="Why Professional Service Matters"
            subtitle="Not all junk removal services are created equal. Experience the difference of working with true professionals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-md hover:shadow-xl hover-bronze-border transition-smooth hover-lift group h-full">
                  <div className="w-14 h-14 rounded-full bg-cream-dark flex items-center justify-center mb-6 group-hover:bg-bronze transition-colors">
                    <reason.icon className="w-7 h-7 text-bronze group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{reason.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{reason.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Local Expertise Section */}
        <ScrollReveal className="mx-auto mt-32 max-w-7xl">
          <div className="rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal p-12 lg:p-16 shadow-2xl">
            <SectionHeading
              title="Central New Mexico Locals"
              subtitle="We understand the unique needs of New Mexico communities"
              variant="dark"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {localExpertise.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bronze flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* What We Remove - Photo Cards Section */}
        <ScrollReveal className="mx-auto mt-32 max-w-7xl">
          <SectionHeading
            title="What We Remove"
            subtitle="From single items to full property cleanouts, we handle it all with care and professionalism"
          />

          {/* 3-Column Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-smooth overflow-hidden h-full">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-bronze flex items-center justify-center shadow-lg z-10">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-6 py-8">
                    <h3 className="text-xl font-bold text-charcoal mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="text-bronze flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Detailed Service List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-200 hover:border-bronze hover:shadow-md transition-all h-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-bronze" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal text-sm">{service.name}</h4>
                    <p className="text-xs text-slate-600 mt-1">{service.items}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* How We Price Section */}
        <ScrollReveal className="mx-auto mt-32 max-w-7xl">
          <div className="rounded-3xl bg-gradient-to-br from-cream-dark to-white border-2 border-bronze/20 p-12 lg:p-16">
            <SectionHeading
              title="Transparent, Volume-Based Pricing"
              subtitle="No hidden fees. No surprise charges. Just honest pricing based on space used."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">How It Works</h3>
                <div className="space-y-6">
                  {pricingSteps.map((step, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bronze text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-charcoal mb-1">{step.title}</h4>
                          <p className="text-slate-700">{step.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                  <p className="text-lg font-bold text-emerald-900">
                    Our Rate: $46 per cubic yard (compressed)
                  </p>
                  <p className="mt-2 text-sm text-emerald-800">
                    Most competitors charge by &quot;minimum load&quot; or &quot;truck size&quot; - we only charge for the space you actually use.
                  </p>
                </div>
              </div>

              <ScrollReveal direction="right">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-charcoal mb-6">Common Item Volumes</h3>
                  <div className="space-y-4">
                    {volumeGuide.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                        <span className="text-slate-700 font-medium">{item.item}</span>
                        <span className="text-bronze font-bold">{item.volume}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-slate-600 italic">
                    Volumes are estimates of compressed truck space. Your instant quote will provide exact pricing based on your photos.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* Eco-Friendly Commitment Section */}
        <ScrollReveal className="mx-auto mt-32 max-w-7xl">
          <SectionHeading
            title="Eco-Friendly by Design"
            subtitle="We're committed to keeping New Mexico beautiful by diverting waste from landfills"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {ecoStats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`text-center p-8 rounded-2xl ${stat.bg} border-2 ${stat.border} hover-lift transition-smooth h-full`}>
                  <div className={`w-16 h-16 rounded-full ${stat.iconBg} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                  </div>
                  <div className={`text-5xl font-bold ${stat.valueColor} mb-2`}>{stat.value}</div>
                  <p className="text-lg font-semibold text-charcoal">{stat.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="bg-slate-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Our Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ecoPartners.map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <partner.icon className="w-6 h-6 text-bronze" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Service Areas */}
        <ScrollReveal className="mx-auto mt-32 max-w-7xl">
          <SectionHeading
            title="Proudly Serving Central New Mexico"
            subtitle="From Rio Rancho to Santa Fe, we're your local junk removal experts"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <ScrollReveal key={area.city} delay={index * 0.05}>
                <Link
                  href={area.href}
                  className="block p-6 rounded-xl bg-white border-2 border-slate-200 hover:border-bronze transition-all hover:shadow-md hover-lift h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-bronze" />
                    <h3 className="text-lg font-bold text-charcoal">{area.city}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{area.details}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="mx-auto mt-32 max-w-7xl">
          <TestimonialSection testimonials={homepageTestimonials} />
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 mb-32 max-w-4xl">
          <CTASection
            headline="Ready for Stress-Free, Professional Service?"
            subtext="Get a free instant quote in minutes. Our advanced photo analysis system provides accurate, transparent pricing."
            primaryCta={{ href: '/contact', label: 'Contact Us Today' }}
            footnote="Same-day service available • Licensed & insured"
          />
        </div>
      </div>
    </div>
  );
}

// Homepage-specific data constants

const whyChooseUs: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Crown,
    title: 'Respectful Service',
    description: 'We treat your property like our own. No property damage, no mess left behind, and always courteous service.',
  },
  {
    icon: Sparkles,
    title: 'Spotless Cleanup',
    description: "We sweep and clean the area after removal. You won't even know we were there (except your junk will be gone).",
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Uniformed, background-checked professionals. Not just anyone with a truck - actual trained specialists.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthy & Insured',
    description: 'Fully licensed and insured with comprehensive liability coverage. Your property is protected.',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    description: 'We respect your schedule. Arrive when promised, finish when estimated. No surprises.',
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    description: 'Locally owned and operated. We donate usable items to Central New Mexico charities and families in need.',
  },
];

const localExpertise: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Building2,
    title: 'HOA Compliance Experts',
    description: 'We know Rio Rancho and Albuquerque HOA rules inside out. Proper disposal documentation and scheduling to keep you compliant.',
  },
  {
    icon: Snowflake,
    title: 'Year-Round Desert Service',
    description: "From monsoon season yard cleanup to winter storage unit clearouts, we handle New Mexico's unique seasonal needs year-round.",
  },
  {
    icon: TrendingUp,
    title: 'Growth & Moving Specialists',
    description: 'Central New Mexico is growing! We help new residents settle in and departing neighbors move out smoothly.',
  },
  {
    icon: HardHat,
    title: 'New Construction Ready',
    description: 'Supporting the Rio Rancho and Albuquerque building boom with fast construction debris removal and site cleanup.',
  },
];

const serviceCategories: Array<{ name: string; icon: LucideIcon; image: string; items: string[] }> = [
  {
    name: 'Residential Junk Removal',
    icon: HomeIcon,
    image: '/residential-cleanout.jpg',
    items: [
      'Appliances (refrigerators, washers, dryers)',
      'Furniture (sofas, beds, dressers)',
      'Mattresses and box springs',
      'Hot tubs and spas',
      'Carpets and rugs',
      'Exercise equipment',
      'Electronics and TVs',
    ],
  },
  {
    name: 'Commercial Junk Removal',
    icon: Building,
    image: '/commercial-office.jpg',
    items: [
      'Office furniture and desks',
      'Computers and electronics',
      'Filing cabinets',
      'Office supplies and equipment',
      'Retail fixtures',
      'Restaurant equipment',
      'Warehouse cleanouts',
    ],
  },
  {
    name: 'Storage Unit Cleanouts',
    icon: Package,
    image: '/storage-unit.jpg',
    items: [
      'Full storage unit cleanouts',
      'Abandoned storage contents',
      'Boxes and containers',
      'Furniture and household goods',
      'Business inventory and supplies',
      'Personal belongings removal',
      'Climate-controlled unit cleanouts',
    ],
  },
];

const detailedServices: Array<{ icon: LucideIcon; name: string; items: string }> = [
  { icon: Sofa, name: 'Furniture Removal', items: 'Sofas, beds, dressers' },
  { icon: Plug, name: 'Appliance Haul-Away', items: 'Fridges, washers, dryers' },
  { icon: HardHat, name: 'Construction Debris', items: 'Drywall, lumber, flooring' },
  { icon: TreePine, name: 'Yard Waste', items: 'Branches, stumps, lawn debris' },
  { icon: HomeIcon, name: 'Estate Cleanouts', items: 'Full property cleanouts' },
  { icon: Bath, name: 'Hot Tubs & Spas', items: 'Hot tub removal & disposal' },
  { icon: Monitor, name: 'Electronics', items: 'TVs, computers, e-waste' },
  { icon: Store, name: 'Retail Fixtures', items: 'Shelving, displays, counters' },
  { icon: UtensilsCrossed, name: 'Restaurant Equipment', items: 'Ovens, fridges, prep tables' },
  { icon: TreePine, name: 'Stump Grinding', items: 'Tree stumps, root removal' },
  { icon: Package, name: 'Gravel & Mulch Delivery', items: 'Gravel, mulch, topsoil' },
];

const pricingSteps = [
  {
    title: 'Upload Photos',
    description: 'Take 2-3 photos of your junk. Our system analyzes volume and provides instant estimates.',
  },
  {
    title: 'Get Instant Quote',
    description: 'Receive transparent pricing based on actual cubic yards your items will occupy (compressed).',
  },
  {
    title: 'Schedule Pickup',
    description: 'Choose same-day or schedule ahead. We arrive on time in our window.',
  },
  {
    title: 'Final Price Confirmed',
    description: 'We measure actual volume loaded. You only pay for space used - often less than the estimate!',
  },
];

const volumeGuide = [
  { item: 'Standard Couch', volume: '1.5-2 cubic yards' },
  { item: 'Queen Mattress & Box Spring', volume: '2-2.5 cubic yards' },
  { item: 'Refrigerator', volume: '1.5-2.5 cubic yards' },
  { item: 'Washer/Dryer Set', volume: '2.5-3 cubic yards' },
  { item: 'Office Desk', volume: '1-1.5 cubic yards' },
  { item: 'Dining Table + 4 Chairs', volume: '2-3 cubic yards' },
  { item: 'Hot Tub', volume: '4-6 cubic yards' },
  { item: 'Yard Waste (pickup truck load)', volume: '3-4 cubic yards' },
];

const ecoStats: Array<{
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  valueColor: string;
}> = [
  {
    icon: Recycle,
    value: '80%',
    label: 'Recycled or Donated',
    description: 'We divert 4 out of 5 items from landfills',
    bg: 'bg-gradient-to-br from-emerald-50 to-white',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    valueColor: 'text-emerald-600',
  },
  {
    icon: Handshake,
    value: '12+',
    label: 'Local Partners',
    description: 'Charities, recyclers, and donation centers',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    valueColor: 'text-blue-600',
  },
  {
    icon: TreePine,
    value: '500+',
    label: 'Tons Diverted',
    description: 'Kept out of New Mexico landfills in 2024',
    bg: 'bg-gradient-to-br from-bronze/10 to-white',
    border: 'border-bronze/30',
    iconBg: 'bg-bronze/10',
    iconColor: 'text-bronze',
    valueColor: 'text-bronze',
  },
];

const ecoPartners: Array<{ icon: LucideIcon; name: string }> = [
  { icon: Store, name: 'Habitat ReStore' },
  { icon: Shirt, name: 'Goodwill' },
  { icon: Recycle, name: 'Albuquerque Recycling' },
  { icon: Factory, name: 'Sandoval County Landfill' },
  { icon: Smartphone, name: 'E-Waste Recyclers' },
  { icon: Armchair, name: 'Furniture Banks' },
  { icon: Gift, name: 'Local Charities' },
  { icon: TreePine, name: 'Wood Recycling' },
];

const serviceAreas = [
  {
    city: 'Rio Rancho',
    details: 'Our home base. All neighborhoods served with same-day availability throughout Rio Rancho',
    href: '/locations/rio-rancho',
  },
  {
    city: 'Albuquerque',
    details: 'Full coverage across the Duke City — Northeast Heights, Westside, Downtown, and more',
    href: '/locations/albuquerque',
  },
  {
    city: 'Corrales',
    details: 'Serving the village of Corrales with rural and residential junk removal',
    href: '/locations/corrales',
  },
  {
    city: 'Los Ranchos',
    details: 'Professional service for Los Ranchos de Albuquerque homes and properties',
    href: '/locations/los-ranchos',
  },
  {
    city: 'Sandia Heights',
    details: 'Experienced with upscale properties and estate cleanouts in the foothills',
    href: '/locations/sandia-heights',
  },
  {
    city: 'North Albuquerque Acres',
    details: 'Large property and acreage cleanouts. Rural access no problem',
    href: '/locations/north-albuquerque-acres',
  },
  {
    city: 'Los Lunas',
    details: 'Commercial and residential service for Los Lunas and surrounding Valencia County',
    href: '/locations/los-lunas',
  },
  {
    city: 'Santa Fe',
    details: 'Serving the capital city with professional junk removal and construction debris hauling',
    href: '/locations/santa-fe',
  },
];
