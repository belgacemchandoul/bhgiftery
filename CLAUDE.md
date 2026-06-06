# BH Giftery — Project Brief for Claude Code

## Project Overview

BH Giftery is a Tunisian decoration and events business based in Sfax. They provide decoration equipment and full setup for special celebrations: weddings, engagements, birthdays, openings, ceremonies, honors, and Mother's Day events. This is a marketing/showcase website built for a friend.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (via @tailwindcss/vite plugin, NO config file, just `@import "tailwindcss"` in index.css)
- React Router v6 (client-side routing)
- Framer Motion (animations — slow, graceful, elegant)
- Leaflet + React Leaflet (map on about page)
- Embla Carousel (hero carousel and gallery carousel)
- react-masonry-css (gallery grid)
- Lucide React (icons)

## Design System

### Personality

Luxury, warm, romantic, elegant. Think Vogue meets high-end wedding planner. Everything should feel like it glides — no fast or bouncy animations.

### Colors

```css
--cream: #faf7f2 /* main background */ --charcoal: #1a1714
  /* dark sections: stats, CTA, footer */ --gold: #c9a84c /* primary accent */
  --gold-light: #e8c97a /* hover states */ --text-dark: #2c2420
  /* body text on cream */ --text-muted: #8c7b6b /* secondary text */;
```

### Typography

- Display/headings: Cormorant Garamond (Google Fonts) — dramatic, romantic
- Body: DM Sans (Google Fonts) — clean, readable
- Heading sizes: h1 64px, h2 42px, h3 28px
- Letter spacing on headings: 0.05em to 0.1em
- Never use Arial, Inter, Roboto, or system fonts

### Animations (Framer Motion)

- All scroll reveals: fade up, duration 0.8s, ease "easeOut"
- Stagger children: 0.15s delay between items
- Page transitions: fade, duration 0.5s
- Hover on cards: slight scale 1.02, duration 0.3s
- Nothing fast, nothing bouncy — always slow and graceful

### Layout

- Max content width: 1280px, centered
- Generous padding: px-6 md:px-12 lg:px-20
- Lots of breathing room between sections: py-20 to py-32
- Asymmetric layouts where possible
- Full-bleed dark sections for contrast

## File Structure

src/
assets/
logo.png # BH Giftery logo (gold on transparent)
components/
Navbar.tsx
Footer.tsx
pages/
Home.tsx
Services.tsx
Gallery.tsx
About.tsx
Contact.tsx
data/
events.ts # placeholder gallery data with event types
App.tsx
main.tsx
index.css

## Routes

- / → Home
- /services → Services
- /galerie → Gallery
- /a-propos → About
- /contact → Contact

## Pages

### Home (/)

Sections in order:

1. Navbar
2. Hero — full screen, logo centered, tagline, CTA button "Voir nos réalisations"
3. Carousel — "Nos plus beaux moments", 4 placeholder images, Embla Carousel
4. Stats — dark charcoal bg, 3 numbers: 150+ événements, 5 ans d'expérience, 100% satisfaction
5. Services preview — 4 service cards only (Mariages, Fiançailles, Anniversaires, Inaugurations) + "Voir tous nos services →" button linking to /services
6. How it works — 3 steps: Contactez-nous → On planifie ensemble → Votre événement prend vie
7. Featured event — big highlight card, placeholder image, event type tag, title, description
8. Testimonials — 3 cards, star rating, quote, avatar initials, event type
9. CTA Banner — dark charcoal bg, gold text, WhatsApp button
10. Footer

### Services (/services)

- Page hero: title "Nos Services", short subtitle
- Full grid of all 8 service cards: Mariages, Fiançailles, Anniversaires, Inaugurations, Fête des mères, Cérémonies, Remises de diplômes, Décoration sur mesure
- Each card: Lucide icon, service name, short description (2-3 lines), "Sur devis" badge
- CTA banner at bottom linking to /contact

### Gallery (/galerie)

- Page hero: title "Nos Réalisations", short subtitle
- Filter bar: Tous · Mariages · Fiançailles · Anniversaires · Inaugurations · Fête des mères · Cérémonies · Remises
- Masonry grid (react-masonry-css), 3 columns desktop, 2 tablet, 1 mobile
- Each card: placeholder image, event type tag overlay, hover reveal with event name
- Filter animates with Framer Motion layout animation

### About (/a-propos)

- Brand story section
- Stats row (same as home)
- Leaflet map centered on Sfax, Tunisia (lat: 34.7406, lng: 10.7603)
- Contact info: phone, email, address
- WhatsApp CTA button

### Contact (/contact)

- Page hero: title "Contactez-nous", short subtitle
- Single big WhatsApp CTA card centered on the page:
  - Phone number: +216 XX XXX XXX
  - Short message: "Discutons de votre projet sur WhatsApp"
  - Large WhatsApp button linking to https://wa.me/216XXXXXXXXX
- Business hours (placeholder): Lun–Sam, 9h–19h
- Same CTA banner as other pages

## Images

All images are placeholders for now. Use a consistent placeholder approach:

```tsx
<div className="w-full h-full bg-[#E8DDD0] flex items-center justify-center">
  <span className="text-[#8C7B6B] text-sm font-[DM_Sans]">Photo à venir</span>
</div>
```

## Logo

- File: `src/assets/logo.png`
- Use in Navbar (small, left-aligned) and Hero (large, centered)
- Always on transparent background
- Never add a background box around it

## Responsive Breakpoints

- Mobile: default (single column)
- Tablet: md (768px) — 2 columns
- Desktop: lg (1024px) — full layout
- Wide: xl (1280px) — max width capped

## Important Notes

- All text content is in French
- No backend, no CMS — all data is hardcoded in src/data/events.ts
- Social links in footer: Instagram, Facebook, TikTok (# placeholders for now)
- WhatsApp number placeholder: +216 XX XXX XXX
- Map location: Sfax, Tunisia (34.7406, 10.7603)
- Keep components clean and modular — one responsibility per component
- Use Framer Motion's `useInView` for scroll-triggered animations
- For social media icons in Footer, do NOT use lucide-react social icons — they don't exist in this version. Use plain styled anchor tags with text or inline SVG instead.

## Mobile Priority

- The majority of users will be on mobile phones — mobile experience is the top priority
- Every page must be tested and perfect on 375px (iPhone SE) and 390px (iPhone 14) widths
- Touch-friendly tap targets: minimum 44x44px for all buttons and links
- Carousel must support touch swipe gestures (Embla handles this natively)
- No horizontal scroll on any page
- Font sizes must be readable on mobile: minimum 16px body, h1 scales down gracefully
- Masonry gallery: 1 column on mobile, 2 on tablet
- Navbar mobile drawer must be smooth and usable
- Map on About page must be touch-friendly (pinch zoom)
- WhatsApp button must be large and easy to tap on mobile
- Animations must be lighter on mobile — respect prefers-reduced-motion
- Images must be lazy loaded for performance
- No heavy effects on mobile (disable cursor sparkle, reduce card tilt)
