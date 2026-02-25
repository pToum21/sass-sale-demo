# Vantage — Operations Intelligence Platform

A fully responsive SaaS marketing site and product dashboard built with Next.js 16, TypeScript, and Tailwind CSS. Demonstrates modern front-end architecture, scroll-driven animations, interactive data visualizations, and production-grade UI patterns.

**Live demo:** [vantage-demo.vercel.app](https://vantage-demo.vercel.app)  
**Built by:** [Peyton Touma](https://github.com/peytontouma)

---

## What's in the project

### Marketing site (`/`)
- Hero section with an inline product mockup and GSAP scroll-linked animations
- Logo strip, features grid, and interactive product showcase with 3D perspective screenshots
- Animated statistics counter, pricing table with billing toggle, and masonry testimonials grid
- CTA banner and footer with full responsive behavior down to mobile

### Dashboard (`/dashboard`)
- KPI cards with sparklines, revenue area chart, and segment radial chart (Recharts)
- Top accounts table and activity feed
- Collapsible sidebar navigation with a mobile slide-out drawer (Framer Motion)
- Skeleton loader on first mount, then fade-in transition to live content

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS |
| Animations | GSAP (ScrollTrigger) + Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |
| Font | Geist (next/font) |
| Deployment | Vercel |

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Marketing homepage
│   ├── layout.tsx            # Root layout + SEO metadata
│   ├── template.tsx          # Framer Motion page transitions
│   ├── not-found.tsx         # Custom 404
│   └── dashboard/
│       ├── layout.tsx        # Dashboard shell
│       └── page.tsx          # Dashboard overview
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ProductShowcase.tsx
│   ├── Stats.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   ├── Footer.tsx
│   ├── ScrollReveal.tsx      # GSAP scrub wrapper
│   ├── VantageLogo.tsx       # SVG brand mark
│   └── dashboard/
│       ├── Sidebar.tsx
│       ├── DashboardHeader.tsx
│       ├── DashboardContent.tsx
│       ├── DashboardSkeleton.tsx
│       ├── MobileNavDrawer.tsx
│       ├── KPICards.tsx
│       ├── RevenueChart.tsx
│       ├── SegmentChart.tsx
│       ├── TopAccounts.tsx
│       └── ActivityFeed.tsx
└── app/globals.css           # CSS variables, layout helpers, interactions
```

---

## Deployment

Deploys to Vercel with zero configuration. Connect the repo and push to `main`.
