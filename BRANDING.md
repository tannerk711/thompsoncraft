# Thompson Craft LLC - Brand Guide

## Brand Identity

### Name & Business
- **Business Name:** Thompson Craft LLC
- **Domain:** thompsoncraftllc.com
- **Phone:** (hidden — email-first contact model)
- **Email:** Thompsoncraftllc@gmail.com
- **Location:** Rio Rancho, New Mexico (serving Central New Mexico)
- **Tagline:** Professional Junk Removal for Central New Mexico

### Brand Personality
- **Professional yet approachable** — trained expertise, not corporate stiffness
- **Locally rooted** — deep knowledge of Central New Mexico communities and neighborhoods
- **Eco-conscious** — 80% diversion rate, partnerships with local recyclers and charities
- **Transparent** — volume-based pricing, no hidden fees
- **Respectful** — treats property with care, uniformed staff, spotless cleanup after every job

### Tone of Voice
- Confident and direct, never pushy or salesy
- Uses "we" language to build team credibility
- Emphasizes specific local knowledge (city names, community details, seasonal needs)
- Educates rather than sells (explains pricing method, provides volume guide)
- Avoids AI/tech jargon — focuses on "instant quotes" and "free estimates"

### Key Messaging Pillars
1. **Respectful Professional Service** — "Not just anyone with a truck"
2. **Transparent Volume-Based Pricing** — Pay only for space used
3. **Central New Mexico Expertise** — Local knowledge, community connections
4. **Eco-Friendly Commitment** — 80% recycled/donated, 12+ local partners, 500+ tons diverted
5. **Instant Photo Quotes** — Technology-powered convenience with same-day availability

---

## Color System

### Primary Brand Colors

| Name | HSL | CSS Variable | Usage |
|------|-----|-------------|-------|
| **Charcoal** | `hsl(0 0% 18%)` | `--color-charcoal` | Primary text, dark backgrounds, footer |
| **Charcoal Dark** | `hsl(0 0% 13%)` | `--color-charcoal-dark` | Deeper dark sections |
| **Charcoal Light** | `hsl(0 0% 25%)` | `--color-charcoal-light` | Subtle dark accents, borders |
| **Natural Green** | `hsl(145 55% 35%)` | `--color-bronze` | Primary accent, CTAs, icons, links |
| **Natural Green Light** | `hsl(145 55% 48%)` | `--color-bronze-light` | Hero heading text, star ratings on dark bg |
| **Natural Green Dark** | `hsl(145 55% 24%)` | `--color-bronze-dark` | Checkmarks, dark accent on light bg |

> **Note:** CSS variables retain `bronze` naming from the template framework for compatibility. The actual rendered color is natural green.

### Neutral Colors

| Name | HSL | CSS Variable | Usage |
|------|-----|-------------|-------|
| **Cream** | `hsl(40 20% 96%)` | `--color-cream` | Page background, body bg |
| **Cream Dark** | `hsl(40 15% 90%)` | `--color-cream-dark` | Icon circle backgrounds, subtle sections |
| **Cream Darker** | `hsl(40 15% 85%)` | `--color-cream-darker` | Borders |
| **White** | `#ffffff` | `--color-card` | Card backgrounds |

### Accent Colors

| Name | HSL | Usage |
|------|-----|-------|
| **Forest Green** | `hsl(100 45% 25%)` | Eco-friendly messaging text |
| **Forest Light** | `hsl(100 45% 35%)` | Eco hover states |
| **Emerald** (Tailwind) | `emerald-50` through `emerald-600` | Eco stat cards, pricing highlight |
| **Blue** (Tailwind) | `blue-50` through `blue-600` | Partner stat card, form focus states |

---

## Typography

### Font Stack

| Role | Font Family | Weight | Usage |
|------|------------|--------|-------|
| **Display / Headings** | Lexend (`--font-display`) | 700 (Bold) | H1-H3, section titles, hero headline |
| **Body / UI** | Inter (`--font-sans`) | 400-700 | Body text, buttons, labels, descriptions |

---

## Services (9)

1. Estate Cleanouts
2. Storage Unit Cleanouts
3. Residential Junk Removal
4. Commercial Junk Removal
5. Construction Debris Removal
6. Appliance Removal
7. Yard Waste Removal
8. Stump Grinding
9. Gravel & Mulch Delivery

---

## Service Areas (8 Central New Mexico Locations)

| City | Route |
|------|-------|
| Rio Rancho | `/locations/rio-rancho` |
| Albuquerque | `/locations/albuquerque` |
| Corrales | `/locations/corrales` |
| Los Ranchos de Albuquerque | `/locations/los-ranchos` |
| Sandia Heights | `/locations/sandia-heights` |
| North Albuquerque Acres | `/locations/north-albuquerque-acres` |
| Los Lunas | `/locations/los-lunas` |
| Santa Fe | `/locations/santa-fe` |

---

## Logo

- **Primary logo:** `/public/thompson-craft-logo.png` (38 KB)
- **Component:** `components/Logo.tsx`
- Sizes: sm=120x40, md=180x60, lg=240x80

---

## Page Structure

### Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (hero, services, locations, testimonials, CTA) |
| `/about` | Company story, values, team, eco commitment |
| `/contact` | Contact info, free quote CTA, service area map |
| `/pricing` | Volume-based pricing breakdown |
| `/quote` | 6-step AI-powered quote wizard |
| `/services` | All 9 services overview |
| `/services/[slug]` | Individual service detail pages |
| `/locations` | All 8 locations overview |
| `/locations/[slug]` | Individual location detail pages |
| `/privacy` | Privacy policy |

### Quote Flow (`/quote`)

6-step wizard with progress bar:
1. **Property Type** — 6 options (Residential, Commercial, Storage, Construction, Estate, Yard)
2. **Junk Type** — 12 multi-select options (Furniture, Appliances, Mattresses, etc.)
3. **Location** — City dropdown (8 cities), ZIP code, difficult access checkbox
4. **Date** — ASAP or specific date
5. **Photos** — Cloudinary upload widget, drag & drop, pro tips
6. **Contact** — Name, phone, email, notes
7. **Result** — AI-generated estimate with confidence score, volume breakdown, next steps

---

## Technical Stack

| Technology | Purpose |
|-----------|---------|
| Next.js (App Router) | SSR/SSG framework |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| lucide-react | SVG icon library |
| react-hook-form + zod | Form state & validation |
| Cloudinary | Image upload & CDN (quote photos) |
| Anthropic Claude API | AI-powered junk photo analysis |
| Zapier | Lead routing to CRM (Go High Level) |
| Vercel | Hosting & deployment |

---

## Environment Variables

See `.env.example` for the full list. Key variables:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Per-client upload preset |
| `ZAPIER_WEBHOOK_URL` | Client-specific Zapier webhook URL |
| `ANTHROPIC_API_KEY` | AI photo estimate feature |

---

## Key Files

```
data/
  site.ts              — Site config (name, email, address, baseUrl)
  services.ts          — All 9 service definitions
  locations.ts         — All 8 location definitions
  navigation.ts        — Nav menu structure
  faqs.ts              — FAQ data
  testimonials.ts      — Testimonial data
app/
  globals.css          — Theme variables, custom utilities
  layout.tsx           — Root layout, Google Fonts (Inter + Lexend), metadata
  page.tsx             — Landing page
  sitemap.ts           — SEO sitemap generator
  api/
    estimate/route.ts  — AI photo analysis endpoint (Anthropic Claude)
    save-lead/route.ts — CRM webhook endpoint (Zapier → Go High Level)
components/
  Logo.tsx             — Brand logo component
  quote/               — Multi-step quote wizard components
  sections/            — Reusable page sections (Hero, CTA, Testimonials, etc.)
  layout/              — Header, Footer, MobileMenu, NavDropdown
  ui/                  — Button, SectionHeading, etc.
public/
  thompson-craft-logo.png  — Primary logo
  images/                  — AI-generated hero images for all pages
```
