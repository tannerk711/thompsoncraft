import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Shield,
  Leaf,
  Award,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { siteConfig } from '@/data/site';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Residential Junk Removal', href: '/services/residential-junk-removal' },
  { label: 'Commercial Junk Removal', href: '/services/commercial-junk-removal' },
  { label: 'Estate Cleanouts', href: '/services/estate-cleanouts' },
  { label: 'Storage Unit Cleanouts', href: '/services/storage-unit-cleanouts' },
  { label: 'Construction Debris', href: '/services/construction-debris-removal' },
  { label: 'Appliance Removal', href: '/services/appliance-removal' },
  { label: 'Yard Waste Removal', href: '/services/yard-waste-removal' },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed' },
  { icon: Shield, label: 'Insured' },
  { icon: Leaf, label: 'Eco-Friendly' },
  { icon: Award, label: 'Locally Owned' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-gradient-to-br from-charcoal via-slate-800 to-charcoal">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Logo variant="dark" size="sm" href="/" />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {siteConfig.tagline}. Serving Boise and the Treasure Valley with
              respectful, eco-friendly junk removal you can trust.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-bronze transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-bronze transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-bronze transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-bronze transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 flex-shrink-0" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-white/10">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm text-slate-400"
            >
              <badge.icon className="w-5 h-5 text-bronze" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link
              href="/privacy"
              className="hover:text-bronze transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
