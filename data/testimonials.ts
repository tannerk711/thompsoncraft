import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'maria-garcia',
    quote: "Thompson Craft LLC was incredibly professional. They removed our old hot tub and hauled away a garage full of junk in one morning. The yard looks amazing now. Highly recommend!",
    name: 'Maria Garcia',
    location: 'Rio Rancho, NM',
    service: 'residential-junk-removal',
    rating: 5,
  },
  {
    id: 'james-ortiz',
    quote: "Best junk removal service in the Albuquerque area. They showed up on time, worked fast, and even separated items for donation. Great local business!",
    name: 'James Ortiz',
    location: 'Albuquerque, NM',
    service: 'residential-junk-removal',
    rating: 5,
  },
  {
    id: 'patricia-sandoval',
    quote: "We needed a full estate cleanout for my mother's home in Corrales. The team was compassionate, efficient, and handled everything with care. Worth every penny.",
    name: 'Patricia Sandoval',
    location: 'Corrales, NM',
    service: 'estate-cleanouts',
    rating: 5,
  },
  {
    id: 'robert-martinez',
    quote: "Had two storage units to clear out in Rio Rancho. They handled everything in one day and recycled most of the materials. Incredible efficiency and fair pricing.",
    name: 'Robert Martinez',
    location: 'Rio Rancho, NM',
    service: 'storage-unit-cleanouts',
    rating: 5,
  },
  {
    id: 'linda-chavez',
    quote: "Our office remodel generated tons of debris. The crew worked around our business hours and left the space spotless. We'll definitely use them again for our next project.",
    name: 'Linda Chavez',
    location: 'Albuquerque, NM',
    service: 'commercial-junk-removal',
    rating: 5,
  },
  {
    id: 'daniel-romero',
    quote: "After our kitchen renovation, we had drywall, old cabinets, and flooring everywhere. They cleared it all in under two hours. Professional and fast — better than renting a dumpster.",
    name: 'Daniel Romero',
    location: 'Los Lunas, NM',
    service: 'construction-debris-removal',
    rating: 5,
  },
  {
    id: 'angela-trujillo',
    quote: "They hauled away our old fridge, washer, dryer, and dishwasher. Even disconnected them safely. So much easier than trying to do it ourselves. Great team!",
    name: 'Angela Trujillo',
    location: 'Sandia Heights, NM',
    service: 'appliance-removal',
    rating: 5,
  },
  {
    id: 'michael-baca',
    quote: "Spring cleanup was a breeze with Thompson Craft. They took all our yard waste, old fence panels, and tree branches. The yard looks better than it has in years.",
    name: 'Michael Baca',
    location: 'North Albuquerque Acres, NM',
    service: 'yard-waste-removal',
    rating: 5,
  },
  {
    id: 'susan-montoya',
    quote: "Cleaned out my late father's home in Santa Fe with such care and respect. They separated donations from trash and handled everything sensitively. Truly professionals.",
    name: 'Susan Montoya',
    location: 'Santa Fe, NM',
    service: 'estate-cleanouts',
    rating: 5,
  },
  {
    id: 'carlos-vigil',
    quote: "We run a restaurant in Old Town and needed old equipment removed fast before our new stuff arrived. Same-day service, no damage to the building. Perfect experience.",
    name: 'Carlos Vigil',
    location: 'Albuquerque, NM',
    service: 'commercial-junk-removal',
    rating: 5,
  },
  {
    id: 'jennifer-lucero',
    quote: "The pricing was exactly what they quoted — no hidden fees, no surprises. Refreshing honesty in a service industry. Already recommended them to my neighbors.",
    name: 'Jennifer Lucero',
    location: 'Los Ranchos, NM',
    service: 'residential-junk-removal',
    rating: 5,
  },
  {
    id: 'david-padilla',
    quote: "Had three stumps ground down in our backyard. They were in and out in a couple of hours and the yard looks smooth and ready for new landscaping. Great work!",
    name: 'David Padilla',
    location: 'Rio Rancho, NM',
    service: 'stump-grinding',
    rating: 5,
  },
];

/** Get testimonials by their IDs */
export function getTestimonialsByIds(ids: string[]): Testimonial[] {
  return ids
    .map((id) => testimonials.find((t) => t.id === id))
    .filter((t): t is Testimonial => t !== undefined);
}

/** Get testimonials filtered by service slug */
export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter((t) => t.service === service);
}

/** Get testimonials filtered by location (partial match) */
export function getTestimonialsByLocation(city: string): Testimonial[] {
  return testimonials.filter((t) =>
    t.location.toLowerCase().includes(city.toLowerCase())
  );
}
