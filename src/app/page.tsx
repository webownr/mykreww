"use client";

import { useState } from "react";
import Link from "next/link";

// ─── ICONS (inline SVGs — no extra deps needed) ────────────────────────────
const ChevronDown = ({ className = "" }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Check = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 7l3.5 3.5L12 3" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Menu = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const X = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const Sparkle = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1v2M6 9v2M1 6h2M9 6h2M2.5 2.5l1.5 1.5M8 8l1.5 1.5M8 4L9.5 2.5M2.5 9.5L4 8" stroke="#00D4FF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────────
const T = {
  bgPrimary:  "#050D1A",
  bgCard:     "#0F1C2E",
  bgSidebar:  "#080F1A",
  border:     "#1A2D45",
  accent:     "#00D4FF",
  accentDim:  "#0099BB",
  textPrimary:"#F0F4F8",
  textSec:    "#8BA0B8",
  textMuted:  "#4A6080",
  success:    "#00E676",
  warning:    "#FFB300",
  danger:     "#FF5252",
};

// ─── SHARED STYLES ─────────────────────────────────────────────────────────
const btnPrimary: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  gap: 8, height: 44, padding: "0 28px", borderRadius: 10,
  backgroundColor: T.accent, color: T.bgPrimary,
  fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer",
  boxShadow: "0 4px 24px rgba(0,212,255,0.28)",
  transition: "filter 150ms, transform 150ms",
};
const btnOutline: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  gap: 8, height: 44, padding: "0 28px", borderRadius: 10,
  backgroundColor: "transparent", color: T.textPrimary,
  fontSize: 14, fontWeight: 700,
  border: `1.5px solid ${T.border}`, cursor: "pointer",
  transition: "border-color 150ms, color 150ms",
};

// ─── NAV ───────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [compOpen, setCompOpen] = useState(false);

  const dropStyle: React.CSSProperties = {
    position: "absolute", top: "calc(100% + 8px)", left: 0,
    backgroundColor: T.bgCard, border: `1px solid ${T.border}`,
    borderRadius: 14, padding: "6px 6px", minWidth: 200,
    boxShadow: "0 16px 48px rgba(0,0,0,0.5)", zIndex: 100,
  };
  const dropItem: React.CSSProperties = {
    display: "block", padding: "9px 12px", borderRadius: 8,
    color: T.textSec, fontSize: 13, fontWeight: 500,
    textDecoration: "none", transition: "background 120ms",
  };
  const navLink: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 5,
    color: T.textSec, fontSize: 14, fontWeight: 500,
    background: "none", border: "none", cursor: "pointer",
    padding: "6px 10px", borderRadius: 8,
    transition: "color 120ms",
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "rgba(5,13,26,0.88)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${T.border}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: 60,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            backgroundColor: "rgba(0,212,255,0.12)",
            border: "1px solid rgba(0,212,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: T.accent, fontWeight: 800, fontSize: 13,
          }}>K</div>
          <span style={{ color: T.textPrimary, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>KREWW</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="kreww-desktop-nav">
          {/* Tools */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}>
            <button style={navLink}>Tools <ChevronDown /></button>
            {toolsOpen && (
              <div style={dropStyle}>
                {["The Office", "Tasks", "Chat", "Notice Board", "Documents", "Notes", "In-App Browser"].map(l => (
                  <a key={l} href="#" style={dropItem}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>{l}</a>
                ))}
              </div>
            )}
          </div>
          {/* Resource */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setResOpen(true)}
            onMouseLeave={() => setResOpen(false)}>
            <button style={navLink}>Resource <ChevronDown /></button>
            {resOpen && (
              <div style={dropStyle}>
                {["Blog", "Help Centre", "Changelog"].map(l => (
                  <a key={l} href="#" style={dropItem}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>{l}</a>
                ))}
              </div>
            )}
          </div>
          {/* Our Company */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setCompOpen(true)}
            onMouseLeave={() => setCompOpen(false)}>
            <button style={navLink}>Our Company <ChevronDown /></button>
            {compOpen && (
              <div style={dropStyle}>
                {["About", "Our Team", "Investors", "Blog"].map(l => (
                  <a key={l} href="#" style={dropItem}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>{l}</a>
                ))}
              </div>
            )}
          </div>
          <Link href="/pricing" style={{ ...navLink, textDecoration: "none" } as React.CSSProperties}>Pricing</Link>
        </nav>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="kreww-desktop-nav">
          <Link href="/login" style={{ color: T.textPrimary, fontSize: 14, fontWeight: 600, textDecoration: "none", padding: "6px 14px" }}>
            Log in
          </Link>
          <Link href="/signup" style={{ ...btnPrimary, height: 36, padding: "0 18px", fontSize: 13, boxShadow: "0 2px 12px rgba(0,212,255,0.25)" } as React.CSSProperties}>
            Book Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", color: T.textPrimary, padding: 4 }}
          className="kreww-mobile-nav">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          backgroundColor: T.bgPrimary, borderTop: `1px solid ${T.border}`,
          padding: "16px 24px 24px",
        }}>
          {["Tools", "Resource", "Our Company", "Pricing"].map(l => (
            <a key={l} href="#" style={{ display: "block", color: T.textSec, fontSize: 15, fontWeight: 500, padding: "10px 0", textDecoration: "none", borderBottom: `1px solid ${T.border}` }}>{l}</a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            <Link href="/login" style={{ ...btnOutline, width: "100%", justifyContent: "center" }}>Log in</Link>
            <Link href="/signup" style={{ ...btnPrimary, width: "100%", justifyContent: "center" }}>Book Demo</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .kreww-desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .kreww-mobile-nav { display: none !important; } }
      `}</style>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      paddingTop: 88, paddingBottom: 80,
      background: `radial-gradient(ellipse 90% 60% at 50% -5%, rgba(0,212,255,0.10) 0%, transparent 70%), ${T.bgPrimary}`,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        {/* Eyebrow pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          border: "1px solid rgba(0,212,255,0.22)",
          backgroundColor: "rgba(0,212,255,0.07)",
          borderRadius: 100, padding: "6px 14px",
          color: T.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
          textTransform: "uppercase", marginBottom: 28,
        }}>
          <Sparkle />
          THE OFFICE FOR BUSINESSES
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 5.5vw, 58px)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.025em",
          color: T.textPrimary,
          margin: "0 auto 24px",
          maxWidth: 700,
        }}>
          Your team deserves a real office
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          color: T.textSec, lineHeight: 1.65,
          maxWidth: 560, margin: "0 auto 40px",
        }}>
          Stop running your business in WhatsApp groups. Kreww gives your remote team a professional virtual office, a unified platform, one place to work, collaborate, and grow.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={btnPrimary}>
            Start Growing <ArrowRight />
          </Link>
          <Link href="/demo" style={btnOutline}>
            Book Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── STATS BAR ────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "2000+", label: "Businesses" },
    { value: "80",    label: "Businesses" },
    { value: "98%",   label: "Businesses" },
    { value: "24/7",  label: "Support Availability" },
  ];
  return (
    <section style={{
      borderTop: `1px solid ${T.border}`,
      borderBottom: `1px solid ${T.border}`,
      backgroundColor: T.bgCard,
      padding: "40px 24px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
      }}>
        {stats.map(s => (
          <div key={s.value} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: T.textPrimary, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
            <div style={{ fontSize: 13, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:600px){.kreww-stats{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}

// ─── ONE WORKSPACE SECTION ─────────────────────────────────────────────────
function OneWorkspace() {
  const cards = [
    {
      icon: "◼",
      title: "Unified Operations",
      body: "Kreww keeps your office running for disconnected teams with automated, highly synchronised workflows.",
    },
    {
      icon: "#",
      title: "Context-Aware Alerts",
      body: "Context-Aware AI sync keeps the business intelligence on your workspace status presented on your desktop.",
    },
    {
      icon: "↗",
      title: "Real-Time Presence",
      body: "Powerful tools to your team with workspace, presence, and status information right at their fingertips.",
    },
    {
      icon: "⇥",
      title: "Push Communication",
      body: "Asynchronous collaboration brings the gap between remote workers. Ship tasks quickly without context loss.",
    },
  ];

  return (
    <section style={{ padding: "96px 24px", backgroundColor: T.bgPrimary }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
      }}>
        {/* Left: 2×2 grid of cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {cards.map(c => (
            <div key={c.title} style={{
              backgroundColor: T.bgCard,
              border: `1px solid ${T.border}`,
              borderRadius: 16, padding: "22px 20px",
              transition: "transform 200ms, box-shadow 200ms",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                backgroundColor: "rgba(0,212,255,0.10)",
                border: "1px solid rgba(0,212,255,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: T.accent, fontSize: 16, marginBottom: 14,
              }}>{c.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: T.textSec, lineHeight: 1.65 }}>{c.body}</div>
            </div>
          ))}
        </div>

        {/* Right: copy */}
        <div>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: "-0.025em", color: T.textPrimary,
            marginBottom: 22,
          }}>
            One workspace.<br />Every tool your<br />team needs.
          </h2>
          <p style={{ fontSize: 15, color: T.textSec, lineHeight: 1.7 }}>
            Your entire office space integrated in a single platform. Everything your team needs to run a smooth company workflow, putting every tool and team member right at your fingertips.
          </p>
        </div>
      </div>
      <style>{`@media(max-width:900px){.kreww-onewrk{grid-template-columns:1fr!important}.kreww-cards{grid-template-columns:1fr 1fr!important}}`}</style>
    </section>
  );
}

// ─── COMPLETE VISIBILITY ───────────────────────────────────────────────────
function CompleteVisibility() {
  return (
    <section style={{ padding: "96px 24px", backgroundColor: T.bgCard }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center",
      }}>
        {/* Left copy */}
        <div>
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em",
            color: T.textPrimary, marginBottom: 24,
          }}>
            Complete visibility.<br />Zero friction.
          </h2>
          <p style={{ fontSize: 15, color: T.textSec, lineHeight: 1.7 }}>
            This is what running a business looks like with Kreww. A centralised command centre that gives your entire organisation a birds-eye view of all operations in a single, beautifully organised feed.
          </p>
        </div>

        {/* Right: app screenshot mockup */}
        <div style={{
          borderRadius: 18,
          overflow: "hidden",
          border: `1px solid ${T.border}`,
          boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,212,255,0.06)",
        }}>
          <AppMockup />
        </div>
      </div>
    </section>
  );
}

function AppMockup() {
  const tasks = [
    { col: "To Do",       items: ["Brand refresh", "Onboarding copy"],  dot: T.textMuted },
    { col: "In Progress", items: ["Dashboard v2", "API docs"],           dot: T.accent },
    { col: "Done",        items: ["Auth flow", "Supabase schema"],       dot: T.success },
  ];
  const members = [
    { init: "AA", color: T.accent },
    { init: "VO", color: T.success },
    { init: "CM", color: T.warning },
    { init: "AK", color: "#9B59B6" },
  ];

  return (
    <div style={{ backgroundColor: T.bgPrimary }}>
      {/* Chrome bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        backgroundColor: T.bgSidebar,
        borderBottom: `1px solid ${T.border}`,
        padding: "10px 14px",
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "rgba(255,82,82,0.7)" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "rgba(255,179,0,0.7)" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "rgba(0,230,118,0.7)" }} />
        </div>
        <div style={{
          flex: 1, maxWidth: 200, backgroundColor: T.bgCard,
          borderRadius: 6, padding: "4px 10px",
          fontSize: 11, color: T.textMuted,
        }}>app.mykreww.com</div>
        <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
          {["Office", "Tasks", "Chat"].map((t, i) => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 5,
              backgroundColor: i === 1 ? "rgba(0,212,255,0.14)" : "transparent",
              color: i === 1 ? T.accent : T.textMuted,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{
          width: 44, flexShrink: 0,
          backgroundColor: T.bgSidebar,
          borderRight: `1px solid ${T.border}`,
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "12px 0", gap: 10,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            backgroundColor: "rgba(0,212,255,0.14)",
            color: T.accent, fontSize: 12, fontWeight: 800,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>K</div>
          {["⊞", "☰", "◻", "📄", "🔔"].map((icon, i) => (
            <div key={i} style={{
              width: 32, height: 32, borderRadius: 8, display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 14,
              backgroundColor: i === 1 ? "rgba(0,212,255,0.12)" : "transparent",
              color: i === 1 ? T.accent : T.textMuted,
            }}>{icon}</div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: "16px 16px 18px" }}>
          {/* Header */}
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 11, color: T.textMuted }}>Good morning, Ayo. </span>
            <span style={{ fontSize: 11, color: T.accent, fontWeight: 600 }}>4 members in the office.</span>
          </div>

          {/* Kanban */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
            {tasks.map(col => (
              <div key={col.col}>
                <div style={{ fontSize: 10, fontWeight: 700, color: col.dot, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                  {col.col}
                </div>
                {col.items.map(item => (
                  <div key={item} style={{
                    backgroundColor: T.bgCard, border: `1px solid ${T.border}`,
                    borderRadius: 8, padding: "7px 9px",
                    fontSize: 10, color: T.textSec, marginBottom: 6,
                  }}>{item}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Presence strip */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            backgroundColor: T.bgCard, border: `1px solid ${T.border}`,
            borderRadius: 10, padding: "8px 12px",
          }}>
            <div style={{ display: "flex" }}>
              {members.map((m, i) => (
                <div key={m.init} style={{
                  width: 24, height: 24, borderRadius: "50%",
                  backgroundColor: `${m.color}20`, color: m.color,
                  fontSize: 8, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginLeft: i === 0 ? 0 : -6,
                  border: `2px solid ${T.bgCard}`,
                }}>{m.init}</div>
              ))}
            </div>
            <span style={{ fontSize: 10, color: T.textSec }}>4 members online now</span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: T.success, marginLeft: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ALL-IN-ONE TOOLS GRID ─────────────────────────────────────────────────
function ToolsGrid() {
  const tools = [
    {
      title: "Seamless Tool Integrations",
      body: "Connect third-party apps you already love to manage tasks, without losing workflow context.",
      icon: "⚡",
    },
    {
      title: "Meet Cyan AI",
      body: "Your AI virtual office assistant. Updates smart notifications, visibility tools, and surfaces insights instantly.",
      icon: "✦",
    },
    {
      title: "Virtual Headquarters",
      body: "Create a professional virtual office that spans any country, removing location barriers and enabling collaboration.",
      icon: "🌐",
    },
    {
      title: "Central Asset Hub",
      body: "Keep projects, files, tokens, and documentation in one place. No more searching across tools you cannot find.",
      icon: "⊞",
    },
    {
      title: "Smart Task Management",
      body: "Track milestones, assign action items, and monitor workload in real-time across your team permissions.",
      icon: "✔",
    },
    {
      title: "Enterprise-Grade Security",
      body: "Protect your business data with enterprise-standard encryption, role-based access control, and customisable user permissions.",
      icon: "🔒",
    },
  ];

  return (
    <section style={{ padding: "96px 24px", backgroundColor: T.bgPrimary }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 42px)",
            fontWeight: 800, letterSpacing: "-0.025em",
            color: T.textPrimary, lineHeight: 1.1, marginBottom: 16,
          }}>
            Efficient and Effective<br />All-in-One Business Workspace
          </h2>
          <p style={{ fontSize: 14, color: T.textSec, maxWidth: 500, margin: "0 auto" }}>
            Top-notch integrations and a powerful ecosystem designed to streamline your team&apos;s workflow.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
        }}>
          {tools.map(t => (
            <div key={t.title} style={{
              backgroundColor: T.bgCard, border: `1px solid ${T.border}`,
              borderRadius: 18, padding: "26px 24px",
              transition: "transform 200ms, box-shadow 200ms",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,212,255,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                backgroundColor: "rgba(0,212,255,0.09)",
                border: "1px solid rgba(0,212,255,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, marginBottom: 16,
              }}>{t.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 9 }}>{t.title}</div>
              <div style={{ fontSize: 13, color: T.textSec, lineHeight: 1.65 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.kreww-tools-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:600px){.kreww-tools-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

// ─── PRICING ───────────────────────────────────────────────────────────────
function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      id: "growth", name: "Growth",
      desc: "Perfect for small businesses and remote teams.",
      monthly: "₦25,000", yearly: "₦20,000",
      highlight: false, cta: "Get Started",
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
      id: "business", name: "Business",
      desc: "Designed for growing agencies and medium scale enterprises.",
      monthly: "₦65,000", yearly: "₦52,000",
      highlight: true, cta: "Get Started",
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
      id: "enterprise", name: "Enterprise",
      desc: "Built for large-scale corporations consulting and executive teams.",
      monthly: "Custom", yearly: "Custom",
      highlight: false, cta: "Contact Sales",
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
    <section style={{ padding: "96px 24px", backgroundColor: T.bgCard }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 42px)",
            fontWeight: 800, letterSpacing: "-0.025em",
            color: T.textPrimary, lineHeight: 1.1, marginBottom: 14,
          }}>
            Tailored Plans for<br />Teams of Any Scale
          </h2>
          <p style={{ fontSize: 14, color: T.textSec, maxWidth: 480, margin: "0 auto 28px" }}>
            No hidden fees or complicated pricing. Pick the plan that fits your team and start growing today.
          </p>

          {/* Toggle */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            backgroundColor: T.bgPrimary, border: `1px solid ${T.border}`,
            borderRadius: 100, padding: 4,
          }}>
            <button onClick={() => setYearly(false)} style={{
              padding: "7px 24px", borderRadius: 100, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 700,
              backgroundColor: !yearly ? T.accent : "transparent",
              color: !yearly ? T.bgPrimary : T.textMuted,
              transition: "all 150ms",
            }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{
              padding: "7px 24px", borderRadius: 100, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 700,
              backgroundColor: yearly ? T.accent : "transparent",
              color: yearly ? T.bgPrimary : T.textMuted,
              transition: "all 150ms",
            }}>Yearly</button>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start",
        }}>
          {plans.map(plan => (
            <div key={plan.id} style={{
              position: "relative",
              backgroundColor: plan.highlight ? "rgba(0,212,255,0.03)" : T.bgPrimary,
              border: plan.highlight ? `2px solid rgba(0,212,255,0.38)` : `1px solid ${T.border}`,
              borderRadius: 20, padding: "28px 24px",
              boxShadow: plan.highlight ? "0 0 48px rgba(0,212,255,0.07)" : "none",
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                  backgroundColor: T.accent, color: T.bgPrimary,
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
                  borderRadius: 100, padding: "4px 14px",
                  whiteSpace: "nowrap",
                }}>Recommended</div>
              )}

              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: T.textMuted, marginBottom: 6 }}>
                {plan.name}
              </div>
              <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55, marginBottom: 20, minHeight: 40 }}>
                {plan.desc}
              </div>

              <div style={{ marginBottom: 22 }}>
                <span style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 800, color: T.textPrimary, letterSpacing: "-0.02em" }}>
                  {yearly ? plan.yearly : plan.monthly}
                </span>
                {plan.monthly !== "Custom" && (
                  <span style={{ fontSize: 13, color: T.textMuted }}> /monthly</span>
                )}
              </div>

              <Link href={plan.id === "enterprise" ? "/contact" : "/signup"} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                height: 40, borderRadius: 10, fontSize: 13, fontWeight: 700,
                textDecoration: "none", transition: "all 150ms", marginBottom: 24,
                ...(plan.highlight
                  ? { backgroundColor: T.accent, color: T.bgPrimary, border: "none", boxShadow: "0 4px 16px rgba(0,212,255,0.25)" }
                  : { backgroundColor: "transparent", color: T.accent, border: `1px solid rgba(0,212,255,0.3)` }),
              }}>
                {plan.cta}
              </Link>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: T.textSec, lineHeight: 1.5 }}>
                    <Check size={13} /> {f}
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

// ─── FAQ ───────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the difference between Cyan AI tokens and Sonnet sessions?",
      a: "Cyan AI tokens power your real-time virtual office assistant updates — smart notifications, visibility tools, and summaries. Sonnet sessions are full conversational AI sessions for deep business intelligence work with Cyan AI.",
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
    <section style={{ padding: "96px 24px", backgroundColor: T.bgPrimary }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800, letterSpacing: "-0.025em",
            color: T.textPrimary, marginBottom: 14,
          }}>
            Frequently Asked Operations
          </h2>
          <p style={{ fontSize: 14, color: T.textSec, maxWidth: 480, margin: "0 auto" }}>
            Got questions about features, security, or billing support? Here is everything your teams need to know.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
        }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              backgroundColor: T.bgCard, border: `1px solid ${T.border}`,
              borderRadius: 18, padding: "24px 24px",
              cursor: "pointer",
            }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                  backgroundColor: "rgba(0,212,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 800, color: T.accent,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, lineHeight: 1.45 }}>
                    {faq.q}
                  </div>
                  {open === i && (
                    <div style={{ fontSize: 13, color: T.textSec, lineHeight: 1.7, marginTop: 12 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
                <div style={{ color: T.textMuted, fontSize: 16, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>
                  {open === i ? "−" : "+"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.kreww-faq{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

// ─── CTA BANNER ────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{
      padding: "88px 24px",
      background: `radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%), ${T.bgCard}`,
      borderTop: `1px solid ${T.border}`,
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800, letterSpacing: "-0.03em",
          color: T.textPrimary, lineHeight: 1.05, marginBottom: 18,
        }}>
          Bring Your Kreww<br />Together Today.
        </h2>
        <p style={{ fontSize: 15, color: T.textSec, maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.65 }}>
          Eliminate the digital noise. Experience a virtual office that works as hard as you do and keeps your teams connected, productive and profitable.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={btnPrimary}>
            Start Growing <ArrowRight />
          </Link>
          <Link href="/demo" style={btnOutline}>
            Book Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  const cols = {
    Tools: ["Cyan AI", "Virtual Office", "Chat", "Kanban", "Online Meeting", "Notice Board", "Team collaboration"],
    "Our Company": ["Our Team", "Blog", "Investor", "Product"],
    Resources: ["Support", "Help Center", "Changelog", "Terms of Use", "Privacy Policy"],
  };

  return (
    <footer style={{
      backgroundColor: T.bgPrimary,
      borderTop: `1px solid ${T.border}`,
      padding: "60px 24px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7,
                backgroundColor: "rgba(0,212,255,0.12)",
                border: "1px solid rgba(0,212,255,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: T.accent, fontWeight: 800, fontSize: 12,
              }}>K</div>
              <span style={{ color: T.textPrimary, fontWeight: 800, fontSize: 14 }}>KREWW</span>
            </div>
            <p style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Your team, together. A real virtual office for remote teams — built in Africa, for the world.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "▣", "in"].map(icon => (
                <a key={icon} href="#" style={{
                  width: 32, height: 32, borderRadius: 8,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: `1px solid ${T.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: T.textMuted, fontSize: 14, textDecoration: "none",
                  transition: "background 120ms",
                }}>{icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.09em", color: T.textPrimary, marginBottom: 16 }}>
                {section}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 13, color: T.textMuted, textDecoration: "none", transition: "color 120ms" }}
                      onMouseEnter={e => (e.currentTarget.style.color = T.textPrimary)}
                      onMouseLeave={e => (e.currentTarget.style.color = T.textMuted)}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${T.border}`,
          paddingTop: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: T.textMuted }}>© {new Date().getFullYear()} KREWW. All rights reserved.</span>
          <a href="mailto:hello@mykreww.com" style={{ fontSize: 12, color: T.textMuted, textDecoration: "none" }}>
            hello@mykreww.com
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE EXPORT ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #050D1A; color: #F0F4F8; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; -webkit-font-smoothing: antialiased; }
        a { text-decoration: none; }
        button { font-family: inherit; }
        @media (max-width: 900px) {
          .kreww-onewrk   { grid-template-columns: 1fr !important; }
          .kreww-visibility{ grid-template-columns: 1fr !important; }
          .kreww-pricing   { grid-template-columns: 1fr !important; }
          .kreww-footer    { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .kreww-faq       { grid-template-columns: 1fr !important; }
          .kreww-tools     { grid-template-columns: repeat(2, 1fr) !important; }
          .kreww-stats     { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .kreww-tools     { grid-template-columns: 1fr !important; }
          .kreww-stats     { grid-template-columns: repeat(2, 1fr) !important; }
          .kreww-footer    { grid-template-columns: 1fr !important; }
        }
      `}</style>

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
