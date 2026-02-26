import type { LocationPage } from '@/types';
import { locationFaqs } from './faqs';

export const locations: LocationPage[] = [
  {
    slug: 'rio-rancho',
    city: 'Rio Rancho',
    heroImage: '/images/locations/rio-rancho-hero.jpg',
    heroHeadline: 'Rio Rancho Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Rio Rancho, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Rio Rancho, New Mexico. Same-day service, transparent pricing, and eco-friendly disposal. Serving all Rio Rancho neighborhoods.',
    },
    description: 'As our home base, Rio Rancho gets priority service. From the master-planned communities of Enchanted Hills to the established neighborhoods near Southern and Unser, Thompson Craft LLC provides fast, reliable junk removal you can count on.',
    neighborhoods: [
      'Enchanted Hills', 'Loma Colorado', 'Cabezon', 'Ventana Ranch West',
      'Northern Meadows', 'Rio Rancho Estates', 'Sundance', 'Haynes Park',
      'Vista Hills', 'Corrales Heights', 'Rainbow Hills', 'Unit 11',
    ],
    landmarks: [
      'Santa Ana Star Center', 'Intel Campus', 'Rust Medical Center',
      'Rio Rancho City Hall', 'Star Center', 'Cabezon Park',
    ],
    serviceHighlights: [
      'Same-day service — our home base',
      'All Rio Rancho neighborhoods covered',
      'HOA-compliant cleanup and removal',
      'Residential and commercial service',
    ],
    faqs: locationFaqs['rio-rancho'] || [],
    testimonialIds: [],
  },
  {
    slug: 'albuquerque',
    city: 'Albuquerque',
    heroImage: '/images/locations/albuquerque-hero.jpg',
    heroHeadline: 'Albuquerque Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Albuquerque, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Albuquerque, New Mexico. Residential and commercial cleanouts, construction debris, and more. Same-day service available.',
    },
    description: 'Albuquerque is the heart of Central New Mexico, and Thompson Craft LLC proudly serves every corner of the city. From the historic neighborhoods near Old Town to the growing communities in the Northeast Heights, we provide professional junk removal with transparent pricing.',
    neighborhoods: [
      'Northeast Heights', 'Nob Hill', 'Old Town', 'Downtown',
      'Uptown', 'West Side', 'South Valley', 'North Valley',
      'Foothills', 'Sandia Foothills', 'Taylor Ranch', 'Paradise Hills',
    ],
    landmarks: [
      'Sandia Peak Tramway', 'Old Town Albuquerque', 'Balloon Fiesta Park',
      'UNM Campus', 'Kirtland Air Force Base', 'Bosque Trail',
    ],
    serviceHighlights: [
      'Full Albuquerque metro coverage',
      'Residential and commercial service',
      'Construction debris removal',
      'Same-day and next-day available',
    ],
    faqs: locationFaqs['albuquerque'] || [],
    testimonialIds: [],
  },
  {
    slug: 'corrales',
    city: 'Corrales',
    heroImage: '/images/locations/corrales-hero.jpg',
    heroHeadline: 'Corrales Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Corrales, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Corrales, New Mexico. Serving the rural and residential properties of Corrales with respectful, thorough service.',
    },
    description: 'Corrales is known for its rural charm, horse properties, and beautiful bosque views. Thompson Craft LLC understands the unique needs of Corrales properties — from large acreage cleanups to estate cleanouts in historic adobe homes.',
    neighborhoods: [
      'Old Corrales', 'Corrales Heights', 'Corrales Meadows',
      'Camino de las Huertas', 'Loma Larga', 'South Corrales',
    ],
    landmarks: [
      'Casa San Ysidro', 'Corrales Bosque Preserve', 'Old San Ysidro Church',
      'Corrales Growers Market', 'Wagner Farms',
    ],
    serviceHighlights: [
      'Experience with large rural properties',
      'Horse property and barn cleanouts',
      'Respectful service for historic homes',
      'Yard waste and stump grinding',
    ],
    faqs: locationFaqs['corrales'] || [],
    testimonialIds: [],
  },
  {
    slug: 'los-ranchos',
    city: 'Los Ranchos de Albuquerque',
    heroImage: '/images/locations/los-ranchos-hero.jpg',
    heroHeadline: 'Los Ranchos Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Los Ranchos, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Los Ranchos de Albuquerque, New Mexico. Serving the village with thorough, respectful cleanup services.',
    },
    description: 'Los Ranchos de Albuquerque is a charming village with a mix of historic properties and modern homes along the Rio Grande bosque. Thompson Craft LLC provides careful, respectful junk removal tailored to the character of this unique community.',
    neighborhoods: [
      'North Los Ranchos', 'South Los Ranchos', 'Rio Grande Blvd',
      'Griegos', 'Mathews', 'Bosque Area',
    ],
    landmarks: [
      'Los Ranchos Growers Market', 'Rio Grande Nature Center',
      'Fourth Street Corridor', 'Albuquerque Biopark',
    ],
    serviceHighlights: [
      'Village of Los Ranchos coverage',
      'Residential estate cleanouts',
      'Yard waste and landscaping debris',
      'Eco-friendly disposal practices',
    ],
    faqs: locationFaqs['los-ranchos'] || [],
    testimonialIds: [],
  },
  {
    slug: 'sandia-heights',
    city: 'Sandia Heights',
    heroImage: '/images/locations/sandia-heights-hero.jpg',
    heroHeadline: 'Sandia Heights Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Sandia Heights, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Sandia Heights, New Mexico. Serving the foothills community with careful, thorough junk removal and hauling services.',
    },
    description: 'Sandia Heights sits at the base of the Sandia Mountains with stunning views and custom homes. Thompson Craft LLC serves this foothills community with the care and professionalism these distinctive properties deserve.',
    neighborhoods: [
      'Sandia Heights North', 'Sandia Heights South', 'High Desert',
      'Tramway Estates', 'Bear Canyon', 'Elena Gallegos',
    ],
    landmarks: [
      'Sandia Peak Tramway Base', 'Elena Gallegos Open Space',
      'Sandia Heights Homeowners Association', 'Bear Canyon Arroyo Trail',
    ],
    serviceHighlights: [
      'Experience with hillside and foothills properties',
      'Custom home cleanout services',
      'Steep driveway and tight access capability',
      'Background-checked, professional crews',
    ],
    faqs: locationFaqs['sandia-heights'] || [],
    testimonialIds: [],
  },
  {
    slug: 'north-albuquerque-acres',
    city: 'North Albuquerque Acres',
    heroImage: '/images/locations/north-albuquerque-acres-hero.jpg',
    heroHeadline: 'North Albuquerque Acres Junk Removal',
    meta: {
      title: 'Junk Removal North Albuquerque Acres, NM | Thompson Craft LLC',
      description: 'Professional junk removal in North Albuquerque Acres, New Mexico. Large property cleanouts, yard waste removal, and more. Same-day service available.',
    },
    description: 'North Albuquerque Acres features spacious lots and a semi-rural atmosphere just minutes from the city. Thompson Craft LLC handles the unique needs of these larger properties — from barn and outbuilding cleanouts to large-scale yard waste removal.',
    neighborhoods: [
      'North Albuquerque Acres', 'Sandia Heights East', 'Tramway Area',
      'Four Hills', 'Canyon Estates', 'Academy Acres',
    ],
    landmarks: [
      'Tramway Trail System', 'Academy Acres Park',
      'Sandia Mountain Foothills', 'Elena Gallegos Picnic Area',
    ],
    serviceHighlights: [
      'Large property and acreage cleanouts',
      'Barn and outbuilding clearing',
      'Gravel and mulch delivery',
      'Stump grinding and yard waste removal',
    ],
    faqs: locationFaqs['north-albuquerque-acres'] || [],
    testimonialIds: [],
  },
  {
    slug: 'los-lunas',
    city: 'Los Lunas',
    heroImage: '/images/locations/los-lunas-hero.jpg',
    heroHeadline: 'Los Lunas Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Los Lunas, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Los Lunas, New Mexico. Residential and commercial cleanouts, construction debris, and yard waste removal.',
    },
    description: 'Los Lunas is a growing community south of Albuquerque with a mix of new development and established neighborhoods. Thompson Craft LLC provides the same reliable, professional service to Los Lunas that we deliver across Central New Mexico.',
    neighborhoods: [
      'Downtown Los Lunas', 'Los Lunas Hills', 'Huning Ranch',
      'El Cerro', 'Valencia', 'Meadow Lake',
    ],
    landmarks: [
      'Los Lunas Museum of Heritage & Arts', 'Los Lunas River Park',
      'Huning Ranch Heritage Park', 'Valencia County Courthouse',
    ],
    serviceHighlights: [
      'Full Los Lunas area coverage',
      'New construction debris removal',
      'Residential and commercial service',
      'Same pricing as all service areas',
    ],
    faqs: locationFaqs['los-lunas'] || [],
    testimonialIds: [],
  },
  {
    slug: 'santa-fe',
    city: 'Santa Fe',
    heroImage: '/images/locations/santa-fe-hero.jpg',
    heroHeadline: 'Santa Fe Junk Removal & Hauling',
    meta: {
      title: 'Junk Removal Santa Fe, NM | Thompson Craft LLC',
      description: 'Professional junk removal in Santa Fe, New Mexico. Estate cleanouts, construction debris, yard waste, and more. Serving all Santa Fe neighborhoods.',
    },
    description: 'Santa Fe\'s unique adobe architecture and historic districts require junk removal crews who understand and respect the character of these properties. Thompson Craft LLC serves Santa Fe with the care, professionalism, and attention to detail this world-class city deserves.',
    neighborhoods: [
      'Historic Downtown', 'Canyon Road', 'Railyard District',
      'Casa Solana', 'Eldorado', 'Tesuque', 'Las Campanas',
      'La Tierra', 'Aldea', 'Bishops Lodge',
    ],
    landmarks: [
      'Santa Fe Plaza', 'Canyon Road Galleries', 'Museum Hill',
      'Meow Wolf', 'Santa Fe Opera', 'Palace of the Governors',
    ],
    serviceHighlights: [
      'Experience with historic adobe properties',
      'Estate and gallery cleanout services',
      'Construction debris from renovations',
      'Eco-friendly disposal and recycling',
    ],
    faqs: locationFaqs['santa-fe'] || [],
    testimonialIds: [],
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
