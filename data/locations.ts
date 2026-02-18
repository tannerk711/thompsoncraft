import type { LocationPage } from '@/types';
import { locationFaqs } from './faqs';

export const locations: LocationPage[] = [
  {
    slug: 'boise',
    city: 'Boise',
    heroImage: '/images/locations/boise-hero.jpg',
    heroHeadline: 'Junk Removal in Boise, Idaho',
    meta: {
      title: 'Junk Removal in Boise, ID | Same-Day Service | Junkyard Gentlemen',
      description: 'Professional junk removal services in Boise, Idaho. Residential, commercial, and estate cleanouts. Same-day service available. Licensed, insured, and eco-friendly.',
    },
    description: 'As our home base, Boise gets priority service from Junkyard Gentlemen. From the tree-lined streets of the North End to the growing communities of Southeast Boise, we provide fast, professional junk removal across the entire city. Our team knows every neighborhood, every HOA, and every route to get the job done quickly.',
    neighborhoods: [
      'North End',
      'Downtown Boise',
      'Boise Bench',
      'East End',
      'West Boise',
      'Southeast Boise',
      'Boise Foothills',
      'Harris Ranch',
      'Barber Valley',
      'Columbia Village',
      'Maple Grove',
      'Vista Neighborhood',
    ],
    landmarks: [
      'Boise State University',
      'Boise River Greenbelt',
      'Capitol Building',
      'JUMP Innovation Center',
      'Bogus Basin Road',
      'Boise Towne Square',
    ],
    serviceHighlights: [
      'Same-day service available most days',
      'Priority scheduling as our home base',
      'Full coverage from Foothills to Bench',
      'Downtown apartment and condo specialists',
    ],
    faqs: locationFaqs['boise'],
    testimonialIds: ['jennifer-rodriguez', 'amy-foster', 'david-chen'],
  },
  {
    slug: 'meridian',
    city: 'Meridian',
    heroImage: '/images/locations/meridian-hero.jpg',
    heroHeadline: 'Junk Removal in Meridian, Idaho',
    meta: {
      title: 'Junk Removal in Meridian, ID | HOA-Compliant Service | Junkyard Gentlemen',
      description: 'Professional junk removal in Meridian, Idaho. HOA-compliant service with documentation. Residential, commercial, and construction debris removal. Same-day available.',
    },
    description: "Meridian is Idaho's fastest-growing city, and we've grown right along with it. Whether you're in an established neighborhood off Linder Road or a brand-new development near Ten Mile, our team provides prompt, HOA-compliant junk removal service with proper documentation.",
    neighborhoods: [
      'Linder Road Area',
      'Ten Mile Area',
      'Ustick Road Corridor',
      'Southeast Meridian',
      'Paramount Subdivision',
      'Bridgetower',
      'Hill Century Farm',
      'Bainbridge',
      'Settler\'s Bridge',
      'Movado Estates',
    ],
    landmarks: [
      'The Village at Meridian',
      'Eagle Road Corridor',
      'Kleiner Park',
      'Settlers Park',
      'Meridian Speedway',
      'Roaring Springs Waterpark',
    ],
    serviceHighlights: [
      'HOA-compliant with documentation provided',
      'New construction debris specialists',
      'Coverage of all new developments',
      'Fast response for Eagle Road businesses',
    ],
    faqs: locationFaqs['meridian'],
    testimonialIds: ['mike-thompson', 'lisa-baker', 'karen-williams'],
  },
  {
    slug: 'nampa',
    city: 'Nampa',
    heroImage: '/images/locations/nampa-hero.jpg',
    heroHeadline: 'Junk Removal in Nampa, Idaho',
    meta: {
      title: 'Junk Removal in Nampa, ID | Affordable Service | Junkyard Gentlemen',
      description: 'Professional junk removal in Nampa, Idaho. Residential, commercial, and construction debris removal. Same prices as Boise with fast Treasure Valley service.',
    },
    description: 'Nampa\'s building boom means more construction debris, renovation waste, and cleanout needs than ever. Our team is in Nampa daily, providing the same fast, professional service and transparent pricing as our Boise customers enjoy. From downtown Nampa to rural properties, we handle it all.',
    neighborhoods: [
      'Downtown Nampa',
      'North Nampa',
      'South Nampa',
      'Karcher Road Area',
      'Garrity Boulevard Area',
      'Midway Road Area',
      'East Nampa',
      'Star Road Area',
    ],
    landmarks: [
      'Nampa Gateway Center',
      'Ford Idaho Center',
      'Northwest Nazarene University',
      'Lake Lowell',
      'Lakeview Park',
      'Nampa Civic Center',
    ],
    serviceHighlights: [
      'Same pricing as Boise — no travel surcharge',
      'Daily crews serving the Nampa area',
      'New construction and renovation debris specialists',
      'Rural and agricultural property cleanouts',
    ],
    faqs: locationFaqs['nampa'],
    testimonialIds: ['tom-garrett', 'carlos-martinez'],
  },
  {
    slug: 'eagle',
    city: 'Eagle',
    heroImage: '/images/locations/eagle-hero.jpg',
    heroHeadline: 'Junk Removal in Eagle, Idaho',
    meta: {
      title: 'Junk Removal in Eagle, ID | Luxury Home Specialists | Junkyard Gentlemen',
      description: 'Professional junk removal in Eagle, Idaho. Experienced with gated communities and luxury estates. Background-checked crews, careful handling, and respectful service.',
    },
    description: 'Eagle\'s luxury homes and gated communities deserve premium service. Our background-checked, uniformed team is experienced with high-end properties, careful handling, and the discretion that Eagle residents expect. From Eagle Island estates to Hidden Springs homes, we deliver exceptional service every time.',
    neighborhoods: [
      'Eagle Island',
      'Hidden Springs',
      'Banbury Meadows',
      'Lexington Hills',
      'Mill District',
      'Floating Feather Road Area',
      'Linder Road Area',
      'Highway 44 Corridor',
    ],
    landmarks: [
      'Eagle Island State Park',
      'Eagle River Walk',
      'Heritage Park',
      'Eagle Sports Complex',
      'Highway 44 Business District',
    ],
    serviceHighlights: [
      'Gated community access coordinated',
      'Luxury estate cleanout specialists',
      'Background-checked, uniformed crews',
      'Property protection and careful handling',
    ],
    faqs: locationFaqs['eagle'],
    testimonialIds: ['sarah-mitchell', 'rachel-nguyen', 'brian-murphy'],
  },
  {
    slug: 'garden-city',
    city: 'Garden City',
    heroImage: '/images/locations/garden-city-hero.jpg',
    heroHeadline: 'Junk Removal in Garden City, Idaho',
    meta: {
      title: 'Junk Removal in Garden City, ID | Commercial & Industrial | Junkyard Gentlemen',
      description: 'Professional junk removal in Garden City, Idaho. Commercial, industrial, and residential service. Warehouse cleanouts, business clearing, and more.',
    },
    description: 'Garden City\'s unique mix of residential, commercial, and industrial properties requires versatile junk removal service. Whether you\'re clearing a brewery, cleaning out a warehouse, turning over an apartment, or decluttering your home, our experienced team handles it all with the same professional care.',
    neighborhoods: [
      'Chinden Boulevard Corridor',
      'Glenwood Street Area',
      'Adams Street Area',
      '50th Street Area',
      'Riverside Village',
      'Plantation Island',
    ],
    landmarks: [
      'Boise River (through Garden City)',
      'Esther Simplot Park',
      'Idaho Botanical Garden (nearby)',
      'Chinden Boulevard Business District',
      'Garden City Brewery District',
    ],
    serviceHighlights: [
      'Commercial and industrial specialists',
      'Warehouse and workshop cleanouts',
      'Business-hours-friendly scheduling',
      'Mixed-use property experience',
    ],
    faqs: locationFaqs['garden-city'],
    testimonialIds: ['mark-johnson', 'stephanie-hall'],
  },
];

/** Get a single location by slug */
export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}

/** Get all location slugs for static params */
export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
