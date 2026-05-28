"use client";
// ─────────────────────────────────────────────────────────────────────────────
// _shared.tsx  ·  Paste into  src/components/_shared.tsx
// Contains: design tokens, global CSS, Nav, Footer — imported by every page
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import Link from "next/link";

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────
export const C = {
  bg:      "#050D1A",
  card:    "#0F1C2E",
  card2:   "#0A1628",
  sidebar: "#080F1A",
  border:  "#1A2D45",
  accent:  "#00D4FF",
  dim:     "#0099BB",
  text:    "#F0F4F8",
  sec:     "#8BA0B8",
  muted:   "#4A6080",
  green:   "#00E676",
  amber:   "#FFB300",
  red:     "#FF5252",
};

// ── GLOBAL CSS ───────────────────────────────────────────────────────────────
export const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background-color: #050D1A;
    color: #F0F4F8;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  a { text-decoration: none; color: inherit; }
  button { font-family: inherit; }

  /* NAV */
  .kw-desktop-nav { display: flex; }
  .kw-mobile-btn  { display: none; }

  /* FOOTER */
  .kw-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; }

  /* GENERIC PAGE GRIDS */
  .kw-2col  { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .kw-3col  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .kw-4col  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .kw-2col-faq { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .kw-blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .kw-team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .kw-feat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  /* HOVER */
  .kw-card-hover { transition: transform 200ms ease, box-shadow 200ms ease; cursor: default; }
  .kw-card-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 44px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.07) !important;
  }
  .kw-nav-link:hover  { color: #F0F4F8 !important; background: rgba(255,255,255,0.05) !important; }
  .kw-drop-item:hover { background-color: rgba(255,255,255,0.05) !important; }
  .kw-foot-link:hover { color: #F0F4F8 !important; }
  .kw-btn-primary:hover  { filter: brightness(1.1); }
  .kw-btn-outline:hover  { border-color: #8BA0B8 !important; }

  /* TABLET ≤900px */
  @media (max-width: 900px) {
    .kw-2col       { grid-template-columns: 1fr !important; gap: 36px !important; }
    .kw-3col       { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-4col       { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-blog-grid  { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-team-grid  { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
  }

  /* MOBILE ≤640px */
  @media (max-width: 640px) {
    .kw-desktop-nav { display: none !important; }
    .kw-mobile-btn  { display: flex !important; }
    .kw-3col        { grid-template-columns: 1fr !important; }
    .kw-4col        { grid-template-columns: 1fr 1fr !important; }
    .kw-2col-faq    { grid-template-columns: 1fr !important; }
    .kw-blog-grid   { grid-template-columns: 1fr !important; }
    .kw-team-grid   { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-feat-cards  { grid-template-columns: 1fr !important; }
    .kw-footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
    .kw-section     { padding-left: 20px !important; padding-right: 20px !important; }
  }
`;

// ── SVG ICONS ────────────────────────────────────────────────────────────────
export const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
    <path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M2 6.5l3 3L11 3" stroke="#00D4FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// ── SHARED BUTTON STYLES ─────────────────────────────────────────────────────
export const btnPrimary = (extra?: React.CSSProperties): React.CSSProperties => ({
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  height: 46, padding: "0 28px", borderRadius: 10,
  backgroundColor: C.accent, color: C.bg, fontSize: 15, fontWeight: 700,
  border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(0,212,255,0.28)",
  ...extra,
});
export const btnOutline = (extra?: React.CSSProperties): React.CSSProperties => ({
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  height: 46, padding: "0 28px", borderRadius: 10,
  backgroundColor: "transparent", color: C.text, fontSize: 15, fontWeight: 700,
  border: `1.5px solid ${C.border}`, cursor: "pointer",
  ...extra,
});

// ── EYEBROW LABEL ────────────────────────────────────────────────────────────
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      border: "1px solid rgba(0,212,255,0.22)", backgroundColor: "rgba(0,212,255,0.07)",
      borderRadius: 100, padding: "5px 13px", marginBottom: 20,
      color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase",
    }}>{children}</div>
  );
}

// ── SECTION WRAPPER ──────────────────────────────────────────────────────────
export function Section({ children, bg, style }: { children: React.ReactNode; bg?: string; style?: React.CSSProperties }) {
  return (
    <section className="kw-section" style={{ padding: "96px 24px", backgroundColor: bg ?? C.bg, ...style }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

// ── PAGE HERO ────────────────────────────────────────────────────────────────
export function PageHero({
  eyebrow, title, subtitle, cta, ctaHref = "/signup",
}: {
  eyebrow: string; title: React.ReactNode; subtitle: string;
  cta?: string; ctaHref?: string;
}) {
  return (
    <section style={{
      padding: "88px 24px 80px", textAlign: "center",
      background: `radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,212,255,0.10) 0%, transparent 70%), ${C.bg}`,
    }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{
          fontSize: "clamp(30px, 5vw, 54px)", fontWeight: 800,
          lineHeight: 1.05, letterSpacing: "-0.03em", color: C.text,
          marginBottom: 20,
        }}>{title}</h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: C.sec, lineHeight: 1.65, maxWidth: 560, margin: "0 auto", marginBottom: cta ? 36 : 0 }}>
          {subtitle}
        </p>
        {cta && (
          <Link href={ctaHref} className="kw-btn-primary" style={btnPrimary({ marginTop: 8 })}>
            {cta} <ArrowRight />
          </Link>
        )}
      </div>
    </section>
  );
}

// ── NAV ──────────────────────────────────────────────────────────────────────
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);

  const menus: Record<string, { label: string; href: string }[]> = {
    Tools: [
      { label: "The Office",     href: "/features/the-office" },
      { label: "Tasks",          href: "/features/tasks" },
      { label: "Chat",           href: "/features/chat" },
      { label: "Notice Board",   href: "/features/notice-board" },
      { label: "Documents",      href: "/features/documents" },
      { label: "Notes",          href: "/features/notes" },
      { label: "In-App Browser", href: "/features/browser" },
    ],
    Resource: [
      { label: "Blog",        href: "/blog" },
      { label: "Help Centre", href: "/help" },
      { label: "Changelog",   href: "/changelog" },
    ],
    "Our Company": [
      { label: "About",     href: "/about" },
      { label: "Our Team",  href: "/team" },
      { label: "Investors", href: "/investors" },
      { label: "Careers",   href: "/careers" },
    ],
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      backgroundColor: "rgba(5,13,26,0.92)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, flexShrink: 0,
            backgroundColor: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: C.accent, fontWeight: 800, fontSize: 13,
          }}>K</div>
          <span style={{ color: C.text, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>KREWW</span>
        </Link>

        <nav className="kw-desktop-nav" style={{ alignItems: "center", gap: 2 }}>
          {Object.entries(menus).map(([label, items]) => (
            <div key={label} style={{ position: "relative" }}
              onMouseEnter={() => setDrop(label)}
              onMouseLeave={() => setDrop(null)}>
              <button className="kw-nav-link" style={{
                display: "flex", alignItems: "center", gap: 5,
                color: C.sec, fontSize: 14, fontWeight: 500,
                background: "none", border: "none", cursor: "pointer",
                padding: "6px 10px", borderRadius: 8, transition: "all 120ms",
              }}>
                {label} <ChevronDown />
              </button>
              {drop === label && (
                <div style={{
                  position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 200,
                  backgroundColor: C.card, border: `1px solid ${C.border}`,
                  borderRadius: 14, padding: 6, minWidth: 200,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                }}>
                  {items.map(item => (
                    <Link key={item.label} href={item.href} className="kw-drop-item" style={{
                      display: "block", padding: "9px 12px", borderRadius: 8,
                      color: C.sec, fontSize: 13, fontWeight: 500,
                    }}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" className="kw-nav-link" style={{
            color: C.sec, fontSize: 14, fontWeight: 500,
            padding: "6px 10px", borderRadius: 8, transition: "all 120ms",
          }}>Pricing</Link>
        </nav>

        <div className="kw-desktop-nav" style={{ alignItems: "center", gap: 8 }}>
          <Link href="/login" style={{ color: C.text, fontSize: 14, fontWeight: 600, padding: "6px 14px" }}>Log in</Link>
          <Link href="/signup" className="kw-btn-primary" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            height: 36, padding: "0 18px", borderRadius: 9,
            backgroundColor: C.accent, color: C.bg, fontSize: 13, fontWeight: 700,
            border: "none", cursor: "pointer", boxShadow: "0 2px 14px rgba(0,212,255,0.28)",
          }}>Book Demo</Link>
        </div>

        <button className="kw-mobile-btn" onClick={() => setMobileOpen(v => !v)} style={{
          background: "none", border: "none", cursor: "pointer",
          color: C.text, padding: 4, alignItems: "center",
        }}>
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}`, padding: "16px 24px 28px" }}>
          {Object.entries(menus).flatMap(([, items]) => items).map(item => (
            <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{
              display: "block", color: C.sec, fontSize: 15, fontWeight: 500,
              padding: "11px 0", borderBottom: `1px solid ${C.border}`,
            }}>{item.label}</Link>
          ))}
          <Link href="/pricing" onClick={() => setMobileOpen(false)} style={{
            display: "block", color: C.sec, fontSize: 15, fontWeight: 500,
            padding: "11px 0", borderBottom: `1px solid ${C.border}`,
          }}>Pricing</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            <Link href="/login" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              height: 44, borderRadius: 10, border: `1.5px solid ${C.border}`,
              color: C.text, fontSize: 14, fontWeight: 700,
            }}>Log in</Link>
            <Link href="/signup" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              height: 44, borderRadius: 10, backgroundColor: C.accent,
              color: C.bg, fontSize: 14, fontWeight: 700,
            }}>Book Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
export function Footer() {
  const cols: Record<string, { label: string; href: string }[]> = {
    Tools: [
      { label: "The Office",     href: "/features/the-office" },
      { label: "Virtual Office", href: "/features/the-office" },
      { label: "Chat",           href: "/features/chat" },
      { label: "Kanban",         href: "/features/tasks" },
      { label: "Online Meeting", href: "/features/chat" },
      { label: "Notice Board",   href: "/features/notice-board" },
      { label: "Team collaboration", href: "/features/the-office" },
    ],
    "Our Company": [
      { label: "Our Team",  href: "/team" },
      { label: "About",     href: "/about" },
      { label: "Blog",      href: "/blog" },
      { label: "Investor",  href: "/investors" },
      { label: "Careers",   href: "/careers" },
    ],
    Resources: [
      { label: "Support",       href: "/support" },
      { label: "Help Center",   href: "/help" },
      { label: "Changelog",     href: "/changelog" },
      { label: "Terms of Use",  href: "/terms" },
      { label: "Privacy Policy",href: "/privacy" },
    ],
  };

  return (
    <footer style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}`, padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-footer-grid" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                backgroundColor: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.accent, fontWeight: 800, fontSize: 12,
              }}>K</div>
              <span style={{ color: C.text, fontWeight: 800, fontSize: 14 }}>KREWW</span>
            </div>
            <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.7, marginBottom: 18, maxWidth: 210 }}>
              Your team, together. A real virtual office for remote teams — built in Africa, for the world.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { icon: "𝕏", href: "https://x.com/mykreww" },
                { icon: "in", href: "https://linkedin.com/company/mykreww" },
                { icon: "▣", href: "https://instagram.com/mykreww" },
              ].map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 30, height: 30, borderRadius: 7,
                  backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.muted, fontSize: 12, transition: "background 120ms",
                }}>{s.icon}</a>
              ))}
            </div>
          </div>

          {Object.entries(cols).map(([sec, links]) => (
            <div key={sec}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.09em", color: C.text, marginBottom: 16 }}>{sec}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="kw-foot-link" style={{ fontSize: 13, color: C.muted, transition: "color 120ms" }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: `1px solid ${C.border}`, paddingTop: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
        }}>
          <span style={{ fontSize: 12, color: C.muted }}>© {new Date().getFullYear()} KREWW. All rights reserved.</span>
          <a href="mailto:hello@mykreww.com" style={{ fontSize: 12, color: C.muted }}>hello@mykreww.com</a>
        </div>
      </div>
    </footer>
  );
}
