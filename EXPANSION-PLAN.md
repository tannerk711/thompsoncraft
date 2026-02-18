# Junkyard Gentlemen - Full Site Expansion Plan

## Workflow Instructions

**IMPORTANT: Execute ONE PHASE at a time per chat session.**

Each phase should be completed in its own fresh chat session to avoid hitting context limits and to maintain quality. At the start of each new session, reference this file and say:

> "Read EXPANSION-PLAN.md and execute Phase [X]. Mark it complete when done."

After completing a phase, update the **Progress Tracker** below before ending the session.

---

## Progress Tracker

| Phase | Status | Date Completed | Notes |
|-------|--------|----------------|-------|
| 0 - Foundation | Complete | 2026-02-18 | Types, data layer, framer-motion, CSS utilities, metadata helpers all created. Build passes. |
| 1 - Global Layout | Complete | 2026-02-18 | Header, Footer, MobileMenu, FloatingCTA, NavDropdown, Button, SectionHeading, IconBadge. Existing pages updated. Build passes. |
| 2 - Reusable Sections | Complete | 2026-02-18 | ScrollReveal, HeroSection, HowItWorks, FAQAccordion, TestimonialSection, CTASection, BeforeAfterGallery, TrustBadges. Build passes. |
| 3 - Service Pages | Complete | 2026-02-18 | Dynamic [slug] template, services index, 7 FAL.ai hero images. All 7 pages pre-rendered at build. Build passes. |
| 4 - Location Pages | Complete | 2026-02-18 | Dynamic [slug] template, locations index, 5 FAL.ai hero images, Google Maps embeds, CSP updated. All 5 pages pre-rendered at build. Build passes. |
| 5 - Supporting Pages | Complete | 2026-02-18 | About, Pricing, Contact pages built. 5 FAL.ai images generated. JSON-LD structured data, SEO metadata, all reusable components. Build passes (26 static pages). |
| 6 - Homepage Refactor | Complete | 2026-02-18 | Replaced inline hero/testimonials/CTA with shared components. Added ScrollReveal animations, SectionHeading, centralized data imports. Service area cards now link to location pages. Build passes (26 static pages). |
| 7 - SEO & Polish | Complete | 2026-02-18 | Sitemap updated (20 URLs from data), robots.ts created, homepage metadata + JSON-LD added, quote/privacy metadata added. All links verified. Build passes (27 static pages). |

---

## Context

The site currently has 3 pages (homepage, quote form, privacy) with all content inline in `app/page.tsx` (686 lines). There are no shared layout components, no data layer, and no dedicated service/location/about/pricing/contact pages. This plan adds 17+ new pages, reusable templates, a centralized data layer, global navigation, and modern animations - all while preserving the existing bronze/charcoal/cream design system and AI-powered quote flow.

### Current Tech Stack
- Next.js 16.0.10 with App Router, React 19.2.0, TypeScript
- Tailwind CSS v4 (using `@theme inline` directive in `globals.css`, NO tailwind.config file)
- lucide-react for icons, react-hook-form + zod for forms
- Cloudinary for images, Anthropic Claude for AI photo estimation
- No animation library installed yet

### Current Design System
- Colors: charcoal (hsl 0 0% 18%), bronze (hsl 43 74% 39%), cream (hsl 40 20% 96%), forest-green (hsl 100 45% 25%)
- Fonts: Lexend (display/headings), Inter (body)
- Utilities: `.hover-lift`, `.hover-bronze-border`, `.transition-smooth`
- Pattern: Cards with rounded-2xl, border, shadow-lg, hover elevation

### Current Pages
- `/` (homepage - 686 lines, all content and data constants inline)
- `/quote` (multi-step AI-powered quote form, 6 steps)
- `/privacy` (privacy policy)

### Current Components
- `components/Logo.tsx` (light/dark variants, sm/md/lg sizes)
- `components/quote/` - 8 form step components

---

## Phase 0: Foundation (Types, Data Layer, Dependencies, CSS)

**Goal:** Set up the architecture everything else builds on. No visible site changes.

### Install dependency
- `framer-motion` for scroll animations, accordion, mobile menu

### New files to create

**`types/index.ts`** - Shared TypeScript interfaces:
- `SiteConfig` (name, phone, email, address, baseUrl)
- `NavItem` (label, href, children for dropdowns)
- `ServicePage` (slug, name, icon, heroImage, heroHeadline, heroSubtext, meta, whatWeRemove, howItWorks, pricingFactors, faqs, beforeAfterImages, testimonialIds)
- `LocationPage` (slug, city, heroImage, heroHeadline, meta, description, neighborhoods, landmarks, faqs, testimonialIds)
- `Testimonial` (id, quote, name, location, service tag, rating)
- `FAQ`, `BeforeAfterPair`, `HowItWorksStep`, `PricingFactor`, `WhatWeRemoveItem`
- Component props interfaces: `HeroSectionProps`, `FAQAccordionProps`, `TestimonialSectionProps`, `CTASectionProps`, `HowItWorksProps`, `TrustBadgesProps`, `BeforeAfterGalleryProps`

**`data/site.ts`** - Business constants:
- Company name, tagline, phone (844-543-JUNK), email, address, baseUrl
- Extracted from scattered hardcoded values across pages

**`data/navigation.ts`** - Nav structure:
- Services dropdown (7 children), Locations dropdown (5 children), About, Pricing, Contact

**`data/testimonials.ts`** - Centralized testimonials:
- Extract 3 existing from `app/page.tsx` (lines 669-685), add IDs and service tags
- Add ~10 more for service/location filtering

**`data/faqs.ts`** - FAQ collections:
- General FAQs, service-specific (6-8 per service), location-specific, pricing FAQs (8)

**`data/services.ts`** - All 7 service page data objects:
- `estate-cleanouts`, `storage-unit-cleanouts`, `residential-junk-removal`, `commercial-junk-removal`, `construction-debris-removal`, `appliance-removal`, `yard-waste-removal`
- Each with full content: hero, whatWeRemove items, howItWorks steps, pricingFactors, faqs, testimonialIds

**`data/locations.ts`** - All 5 location page data objects:
- `boise`, `meridian`, `nampa`, `eagle`, `garden-city`
- Each with neighborhoods, landmarks, serviceHighlights, faqs, testimonialIds

**`lib/metadata.ts`** - SEO helper functions:
- `generateServiceMetadata()` - page title, description, OG tags, canonical URL
- `generateLocationMetadata()` - same for locations
- `generateServiceJsonLd()` - Schema.org Service structured data
- `generateLocationJsonLd()` - Schema.org LocalBusiness structured data

### Modify `app/globals.css`
Add glassmorphism and scroll animation utilities:
```css
.glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.18); }
.glass-dark { background: rgba(0,0,0,0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); }
```

### Verify
- `npm run build` succeeds with all new types/data

---

## Phase 1: Global Layout Components

**Goal:** Build shared Header, Footer, MobileMenu, FloatingCTA. Wire into `app/layout.tsx`. Update existing pages to remove inline header/footer.

### New files

**`components/ui/Button.tsx`** - Reusable button/link:
- Variants: `bronze`, `outline`, `white`, `charcoal`
- Sizes: `sm`, `md`, `lg`
- Renders `<Link>` when `href` provided, `<button>` otherwise
- Applies `.hover-lift`, `.transition-smooth`

**`components/ui/SectionHeading.tsx`** - Section titles:
- Props: title, subtitle, align (left/center), variant (light/dark)
- Uses `font-display` for heading

**`components/ui/IconBadge.tsx`** - Round icon circles:
- Props: icon (LucideIcon), size, color variant

**`components/layout/Header.tsx`** - Sticky navigation (client component):
- Transparent initially, transitions to solid charcoal + backdrop-blur on scroll (>80px)
- Desktop: Logo left | Nav center (Services dropdown, Locations dropdown, About, Pricing, Contact) | Phone + "Free Instant Quote" CTA right
- Mobile: Logo left | Hamburger right
- Active link highlighting via `usePathname()`
- Consumes `data/navigation.ts` and `data/site.ts`

**`components/layout/NavDropdown.tsx`** - Desktop dropdown menus:
- Opens on hover with 150ms delay, closes on mouseleave with 300ms delay
- Glass-dark styled panel with rounded-xl and shadow
- Renders child `NavItem[]` as links

**`components/layout/MobileMenu.tsx`** - Full-screen mobile drawer (client component):
- Slides in from right with framer-motion `AnimatePresence`
- Accordion sections for Services/Locations children
- Phone + CTA button pinned at bottom
- Focus trap, close on Escape, close on link click

**`components/layout/Footer.tsx`** - 4-column footer (server component):
- Column 1: Logo (dark variant) + tagline + social media icons
- Column 2: Quick Links (Home, About, Services, Pricing, Contact)
- Column 3: Services list (all 7 service page links)
- Column 4: Contact info (address, phone, email, hours)
- Trust badges row below columns
- Bottom bar: Copyright, Privacy Policy, Terms of Service
- Dark gradient: `bg-gradient-to-br from-charcoal via-slate-800 to-charcoal`

**`components/layout/FloatingCTA.tsx`** - Mobile floating quote button (client component):
- `fixed bottom-6 right-6 z-50 md:hidden`
- Bronze circular button with quote icon
- Appears after scrolling past 500px
- Hidden on `/quote` page via `usePathname()`
- Links to `/quote`

### Modify `app/layout.tsx`
- Import and render `<Header />`, `<Footer />`, `<FloatingCTA />` wrapping `{children}`
- Structure: `<Header />` then `<main>{children}</main>` then `<Footer />`

### Modify `app/page.tsx`
- Remove inline `<header>` (lines 39-43)
- Remove inline `<footer>` (lines 456-473)
- Adjust hero padding since sticky header now overlays

### Modify `app/privacy/page.tsx`
- Remove inline footer and "Back to Home" link (Header provides navigation now)

### Modify `app/quote/page.tsx`
- Remove duplicate Logo from internal header; keep "Back to Home" breadcrumb link inside content
- Global Header will show above

### Verify
- All pages show consistent Header/Footer
- Dropdowns work on desktop hover, accordion on mobile tap
- Scroll transition (transparent→solid) works on homepage hero
- FloatingCTA appears on mobile, hidden on `/quote`
- All existing functionality (quote form, phone links) still works
- `npm run build`

---

## Phase 2: Reusable Section Components

**Goal:** Build all shared presentational components used across service, location, and supporting pages.

### New files

**`components/sections/ScrollReveal.tsx`** (client component):
- Wraps children with framer-motion `whileInView` fade-up animation
- Props: direction (up/down/left/right), delay, className
- `viewport={{ once: true, margin: '-100px' }}`

**`components/sections/HeroSection.tsx`**:
- Background image with `next/image fill priority`
- Dark overlay gradient (configurable)
- Optional badge text above headline
- Headline (font-display, text-5xl/7xl), subtext, two CTA buttons
- Optional trust indicators row (Licensed, Insured, Eco-Friendly)
- Matches current homepage hero pattern (lines 46-117 of `app/page.tsx`)

**`components/sections/HowItWorks.tsx`**:
- Numbered steps with bronze circles
- Light/dark variant backgrounds
- Wrapped in ScrollReveal for entrance animation
- Reuses the pattern from homepage pricingSteps (lines 261-275)

**`components/sections/FAQAccordion.tsx`** (client component):
- `<details>/<summary>` for no-JS fallback, enhanced with framer-motion height animation
- Single-open accordion behavior (controlled state)
- Chevron icon rotates on open
- Bronze accent on active item
- Section heading + subheading

**`components/sections/TestimonialSection.tsx`**:
- Grid of testimonial cards (1-col mobile, 3-col desktop)
- Star ratings, quoted text, author name + location
- Light/dark variant
- Matches homepage testimonials pattern (lines 384-423)

**`components/sections/CTASection.tsx`**:
- Full-width banner with headline, subtext, two CTA buttons
- Bronze variant (bronze bg, white text) or charcoal variant (dark gradient)
- Matches homepage CTA (lines 426-452)

**`components/sections/BeforeAfterGallery.tsx`** (client component):
- Grid of before/after image pairs
- Side-by-side layout with "Before"/"After" labels
- Click opens lightbox modal (overlay with larger view)
- Conditionally renders only when images exist
- Caption below each pair

**`components/sections/TrustBadges.tsx`**:
- Licensed, Insured, Eco-Friendly, Same-Day Service, Locally Owned
- Lucide icons: ShieldCheck, Shield, Leaf, Clock, MapPin
- Horizontal row or grid layout variant

### Verify
- Create temporary `app/test/page.tsx` rendering each component with mock data
- Test all breakpoints (375px, 768px, 1440px)
- Verify scroll animations trigger correctly
- Delete test page after verification
- `npm run build`

---

## Phase 3: Service Pages (7 Dynamic Route Pages)

**Goal:** Build the service page template and render all 7 service pages from data.

### Architecture: Dynamic routes with `generateStaticParams`
- Single template at `app/services/[slug]/page.tsx` renders all 7 pages from `data/services.ts`
- Pre-rendered at build time (identical performance to individual files)
- Adding a new service = adding a data entry, not a new file

### New files

**`app/services/[slug]/page.tsx`** - Service page template:
- `generateStaticParams()` returns all 7 slugs
- `generateMetadata()` produces per-page SEO (title, description, OG, canonical)
- JSON-LD structured data via `<script type="application/ld+json">`
- Sections in order:
  1. `<HeroSection>` with service-specific image, headline, CTA
  2. "What We Remove" - icon+name+description grid (2x4 or 3x3)
  3. `<HowItWorks>` - 4 service-specific steps
  4. "Pricing Factors" - what affects cost for this service
  5. `<FAQAccordion>` - 6-8 service-specific questions
  6. `<BeforeAfterGallery>` - conditional, renders when images exist
  7. `<TestimonialSection>` - 2-3 filtered by testimonialIds
  8. `<CTASection>` - "Get Your Free Instant Quote"

**`app/services/page.tsx`** - Services index page:
- Hero: "Our Services" headline
- Grid of 7 service cards (icon, name, brief description, link to `/services/[slug]`)
- Final CTA section

### Image generation (during this phase)
- Generate 7 hero images using FAL.ai (one per service) as pages are built
- Save to `public/images/services/[slug]-hero.jpg`
- Professional, clean, realistic photography style matching existing site aesthetic

### Verify
- `/services` lists all 7 services
- Each `/services/[slug]` renders complete page with correct data
- `/services/nonexistent` returns 404
- SEO: correct `<title>`, `<meta description>`, JSON-LD in page source
- Mobile responsive at all breakpoints
- `npm run build` pre-renders all 7 pages

---

## Phase 4: Location Pages (5 Dynamic Route Pages)

**Goal:** Build the location page template and render all 5 location pages from data.

### New files

**`app/locations/[slug]/page.tsx`** - Location page template:
- Same `generateStaticParams`/`generateMetadata` pattern as services
- JSON-LD LocalBusiness structured data
- Sections in order:
  1. `<HeroSection>` - "Junk Removal in [City], Idaho"
  2. Service area description with local landmarks
  3. "Neighborhoods We Serve" - styled list/grid
  4. Services available - photo grid linking to service pages
  5. `<TestimonialSection>` - local testimonials filtered by city
  6. Service area map (Google Maps embed or static image)
  7. `<FAQAccordion>` - location-specific questions
  8. `<CTASection>` - "Get Your Instant [City] Junk Quote"

**`app/locations/page.tsx`** - Locations index page:
- Hero: "Serving the Treasure Valley"
- Grid/map of all 5 locations with city cards linking to `/locations/[slug]`
- CTA section

### Modify `next.config.ts`
- Update CSP `frame-src` to allow `https://www.google.com` for Maps embeds (if using embedded maps)

### Image generation (during this phase)
- Generate 5 hero images using FAL.ai (one per city - Idaho cityscape/landmarks)
- Save to `public/images/locations/[slug]-hero.jpg`

### Verify
- `/locations` lists all 5 locations
- Each `/locations/[slug]` renders complete page
- Maps embed works (CSP allows it)
- `npm run build`

---

## Phase 5: Supporting Pages (About, Pricing, Contact)

**Goal:** Build the three remaining content pages.

### New files

**`app/about/page.tsx`** - About page:
1. Hero with company/team image
2. "Our Story" - founding narrative, mission
3. "Why We're Different" - differentiator cards (reuse pattern from homepage `whyChooseUs`)
4. Team section (bios or company values)
5. Community involvement section with generated image
6. Environmental commitment (reuse eco data from homepage constants)
7. `<TrustBadges>`
8. `<CTASection>`

**`app/pricing/page.tsx`** - Pricing page:
1. Hero: "Transparent Pricing"
2. Volume-based pricing guide (extract from homepage `pricingSteps` + `volumeGuide`)
3. "What Affects Your Price" - factor breakdown cards
4. Volume tiers visual (truck load percentages)
5. "No Hidden Fees" guarantee section
6. General competitor comparison
7. `<FAQAccordion>` with 8 pricing FAQs
8. `<CTASection>`

**`app/contact/page.tsx`** - Contact page (no separate form - links to existing /quote):
1. Hero: "Get In Touch"
2. Prominent CTA section: "Get Your Free Instant Quote" linking to `/quote`
3. Contact info section: phone (844-543-JUNK large and prominent), email (info@junkhaulerboise.com), office address, business hours
4. "We Respond in 60 Minutes" guarantee badge
5. Service area map (Google Maps embed or static image)
6. `<TrustBadges>`
7. `<CTASection>` - final CTA back to `/quote`

No separate contact form or API route needed - all quote requests go through existing `/quote` flow.

### Image generation (during this phase)
- About page: team/company image, community involvement image, environmental commitment image
- Pricing page: truck/pricing visual
- Contact page: office/team image

### Verify
- All 3 pages render correctly with all sections
- Contact page CTAs link to `/quote`, phone/email links work
- SEO metadata correct
- `npm run build`

---

## Phase 6: Homepage Refactor

**Goal:** Refactor homepage to use shared components and centralized data. Page should look identical after refactor.

### Modify `app/page.tsx`
1. Remove all data constants from bottom of file (moved to `data/` in Phase 0)
2. Import data from `data/testimonials.ts`, `data/site.ts`, etc.
3. Replace inline hero with `<HeroSection>` component
4. Replace inline testimonials with `<TestimonialSection>`
5. Replace inline CTA with `<CTASection>`
6. Wrap sections in `<ScrollReveal>` for entrance animations
7. Use `<SectionHeading>` for consistent section headers
8. Keep homepage-specific sections (Why Professional Service, Local Expertise, What We Remove, Pricing, Eco-Friendly, Service Areas) as page-specific JSX but using shared UI components

### Verify
- Homepage visually identical to pre-refactor
- Scroll animations work smoothly
- No layout shift or regressions
- `npm run build`

---

## Phase 7: SEO, Sitemap, and Final Polish

**Goal:** Complete SEO, update sitemap, generate remaining images, polish.

### Modify `app/sitemap.ts`
- Add all new pages: /services, /services/[7 slugs], /locations, /locations/[5 slugs], /about, /pricing, /contact
- Set appropriate priorities and changeFrequencies

### Modify `next.config.ts`
- Update CSP for any new external resources (Maps, image CDN)

### SEO checklist per page
- Unique `<title>` and `<meta description>`
- Canonical URL via `alternates.canonical`
- OpenGraph tags (title, description, image, type)
- JSON-LD structured data (Service, LocalBusiness)
- Proper heading hierarchy (single h1, logical h2/h3)

### Final polish
- Verify all internal links work (no broken links)
- Check image loading (priority on hero, lazy below fold)
- Run Lighthouse on homepage + one service + one location page
- Keyboard navigation through header, dropdowns, FAQ accordion
- Screen reader audit for ARIA labels
- Color contrast validation

### Verify
- Sitemap XML includes all pages
- `npm run build` produces full static site
- All pages accessible, performant, SEO-optimized

---

## File Summary

| Phase | New Files | Modified Files |
|-------|-----------|----------------|
| 0 | `types/index.ts`, `data/site.ts`, `data/navigation.ts`, `data/testimonials.ts`, `data/faqs.ts`, `data/services.ts`, `data/locations.ts`, `lib/metadata.ts` | `package.json`, `app/globals.css` |
| 1 | `components/ui/Button.tsx`, `components/ui/SectionHeading.tsx`, `components/ui/IconBadge.tsx`, `components/layout/Header.tsx`, `components/layout/NavDropdown.tsx`, `components/layout/MobileMenu.tsx`, `components/layout/Footer.tsx`, `components/layout/FloatingCTA.tsx` | `app/layout.tsx`, `app/page.tsx`, `app/privacy/page.tsx`, `app/quote/page.tsx` |
| 2 | `components/sections/ScrollReveal.tsx`, `components/sections/HeroSection.tsx`, `components/sections/HowItWorks.tsx`, `components/sections/FAQAccordion.tsx`, `components/sections/TestimonialSection.tsx`, `components/sections/CTASection.tsx`, `components/sections/BeforeAfterGallery.tsx`, `components/sections/TrustBadges.tsx` | - |
| 3 | `app/services/[slug]/page.tsx`, `app/services/page.tsx` | - |
| 4 | `app/locations/[slug]/page.tsx`, `app/locations/page.tsx` | `next.config.ts` |
| 5 | `app/about/page.tsx`, `app/pricing/page.tsx`, `app/contact/page.tsx` | - |
| 6 | - | `app/page.tsx` |
| 7 | - | `app/sitemap.ts`, `next.config.ts` |

**Total: ~30 new files, ~8 modified files**

---

## Key Architectural Decisions

1. **Dynamic routes** (`[slug]`) over individual page files - DRY, scalable, one template change updates all pages
2. **`generateStaticParams`** for build-time pre-rendering - identical performance to static pages
3. **Centralized data layer** (`data/`) - single source of truth, TypeScript-enforced structure
4. **framer-motion** for scroll/accordion/menu animations - tree-shakeable, React-native integration
5. **Server components by default** - only client components where interactivity needed (Header, MobileMenu, FloatingCTA, FAQAccordion, BeforeAfterGallery, ScrollReveal)
6. **FAL.ai image generation** for service/location hero images - generated as each phase is built
7. **Contact page links to /quote** - no separate contact form, all quote requests use existing AI-powered flow
