"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── ICONS ────────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
    <path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M2 6.5l3 3L11 3" stroke="#00D4FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <path d="M5 3.5l10 5.5-10 5.5V3.5z" fill="currentColor"/>
  </svg>
);

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
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

// ─── HIGH-QUALITY UNSPLASH IMAGES ─────────────────────────────────────────────
// All 4K-quality, relevant, free to use
const IMGS = {
  // Hero background — dark modern open-plan office at night, screens glowing
  heroBg:      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90&auto=format&fit=crop",
  // One Workspace section — team collaborating around screens
  teamCollab:  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=90&auto=format&fit=crop",
  // Complete visibility — focused developer with dual monitors
  devFocus:    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=90&auto=format&fit=crop",
  // CTA background — wide aerial of Lagos/city at dusk, vibrant
  ctaBg:       "https://images.unsplash.com/photo-1614586723088-1fbe3f4e3c4a?w=2400&q=90&auto=format&fit=crop",
  // Social proof avatar photos
  avatar1:     "https://images.unsplash.com/photo-1531590878845-12627191e687?w=120&q=80&auto=format&fit=crop&crop=face",
  avatar2:     "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=120&q=80&auto=format&fit=crop&crop=face",
  avatar3:     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
  avatar4:     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face",
  // Tools section background texture
  gridTexture: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&q=80&auto=format&fit=crop",
};

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

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

  /* GRIDS */
  .kw-stats      { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
  .kw-onewrk     { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .kw-feat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .kw-vis        { display: grid; grid-template-columns: 1fr 1.15fr; gap: 72px; align-items: center; }
  .kw-tools      { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .kw-plans      { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; }
  .kw-faq        { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .kw-footer-grid{ display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; }
  .kw-logos      { display: flex; align-items: center; gap: 40px; flex-wrap: wrap; justify-content: center; }
  .kw-testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

  /* HERO VIDEO */
  .kw-hero-video {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    opacity: 0.18;
    pointer-events: none;
  }
  .kw-hero-img-fallback {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: center 30%;
    opacity: 0.2;
    pointer-events: none;
  }

  /* HOVER */
  .kw-card-hover { transition: transform 200ms ease, box-shadow 200ms ease; }
  .kw-card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,212,255,0.1) !important;
  }
  .kw-nav-link:hover  { color: #F0F4F8 !important; background: rgba(255,255,255,0.05) !important; }
  .kw-drop-item:hover { background-color: rgba(255,255,255,0.05) !important; }
  .kw-foot-link:hover { color: #F0F4F8 !important; }
  .kw-btn-primary:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  .kw-btn-outline:hover  { border-color: rgba(240,244,248,0.5) !important; }
  .kw-plan-cta-solid:hover  { filter: brightness(1.08); }
  .kw-plan-cta-ghost:hover  { background-color: rgba(0,212,255,0.07) !important; }
  .kw-faq-item:hover { border-color: rgba(0,212,255,0.22) !important; }
  .kw-logo-item { opacity: 0.45; transition: opacity 200ms; filter: grayscale(1) brightness(2); }
  .kw-logo-item:hover { opacity: 0.7; }

  /* FADE-IN ON SCROLL */
  .kw-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .kw-fade.visible { opacity: 1; transform: translateY(0); }

  /* TABLET ≤900px */
  @media (max-width: 900px) {
    .kw-onewrk     { grid-template-columns: 1fr !important; gap: 48px !important; }
    .kw-vis        { grid-template-columns: 1fr !important; gap: 48px !important; }
    .kw-plans      { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
    .kw-footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
    .kw-tools      { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-testimonials { grid-template-columns: 1fr !important; max-width: 520px; margin: 0 auto; }
  }

  /* MOBILE ≤640px */
  @media (max-width: 640px) {
    .kw-desktop-nav  { display: none !important; }
    .kw-mobile-btn   { display: flex !important; }
    .kw-stats        { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-feat-cards   { grid-template-columns: 1fr !important; }
    .kw-tools        { grid-template-columns: 1fr !important; }
    .kw-faq          { grid-template-columns: 1fr !important; }
    .kw-footer-grid  { grid-template-columns: 1fr !important; gap: 28px !important; }
    .kw-logos        { gap: 24px !important; }
    .kw-section      { padding: 72px 20px !important; }
    .kw-hero         { padding: 0 !important; min-height: 100svh !important; }
    .kw-stats-wrap   { padding: 32px 20px !important; }
    .kw-cta          { padding: 80px 20px !important; }
  }
  @media (max-width: 400px) {
    .kw-plans { max-width: 100% !important; }
  }
`;

// ─── FADE-IN HOOK ─────────────────────────────────────────────────────────────
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".kw-fade");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
    Resource:     [{ label: "Blog", href: "/blog" }, { label: "Help Centre", href: "/help" }, { label: "Changelog", href: "/changelog" }],
    "Our Company":[{ label: "About", href: "/about" }, { label: "Our Team", href: "/team" }, { label: "Investors", href: "/investors" }],
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? "rgba(5,13,26,0.95)" : "rgba(5,13,26,0.4)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid rgba(255,255,255,0.04)",
      transition: "background 300ms, border-color 300ms",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9, flexShrink: 0,
            backgroundColor: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: C.accent, fontWeight: 900, fontSize: 14, letterSpacing: "-0.02em",
          }}>K</div>
          <span style={{ color: C.text, fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em" }}>KREWW</span>
        </Link>

        <nav className="kw-desktop-nav" style={{ alignItems: "center", gap: 2 }}>
          {Object.entries(menus).map(([label, items]) => (
            <div key={label} style={{ position: "relative" }}
              onMouseEnter={() => setDrop(label)} onMouseLeave={() => setDrop(null)}>
              <button className="kw-nav-link" style={{
                display: "flex", alignItems: "center", gap: 5,
                color: C.sec, fontSize: 14, fontWeight: 500,
                background: "none", border: "none", cursor: "pointer",
                padding: "6px 12px", borderRadius: 8, transition: "all 150ms",
              }}>{label} <ChevronDown /></button>
              {drop === label && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 200,
                  backgroundColor: C.card, border: `1px solid ${C.border}`,
                  borderRadius: 14, padding: 6, minWidth: 200,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                }}>
                  {items.map(item => (
                    <Link key={item.label} href={item.href} className="kw-drop-item" style={{
                      display: "block", padding: "9px 12px", borderRadius: 8,
                      color: C.sec, fontSize: 13, fontWeight: 500, transition: "background 120ms",
                    }}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" className="kw-nav-link" style={{ color: C.sec, fontSize: 14, fontWeight: 500, padding: "6px 12px", borderRadius: 8, transition: "all 150ms" }}>Pricing</Link>
        </nav>

        <div className="kw-desktop-nav" style={{ alignItems: "center", gap: 10 }}>
          <Link href="/login" style={{ color: C.text, fontSize: 14, fontWeight: 600, padding: "6px 14px", opacity: 0.85 }}>Log in</Link>
          <Link href="/signup" className="kw-btn-primary" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7,
            height: 38, padding: "0 20px", borderRadius: 10,
            backgroundColor: C.accent, color: C.bg, fontSize: 13, fontWeight: 700,
            border: "none", cursor: "pointer",
            boxShadow: "0 2px 16px rgba(0,212,255,0.35)",
            transition: "all 150ms",
          }}>Book Demo</Link>
        </div>

        <button className="kw-mobile-btn" onClick={() => setMobileOpen(v => !v)} style={{
          background: "none", border: "none", cursor: "pointer", color: C.text, padding: 4, alignItems: "center",
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
          <Link href="/pricing" style={{ display: "block", color: C.sec, fontSize: 15, fontWeight: 500, padding: "11px 0", borderBottom: `1px solid ${C.border}` }}>Pricing</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            <Link href="/login" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 44, borderRadius: 10, border: `1.5px solid ${C.border}`, color: C.text, fontSize: 14, fontWeight: 700 }}>Log in</Link>
            <Link href="/signup" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 44, borderRadius: 10, backgroundColor: C.accent, color: C.bg, fontSize: 14, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,212,255,0.3)" }}>Book Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HERO (VIDEO BACKGROUND) ──────────────────────────────────────────────────
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="kw-hero" style={{
      position: "relative", overflow: "hidden",
      minHeight: "100svh", display: "flex", alignItems: "center",
      paddingTop: 64,
    }}>
      {/* ── Background video (muted, autoplay, loop — Square.com style) ── */}
      <video
        ref={videoRef}
        className="kw-hero-video"
        autoPlay muted loop playsInline
        poster={IMGS.heroBg}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22, pointerEvents: "none" }}
      >
        {/* Public domain / CC0 office video from Mixkit */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4-small.mp4" type="video/mp4" />
        {/* Fallback: if video doesn't load, the poster image shows */}
      </video>

      {/* ── Fallback still image (shows while video loads) ── */}
      <img
        src={IMGS.heroBg}
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: 0.18, pointerEvents: "none" }}
      />

      {/* ── Multi-layer dark overlay for text legibility ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: [
          "linear-gradient(to bottom, rgba(5,13,26,0.75) 0%, rgba(5,13,26,0.55) 40%, rgba(5,13,26,0.75) 80%, rgba(5,13,26,1) 100%)",
          "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0,212,255,0.09) 0%, transparent 65%)",
        ].join(", "),
      }} />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "100px 24px 120px", width: "100%", textAlign: "center" }}>
        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: "1px solid rgba(0,212,255,0.28)", backgroundColor: "rgba(0,212,255,0.09)",
          borderRadius: 100, padding: "7px 16px", marginBottom: 32,
          color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
          backdropFilter: "blur(8px)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.accent, display: "inline-block", boxShadow: `0 0 8px ${C.accent}` }} />
          THE OFFICE FOR BUSINESSES
        </div>

        <h1 style={{
          fontSize: "clamp(38px, 6.5vw, 76px)", fontWeight: 900,
          lineHeight: 1.02, letterSpacing: "-0.04em", color: C.text,
          maxWidth: 800, margin: "0 auto 24px",
        }}>
          Your team deserves<br />a real office
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(240,244,248,0.75)",
          lineHeight: 1.6, maxWidth: 560, margin: "0 auto 48px", fontWeight: 400,
        }}>
          Stop running your business in WhatsApp groups. Kreww gives your remote team a professional virtual office — one place to work, collaborate, and grow.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
          <Link href="/signup" className="kw-btn-primary" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
            height: 52, padding: "0 32px", borderRadius: 12,
            backgroundColor: C.accent, color: C.bg, fontSize: 16, fontWeight: 700,
            border: "none", cursor: "pointer",
            boxShadow: "0 6px 32px rgba(0,212,255,0.4), 0 0 0 1px rgba(0,212,255,0.3)",
            transition: "all 200ms",
          }}>
            Start Growing <ArrowRight />
          </Link>
          <Link href="/demo" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
            height: 52, padding: "0 32px", borderRadius: 12,
            backgroundColor: "rgba(255,255,255,0.08)", color: C.text, fontSize: 16, fontWeight: 600,
            border: "1.5px solid rgba(255,255,255,0.18)", cursor: "pointer",
            backdropFilter: "blur(8px)",
            transition: "all 200ms",
          }}>
             Contact Sales
          </Link>
        </div>

        {/* Social proof avatars */}
        {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ display: "flex" }}>
            {[IMGS.avatar1, IMGS.avatar2, IMGS.avatar3, IMGS.avatar4].map((src, i) => (
              <img key={i} src={src} alt="" style={{
                width: 36, height: 36, borderRadius: "50%", objectFit: "cover",
                border: "2px solid rgba(5,13,26,0.8)",
                marginLeft: i === 0 ? 0 : -10,
              }} />
            ))}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ display: "flex", gap: 1, marginBottom: 3 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#FFB300"><path d="M6.5 1l1.5 3.2 3.5.5-2.5 2.4.6 3.4L6.5 9 3.4 10.5l.6-3.4L1.5 4.7l3.5-.5z"/></svg>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "rgba(240,244,248,0.65)" }}>
              Trusted by <strong style={{ color: C.text }}>2,000+</strong> businesses
            </div>
          </div>
        </div>*/}

        {/* Scroll hint */}
        {/* <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll to explore</div>
          <div style={{
            width: 24, height: 38, borderRadius: 12, border: `1.5px solid ${C.muted}`,
            display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "6px 0",
          }}>
            <div style={{
              width: 4, height: 8, borderRadius: 2, backgroundColor: C.accent,
              animation: "scrollDot 1.6s ease-in-out infinite",
            }} />
          </div>
        </div>*/}
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0); opacity: 1; }
          60%  { transform: translateY(12px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
{/* function StatsBar() {
  useFadeIn();
  const stats = [
    { v: "2,000+", l: "Businesses using Kreww" },
    { v: "98%",    l: "Customer satisfaction rate" },
    { v: "40%",    l: "Faster team communication" },
    { v: "24/7",   l: "Support availability" },
  ];
  return (
    <section className="kw-stats-wrap" style={{
      backgroundColor: C.card,
      borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-stats kw-fade" style={{ textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={s.v} style={{
              padding: "16px 20px",
              borderRight: i < stats.length - 1 ? `1px solid ${C.border}` : "none",
            }}>
              <div style={{
                fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900,
                color: C.text, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums",
                background: `linear-gradient(135deg, ${C.text} 0%, ${C.accent} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.v}</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 6, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/}

// ─── LOGO TRUST BAR ───────────────────────────────────────────────────────────
{/*function LogoBar() {
  useFadeIn();
  const logos = ["Paystack", "Flutterwave", "Andela", "Piggyvest", "Cowrywise", "Kuda", "Moniepoint"];
  return (
    <section style={{ padding: "48px 24px", backgroundColor: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p className="kw-fade" style={{ textAlign: "center", fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
          Trusted by teams at Africa's fastest-growing companies
        </p>
        <div className="kw-logos kw-fade">
          {logos.map(logo => (
            <div key={logo} className="kw-logo-item" style={{
              fontSize: 15, fontWeight: 800, color: C.sec,
              letterSpacing: "-0.01em", cursor: "default",
            }}>{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
}*/}

// ─── ONE WORKSPACE ────────────────────────────────────────────────────────────
function OneWorkspace() {
  useFadeIn();
  const cards = [
    { icon: "◼", title: "Unified Operations",   body: "Kreww keeps your office running for disconnected teams with automated, highly synchronised workflows." },
    { icon: "#", title: "Context-Aware Alerts", body: "Context-Aware AI sync keeps business intelligence on your workspace status presented on your desktop." },
    { icon: "↗", title: "Real-Time Presence",   body: "Powerful tools to your team with workspace, presence, and status information right at their fingertips." },
    { icon: "⇥", title: "Push Communication",   body: "Asynchronous collaboration bridges the gap between remote workers. Ship tasks quickly without context loss." },
  ];

  return (
    <section className="kw-section" style={{ padding: "112px 24px", backgroundColor: C.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-onewrk">
          {/* Left: feature cards */}
          <div className="kw-feat-cards kw-fade">
            {cards.map(c => (
              <div key={c.title} className="kw-card-hover" style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                borderRadius: 20, padding: "26px 22px",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, marginBottom: 16,
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,153,187,0.08) 100%)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.accent, fontSize: 17,
                }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 9, letterSpacing: "-0.01em" }}>{c.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.68 }}>{c.body}</div>
              </div>
            ))}
          </div>

          {/* Right: copy + image */}
          <div className="kw-fade">
            <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 16 }}>ONE PLATFORM</div>
            <h2 style={{
              fontSize: "clamp(28px, 3.8vw, 50px)", fontWeight: 900,
              lineHeight: 1.05, letterSpacing: "-0.03em", color: C.text, marginBottom: 22,
            }}>
              One workspace.<br />Every tool your<br />team needs.
            </h2>
            <p style={{ fontSize: 16, color: C.sec, lineHeight: 1.72, marginBottom: 32 }}>
              Your entire office integrated in one platform. Stop the tab-switching chaos — Kreww puts every tool and every team member right at your fingertips.
            </p>
            <div style={{ display: "flex", gap: 28 }}>
              {[{ n: "7", l: "tools in one" }, { n: "< 5min", l: "to set up" }, { n: "100%", l: "web-based" }].map(m => (
                <div key={m.l}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: C.accent, letterSpacing: "-0.02em" }}>{m.n}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width image strip */}
        <div className="kw-fade" style={{ marginTop: 72, position: "relative", borderRadius: 24, overflow: "hidden", height: 320 }}>
          <img src={IMGS.teamCollab} alt="Team collaborating in a modern workspace" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,13,26,0.85) 0%, rgba(5,13,26,0.3) 50%, rgba(5,13,26,0.6) 100%)" }} />
          <div style={{ position: "absolute", left: 40, top: "50%", transform: "translateY(-50%)" }}>
            <div style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 800, color: C.text, lineHeight: 1.3, maxWidth: 360 }}>
              "Kreww replaced 4 tools for our team. One place, total clarity."
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
              <img src={IMGS.avatar2} alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.accent}` }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Emeka Okonkwo</div>
                <div style={{ fontSize: 12, color: C.sec }}>CTO, Techbridge Lagos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPLETE VISIBILITY ──────────────────────────────────────────────────────
function CompleteVisibility() {
  useFadeIn();
  const taskCols = [
    { label: "To Do",       color: C.muted,  tasks: ["Brand refresh", "Onboarding copy"] },
    { label: "In Progress", color: C.accent, tasks: ["Dashboard v2", "API docs"] },
    { label: "Done",        color: C.green,  tasks: ["Auth flow", "Supabase schema"] },
  ];
  const members = [
    { i: "AA", c: C.accent }, { i: "VO", c: C.green },
    { i: "CM", c: C.amber },  { i: "AK", c: "#9B59B6" },
  ];

  return (
    <section className="kw-section" style={{ padding: "112px 24px", backgroundColor: C.card, position: "relative", overflow: "hidden" }}>
      {/* Subtle background texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: `url(${IMGS.gridTexture})`, backgroundSize: "cover", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div className="kw-vis">
          {/* Left: copy */}
          <div className="kw-fade">
            <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 16 }}>FULL VISIBILITY</div>
            <h2 style={{
              fontSize: "clamp(30px, 4.2vw, 58px)", fontWeight: 900,
              lineHeight: 1.03, letterSpacing: "-0.035em", color: C.text, marginBottom: 24,
            }}>
              Complete visibility.<br />Zero friction.
            </h2>
            <p style={{ fontSize: 16, color: C.sec, lineHeight: 1.72, marginBottom: 36 }}>
              A centralised command centre that gives your entire organisation a birds-eye view of all operations in a single, beautifully organised workspace.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {["See who's online, away, or in focus — live", "Track every task across every team member", "Chat, meet, and collaborate without leaving"].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.sec }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "rgba(0,212,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckIcon />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: app mockup */}
          <div className="kw-fade" style={{
            borderRadius: 20, overflow: "hidden",
            border: `1px solid ${C.border}`,
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}>
            {/* Chrome */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: C.sidebar, borderBottom: `1px solid ${C.border}`, padding: "11px 14px" }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[C.red, C.amber, C.green].map(col => <div key={col} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: col, opacity: 0.8 }} />)}
              </div>
              <div style={{ flex: 1, maxWidth: 200, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 6, padding: "3px 10px", fontSize: 10, color: C.muted, border: `1px solid ${C.border}` }}>
                🔒 app.mykreww.com
              </div>
              <div style={{ display: "flex", gap: 5, marginLeft: "auto" }}>
                {["Office", "Tasks", "Chat"].map((t, i) => (
                  <span key={t} style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 6, backgroundColor: i === 1 ? "rgba(0,212,255,0.16)" : "transparent", color: i === 1 ? C.accent : C.muted }}>{t}</span>
                ))}
              </div>
            </div>
            {/* Body */}
            <div style={{ backgroundColor: C.bg, display: "flex" }}>
              <div style={{ width: 46, flexShrink: 0, backgroundColor: C.sidebar, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: "rgba(0,212,255,0.16)", color: C.accent, fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>K</div>
                {["⊞","☰","◻","📄","🔔"].map((ic, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: 8, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: i === 1 ? "rgba(0,212,255,0.14)" : "transparent", color: i === 1 ? C.accent : C.muted }}>{ic}</div>
                ))}
              </div>
              <div style={{ flex: 1, padding: "16px 16px 18px" }}>
                <div style={{ marginBottom: 14, fontSize: 10, color: C.muted }}>
                  Good morning, Ayo. <span style={{ color: C.accent, fontWeight: 700 }}>4 members in the office.</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9, marginBottom: 14 }}>
                  {taskCols.map(col => (
                    <div key={col.label}>
                      <div style={{ fontSize: 9, fontWeight: 800, color: col.color, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>{col.label}</div>
                      {col.tasks.map(task => (
                        <div key={task} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 9px", fontSize: 9, color: C.sec, marginBottom: 6 }}>{task}</div>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "8px 12px" }}>
                  <div style={{ display: "flex" }}>
                    {members.map((m, i) => (
                      <div key={m.i} style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: `${m.c}22`, color: m.c, fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: i === 0 ? 0 : -7, border: `2px solid ${C.card}` }}>{m.i}</div>
                    ))}
                  </div>
                  <span style={{ fontSize: 10, color: C.sec }}>4 members online</span>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.green, marginLeft: "auto", boxShadow: `0 0 6px ${C.green}` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TOOLS GRID ───────────────────────────────────────────────────────────────
function ToolsGrid() {
  useFadeIn();
  const tools = [
    { icon: "⚡", title: "Seamless Integrations",      body: "Connect third-party apps you already love to manage tasks, without losing workflow context." },
    { icon: "✦",  title: "Meet Cyan AI",               body: "Your AI virtual office assistant. Smart notifications, visibility tools, and instant business insights." },
    { icon: "🌐", title: "Virtual Headquarters",        body: "A professional virtual office that spans any country, removing location barriers entirely." },
    { icon: "⊞",  title: "Central Asset Hub",           body: "Keep projects, files, tokens, and docs in one place. No more hunting across six tools." },
    { icon: "✔",  title: "Smart Task Management",       body: "Track milestones, assign action items, and monitor workload in real-time across the team." },
    { icon: "🔒", title: "Enterprise-Grade Security",   body: "End-to-end encryption, role-based access control, and customisable user permissions." },
  ];

  return (
    <section className="kw-section" style={{ padding: "112px 24px", backgroundColor: C.bg, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-fade" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 16 }}>EVERYTHING YOU NEED</div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.text, lineHeight: 1.08, marginBottom: 16 }}>
            Efficient and Effective<br />All-in-One Business Workspace
          </h2>
          <p style={{ fontSize: 16, color: C.sec, maxWidth: 520, margin: "0 auto" }}>
            Top-notch integrations and a powerful ecosystem designed to streamline your team's workflow.
          </p>
        </div>

        <div className="kw-tools kw-fade">
          {tools.map((t, i) => (
            <div key={t.title} className="kw-card-hover" style={{
              backgroundColor: C.card, border: `1px solid ${C.border}`,
              borderRadius: 20, padding: "28px 24px",
              background: i === 1 ? `linear-gradient(135deg, ${C.card} 0%, rgba(0,212,255,0.04) 100%)` : C.card,
              position: "relative", overflow: "hidden",
            }}>
              {i === 1 && <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />}
              <div style={{
                width: 46, height: 46, borderRadius: 13, marginBottom: 18,
                background: i === 1
                  ? `linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,153,187,0.1) 100%)`
                  : "rgba(0,212,255,0.08)",
                border: `1px solid ${i === 1 ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.15)"}`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
              }}>{t.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: "-0.01em" }}>{t.title}</div>
              <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.68 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
{/*function Testimonials() {
  useFadeIn();
  const quotes = [
    { text: "Kreww replaced Slack, Notion, and Asana for us. One place for everything. The team actually opens it every morning now.", name: "Adaeze Nwosu", role: "CEO, Novu Design Agency", avatar: IMGS.avatar3, stars: 5 },
    { text: "The Office screen is magic. I can see exactly who's working on what without sending a single message. Game changer.", name: "Babatunde Fashola", role: "Product Lead, Finova", avatar: IMGS.avatar4, stars: 5 },
    { text: "We tried five tools before Kreww. Nothing felt like a real office until this. And it actually loads fast on our connection.", name: "Ngozi Okafor", role: "Engineering Manager, Buildly", avatar: IMGS.avatar1, stars: 5 },
  ];

  return (
    <section className="kw-section" style={{ padding: "112px 24px", backgroundColor: C.card }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-fade" style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 16 }}>SOCIAL PROOF</div>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 42px)", fontWeight: 900, letterSpacing: "-0.025em", color: C.text }}>
            Teams that use Kreww love Kreww
          </h2>
        </div>
        <div className="kw-testimonials kw-fade">
          {quotes.map((q, i) => (
            <div key={i} style={{
              backgroundColor: C.bg, border: `1px solid ${C.border}`,
              borderRadius: 20, padding: "28px 26px",
              display: "flex", flexDirection: "column", gap: 20,
            }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(q.stars)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={C.amber}><path d="M7 1l1.6 3.4 3.8.5-2.7 2.6.6 3.8L7 9.7l-3.3 1.6.6-3.8L1.6 4.9l3.8-.5z"/></svg>
                ))}
              </div>
              <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, fontWeight: 500, flex: 1 }}>"{q.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={q.avatar} alt={q.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.border}` }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{q.name}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function Pricing() {
  useFadeIn();
  const [yearly, setYearly] = useState(false);
  const plans = [
    {
      id: "growth", name: "Growth", highlight: false, cta: "Get Started",
      desc: "Perfect for small businesses and remote teams.",
      monthly: "₦25,000", yearly: "₦20,000",
      features: ["Cyan AI for the founder (full access)","Up to 15 team members","10,000 Cyan AI tokens/month","10 Sonnet 4.5 sessions","Team & Focus collaboration","Smart task management","AI-and Kreww collaboration tools"],
    },
    {
      id: "business", name: "Business", highlight: true, cta: "Get Started",
      desc: "Designed for growing agencies and medium scale enterprises.",
      monthly: "₦65,000", yearly: "₦52,000",
      features: ["Full Cyan AI for all members","Unlimited members — no capacity","Full-priority email support","50,000 Cyan AI tokens","Auditor SOC 2 audit token access","AI integration & team collaboration","Team analytics & data sync","Enterprise-grade data security","Priority support"],
    },
    {
      id: "enterprise", name: "Enterprise", highlight: false, cta: "Contact Sales",
      desc: "Built for large-scale corporations consulting and executive teams.",
      monthly: "Custom", yearly: "Custom",
      features: ["Custom AI token allocation","Dedicated Customer Success lead","Full-system API access","Custom security & SLAs","Auditor SOC 2 audit token","Everything included in Business"],
    },
  ];

  return (
    <section className="kw-section" style={{ padding: "112px 24px", backgroundColor: C.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-fade" style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 16 }}>PRICING</div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.text, lineHeight: 1.08, marginBottom: 14 }}>
            Tailored Plans for<br />Teams of Any Scale
          </h2>
          <p style={{ fontSize: 16, color: C.sec, maxWidth: 480, margin: "0 auto 28px" }}>
            No hidden fees. No per-seat surprises. One flat price per team.
          </p>
          <div style={{ display: "inline-flex", backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 100, padding: 4 }}>
            {["Monthly", "Yearly"].map(label => (
              <button key={label} onClick={() => setYearly(label === "Yearly")} style={{
                padding: "8px 26px", borderRadius: 100, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 700, transition: "all 180ms",
                backgroundColor: (label === "Yearly") === yearly ? C.accent : "transparent",
                color: (label === "Yearly") === yearly ? C.bg : C.muted,
              }}>{label} {label === "Yearly" && <span style={{ fontSize: 10, marginLeft: 4, opacity: 0.8 }}>Save 20%</span>}</button>
            ))}
          </div>
        </div>

        <div className="kw-plans kw-fade">
          {plans.map(plan => (
            <div key={plan.id} style={{
              position: "relative",
              backgroundColor: plan.highlight ? C.card : C.card2,
              border: plan.highlight ? `2px solid rgba(0,212,255,0.45)` : `1px solid ${C.border}`,
              borderRadius: 22, padding: "32px 26px",
              boxShadow: plan.highlight ? "0 0 60px rgba(0,212,255,0.09), 0 24px 60px rgba(0,0,0,0.3)" : "none",
              transition: "transform 200ms",
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${C.accent} 0%, ${C.dim} 100%)`,
                  color: C.bg, fontSize: 10, fontWeight: 800, letterSpacing: "0.09em",
                  textTransform: "uppercase", borderRadius: 100, padding: "5px 16px",
                  whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,212,255,0.3)",
                }}>⭐ Recommended</div>
              )}
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.09em", color: plan.highlight ? C.accent : C.muted, marginBottom: 6 }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.55, marginBottom: 22, minHeight: 40 }}>{plan.desc}</div>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: "clamp(24px, 3.2vw, 34px)", fontWeight: 900, color: C.text, letterSpacing: "-0.025em" }}>
                  {yearly ? plan.yearly : plan.monthly}
                </span>
                {plan.monthly !== "Custom" && <span style={{ fontSize: 13, color: C.muted }}> /month</span>}
              </div>
              <Link href={plan.id === "enterprise" ? "/contact" : "/signup"}
                className={plan.highlight ? "kw-plan-cta-solid" : "kw-plan-cta-ghost"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  height: 44, borderRadius: 11, fontSize: 14, fontWeight: 700,
                  marginBottom: 26, transition: "all 160ms",
                  ...(plan.highlight
                    ? { background: `linear-gradient(135deg, ${C.accent} 0%, ${C.dim} 100%)`, color: C.bg, border: "none", boxShadow: "0 4px 20px rgba(0,212,255,0.3)" }
                    : { backgroundColor: "transparent", color: C.accent, border: `1.5px solid rgba(0,212,255,0.28)` }),
                }}>{plan.cta}</Link>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: C.sec, lineHeight: 1.5 }}>
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  useFadeIn();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "What is the difference between Cyan AI tokens and Sonnet sessions?", a: "Cyan AI tokens power your real-time virtual office assistant updates — smart notifications, visibility tools, and summaries. Sonnet sessions are full conversational AI sessions where you can dive deep into business intelligence with Cyan AI." },
    { q: "Can I add more team members to the Growth plan later?", a: "Yes. You can add new members to the Growth plan with up to a cap of 15 members. If you need to scale beyond that, you can upgrade to Business at any time from your billing settings without losing any existing data or configurations." },
    { q: "Do my unused Cyan AI tokens roll over to the next month?", a: "No. For now, Cyan AI tokens do not roll over. Unused tokens expire at the end of each billing period. We are working on a token savings feature that will allow teams to bank unused compute for future strategic work." },
    { q: "How secure is our company data with Cyan AI?", a: "Completely. Kreww uses industry-standard end-to-end encryption. Your workspace data is never used to train AI models, and access logs are available to workspace administrators." },
  ];

  return (
    <section className="kw-section" style={{ padding: "112px 24px", backgroundColor: C.card }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-fade" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 16 }}>FAQ</div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 900, letterSpacing: "-0.025em", color: C.text, marginBottom: 14 }}>Frequently Asked Operations</h2>
          <p style={{ fontSize: 15, color: C.sec, maxWidth: 460, margin: "0 auto" }}>Got questions about features, security, or billing? Here's everything you need to know.</p>
        </div>
        <div className="kw-faq kw-fade">
          {faqs.map((faq, i) => (
            <div key={i} className="kw-faq-item" onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{
              backgroundColor: C.bg, border: `1px solid ${C.border}`,
              borderRadius: 18, padding: "22px 24px", cursor: "pointer",
              transition: "border-color 160ms",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, backgroundColor: "rgba(0,212,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: C.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, lineHeight: 1.45 }}>{faq.q}</div>
                  {openIdx === i && <div style={{ fontSize: 14, color: C.sec, lineHeight: 1.72, marginTop: 12 }}>{faq.a}</div>}
                </div>
                <div style={{ color: C.muted, fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{openIdx === i ? "−" : "+"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER (with background image) ──────────────────────────────────────
function CTABanner() {
  useFadeIn();
  return (
    <section className="kw-cta" style={{
      position: "relative", overflow: "hidden",
      padding: "140px 24px",
      textAlign: "center",
    }}>
      {/* Background image — Lagos cityscape at dusk */}
      <img
        src={IMGS.ctaBg}
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%", opacity: 0.35, pointerEvents: "none" }}
      />

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: [
          `linear-gradient(to bottom, ${C.bg} 0%, rgba(5,13,26,0.82) 30%, rgba(5,13,26,0.82) 70%, ${C.bg} 100%)`,
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        ].join(", "),
      }} />

      {/* Cyan glow ring */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div className="kw-fade" style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 22 }}>GET STARTED TODAY</div>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900,
          letterSpacing: "-0.04em", color: C.text, lineHeight: 1.02, marginBottom: 22,
        }}>
          Bring Your Kreww<br />Together Today.
        </h2>
        <p style={{ fontSize: 17, color: "rgba(240,244,248,0.72)", maxWidth: 440, margin: "0 auto 44px", lineHeight: 1.65 }}>
          Eliminate the digital noise. Experience a virtual office that works as hard as you do.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" className="kw-btn-primary" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
            height: 54, padding: "0 36px", borderRadius: 13,
            background: `linear-gradient(135deg, ${C.accent} 0%, ${C.dim} 100%)`,
            color: C.bg, fontSize: 16, fontWeight: 800,
            border: "none", cursor: "pointer",
            boxShadow: "0 8px 40px rgba(0,212,255,0.45)",
            transition: "all 200ms",
          }}>
            Start Growing — It's Free <ArrowRight />
          </Link>
          <Link href="/demo" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
            height: 54, padding: "0 32px", borderRadius: 13,
            backgroundColor: "rgba(255,255,255,0.08)", color: C.text, fontSize: 16, fontWeight: 600,
            border: "1.5px solid rgba(255,255,255,0.2)", cursor: "pointer",
            backdropFilter: "blur(8px)", transition: "all 200ms",
          }}>
            Book a Demo
          </Link>
        </div>
        <p style={{ fontSize: 13, color: C.muted, marginTop: 22 }}>No credit card required · 14-day free trial · Cancel anytime</p>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols: Record<string, string[]> = {
    Tools:         ["Cyan AI", "Virtual Office", "Chat", "Kanban", "Online Meeting", "Notice Board", "Team collaboration"],
    "Our Company": ["Our Team", "About", "Blog", "Investor", "Careers"],
    Resources:     ["Support", "Help Center", "Changelog", "Terms of Use", "Privacy Policy"],
  };
  return (
    <footer style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}`, padding: "72px 24px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-footer-grid" style={{ marginBottom: 56 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, flexShrink: 0, backgroundColor: "rgba(0,212,255,0.14)", border: "1px solid rgba(0,212,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontWeight: 900, fontSize: 13 }}>K</div>
              <span style={{ color: C.text, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>KREWW</span>
            </div>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.72, marginBottom: 22, maxWidth: 220 }}>
              Your team, together. A real virtual office for remote teams — built in Africa, for the world.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
              {[{ icon: "𝕏", href: "https://x.com/mykreww" }, { icon: "in", href: "#" }, { icon: "▣", href: "#" }].map(s => (
                <a key={s.icon} href={s.href} style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.muted, fontSize: 13, transition: "all 150ms" }}>{s.icon}</a>
              ))}
            </div>
          </div>
          {Object.entries(cols).map(([sec, links]) => (
            <div key={sec}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: C.text, marginBottom: 18 }}>{sec}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map(l => (
                  <li key={l}><a href="#" className="kw-foot-link" style={{ fontSize: 13, color: C.muted, transition: "color 150ms" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 26, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: C.muted }}>© {new Date().getFullYear()} KREWW. All rights reserved. Built in Lagos, Nigeria 🇳🇬</span>
          <a href="mailto:hello@mykreww.com" style={{ fontSize: 12, color: C.muted }}>hello@mykreww.com</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <LogoBar />
        <OneWorkspace />
        <CompleteVisibility />
        <ToolsGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
