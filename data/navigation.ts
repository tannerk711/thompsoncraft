import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Residential Junk Removal', href: '/services/residential-junk-removal' },
      { label: 'Commercial Junk Removal', href: '/services/commercial-junk-removal' },
      { label: 'Estate Cleanouts', href: '/services/estate-cleanouts' },
      { label: 'Storage Unit Cleanouts', href: '/services/storage-unit-cleanouts' },
      { label: 'Construction Debris Removal', href: '/services/construction-debris-removal' },
      { label: 'Appliance Removal', href: '/services/appliance-removal' },
      { label: 'Yard Waste Removal', href: '/services/yard-waste-removal' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'Boise', href: '/locations/boise' },
      { label: 'Meridian', href: '/locations/meridian' },
      { label: 'Nampa', href: '/locations/nampa' },
      { label: 'Eagle', href: '/locations/eagle' },
      { label: 'Garden City', href: '/locations/garden-city' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];
