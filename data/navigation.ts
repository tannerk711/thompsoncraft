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
      { label: 'Stump Grinding', href: '/services/stump-grinding' },
      { label: 'Gravel & Mulch Delivery', href: '/services/gravel-mulch-delivery' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'Rio Rancho', href: '/locations/rio-rancho' },
      { label: 'Albuquerque', href: '/locations/albuquerque' },
      { label: 'Corrales', href: '/locations/corrales' },
      { label: 'Los Ranchos', href: '/locations/los-ranchos' },
      { label: 'Sandia Heights', href: '/locations/sandia-heights' },
      { label: 'North Albuquerque Acres', href: '/locations/north-albuquerque-acres' },
      { label: 'Los Lunas', href: '/locations/los-lunas' },
      { label: 'Santa Fe', href: '/locations/santa-fe' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];
