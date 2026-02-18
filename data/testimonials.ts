import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  // Existing testimonials from homepage
  {
    id: 'sarah-mitchell',
    quote: "The team was incredibly professional and respectful of our property. They removed our old hot tub and cleaned up so well you'd never know it was there. Highly recommend!",
    name: 'Sarah Mitchell',
    location: 'Eagle, ID',
    service: 'residential-junk-removal',
    rating: 5,
  },
  {
    id: 'mike-thompson',
    quote: "Best junk removal service we've used. They were on time, worked quickly, and even donated items we didn't know could be donated. Great local business!",
    name: 'Mike Thompson',
    location: 'Meridian, ID',
    service: 'residential-junk-removal',
    rating: 5,
  },
  {
    id: 'jennifer-rodriguez',
    quote: "We needed a full estate cleanout for my parents' home. The team was compassionate, efficient, and handled everything with care. Worth every penny.",
    name: 'Jennifer Rodriguez',
    location: 'Boise, ID',
    service: 'estate-cleanouts',
    rating: 5,
  },

  // Additional testimonials for service/location filtering
  {
    id: 'david-chen',
    quote: "Had three storage units to clear out after my business downsized. They handled everything in one day and recycled most of the materials. Incredible efficiency.",
    name: 'David Chen',
    location: 'Boise, ID',
    service: 'storage-unit-cleanouts',
    rating: 5,
  },
  {
    id: 'lisa-baker',
    quote: "Our office remodel generated tons of debris. The crew worked around our business hours and left the space spotless. We'll definitely use them again.",
    name: 'Lisa Baker',
    location: 'Meridian, ID',
    service: 'commercial-junk-removal',
    rating: 5,
  },
  {
    id: 'tom-garrett',
    quote: "After our kitchen renovation, we had drywall, old cabinets, and flooring everywhere. They cleared it all in under two hours. Professional and fast.",
    name: 'Tom Garrett',
    location: 'Nampa, ID',
    service: 'construction-debris-removal',
    rating: 5,
  },
  {
    id: 'rachel-nguyen',
    quote: "They hauled away our old fridge, washer, dryer, and dishwasher. Even disconnected them safely. So much easier than trying to do it ourselves.",
    name: 'Rachel Nguyen',
    location: 'Eagle, ID',
    service: 'appliance-removal',
    rating: 5,
  },
  {
    id: 'mark-johnson',
    quote: "Spring cleanup was a breeze. They took all our yard waste, old fence panels, and tree branches. The yard looks amazing now.",
    name: 'Mark Johnson',
    location: 'Garden City, ID',
    service: 'yard-waste-removal',
    rating: 5,
  },
  {
    id: 'amy-foster',
    quote: "Cleaned out my late grandmother's home with such care and respect. They separated donations from trash and handled everything sensitively. Truly gentlemen.",
    name: 'Amy Foster',
    location: 'Boise, ID',
    service: 'estate-cleanouts',
    rating: 5,
  },
  {
    id: 'carlos-martinez',
    quote: "We run a restaurant and needed old equipment removed fast before our new stuff arrived. Same-day service, no damage to the building. Perfect.",
    name: 'Carlos Martinez',
    location: 'Nampa, ID',
    service: 'commercial-junk-removal',
    rating: 5,
  },
  {
    id: 'karen-williams',
    quote: "The pricing was exactly what they quoted — no hidden fees, no surprises. Refreshing honesty in a service industry. Will use for our next project.",
    name: 'Karen Williams',
    location: 'Meridian, ID',
    service: 'residential-junk-removal',
    rating: 5,
  },
  {
    id: 'brian-murphy',
    quote: "Our HOA was on our case about the construction materials in our driveway. Called these guys and they were out same day. Problem solved!",
    name: 'Brian Murphy',
    location: 'Eagle, ID',
    service: 'construction-debris-removal',
    rating: 5,
  },
  {
    id: 'stephanie-hall',
    quote: "I was dreading cleaning out my storage unit of 10 years. The team made it painless — sorted, donated, recycled, and disposed of everything properly.",
    name: 'Stephanie Hall',
    location: 'Garden City, ID',
    service: 'storage-unit-cleanouts',
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
