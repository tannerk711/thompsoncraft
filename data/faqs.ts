import type { FAQ } from '@/types';

// ── General FAQs ────────────────────────────────────────────────────

export const generalFaqs: FAQ[] = [
  {
    question: 'How does junk removal pricing work?',
    answer: 'We use transparent, volume-based pricing at $46 per cubic yard (compressed). You only pay for the space your items actually take up in our truck. Upload photos for a free instant quote, and we confirm the final price on-site before any work begins.',
  },
  {
    question: 'Do you offer same-day junk removal?',
    answer: 'Yes! We offer same-day service throughout the Treasure Valley. Call us at (844) 543-JUNK or submit a quote request, and we can often be there within a few hours depending on availability.',
  },
  {
    question: 'What items do you accept?',
    answer: 'We remove almost anything non-hazardous: furniture, appliances, electronics, yard waste, construction debris, office equipment, hot tubs, and more. We cannot accept hazardous materials like paint, chemicals, asbestos, or medical waste.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive liability insurance. Your property is protected throughout the entire removal process.',
  },
  {
    question: 'What happens to my junk after you take it?',
    answer: 'We recycle or donate approximately 80% of everything we collect. Usable items go to local charities like Habitat ReStore and Goodwill. Recyclable materials go to Treasure Valley recycling facilities. Only what truly cannot be reused goes to the landfill.',
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
    answer: 'We measure by cubic yard of compressed truck space. When items are loaded, they get compressed to maximize efficiency. Your photo-based quote estimates this volume, and we confirm on-site by measuring what we actually load.',
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
    answer: 'No. Our pricing is all-inclusive within the Treasure Valley service area. No fuel surcharges, trip fees, or hidden costs.',
  },
  {
    question: 'How does the photo quote compare to the final price?',
    answer: 'Our AI-powered photo analysis is remarkably accurate — most final prices are within 10% of the estimate, and many come in lower. The on-site confirmation ensures you always know the exact price before we begin.',
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
    { question: 'Do you remove tree stumps?', answer: 'We remove already-cut stumps and roots. For stump grinding of in-ground stumps, we can recommend trusted local arborists and then haul away the grinding debris.' },
    { question: 'Can you handle large tree limbs?', answer: 'Yes! We handle branches and limbs of all sizes. For very large trees, we recommend having them cut by an arborist first, then we handle all the debris removal.' },
    { question: 'Do you remove old fencing and decking?', answer: 'Absolutely. We demolish and remove old wood fences, chain link fences, decks, pergolas, and other outdoor structures.' },
    { question: 'What happens to the yard waste?', answer: 'Green waste is composted or mulched at local facilities. Wood is recycled when possible. We divert as much yard waste as possible from landfills.' },
    { question: 'Do you offer spring/fall cleanup service?', answer: 'Yes! Seasonal cleanups are one of our most popular services. We clear out accumulated debris, dead plants, and prepare your yard for the next season.' },
  ],
};

// ── Location-Specific FAQs ──────────────────────────────────────────

export const locationFaqs: Record<string, FAQ[]> = {
  boise: [
    { question: 'What areas of Boise do you serve?', answer: 'We serve all of Boise including the North End, Bench, Downtown, East End, West Boise, Boise Foothills, Southeast Boise, and all surrounding neighborhoods.' },
    { question: 'Do you offer same-day service in Boise?', answer: 'Yes! Boise is our home base. Same-day service is available most days, and we can often arrive within a few hours of your request.' },
    { question: 'Can you handle jobs in the Boise Foothills?', answer: 'Absolutely. We regularly service homes in the Foothills with steep driveways, hillside access, and other unique challenges. Our team has the experience and equipment to handle it.' },
    { question: 'Do you work in downtown Boise?', answer: 'Yes, including apartments and condos. We navigate parking, elevators, and tight spaces regularly in downtown Boise.' },
    { question: 'Are there any areas too remote for service?', answer: 'We serve the entire Boise metropolitan area. For locations significantly outside Ada County, give us a call to confirm coverage and any travel considerations.' },
  ],
  meridian: [
    { question: 'Do you serve all of Meridian?', answer: 'Yes! We cover all Meridian neighborhoods including the Linder Road corridor, Ten Mile area, Ustick Road area, Southeast Meridian, and all new developments.' },
    { question: 'Are you familiar with Meridian HOA requirements?', answer: "Very much so. We understand that many Meridian neighborhoods have strict HOA rules about exterior appearance and cleanup timelines. We provide prompt service with proper documentation." },
    { question: 'Can you handle new construction debris in Meridian?', answer: "Absolutely. With Meridian's rapid growth, we regularly clear construction debris from new builds, renovations, and landscaping projects." },
    { question: 'Do you offer commercial service in Meridian?', answer: 'Yes, we serve businesses along Eagle Road, the Village at Meridian area, and commercial districts throughout the city.' },
    { question: 'What is typical response time for Meridian?', answer: "Same-day service is available for most Meridian jobs. We're typically able to schedule within a few hours or offer next-morning service." },
  ],
  nampa: [
    { question: 'Do you provide regular service to Nampa?', answer: "Yes! Nampa is one of our key service areas. We have crews in Nampa daily and offer the same fast response times as our Boise service." },
    { question: 'Can you handle large construction projects in Nampa?', answer: 'Absolutely. We support the Nampa building boom with construction debris removal for residential and commercial projects of all sizes.' },
    { question: 'Do you serve rural areas around Nampa?', answer: 'Yes, we service rural properties around Nampa including farm cleanouts, barn clearing, and large property cleanups.' },
    { question: 'What about agricultural waste removal?', answer: 'We handle many types of agricultural clean-up including old equipment, building materials, fencing, and general farm debris. Hazardous agricultural chemicals are excluded.' },
    { question: 'Is pricing the same in Nampa as Boise?', answer: 'Yes! Our volume-based pricing is consistent across the entire Treasure Valley. No extra travel or distance charges for Nampa.' },
  ],
  eagle: [
    { question: 'Do you work in gated communities in Eagle?', answer: 'Yes! We regularly service gated communities and luxury homes in Eagle. We coordinate with HOAs and gate access as needed.' },
    { question: 'Can you handle luxury estate cleanouts?', answer: 'Absolutely. Our team is experienced with high-end properties and treats every home with the utmost care and respect. We use protective coverings and careful handling techniques.' },
    { question: 'Do you serve Eagle Island and surrounding areas?', answer: 'Yes, we service Eagle Island, Hidden Springs, and all Eagle neighborhoods. Our team knows the area well.' },
    { question: 'What about Eagle foothills properties?', answer: 'We regularly service foothills properties with challenging access. Our equipment and experienced crew can handle steep driveways and remote locations.' },
    { question: 'Are your crews background-checked?', answer: 'Yes. All team members are background-checked, uniformed, and trained professionals. We understand the trust required when working in luxury homes and gated communities.' },
  ],
  'garden-city': [
    { question: 'Do you serve commercial businesses in Garden City?', answer: 'Yes! Garden City is a hub for local businesses, and we provide both commercial and industrial junk removal throughout the area.' },
    { question: 'Can you handle warehouse cleanouts in Garden City?', answer: 'Absolutely. We regularly clear warehouses, workshops, and industrial spaces in Garden City. We have the equipment and crew for large-scale jobs.' },
    { question: 'Do you work with Garden City businesses on Chinden?', answer: 'Yes, we serve businesses along Chinden Boulevard and throughout Garden City. We work around business hours to minimize disruption.' },
    { question: 'What about the mixed-use areas in Garden City?', answer: 'We service all property types in Garden City — residential, commercial, industrial, and mixed-use. From brewery cleanouts to apartment turnovers, we handle it all.' },
    { question: 'Is Garden City included in your standard service area?', answer: 'Yes! Garden City is right in the heart of our Treasure Valley service area. Same pricing and same-day availability as all our other locations.' },
  ],
};
