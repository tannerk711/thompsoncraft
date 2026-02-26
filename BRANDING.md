# Junkyard Gentlemen - Brand Guide

## Brand Identity

### Name & Business
- **Business Name:** Junkyard Gentlemen
- **Domain:** junkyardgentlemen.com
- **Phone:** (844) 543-JUNK / +1-844-543-5865
- **Email:** info@junkyardgentlemen.com
- **Location:** Boise, Idaho (serving the Treasure Valley)
- **Tagline:** Professional Boise Junk Removal Service

### Brand Personality
- **Professional yet approachable** — trained expertise, not corporate stiffness
- **Locally rooted** — deep knowledge of Treasure Valley communities, neighborhoods, and HOA rules
- **Eco-conscious** — 80% diversion rate, partnerships with local recyclers and charities
- **Transparent** — volume-based pricing at $46/cubic yard, no hidden fees
- **Respectful** — treats property with care, uniformed staff, spotless cleanup after every job

### Tone of Voice
- Confident and direct, never pushy or salesy
- Uses "we" language to build team credibility
- Emphasizes specific local knowledge (city names, HOA rules, seasonal needs)
- Educates rather than sells (explains pricing method, provides volume guide)
- Avoids AI/tech jargon — focuses on "instant quotes" and "free estimates"

### Key Messaging Pillars
1. **Respectful Professional Service** — "Not just anyone with a truck"
2. **Transparent Volume-Based Pricing** — "$46/cubic yard, pay only for space used"
3. **Treasure Valley Expertise** — HOA compliance, seasonal needs, growth support
4. **Eco-Friendly Commitment** — 80% recycled/donated, 12+ local partners, 500+ tons diverted
5. **Instant Photo Quotes** — technology-powered convenience with same-day availability

---

## Color System

### Primary Brand Colors

| Name | HSL | Hex | CSS Variable | Usage |
|------|-----|-----|-------------|-------|
| **Charcoal** | `hsl(0 0% 18%)` | `#2e2e2e` | `--brand-charcoal` / `--color-charcoal` | Primary text, dark backgrounds, footer |
| **Charcoal Dark** | `hsl(0 0% 13%)` | `#212121` | `--color-charcoal-dark` | Deeper dark sections, dark mode bg |
| **Charcoal Light** | `hsl(0 0% 25%)` | `#404040` | `--color-charcoal-light` | Subtle dark accents, dark mode borders |
| **Bronze** | `hsl(43 74% 39%)` | `#b8860b` | `--brand-bronze` / `--color-bronze` | Primary accent, CTAs, icons, links |
| **Bronze Light** | `hsl(43 74% 55%)` | `#d4a843` | `--color-bronze-light` | Hero heading text, star ratings on dark bg |
| **Bronze Dark** | `hsl(43 74% 25%)` | `#6b4f07` | `--color-bronze-dark` | Checkmarks, dark accent on light bg |

### Neutral Colors

| Name | HSL | Hex | CSS Variable | Usage |
|------|-----|-----|-------------|-------|
| **Cream** | `hsl(40 20% 96%)` | `#f5f0e8` | `--brand-cream` / `--color-cream` | Page background, body bg |
| **Cream Dark** | `hsl(40 15% 90%)` | `#e8e2d8` | `--color-cream-dark` | Icon circle backgrounds, subtle sections |
| **Cream Darker** | `hsl(40 15% 85%)` | `#d9d1c5` | `--color-cream-darker` | Borders |
| **White** | `#ffffff` | — | `--color-card` | Card backgrounds |

### Accent Colors

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Forest Green** | `hsl(100 45% 25%)` | `#406a40` | Eco-friendly messaging text |
| **Forest Light** | `hsl(100 45% 35%)` | — | Eco hover states |
| **Emerald** (Tailwind) | `emerald-50` through `emerald-600` | — | Eco stat cards, pricing highlight, photo tips |
| **Blue** (Tailwind) | `blue-50` through `blue-600` | — | Partner stat card, form focus states |

### Semantic Color Mappings (Tailwind v4 @theme)

| Semantic Name | Maps To | Usage |
|---|---|---|
| `--color-primary` | Charcoal | Main foreground text |
| `--color-secondary` | Bronze | Accent/action color |
| `--color-accent` | Bronze | Interactive elements |
| `--color-background` | Cream | Page background |
| `--color-foreground` | Charcoal | Default text color |
| `--color-card` | White | Card backgrounds |
| `--color-border` | Cream Darker | Card/section borders |
| `--color-ring` | Bronze | Focus ring color |
| `--color-muted` | Cream Dark | Muted backgrounds |
| `--color-muted-foreground` | `hsl(0 0% 45%)` | Muted text |

### Dark Mode Colors

| Variable | Value | Description |
|---|---|---|
| `--color-background` | Charcoal Dark | Dark page bg |
| `--color-foreground` | Cream | Light text on dark |
| `--color-primary` | Cream | Primary becomes light |
| `--color-card` | Charcoal | Dark card bg |
| `--color-border` | Charcoal Light | Dark borders |

---

## Typography

### Font Stack

| Role | Font Family | Google Font | CSS Variable | Weight | Usage |
|------|------------|-------------|-------------|--------|-------|
| **Display / Headings** | Lexend | `next/font/google` | `--font-lexend` / `--font-display` | 700 (Bold) | H1-H3, section titles, hero headline |
| **Body / UI** | Inter | `next/font/google` | `--font-inter` / `--font-sans` | 400-700 | Body text, buttons, labels, descriptions |

### Type Scale (as applied)

| Element | Tailwind Classes | Approximate Size | Weight | Typical Color |
|---------|-----------------|-----------------|--------|---------------|
| H1 (Hero) | `font-display text-5xl sm:text-7xl font-bold` | 48px / 72px | Bold | `text-bronze-light` on dark overlay |
| H2 (Section) | `font-display text-4xl sm:text-5xl font-bold` | 36px / 48px | Bold | `text-charcoal` or `text-white` |
| H3 (Card Title) | `text-xl font-bold` or `text-lg font-bold` | 20px / 18px | Bold | `text-charcoal` or `text-white` |
| H4 (Sub-item) | `font-bold text-sm` | 14px | Bold | `text-charcoal` |
| Body Large | `text-xl` | 20px | Normal | `text-slate-600` or `text-slate-700` |
| Body | `text-base` | 16px | Normal | `text-slate-700` |
| Small | `text-sm` | 14px | Normal/Medium | `text-slate-600` |
| Caption | `text-xs` | 12px | Normal | `text-slate-500` or `text-slate-600` |
| CTA Button | `text-lg font-semibold` | 18px | Semibold | `text-white` on bronze bg |

---

## Icon System

### Library
**lucide-react** — Lightweight, tree-shakeable SVG icon components. Each icon is ~1KB. All icons render as stroke-based SVGs with `className` support for Tailwind sizing and coloring.

### Icon Container Patterns

All icons are rendered inside circular containers. The specific styling varies by section background:

#### Pattern 1: Light Background with Hover (Primary)
Used in: "Why Professional Service Matters" cards
```
Container: w-14 h-14 rounded-full bg-cream-dark → hover:bg-bronze
Icon:      w-7 h-7 text-bronze → hover:text-white
```
Default: bronze icon on warm neutral circle. Hover: white icon on bronze circle.

#### Pattern 2: Dark Background (Solid Bronze)
Used in: "Treasure Valley Locals" section, photo card badges
```
Container: w-12 h-12 rounded-full bg-bronze (or w-16 h-16 for badges)
Icon:      w-6 h-6 text-white (or w-8 h-8 for badges)
```
White icon on solid bronze circle for high contrast against dark backgrounds.

#### Pattern 3: Small Inline (No Hover)
Used in: Detailed services grid
```
Container: w-10 h-10 rounded-full bg-cream-dark
Icon:      w-5 h-5 text-bronze
```

#### Pattern 4: Color-Themed Stats
Used in: Eco-friendly stat cards (each card has its own color)
```
Container: w-16 h-16 rounded-full bg-{color}-100 mx-auto
Icon:      w-8 h-8 text-{color}-600
```
Colors: emerald (recycling), blue (partners), bronze (tons diverted).

#### Pattern 5: Partner Icons on Gray
Used in: Eco partner grid (slate-100 background)
```
Container: w-12 h-12 rounded-full bg-white shadow-sm mx-auto
Icon:      w-6 h-6 text-bronze
```

### Icon Size Reference

| Container | Icon | Context |
|-----------|------|---------|
| `w-16 h-16` | `w-8 h-8` | Large stat/badge icons |
| `w-14 h-14` | `w-7 h-7` | Standard card icons |
| `w-12 h-12` | `w-6 h-6` | Compact cards, dark sections, partner icons |
| `w-10 h-10` | `w-5 h-5` | Small inline icons, photo tips |
| `w-8 h-8` | `w-4 h-4` | Tiny example cards |

### Complete Icon Inventory

| Section | Title | Lucide Component | Import |
|---------|-------|-----------------|--------|
| Why Choose Us | Respectful Service | `Crown` | `lucide-react` |
| Why Choose Us | Spotless Cleanup | `Sparkles` | `lucide-react` |
| Why Choose Us | Professional Team | `Users` | `lucide-react` |
| Why Choose Us | Trustworthy & Insured | `ShieldCheck` | `lucide-react` |
| Why Choose Us | On-Time, Every Time | `Clock` | `lucide-react` |
| Why Choose Us | Community First | `HeartHandshake` | `lucide-react` |
| Local Expertise | HOA Compliance | `Building2` | `lucide-react` |
| Local Expertise | Seasonal Service | `Snowflake` | `lucide-react` |
| Local Expertise | Growth & Moving | `TrendingUp` | `lucide-react` |
| Local Expertise | New Construction | `HardHat` | `lucide-react` |
| Service Categories | Residential | `Home` | `lucide-react` |
| Service Categories | Commercial | `Building` | `lucide-react` |
| Service Categories | Storage Unit | `Package` | `lucide-react` |
| Detailed Services | Furniture Removal | `Sofa` | `lucide-react` |
| Detailed Services | Appliance Haul-Away | `Plug` | `lucide-react` |
| Detailed Services | Construction Debris | `HardHat` | `lucide-react` |
| Detailed Services | Yard Waste | `TreePine` | `lucide-react` |
| Detailed Services | Estate Cleanouts | `Home` | `lucide-react` |
| Detailed Services | Hot Tubs & Spas | `Bath` | `lucide-react` |
| Detailed Services | Electronics | `Monitor` | `lucide-react` |
| Detailed Services | Retail Fixtures | `Store` | `lucide-react` |
| Detailed Services | Restaurant Equipment | `UtensilsCrossed` | `lucide-react` |
| Eco Stats | 80% Recycled | `Recycle` | `lucide-react` |
| Eco Stats | 12+ Partners | `Handshake` | `lucide-react` |
| Eco Stats | 500+ Tons Diverted | `TreePine` | `lucide-react` |
| Eco Partners | Habitat ReStore | `Store` | `lucide-react` |
| Eco Partners | Goodwill | `Shirt` | `lucide-react` |
| Eco Partners | TV Recycling | `Recycle` | `lucide-react` |
| Eco Partners | Ada County Landfill | `Factory` | `lucide-react` |
| Eco Partners | E-Waste Recyclers | `Smartphone` | `lucide-react` |
| Eco Partners | Furniture Banks | `Armchair` | `lucide-react` |
| Eco Partners | Local Charities | `Gift` | `lucide-react` |
| Eco Partners | Wood Recycling | `TreePine` | `lucide-react` |
| Photo Tips | Camera | `Camera` | `lucide-react` |
| Photo Tips | Full View | `Sofa` | `lucide-react` |
| Photo Tips | With Context | `Ruler` | `lucide-react` |
| Photo Tips | Well Lit | `Lightbulb` | `lucide-react` |

### Inline SVG Icons (not from lucide-react)

These hand-coded SVGs are used for small functional UI elements:
- **Star** (5-point) — Social proof badge, testimonial ratings. Color: `text-bronze` / `text-bronze-light`
- **Checkmark circle** — Hero trust indicator (Licensed & Insured). Color: `text-bronze`
- **Clock** — Hero trust indicator (Same-Day Available). Color: `text-bronze`
- **Globe** — Hero trust indicator (80% Recycled). Color: `text-bronze`
- **Map Pin** — Service area cards. Color: `text-bronze`

---

## Component Patterns

### Cards

**Standard Card (white on cream background):**
```
rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-md
hover:shadow-xl hover-bronze-border transition-smooth hover-lift group
```

**Dark Section Card (glass on charcoal):**
```
p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20
hover:bg-white/15 transition-all
```

**Photo Card (image + content):**
```
bg-white rounded-2xl shadow-lg hover:shadow-xl transition-smooth overflow-hidden
```
With overlaid icon badge: `absolute top-6 left-6 w-16 h-16 rounded-full bg-bronze shadow-lg z-10`

**Service Area Card:**
```
p-6 rounded-xl bg-white border-2 border-slate-200
hover:border-bronze transition-all hover:shadow-md hover-lift
```

**Testimonial Card:**
```
bg-white rounded-2xl p-8 shadow-md border border-slate-200
hover-lift transition-smooth hover:shadow-xl
```

### Buttons

**Primary CTA (bronze):**
```
rounded-lg bg-bronze px-10 py-4 text-lg font-semibold text-white shadow-lg
hover:bg-bronze/90 hover:shadow-xl hover:scale-105 transition-all
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze
```

**Secondary CTA (outlined on dark):**
```
rounded-lg border-2 border-cream px-10 py-4 text-lg font-semibold text-cream
hover:bg-cream hover:text-charcoal transition-all
```

**Inverted CTA (white on bronze bg):**
```
rounded-lg bg-white px-10 py-4 text-lg font-semibold text-charcoal shadow-lg
hover:bg-cream transition-all hover:scale-105
```

### Section Backgrounds

**Light (default):**
- Inherits `bg-cream` from page body
- Content: `max-w-7xl` centered, `mt-32` spacing between sections

**Dark (charcoal gradient):**
```
rounded-3xl bg-gradient-to-br from-charcoal via-slate-800 to-charcoal
p-12 lg:p-16 shadow-2xl
```

**Highlighted (cream gradient):**
```
rounded-3xl bg-gradient-to-br from-cream-dark to-white
border-2 border-bronze/20 p-12 lg:p-16
```

**CTA (solid bronze):**
```
rounded-3xl bg-bronze p-12 lg:p-16 shadow-2xl text-center
```

**Footer:**
```
border-t border-slate-300 bg-gradient-to-br from-charcoal via-slate-800 to-charcoal
```

### Hover Effects (Custom CSS)

**hover-lift:**
```css
transform: translateY(-4px);
box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
```

**hover-bronze-border:**
```css
border-color: var(--brand-bronze);
transform: translateY(-2px);
```

**transition-smooth:**
```css
transition: all 0.3s ease-in-out;
```

---

## Page Structure

### Landing Page (`/`)

| # | Section | Background | Key Elements |
|---|---------|-----------|-------------|
| 1 | Header | Absolute overlay | Logo (light variant) |
| 2 | Hero | Full-width image, 70% black overlay | Badge, H1, CTAs, trust indicators |
| 3 | Why Professional Service Matters | Cream (default) | 6-card grid with icon circles + hover |
| 4 | Treasure Valley Locals | Dark charcoal gradient | 4-card grid, bronze icon circles |
| 5 | What We Remove | Cream (default) | 3 photo cards + 9-item detailed grid |
| 6 | Transparent Pricing | Cream-dark gradient, bronze border | 4 steps + volume guide table |
| 7 | Eco-Friendly by Design | Cream (default) | 3 themed stat cards + 8 partner icons |
| 8 | Service Areas | Cream (default) | 8 city cards with map pins |
| 9 | Testimonials | Cream (default) | 3 review cards with star ratings |
| 10 | CTA | Solid bronze | Final conversion push |
| 11 | Footer | Dark charcoal gradient | Logo (dark), links, copyright |

### Quote Flow (`/quote`)

6-step wizard with progress bar:
1. **Property Type** — 6 options (Residential, Commercial, Storage, Construction, Estate, Yard)
2. **Junk Type** — 12 multi-select options (Furniture, Appliances, Mattresses, etc.)
3. **Location** — City dropdown (8 cities), ZIP code, difficult access checkbox
4. **Date** — ASAP or specific date, with radio buttons
5. **Photos** — Cloudinary upload widget, drag & drop, pro tips section
6. **Contact** — Name, phone, email, notes
7. **Result** — AI-generated estimate with confidence score, volume breakdown, next steps

### Privacy Policy (`/privacy`)
Standard 12-section legal page with contact info box.

---

## SEO Metadata

| Field | Value |
|-------|-------|
| **Title** | Junkyard Gentlemen \| Premium Junk Removal in Boise & Treasure Valley |
| **Description** | Professional, white-glove junk removal service in Boise and Treasure Valley. Stress-free, respectful service with eco-friendly disposal. Free instant quotes. Same-day service available. Licensed & insured. |
| **Keywords** | junk removal Boise, Treasure Valley hauling, Meridian junk removal, Eagle furniture removal, eco-friendly disposal Idaho, estate cleanout Boise, construction debris removal, professional junk hauling, white-glove service |
| **OG Title** | Junkyard Gentlemen \| Professional Junk Removal Boise |
| **OG Description** | Professional, stress-free junk removal with white-glove service throughout the Treasure Valley. Eco-friendly, respectful, and reliable. |
| **OG Type** | website |
| **OG Locale** | en_US |
| **Twitter Card** | summary |

---

## Content Strategy

### Key Statistics

| Statistic | Value | Usage |
|-----------|-------|-------|
| Cleanouts completed | 500+ | Social proof badge (hero) |
| Diversion rate | 80% | Eco section, trust indicators |
| Local partners | 12+ | Eco section |
| Tons diverted | 500+ | Eco section |
| Price per cubic yard | $46 | Pricing section |
| Cities served | 8 | Service areas section |

### Service Areas (8 Cities)

| City | Specialty Notes |
|------|----------------|
| Boise | North End, Bench, Downtown, Foothills — same-day |
| Meridian | Linder, Eagle Rd corridor — HOA-compliant |
| Eagle | Gated communities, luxury estate cleanouts |
| Nampa | New construction debris specialists |
| Caldwell | Commercial, residential, agricultural properties |
| Kuna | Rural access, large property/acreage |
| Star | Star & Middleton, barn/outbuilding cleanouts |
| Garden City | Industrial/commercial, quick turnaround |

### Conversion Points
1. **"Get Free Instant Quote"** — Primary CTA in hero and final CTA section (links to `/quote`)
2. **"Call (844) 543-JUNK"** — Secondary CTA, tel link
3. **Trust indicators** — Licensed & Insured, Same-Day Available, 80% Recycled (hero section)
4. **Social proof badge** — "500+ Treasure Valley Cleanouts Completed" (above hero H1)
5. **Transparent pricing section** — Reduces friction by showing exactly how pricing works
6. **Testimonials** — 3 real reviews from Eagle, Meridian, and Boise customers

---

## File Structure

```
app/
  globals.css              — Theme variables, custom utilities, dark mode
  layout.tsx               — Root layout, Google Fonts (Inter + Lexend), metadata, GA
  page.tsx                 — Landing page (hero, 9 sections, footer, data arrays)
  sitemap.ts               — SEO sitemap generator
  favicon.ico
  privacy/page.tsx         — Privacy policy
  quote/page.tsx           — Multi-step quote wizard
  api/
    estimate/route.ts      — AI photo analysis endpoint (Anthropic Claude)
    save-lead/route.ts     — CRM webhook endpoint (Go High Level via Zapier)
components/
  Logo.tsx                 — Brand logo component (light/dark variants, 3 sizes)
  quote/
    PropertyTypeStep.tsx   — Step 1: property type selection
    JunkTypeStep.tsx       — Step 2: junk type multi-select
    LocationStep.tsx       — Step 3: city, ZIP, access
    DateStep.tsx           — Step 4: ASAP or scheduled
    PhotoUploadStep.tsx    — Step 5: Cloudinary photo upload + tips
    ContactStep.tsx        — Step 6: name, phone, email
    ReviewStep.tsx         — Review step (exists but not in current flow)
    EstimateResult.tsx     — AI estimate results display
    LoadingAnimation.tsx   — Animated truck loading screen
public/
  junkyard-gentlemen-logo.svg  — Primary logo (large, detailed)
  logo-light.svg               — Light variant (for dark backgrounds)
  logo-dark.svg                — Dark variant (for light backgrounds)
  images/home/home-hero.jpg     — Hero section background
  residential-cleanout.jpg     — Service category photo
  commercial-office.jpg        — Service category photo
  storage-unit.jpg             — Service category photo
```

---

## Technical Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.0.10 | App Router, SSR/SSG framework |
| React | 19.2.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 (PostCSS) | Utility-first styling |
| lucide-react | latest | SVG icon library |
| react-hook-form | 7.x | Form state management |
| zod | 4.x | Schema validation |
| Cloudinary | Upload widget | Image upload & CDN |
| browser-image-compression | latest | Client-side image compression |
| Anthropic Claude API | — | AI-powered junk photo analysis |
| Google Tag Manager | AW-17709955283 | Analytics & conversion tracking |
| Vercel | — | Hosting & deployment |

---

## Logo

### Variants
- **Primary:** `junkyard-gentlemen-logo.svg` — Full detailed logo (642KB)
- **Light:** `logo-light.svg` — For dark backgrounds (footer, dark sections)
- **Dark:** `logo-dark.svg` — For light backgrounds

### Component: `components/Logo.tsx`
- Props: `variant` ("light" | "dark"), `size` ("sm" | "md" | "lg"), `href` (optional link)
- Sizes: sm=120x40, md=180x60, lg=240x80
- Hover: `opacity-80` transition

### Usage
- Header: `<Logo variant="light" size="md" href="/" />` (over dark hero image)
- Footer: `<Logo variant="dark" size="md" href="/" />` (on dark gradient)
