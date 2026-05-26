"use client";

import { useState } from "react";
import Link from "next/link";

// ─── INLINE SVG ICONS ──────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
    <path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CheckIcon = () => (
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
const SparkleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1v2M6 9v2M1 6h2M9 6h2M2.5 2.5l1.4 1.4M8.1 8.1l1.4 1.4M8.1 3.9l1.4-1.4M2.5 9.5l1.4-1.4"
      stroke="#00D4FF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────────
const C = {
  bg:      "#050D1A",
  card:    "#0F1C2E",
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

// ─── GLOBAL CSS (all responsive logic lives here) ─────────────────────────
const GLOBAL_CSS = `
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

  /* ── NAV ── */
  .kw-desktop-nav { display: flex; }
  .kw-mobile-btn  { display: none; }

  /* ── HERO BTNS ── */
  .kw-hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* ── STATS ── */
  .kw-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

  /* ── ONE WORKSPACE ── */
  .kw-onewrk     { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .kw-feat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  /* ── COMPLETE VISIBILITY ── */
  .kw-vis { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center; }

  /* ── TOOLS GRID ── */
  .kw-tools { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

  /* ── PRICING ── */
  .kw-plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; }

  /* ── FAQ ── */
  .kw-faq { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  /* ── FOOTER ── */
  .kw-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; }

  /* ── BREAKPOINT: tablet (≤900px) ── */
  @media (max-width: 900px) {
    .kw-onewrk     { grid-template-columns: 1fr !important; gap: 40px !important; }
    .kw-vis        { grid-template-columns: 1fr !important; gap: 40px !important; }
    .kw-plans      { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
    .kw-footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
    .kw-tools      { grid-template-columns: repeat(2, 1fr) !important; }
  }

  /* ── BREAKPOINT: mobile (≤640px) ── */
  @media (max-width: 640px) {
    .kw-desktop-nav { display: none !important; }
    .kw-mobile-btn  { display: flex !important; }

    .kw-stats       { grid-template-columns: repeat(2, 1fr) !important; }
    .kw-feat-cards  { grid-template-columns: 1fr !important; }
    .kw-tools       { grid-template-columns: 1fr !important; }
    .kw-faq         { grid-template-columns: 1fr !important; }
    .kw-footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }

    .kw-section { padding: 64px 20px !important; }
    .kw-hero    { padding: 64px 20px 56px !important; }
    .kw-stats-wrap { padding: 32px 20px !important; }
    .kw-cta     { padding: 72px 20px !important; }
  }

  /* ── BREAKPOINT: small mobile (≤400px) ── */
  @media (max-width: 400px) {
    .kw-plans { max-width: 100% !important; }
  }

  /* ── HOVER CARDS ── */
  .kw-card-hover { transition: transform 200ms ease, box-shadow 200ms ease; }
  .kw-card-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.07) !important;
  }

  /* ── NAV LINK HOVER ── */
  .kw-nav-link:hover { color: #F0F4F8 !important; }
  .kw-drop-item:hover { background-color: rgba(255,255,255,0.05) !important; }

  /* ── FOOTER LINK HOVER ── */
  .kw-foot-link:hover { color: #F0F4F8 !important; }

  /* ── BTN HOVER ── */
  .kw-btn-primary:hover  { filter: brightness(1.1); }
  .kw-btn-outline:hover  { border-color: #8BA0B8 !important; }
  .kw-btn-ghost:hover    { border-color: rgba(0,212,255,0.6) !important; color: #00D4FF !important; }

  /* ── PRICING PLAN CTA HOVER ── */
  .kw-plan-cta-solid:hover  { filter: brightness(1.08); }
  .kw-plan-cta-ghost:hover  { background-color: rgba(0,212,255,0.06) !important; }

  /* ── FAQ ITEM HOVER ── */
  .kw-faq-item:hover { border-color: rgba(0,212,255,0.2) !important; }
`;

// ─── NAV ──────────────────────────────────────────────────────────────────
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);

  const navItemStyle: React.CSSProperties = {
    position: "relative", display: "flex", alignItems: "center", gap: 5,
    color: C.sec, fontSize: 14, fontWeight: 500, background: "none",
    border: "none", cursor: "pointer", padding: "6px 10px", borderRadius: 8,
  };
  const dropWrap: React.CSSProperties = {
    position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 200,
    backgroundColor: C.card, border: `1px solid ${C.border}`,
    borderRadius: 14, padding: "6px", minWidth: 200,
    boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
  };
  const dropItemStyle: React.CSSProperties = {
    display: "block", padding: "9px 12px", borderRadius: 8,
    color: C.sec, fontSize: 13, fontWeight: 500, cursor: "pointer",
  };

  const menus: Record<string, string[]> = {
    Tools:        ["The Office", "Tasks", "Chat", "Notice Board", "Documents", "Notes", "In-App Browser"],
    Resource:     ["Blog", "Help Centre", "Changelog"],
    "Our Company":["About", "Our Team", "Investors", "Blog"],
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      backgroundColor: "rgba(5,13,26,0.9)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, flexShrink: 0,
            backgroundColor: "rgba(0,212,255,0.12)",
            border: "1px solid rgba(0,212,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: C.accent, fontWeight: 800, fontSize: 13,
          }}>K</div>
          <span style={{ color: C.text, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>KREWW</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="kw-desktop-nav" style={{ alignItems: "center", gap: 2 }}>
          {Object.entries(menus).map(([label, items]) => (
            <div key={label} style={{ position: "relative" }}
              onMouseEnter={() => setDrop(label)}
              onMouseLeave={() => setDrop(null)}>
              <button className="kw-nav-link" style={navItemStyle}>
                {label} <ChevronDown />
              </button>
              {drop === label && (
                <div style={dropWrap}>
                  {items.map(item => (
                    <a key={item} href="#" className="kw-drop-item" style={dropItemStyle}>{item}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" className="kw-nav-link"
            style={{ ...navItemStyle, textDecoration: "none" } as React.CSSProperties}>Pricing</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="kw-desktop-nav" style={{ alignItems: "center", gap: 8 }}>
          <Link href="/login" style={{ color: C.text, fontSize: 14, fontWeight: 600, padding: "6px 14px" }}>Log in</Link>
          <Link href="/signup" className="kw-btn-primary" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            height: 36, padding: "0 18px", borderRadius: 9,
            backgroundColor: C.accent, color: C.bg, fontSize: 13, fontWeight: 700,
            border: "none", cursor: "pointer", boxShadow: "0 2px 14px rgba(0,212,255,0.28)",
          }}>Book Demo</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="kw-mobile-btn" onClick={() => setMobileOpen(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: C.text, padding: 4, alignItems: "center" }}>
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          backgroundColor: C.bg, borderTop: `1px solid ${C.border}`,
          padding: "16px 24px 28px",
        }}>
          {[...Object.keys(menus), "Pricing"].map(label => (
            <a key={label} href="#" style={{
              display: "block", color: C.sec, fontSize: 15, fontWeight: 500,
              padding: "12px 0", borderBottom: `1px solid ${C.border}`,
            }}>{label}</a>
          ))}
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
              boxShadow: "0 4px 20px rgba(0,212,255,0.3)",
            }}>Book Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="kw-hero" style={{
      padding: "88px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse 90% 55% at 50% -5%, rgba(0,212,255,0.11) 0%, transparent 70%), ${C.bg}`,
    }}>
      {/* Eyebrow pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        border: "1px solid rgba(0,212,255,0.22)", backgroundColor: "rgba(0,212,255,0.07)",
        borderRadius: 100, padding: "6px 14px", marginBottom: 28,
        color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase",
      }}>
        <SparkleIcon /> THE OFFICE FOR BUSINESSES
      </div>

      <h1 style={{
        fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 800,
        lineHeight: 1.04, letterSpacing: "-0.03em", color: C.text,
        maxWidth: 680, margin: "0 auto 22px",
      }}>
        Your team deserves a real office
      </h1>

      <p style={{
        fontSize: "clamp(15px, 2.2vw, 18px)", color: C.sec, lineHeight: 1.65,
        maxWidth: 540, margin: "0 auto 40px",
      }}>
        Stop running your business in WhatsApp groups. Kreww gives your remote
        team a professional virtual office, a unified platform, one place to
        work, collaborate, and grow.
      </p>

      <div className="kw-hero-btns">
        <Link href="/signup" className="kw-btn-primary" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
          height: 46, padding: "0 28px", borderRadius: 10,
          backgroundColor: C.accent, color: C.bg, fontSize: 15, fontWeight: 700,
          border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(0,212,255,0.3)",
        }}>Start Growing <ArrowRight /></Link>
        <Link href="/demo" className="kw-btn-outline" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          height: 46, padding: "0 28px", borderRadius: 10,
          backgroundColor: "transparent", color: C.text, fontSize: 15, fontWeight: 700,
          border: `1.5px solid ${C.border}`, cursor: "pointer",
        }}>Book Demo</Link>
      </div>
    </section>
  );
}

// ─── STATS BAR ────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { v: "2000+", l: "Businesses" },
    { v: "80",    l: "Businesses" },
    { v: "98%",   l: "Businesses" },
    { v: "24/7",  l: "Support Availability" },
  ];
  return (
    <section className="kw-stats-wrap" style={{
      borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      backgroundColor: C.card, padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-stats">
          {stats.map(s => (
            <div key={s.v} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800,
                color: C.text, letterSpacing: "-0.025em", fontVariantNumeric: "tabular-nums",
              }}>{s.v}</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ONE WORKSPACE ────────────────────────────────────────────────────────
function OneWorkspace() {
  const cards = [
    { icon: "◼", title: "Unified Operations",    body: "Kreww keeps your office running for disconnected teams with automated, highly synchronised workflows." },
    { icon: "#", title: "Context-Aware Alerts",  body: "Context-Aware AI sync keeps business intelligence on your workspace status presented on your desktop." },
    { icon: "↗", title: "Real-Time Presence",    body: "Powerful tools to your team with workspace, presence, and status information right at their fingertips." },
    { icon: "⇥", title: "Push Communication",    body: "Asynchronous collaboration bridges the gap between remote workers. Ship tasks quickly without context loss." },
  ];
  return (
    <section className="kw-section" style={{ padding: "96px 24px", backgroundColor: C.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-onewrk">
          {/* Feature cards */}
          <div className="kw-feat-cards">
            {cards.map(c => (
              <div key={c.title} className="kw-card-hover" style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                borderRadius: 16, padding: "22px 20px",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, marginBottom: 14,
                  backgroundColor: "rgba(0,212,255,0.10)", border: "1px solid rgba(0,212,255,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.accent, fontSize: 16,
                }}>{c.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: C.sec, lineHeight: 1.65 }}>{c.body}</div>
              </div>
            ))}
          </div>

          {/* Copy */}
          <div>
            <h2 style={{
              fontSize: "clamp(28px, 3.8vw, 46px)", fontWeight: 800,
              lineHeight: 1.07, letterSpacing: "-0.025em", color: C.text, marginBottom: 20,
            }}>
              One workspace.<br />Every tool your<br />team needs.
            </h2>
            <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.7 }}>
              Your entire office space integrated in a single platform.
              Everything your team needs to run a smooth company workflow,
              putting every tool and team member right at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPLETE VISIBILITY ──────────────────────────────────────────────────
function CompleteVisibility() {
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
    <section className="kw-section" style={{ padding: "96px 24px", backgroundColor: C.card }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-vis">
          {/* Copy */}
          <div>
            <h2 style={{
              fontSize: "clamp(30px, 4.2vw, 54px)", fontWeight: 800,
              lineHeight: 1.04, letterSpacing: "-0.03em", color: C.text, marginBottom: 22,
            }}>
              Complete visibility.<br />Zero friction.
            </h2>
            <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.7 }}>
              This is what running a business looks like with Kreww. A centralised
              command centre that gives your entire organisation a birds-eye view
              of all operations in a single, beautifully organised feed.
            </p>
          </div>

          {/* App mockup */}
          <div style={{
            borderRadius: 18, overflow: "hidden",
            border: `1px solid ${C.border}`,
            boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,212,255,0.06)",
          }}>
            {/* Chrome bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              backgroundColor: C.sidebar, borderBottom: `1px solid ${C.border}`,
              padding: "10px 14px",
            }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[C.red, C.amber, C.green].map(col => (
                  <div key={col} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: col, opacity: 0.7 }} />
                ))}
              </div>
              <div style={{
                flex: 1, maxWidth: 190, backgroundColor: C.card, borderRadius: 5,
                padding: "3px 10px", fontSize: 10, color: C.muted,
              }}>app.mykreww.com</div>
              <div style={{ display: "flex", gap: 5, marginLeft: "auto" }}>
                {["Office", "Tasks", "Chat"].map((t, i) => (
                  <span key={t} style={{
                    fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 5,
                    backgroundColor: i === 1 ? "rgba(0,212,255,0.14)" : "transparent",
                    color: i === 1 ? C.accent : C.muted,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* App body */}
            <div style={{ backgroundColor: C.bg, display: "flex" }}>
              {/* Sidebar */}
              <div style={{
                width: 44, flexShrink: 0, backgroundColor: C.sidebar,
                borderRight: `1px solid ${C.border}`,
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "12px 0", gap: 8,
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7,
                  backgroundColor: "rgba(0,212,255,0.14)", color: C.accent,
                  fontSize: 11, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>K</div>
                {["⊞", "☰", "◻", "📄", "🔔"].map((ic, i) => (
                  <div key={i} style={{
                    width: 30, height: 30, borderRadius: 7, fontSize: 13,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: i === 1 ? "rgba(0,212,255,0.12)" : "transparent",
                    color: i === 1 ? C.accent : C.muted,
                  }}>{ic}</div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, padding: "14px 14px 16px" }}>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 10, color: C.muted }}>Good morning, Ayo. </span>
                  <span style={{ fontSize: 10, color: C.accent, fontWeight: 600 }}>4 members in the office.</span>
                </div>

                {/* Kanban */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
                  {taskCols.map(col => (
                    <div key={col.label}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: col.color, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 7 }}>
                        {col.label}
                      </div>
                      {col.tasks.map(task => (
                        <div key={task} style={{
                          backgroundColor: C.card, border: `1px solid ${C.border}`,
                          borderRadius: 7, padding: "6px 8px",
                          fontSize: 9, color: C.sec, marginBottom: 5,
                        }}>{task}</div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Presence strip */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  backgroundColor: C.card, border: `1px solid ${C.border}`,
                  borderRadius: 9, padding: "7px 10px",
                }}>
                  <div style={{ display: "flex" }}>
                    {members.map((m, i) => (
                      <div key={m.i} style={{
                        width: 22, height: 22, borderRadius: "50%",
                        backgroundColor: `${m.c}20`, color: m.c,
                        fontSize: 7, fontWeight: 800,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginLeft: i === 0 ? 0 : -6,
                        border: `2px solid ${C.card}`,
                      }}>{m.i}</div>
                    ))}
                  </div>
                  <span style={{ fontSize: 9, color: C.sec }}>4 members online now</span>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.green, marginLeft: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TOOLS GRID ───────────────────────────────────────────────────────────
function ToolsGrid() {
  const tools = [
    { icon: "⚡", title: "Seamless Tool Integrations",   body: "Connect third-party apps you already love to manage tasks, without losing workflow context." },
    { icon: "✦",  title: "Meet Cyan AI",                 body: "Your AI virtual office assistant. Updates smart notifications, visibility tools, and surfaces insights instantly." },
    { icon: "🌐", title: "Virtual Headquarters",          body: "Create a professional virtual office that spans any country, removing location barriers and enabling collaboration." },
    { icon: "⊞",  title: "Central Asset Hub",             body: "Keep projects, files, tokens, and documentation in one place. No more searching across tools you cannot find." },
    { icon: "✔",  title: "Smart Task Management",         body: "Track milestones, assign action items, and monitor workload in real-time across your team permissions." },
    { icon: "🔒", title: "Enterprise-Grade Security",     body: "Protect your business data with enterprise-standard encryption, role-based access control, and customisable user permissions." },
  ];

  return (
    <section className="kw-section" style={{ padding: "96px 24px", backgroundColor: C.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 800,
            letterSpacing: "-0.025em", color: C.text, lineHeight: 1.1, marginBottom: 14,
          }}>
            Efficient and Effective<br />All-in-One Business Workspace
          </h2>
          <p style={{ fontSize: 14, color: C.sec, maxWidth: 480, margin: "0 auto" }}>
            Top-notch integrations and a powerful ecosystem designed to streamline your team's workflow.
          </p>
        </div>
        <div className="kw-tools">
          {tools.map(t => (
            <div key={t.title} className="kw-card-hover" style={{
              backgroundColor: C.card, border: `1px solid ${C.border}`,
              borderRadius: 18, padding: "26px 22px",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 11, marginBottom: 16,
                backgroundColor: "rgba(0,212,255,0.09)", border: "1px solid rgba(0,212,255,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19,
              }}>{t.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 9 }}>{t.title}</div>
              <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────
function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      id: "growth", name: "Growth", highlight: false, cta: "Get Started",
      desc: "Perfect for small businesses and remote teams.",
      monthly: "₦25,000", yearly: "₦20,000",
      features: [
        "Cyan AI for the founder (full access)",
        "Up to 15 team members",
        "10,000 Cyan AI tokens/month",
        "10 Sonnet 4.5 sessions",
        "Team & Focus collaboration",
        "Smart task management",
        "AI-and Kreww collaboration tools",
      ],
    },
    {
      id: "business", name: "Business", highlight: true, cta: "Get Started",
      desc: "Designed for growing agencies and medium scale enterprises.",
      monthly: "₦65,000", yearly: "₦52,000",
      features: [
        "Full Cyan AI for all members",
        "Unlimited members — no capacity",
        "Full-priority email support",
        "50,000 Cyan AI tokens",
        "Auditor SOC 2 audit token access",
        "AI integration & team collaboration",
        "Team analytics & data sync",
        "Enterprise-grade data security",
        "Priority support",
      ],
    },
    {
      id: "enterprise", name: "Enterprise", highlight: false, cta: "Contact Sales",
      desc: "Built for large-scale corporations consulting and executive teams.",
      monthly: "Custom", yearly: "Custom",
      features: [
        "Custom AI token allocation",
        "Dedicated Customer Success lead",
        "Full-system API access",
        "Custom security & SLAs",
        "Auditor SOC 2 audit token",
        "Everything included in Business",
      ],
    },
  ];

  return (
    <section className="kw-section" style={{ padding: "96px 24px", backgroundColor: C.card }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 800,
            letterSpacing: "-0.025em", color: C.text, lineHeight: 1.1, marginBottom: 14,
          }}>
            Tailored Plans for<br />Teams of Any Scale
          </h2>
          <p style={{ fontSize: 14, color: C.sec, maxWidth: 460, margin: "0 auto 28px" }}>
            No hidden fees or complicated pricing. Pick the plan that fits your team and start growing today.
          </p>
          {/* Billing toggle */}
          <div style={{
            display: "inline-flex", backgroundColor: C.bg,
            border: `1px solid ${C.border}`, borderRadius: 100, padding: 4,
          }}>
            {["Monthly", "Yearly"].map(label => (
              <button key={label} onClick={() => setYearly(label === "Yearly")} style={{
                padding: "7px 24px", borderRadius: 100, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 700, transition: "all 150ms",
                backgroundColor: (label === "Yearly") === yearly ? C.accent : "transparent",
                color: (label === "Yearly") === yearly ? C.bg : C.muted,
              }}>{label}</button>
            ))}
          </div>
        </div>

        <div className="kw-plans">
          {plans.map(plan => (
            <div key={plan.id} style={{
              position: "relative",
              backgroundColor: plan.highlight ? "rgba(0,212,255,0.03)" : C.bg,
              border: plan.highlight ? `2px solid rgba(0,212,255,0.38)` : `1px solid ${C.border}`,
              borderRadius: 20, padding: "28px 22px",
              boxShadow: plan.highlight ? "0 0 50px rgba(0,212,255,0.07)" : "none",
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                  backgroundColor: C.accent, color: C.bg,
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.08em",
                  textTransform: "uppercase", borderRadius: 100, padding: "4px 14px",
                  whiteSpace: "nowrap",
                }}>Recommended</div>
              )}

              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.muted, marginBottom: 6 }}>
                {plan.name}
              </div>
              <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.55, marginBottom: 20, minHeight: 38 }}>
                {plan.desc}
              </div>
              <div style={{ marginBottom: 22 }}>
                <span style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>
                  {yearly ? plan.yearly : plan.monthly}
                </span>
                {plan.monthly !== "Custom" && (
                  <span style={{ fontSize: 12, color: C.muted }}> /monthly</span>
                )}
              </div>

              <Link href={plan.id === "enterprise" ? "/contact" : "/signup"}
                className={plan.highlight ? "kw-plan-cta-solid" : "kw-plan-cta-ghost"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  height: 40, borderRadius: 10, fontSize: 13, fontWeight: 700,
                  marginBottom: 22, transition: "all 150ms",
                  ...(plan.highlight
                    ? { backgroundColor: C.accent, color: C.bg, border: "none", boxShadow: "0 4px 16px rgba(0,212,255,0.28)" }
                    : { backgroundColor: "transparent", color: C.accent, border: "1px solid rgba(0,212,255,0.3)" }),
                }}>{plan.cta}</Link>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: C.sec, lineHeight: 1.5 }}>
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

// ─── FAQ ──────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the difference between Cyan AI tokens and Sonnet sessions?",
      a: "Cyan AI tokens power your real-time virtual office assistant updates — smart notifications, visibility tools, and summaries. Sonnet sessions are full conversational AI sessions where you can dive deep into business intelligence with Cyan AI.",
    },
    {
      q: "Can I add more team members to the Growth plan later?",
      a: "Yes. You can add new members to the Growth plan with up to a cap of 15 members. If you need to scale beyond that, you can upgrade to Business at any time from your billing settings without losing any existing data or configurations.",
    },
    {
      q: "Do my unused Cyan AI tokens roll over to the next month?",
      a: "No. For now, Cyan AI tokens do not roll over. Unused tokens expire at the end of each billing period. We are working on a token savings feature that will allow teams to bank unused compute for future strategic work.",
    },
    {
      q: "How secure is our company data with Cyan AI?",
      a: "Completely. Kreww uses industry-standard end-to-end encryption. Your workspace data is never used to train AI models, and access logs are available to workspace administrators.",
    },
  ];

  return (
    <section className="kw-section" style={{ padding: "96px 24px", backgroundColor: C.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800,
            letterSpacing: "-0.025em", color: C.text, marginBottom: 14,
          }}>Frequently Asked Operations</h2>
          <p style={{ fontSize: 14, color: C.sec, maxWidth: 460, margin: "0 auto" }}>
            Got questions about features, security, or billing support? Here is everything your teams need to know.
          </p>
        </div>
        <div className="kw-faq">
          {faqs.map((faq, i) => (
            <div key={i} className="kw-faq-item" onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{
              backgroundColor: C.card, border: `1px solid ${C.border}`,
              borderRadius: 18, padding: "22px 22px", cursor: "pointer",
              transition: "border-color 150ms",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                  backgroundColor: "rgba(0,212,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 800, color: C.accent,
                }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text, lineHeight: 1.45 }}>{faq.q}</div>
                  {openIdx === i && (
                    <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.7, marginTop: 12 }}>{faq.a}</div>
                  )}
                </div>
                <div style={{ color: C.muted, fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>
                  {openIdx === i ? "−" : "+"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="kw-cta" style={{
      padding: "88px 24px", textAlign: "center",
      background: `radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%), ${C.card}`,
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800,
          letterSpacing: "-0.03em", color: C.text, lineHeight: 1.04, marginBottom: 18,
        }}>
          Bring Your Kreww<br />Together Today.
        </h2>
        <p style={{ fontSize: 15, color: C.sec, maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.65 }}>
          Eliminate the digital noise. Experience a virtual office that works as
          hard as you do and keeps your teams connected, productive and profitable.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" className="kw-btn-primary" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            height: 46, padding: "0 28px", borderRadius: 10,
            backgroundColor: C.accent, color: C.bg, fontSize: 15, fontWeight: 700,
            border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(0,212,255,0.3)",
          }}>Start Growing <ArrowRight /></Link>
          <Link href="/demo" className="kw-btn-outline" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            height: 46, padding: "0 28px", borderRadius: 10,
            backgroundColor: "transparent", color: C.text, fontSize: 15, fontWeight: 700,
            border: `1.5px solid ${C.border}`, cursor: "pointer",
          }}>Book Demo</Link>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────
function Footer() {
  const cols: Record<string, string[]> = {
    Tools:        ["Cyan AI", "Virtual Office", "Chat", "Kanban", "Online Meeting", "Notice Board", "Team collaboration"],
    "Our Company":["Our Team", "Blog", "Investor", "Product"],
    Resources:    ["Support", "Help Center", "Changelog", "Terms of Use", "Privacy Policy"],
  };
  return (
    <footer style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}`, padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="kw-footer-grid" style={{ marginBottom: 48 }}>
          {/* Brand */}
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
              {["𝕏", "▣", "in"].map(icon => (
                <a key={icon} href="#" style={{
                  width: 30, height: 30, borderRadius: 7,
                  backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.muted, fontSize: 13, transition: "background 120ms",
                }}>{icon}</a>
              ))}
            </div>
          </div>

          {Object.entries(cols).map(([sec, links]) => (
            <div key={sec}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.09em", color: C.text, marginBottom: 16 }}>
                {sec}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="kw-foot-link" style={{ fontSize: 13, color: C.muted, transition: "color 120ms" }}>{l}</a>
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

// ─── PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <OneWorkspace />
        <CompleteVisibility />
        <ToolsGrid />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
