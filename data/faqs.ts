import type { FAQ } from '@/types';

// ── General FAQs ────────────────────────────────────────────────────

export const generalFaqs: FAQ[] = [
  {
    question: 'How does junk removal pricing work?',
    answer: 'We use transparent, volume-based pricing at $46 per cubic yard (compressed). You only pay for the space your items actually take up in our truck. Contact us for a free estimate, and we confirm the final price on-site before any work begins.',
  },
  {
    question: 'Do you offer same-day junk removal?',
    answer: 'Yes! We offer same-day service throughout Central New Mexico. Email us or submit a quote request, and we can often be there within a few hours depending on availability.',
  },
  {
    question: 'What items do you accept?',
    answer: 'We remove almost anything non-hazardous: furniture, appliances, electronics, yard waste, construction debris, office equipment, hot tubs, and more. We also offer stump grinding and gravel/mulch delivery. We cannot accept hazardous materials like paint, chemicals, asbestos, or medical waste.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive liability insurance. Your property is protected throughout the entire removal process.',
  },
  {
    question: 'What happens to my junk after you take it?',
    answer: 'We recycle or donate approximately 80% of everything we collect. Usable items go to local charities like Habitat ReStore and Goodwill. Recyclable materials go to local recycling facilities. Only what truly cannot be reused goes to the landfill.',
  },
  {
    question: 'Do I need to be home during the removal?',
    answer: "Not necessarily. As long as we have access to the items and a confirmed quote, you can authorize us to complete the job while you're away. We'll send photos when we're done.",
  },
  {
    question: 'How far in advance do I need to book?',
    answer: "We offer same-day and next-day service for most jobs. For large estate cleanouts or commercial projects, we recommend booking 2-3 days in advance to ensure we can dedicate the right crew size.",
  },
  {
    question: 'Do you move items from inside the home?',
    answer: "Yes! Our team handles all the heavy lifting. Whether items are in the basement, upstairs, garage, or anywhere on your property, we'll carry them out for you. No extra charge for standard interior removal.",
  },
];

// ── Pricing FAQs ────────────────────────────────────────────────────

export const pricingFaqs: FAQ[] = [
  {
    question: 'How is volume measured?',
    answer: 'We measure by cubic yard of compressed truck space. When items are loaded, they get compressed to maximize efficiency. Your quote estimates this volume, and we confirm on-site by measuring what we actually load.',
  },
  {
    question: 'What does $46 per cubic yard mean in real terms?',
    answer: 'A standard couch takes about 1.5-2 cubic yards ($69-$92). A full pickup truck load is roughly 3-4 cubic yards ($138-$184). A single-car garage cleanout is typically 8-12 cubic yards ($368-$552).',
  },
  {
    question: 'Are there any minimum charges?',
    answer: 'We have a minimum charge equivalent to approximately 2 cubic yards ($92). This covers single-item pickups and small loads while covering our crew and truck costs.',
  },
  {
    question: 'Do you charge extra for heavy items?',
    answer: 'Standard items like furniture, appliances, and boxes are included in the volume price. Extremely heavy items like concrete, dirt, or pianos may have a nominal weight surcharge, which we disclose upfront.',
  },
  {
    question: 'Is there a fee if my quote is less than the estimate?',
    answer: "Never! You only pay for the actual volume loaded. If your items take up less space than estimated, your price goes down. We frequently come in under the quote.",
  },
  {
    question: 'Do you charge for travel or fuel?',
    answer: 'No. Our pricing is all-inclusive within our Central New Mexico service area. No fuel surcharges, trip fees, or hidden costs.',
  },
  {
    question: 'How does the photo quote compare to the final price?',
    answer: 'Our photo-based estimates are remarkably accurate — most final prices are within 10% of the estimate, and many come in lower. The on-site confirmation ensures you always know the exact price before we begin.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit/debit cards, Venmo, Zelle, and checks. Payment is collected after the job is complete and you approve the work.',
  },
];

// ── Service-Specific FAQs ───────────────────────────────────────────

export const serviceFaqs: Record<string, FAQ[]> = {
  'estate-cleanouts': [
    { question: 'How long does a full estate cleanout take?', answer: 'Most estate cleanouts take 1-3 days depending on the size of the home and amount of items. A typical 3-bedroom home can usually be completed in a single day.' },
    { question: 'Can you handle hoarding situations?', answer: 'Yes, we have experience with hoarding cleanouts and approach every situation with compassion and discretion. We work at whatever pace is comfortable and can coordinate with organizers or therapists.' },
    { question: 'Do you sort items for donation vs. disposal?', answer: 'Absolutely. We carefully sort usable items for donation, recyclable materials for recycling, and only dispose of what truly cannot be reused. We provide a donation receipt for tax purposes.' },
    { question: 'Can family members keep certain items?', answer: "Of course. We can do a walk-through first so family can identify keepsakes. We'll set those aside and only remove what you want gone." },
    { question: 'Do you clean the property after the cleanout?', answer: 'We do a broom-clean sweep of all areas we work in. For a deep clean suitable for sale or rental, we can recommend trusted local cleaning partners.' },
    { question: 'Can you work with realtors and estate attorneys?', answer: 'Yes, we regularly partner with realtors, estate attorneys, and property managers. We can coordinate schedules, provide documentation, and work within your timeline.' },
  ],
  'storage-unit-cleanouts': [
    { question: 'Do you handle the storage facility coordination?', answer: 'Yes! We can work directly with the storage facility on access, timing, and any requirements they have. Just give us the facility name and unit number.' },
    { question: 'Can you clean out multiple units at once?', answer: 'Absolutely. Multi-unit cleanouts are our specialty — we offer volume discounts when clearing multiple units in the same visit.' },
    { question: 'What about abandoned storage unit contents?', answer: 'We work with storage facility managers to clean out abandoned units regularly. We sort, donate, recycle, and dispose of contents according to facility and legal requirements.' },
    { question: 'Will you sort through items or just take everything?', answer: "Your choice! We can do a full removal of all contents, or sort through items first if you want to keep certain things. We'll work at your pace." },
    { question: 'Do you handle climate-controlled units?', answer: 'Yes. We work in all types of storage units — standard, climate-controlled, drive-up, and indoor. We bring all necessary equipment.' },
    { question: 'How quickly can you clear a unit?', answer: 'A standard 10x10 unit can usually be cleared in under an hour. Larger units or those packed floor-to-ceiling may take 2-3 hours.' },
  ],
  'residential-junk-removal': [
    { question: 'What residential items do you remove?', answer: 'Furniture, appliances, mattresses, electronics, exercise equipment, hot tubs, carpet, garage clutter, attic cleanouts, and much more. If you can point to it, we can likely remove it.' },
    { question: 'Do you remove items from any floor of the house?', answer: 'Yes! Basement, upstairs, attic — our crew handles all the heavy lifting from any location in your home at no extra charge.' },
    { question: 'Will you damage my walls, floors, or doorways?', answer: 'We take great care to protect your home. Our team uses furniture pads, door protectors, and careful techniques to prevent any damage during removal.' },
    { question: 'Can I watch while you work?', answer: "Absolutely. You're welcome to supervise, or you can relax while we handle everything. We'll check in before removing any items you haven't specifically identified." },
    { question: 'Do you offer recurring residential service?', answer: "Yes! Many customers schedule regular pickups for ongoing decluttering or renovation projects. We can set up weekly, bi-weekly, or monthly service." },
    { question: 'What about items in the yard or garage?', answer: 'We remove items from anywhere on your property — inside the home, garage, shed, yard, driveway, or deck. Outdoor items are no problem.' },
  ],
  'commercial-junk-removal': [
    { question: 'Can you work after business hours?', answer: 'Yes! We offer flexible scheduling including evenings and weekends to minimize disruption to your business operations.' },
    { question: 'Do you handle office furniture and electronics?', answer: 'We remove all types of commercial items: desks, chairs, cubicles, filing cabinets, computers, printers, copiers, retail fixtures, restaurant equipment, and more.' },
    { question: 'Can you provide proof of proper disposal?', answer: 'Yes. We provide detailed disposal documentation including donation receipts, recycling certificates, and disposal records for your compliance needs.' },
    { question: 'Do you work with property managers?', answer: 'Regularly! We partner with commercial property managers for tenant cleanouts, common area maintenance, and pre-lease preparation.' },
    { question: 'What about data security for electronics?', answer: 'We can coordinate with certified e-waste recyclers who provide certificates of data destruction for hard drives and other data-containing devices.' },
    { question: 'Do you offer commercial contracts?', answer: "Yes, we offer ongoing service contracts for businesses that need regular junk removal. Contact us for customized commercial pricing." },
  ],
  'construction-debris-removal': [
    { question: 'What types of construction debris do you accept?', answer: 'Drywall, lumber, concrete, roofing materials, flooring, tile, brick, insulation, windows, doors, and general renovation waste. We handle both residential and commercial construction debris.' },
    { question: 'Can you provide a dumpster alternative?', answer: "Yes! Our truck-based service is often faster and more cost-effective than renting a dumpster. No permits needed, no eyesore in your driveway, and we do all the loading." },
    { question: 'Do you clean up the job site?', answer: 'We perform a thorough cleanup of the work area, including sweeping and removing all debris. Your site will be clean and ready for the next phase of work.' },
    { question: 'Can you work alongside my contractors?', answer: 'Absolutely. We coordinate with general contractors, roofers, plumbers, and other trades to provide debris removal on their schedule.' },
    { question: 'What about hazardous construction materials?', answer: 'We cannot handle asbestos, lead paint, or chemical contaminants. We can help identify these materials and recommend certified hazmat removal services.' },
    { question: 'Do you recycle construction materials?', answer: 'Yes! Wood, metal, concrete, and many other construction materials are recycled whenever possible. We divert a significant portion of construction debris from landfills.' },
  ],
  'appliance-removal': [
    { question: 'Do you disconnect appliances?', answer: 'We handle standard disconnections for washers, dryers, refrigerators, and dishwashers. For gas appliances, we recommend having a plumber cap the gas line before our arrival for safety.' },
    { question: 'Do you remove built-in appliances?', answer: 'Yes, we can remove built-in dishwashers, microwaves, ovens, and other installed appliances. We take care not to damage surrounding cabinetry or countertops.' },
    { question: 'What happens to removed appliances?', answer: 'Working appliances are donated to local charities. Non-working units are taken to certified recyclers who safely extract refrigerants and recycle metals, plastics, and other components.' },
    { question: 'Can you remove commercial kitchen equipment?', answer: 'Yes! We handle commercial refrigerators, ovens, prep tables, dishwashers, and other restaurant equipment. We have the crew and equipment for heavy commercial units.' },
    { question: 'Is there an extra charge for Freon-containing appliances?', answer: 'No extra charge. Our recycling partners handle Freon extraction in compliance with EPA regulations, and this is included in our standard pricing.' },
    { question: 'Can you remove a washer/dryer from the basement?', answer: 'Absolutely. Our team regularly carries heavy appliances up stairs and through tight spaces. No extra charge for stairs or difficult access.' },
  ],
  'yard-waste-removal': [
    { question: 'What types of yard waste do you accept?', answer: 'Tree branches, bush trimmings, grass clippings, leaves, stumps, sod, dirt, gravel, old fencing, deck materials, garden waste, and general landscape debris.' },
    { question: 'Do you remove tree stumps?', answer: 'Yes! We offer stump grinding as a dedicated service. We can grind stumps below grade and haul away the debris.' },
    { question: 'Can you handle large tree limbs?', answer: 'Yes! We handle branches and limbs of all sizes. For very large trees, we recommend having them cut by an arborist first, then we handle all the debris removal.' },
    { question: 'Do you remove old fencing and decking?', answer: 'Absolutely. We demolish and remove old wood fences, chain link fences, decks, pergolas, and other outdoor structures.' },
    { question: 'What happens to the yard waste?', answer: 'Green waste is composted or mulched at local facilities. Wood is recycled when possible. We divert as much yard waste as possible from landfills.' },
    { question: 'Do you offer spring/fall cleanup service?', answer: 'Yes! Seasonal cleanups are one of our most popular services. We clear out accumulated debris, dead plants, and prepare your yard for the next season.' },
  ],
  'stump-grinding': [
    { question: 'How deep do you grind stumps?', answer: 'We typically grind stumps 6-12 inches below grade, which is deep enough for new grass, mulch, or landscaping to be placed over the area.' },
    { question: 'Can you grind stumps near fences or buildings?', answer: 'Yes, we have equipment suited for tight spaces. We can grind stumps near fences, foundations, sidewalks, and other structures with care.' },
    { question: 'What happens to the wood chips?', answer: 'We can leave the wood chips as free fill material for the hole, or haul them away at no extra charge. Many homeowners use them as mulch.' },
    { question: 'Do you remove the roots too?', answer: 'We grind the stump and major surface roots. Underground roots will naturally decompose over time and are not typically a concern.' },
    { question: 'How is stump grinding priced?', answer: 'Pricing is primarily based on the diameter of each stump. We offer discounts for multiple stumps done in the same visit.' },
    { question: 'Will stump grinding damage my yard?', answer: 'We take care to minimize yard impact. There may be minor tire tracks or disturbed soil around the stump, which settles quickly. We clean up all debris.' },
  ],
  'gravel-mulch-delivery': [
    { question: 'What types of gravel and mulch do you deliver?', answer: 'We deliver pea gravel, decorative rock, river rock, lava rock, crushed gravel, bark mulch, wood chips, fill dirt, and topsoil. Contact us for specific material availability.' },
    { question: 'How much material do I need?', answer: 'A general rule: 1 cubic yard covers about 100 square feet at 3 inches deep. We can help you calculate the right amount based on your project area.' },
    { question: 'Where do you place the material?', answer: 'We typically deliver to your driveway or a flat, accessible area on your property. For specific placement requests, let us know and we will accommodate when possible.' },
    { question: 'Do you offer spreading services?', answer: 'Yes! For an additional fee, our crew can spread the material in your designated area. This is especially popular for mulch beds and gravel walkways.' },
    { question: 'What is the minimum delivery amount?', answer: 'Our minimum delivery is typically 1 cubic yard. For smaller amounts, we can still accommodate — contact us to discuss your needs.' },
    { question: 'How far in advance should I order?', answer: 'We can often deliver next-day. For large orders or specific materials, we recommend 2-3 days advance notice to ensure availability.' },
  ],
};

// ── Location-Specific FAQs ──────────────────────────────────────────

export const locationFaqs: Record<string, FAQ[]> = {
  'rio-rancho': [
    { question: 'What areas of Rio Rancho do you serve?', answer: 'We serve all of Rio Rancho including Enchanted Hills, Loma Colorado, Cabezon, Northern Meadows, Rio Rancho Estates, Sundance, and all surrounding neighborhoods.' },
    { question: 'Do you offer same-day service in Rio Rancho?', answer: 'Yes! Rio Rancho is our home base. Same-day service is available most days, and we can often arrive within a few hours of your request.' },
    { question: 'Do you handle HOA-compliant cleanups?', answer: 'Absolutely. We understand many Rio Rancho communities have HOA requirements. We provide prompt, thorough service that meets HOA standards.' },
    { question: 'Do you serve the newer developments?', answer: 'Yes, we serve all Rio Rancho communities including new developments in Enchanted Hills, Loma Colorado, and all areas along Unser and Northern.' },
    { question: 'Is there an extra charge for Rio Rancho service?', answer: 'No! As our home base, Rio Rancho gets our standard pricing with no travel or distance charges.' },
  ],
  albuquerque: [
    { question: 'Do you serve all of Albuquerque?', answer: 'Yes! We cover the entire Albuquerque metro including Northeast Heights, Nob Hill, Old Town, Downtown, Uptown, West Side, South Valley, North Valley, Foothills, and all neighborhoods.' },
    { question: 'Can you handle commercial jobs in Albuquerque?', answer: 'Absolutely. We serve businesses throughout Albuquerque — offices, restaurants, retail spaces, warehouses, and more. Flexible scheduling available.' },
    { question: 'Do you work in downtown Albuquerque?', answer: 'Yes, including apartments and condos. We navigate parking, elevators, and tight spaces regularly in downtown and Nob Hill.' },
    { question: 'What is typical response time for Albuquerque?', answer: 'Same-day service is available for most Albuquerque jobs. We can typically schedule within a few hours or offer next-morning service.' },
    { question: 'Do you serve the South Valley and West Side?', answer: 'Yes! Our service area covers the entire Albuquerque metro including South Valley, West Side, Taylor Ranch, Paradise Hills, and all surrounding communities.' },
  ],
  corrales: [
    { question: 'Do you serve rural properties in Corrales?', answer: 'Yes! We understand the unique needs of Corrales properties including large lots, horse properties, and rural acreage. We have the equipment for larger jobs.' },
    { question: 'Can you handle barn and outbuilding cleanouts?', answer: 'Absolutely. We regularly clear barns, sheds, and outbuildings on Corrales properties. We sort, donate, and recycle wherever possible.' },
    { question: 'Do you work on historic adobe properties?', answer: 'Yes, we treat historic properties with extra care. Our crew is experienced with the unique characteristics of adobe homes and takes precautions to protect the structure.' },
    { question: 'Is Corrales in your standard service area?', answer: 'Yes! Corrales is part of our core Central New Mexico service area. Same pricing and same-day availability as all our other locations.' },
    { question: 'Do you offer stump grinding in Corrales?', answer: 'Yes! Stump grinding is one of our services, and we regularly serve Corrales properties with large trees and cottonwoods.' },
  ],
  'los-ranchos': [
    { question: 'Do you serve the Village of Los Ranchos?', answer: 'Yes! We cover all of Los Ranchos de Albuquerque including properties along Rio Grande Blvd, Fourth Street, and all village neighborhoods.' },
    { question: 'Can you work in the bosque area properties?', answer: 'Absolutely. We serve properties near the Rio Grande bosque and understand the access and environmental considerations of these areas.' },
    { question: 'Do you offer yard waste removal in Los Ranchos?', answer: 'Yes! With the large trees and gardens in Los Ranchos, yard waste removal is one of our most requested services in the area.' },
    { question: 'Is Los Ranchos included in your service area?', answer: 'Yes! Los Ranchos is right in the heart of our service area. Standard pricing with no extra charges.' },
    { question: 'Can you handle estate cleanouts in Los Ranchos?', answer: 'Yes, we regularly handle estate cleanouts in Los Ranchos, working with families, realtors, and attorneys to clear properties thoroughly and respectfully.' },
  ],
  'sandia-heights': [
    { question: 'Do you serve the Sandia Heights area?', answer: 'Yes! We serve all of Sandia Heights including the neighborhoods around the Tramway, High Desert, Bear Canyon, and Elena Gallegos areas.' },
    { question: 'Can you handle properties with steep driveways?', answer: 'Absolutely. Our crew and equipment are experienced with the hillside properties and steep driveways common in Sandia Heights.' },
    { question: 'Do you work in gated communities?', answer: 'Yes, we regularly service gated communities and custom homes in the area. We coordinate with HOAs and gate access as needed.' },
    { question: 'Are your crews background-checked?', answer: 'Yes. All team members are background-checked and trained professionals. We understand the trust required when working in Sandia Heights homes.' },
    { question: 'Is pricing the same for Sandia Heights?', answer: 'Yes! Our volume-based pricing is consistent across our entire Central New Mexico service area. No extra fees for Sandia Heights.' },
  ],
  'north-albuquerque-acres': [
    { question: 'Do you serve North Albuquerque Acres?', answer: 'Yes! We cover all of North Albuquerque Acres and the surrounding east-side communities. Our equipment handles the larger lots common in this area.' },
    { question: 'Can you handle large property cleanouts?', answer: 'Absolutely. With the larger lots in North Albuquerque Acres, we regularly handle extensive cleanouts including barns, outbuildings, and multi-acre yard clearing.' },
    { question: 'Do you deliver gravel and mulch to North Albuquerque Acres?', answer: 'Yes! Gravel and mulch delivery is available throughout our service area, including North Albuquerque Acres.' },
    { question: 'What about stump grinding for large trees?', answer: 'We handle stumps of all sizes. The large cottonwoods and elms common in North Albuquerque Acres are no problem for our professional equipment.' },
    { question: 'Is same-day service available?', answer: 'Yes! Same-day service is available for most jobs in North Albuquerque Acres. Contact us and we can often be there within a few hours.' },
  ],
  'los-lunas': [
    { question: 'Do you serve the Los Lunas area?', answer: 'Yes! Los Lunas and the surrounding Valencia County communities are part of our service area. We provide the same reliable service as all our locations.' },
    { question: 'Can you handle new construction debris in Los Lunas?', answer: 'Absolutely. With the growth in the Los Lunas area, we regularly remove construction debris from new builds and renovations.' },
    { question: 'Is pricing the same as Albuquerque?', answer: 'Yes! Our volume-based pricing is consistent across our entire Central New Mexico service area. No extra travel or distance charges for Los Lunas.' },
    { question: 'Do you serve rural properties around Los Lunas?', answer: 'Yes, we service rural properties around Los Lunas including farm cleanouts, barn clearing, and large property cleanups.' },
    { question: 'What is your response time for Los Lunas?', answer: 'Same-day service is available for most Los Lunas jobs. We can typically schedule within a few hours or offer next-morning service.' },
  ],
  'santa-fe': [
    { question: 'Do you serve all of Santa Fe?', answer: 'Yes! We cover all of Santa Fe including the Historic District, Canyon Road, Railyard, Casa Solana, Eldorado, Tesuque, Las Campanas, and all surrounding areas.' },
    { question: 'Can you handle historic property cleanouts?', answer: 'Absolutely. We have experience with Santa Fe\'s unique adobe architecture and historic properties. Our crew treats these homes with the extra care they deserve.' },
    { question: 'Do you work with Santa Fe galleries and businesses?', answer: 'Yes, we provide commercial junk removal for galleries, shops, restaurants, and businesses throughout Santa Fe. Flexible scheduling around your business hours.' },
    { question: 'Is there an extra charge for Santa Fe service?', answer: 'Santa Fe is part of our standard service area. Our pricing is consistent across all locations with no extra travel charges.' },
    { question: 'Can you handle renovation debris in Santa Fe?', answer: 'Yes! Santa Fe has many ongoing renovation projects and we regularly remove construction debris from residential and commercial renovations.' },
  ],
};
