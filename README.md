# Kreww Marketing — Next.js

Marketing site for [mykreww.com](https://mykreww.com). Built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS variables |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts via next/font) |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, stats, features, tools, pricing, FAQ, CTA |
| `/pricing` | Full pricing page with plans, local prices, FAQ |
| `/about` | Founder story, mission, values |
| `/login` | Sign in page |
| `/signup` | Trial signup page |
| `/contact` | Contact form |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── globals.css         # CSS variables, base styles
│   ├── page.tsx            # Landing page
│   ├── pricing/page.tsx    # Pricing page
│   ├── about/page.tsx      # About page
│   ├── login/page.tsx      # Login page
│   ├── signup/page.tsx     # Signup page
│   ├── contact/page.tsx    # Contact page
│   └── not-found.tsx       # 404 page
├── components/
│   ├── MarketingHeader.tsx # Sticky nav with dropdowns
│   ├── MarketingFooter.tsx # Footer with links
│   └── OfficeMockup.tsx    # CSS desk card grid (hero visual)
└── lib/
    └── utils.ts            # cn() classname utility
```

---

## Design Tokens

All colours come from CSS variables in `globals.css`:

```css
--bg-primary:     #050D1A   /* Page background */
--bg-card:        #0F1C2E   /* Cards, panels */
--bg-sidebar:     #080F1A   /* Sidebar, chrome */
--border:         #1A2D45   /* All borders */
--accent:         #00D4FF   /* Cyan — Kreww brand */
--accent-dim:     #0099BB   /* Darker cyan */
--text-primary:   #F0F4F8   /* Main text */
--text-secondary: #8BA0B8   /* Body copy */
--text-muted:     #4A6080   /* Labels, placeholders */
--success:        #00E676   /* Online status */
--warning:        #FFB300   /* Away status */
--danger:         #FF5252   /* DND status */
```

---

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo at vercel.com and it deploys automatically on every push.

---

## Adding the App (Supabase)

This repo is **marketing pages only**. The full Kreww app (The Office, Tasks, Chat, etc.) lives in a separate repo with the Supabase + Flutterwave integration.

When the app is ready, update the `/login` and `/signup` links to point to `app.mykreww.com` or whichever subdomain you use.

---

## Environment Variables

No env vars needed for the marketing site. When you add Supabase auth or Flutterwave webhooks, add:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=
```

---

*Kreww · mykreww.com · Built in Lagos, Nigeria.*
