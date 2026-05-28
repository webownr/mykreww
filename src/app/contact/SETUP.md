# Kreww Marketing Pages — Setup Guide

Copy each file to the path shown. Every page is a complete copy-paste.

---

## STEP 1 — Shared components (do this first)

```
src/components/_shared.tsx  ←  _shared.tsx
```

This is the single source of truth for: design tokens, global CSS,
responsive grid classes, Nav, Footer, PageHero, Section, Eyebrow,
and shared button styles. Every other page imports from here.

---

## STEP 2 — Feature pages (Tools nav dropdown)

| File to copy | Destination |
|---|---|
| `features-the-office.tsx` | `src/app/features/the-office/page.tsx` |
| `features-tasks.tsx` | `src/app/features/tasks/page.tsx` |
| `features-chat.tsx` (ChatPage export) | `src/app/features/chat/page.tsx` |
| `features-docs-notes-browser.tsx` (DocumentsPage) | `src/app/features/documents/page.tsx` |
| `features-docs-notes-browser.tsx` (NotesPage) | `src/app/features/notes/page.tsx` |
| `features-docs-notes-browser.tsx` (BrowserPage) | `src/app/features/browser/page.tsx` |
| `features-notice-board.tsx` | `src/app/features/notice-board/page.tsx` |

For `features-docs-notes-browser.tsx`, each file needs its own `page.tsx`.
Copy the file and change `export default` to each named export:

```tsx
// src/app/features/documents/page.tsx
export { DocumentsPage as default } from "@/components/features-docs-notes-browser";

// src/app/features/notes/page.tsx
export { NotesPage as default } from "@/components/features-docs-notes-browser";

// src/app/features/browser/page.tsx
export { BrowserPage as default } from "@/components/features-docs-notes-browser";
```

---

## STEP 3 — Company pages (Our Company dropdown + footer)

| Export from `company-pages.tsx` | Destination |
|---|---|
| `AboutPage` (default) | `src/app/about/page.tsx` |
| `TeamPage` | `src/app/team/page.tsx` |
| `InvestorsPage` | `src/app/investors/page.tsx` |
| `CareersPage` | `src/app/careers/page.tsx` |

Same pattern — create a `page.tsx` per route and re-export:
```tsx
// src/app/team/page.tsx
export { TeamPage as default } from "@/components/company-pages";
```

Or just paste each named function into its own file as `export default function`.

---

## STEP 4 — Blog

| Export from `blog-pages.tsx` | Destination |
|---|---|
| `BlogIndexPage` (default) | `src/app/blog/page.tsx` |
| `BlogPostPage` | `src/app/blog/[slug]/page.tsx` |

The `[slug]` page is dynamic. In Next.js App Router you also need:

```tsx
// src/app/blog/[slug]/page.tsx
import { POSTS, BlogPostPage } from "@/components/blog-pages";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export default BlogPostPage;
```

---

## STEP 5 — Resource & legal pages

| Export from `resource-legal-pages.tsx` | Destination |
|---|---|
| `HelpPage` (default) | `src/app/help/page.tsx` |
| `ChangelogPage` | `src/app/changelog/page.tsx` |
| `SupportPage` | `src/app/support/page.tsx` |
| `TermsPage` | `src/app/terms/page.tsx` |
| `PrivacyPage` | `src/app/privacy/page.tsx` |

---

## STEP 6 — Auth pages

| Export from `auth-pages.tsx` | Destination |
|---|---|
| `LoginPage` (default) | `src/app/login/page.tsx` |
| `SignupPage` | `src/app/signup/page.tsx` |
| `ForgotPasswordPage` | `src/app/forgot-password/page.tsx` |

---

## All pages at a glance

```
src/app/
├── page.tsx                          ← Landing (already built)
├── pricing/page.tsx                  ← Pricing (already built)
├── login/page.tsx                    ← Auth
├── signup/page.tsx                   ← Auth
├── forgot-password/page.tsx          ← Auth
├── about/page.tsx                    ← Company
├── team/page.tsx                     ← Company
├── investors/page.tsx                ← Company
├── careers/page.tsx                  ← Company
├── blog/
│   ├── page.tsx                      ← Blog index
│   └── [slug]/page.tsx               ← Blog post
├── help/page.tsx                     ← Resources
├── changelog/page.tsx                ← Resources
├── support/page.tsx                  ← Resources
├── terms/page.tsx                    ← Legal
├── privacy/page.tsx                  ← Legal
└── features/
    ├── the-office/page.tsx
    ├── tasks/page.tsx
    ├── chat/page.tsx
    ├── notice-board/page.tsx
    ├── documents/page.tsx
    ├── notes/page.tsx
    └── browser/page.tsx

src/components/
└── _shared.tsx                       ← Nav, Footer, tokens, CSS
```

---

## Responsive breakpoints

All responsive logic lives in the `GLOBAL_CSS` string in `_shared.tsx`:

| Class | Desktop | Tablet ≤900px | Mobile ≤640px |
|---|---|---|---|
| `.kw-2col` | 2 columns | 1 column | 1 column |
| `.kw-3col` | 3 columns | 2 columns | 1 column |
| `.kw-4col` | 4 columns | 2 columns | 2 columns |
| `.kw-blog-grid` | 3 columns | 2 columns | 1 column |
| `.kw-team-grid` | 4 columns | 2 columns | 2 columns |
| `.kw-footer-grid` | 4 columns | 2 columns | 1 column |
| Nav | Full links | Full links | Hamburger |

---

*Kreww · mykreww.com · Built in Lagos*
