"use client";
// Paste into: src/app/features/notice-board/page.tsx

import Link from "next/link";
import { Nav, Footer, Section, PageHero, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline, HERO_IMAGES } from "@/components/_shared";

const notices = [
  { priority: "urgent",    label: "Urgent",    color: C.red,    title: "System maintenance — Saturday 2 AM WAT",   body: "The platform will be down for 30 minutes. Please save all work and plan accordingly.",    pinned: true,  reactions: ["👍 8", "✅ 5"] },
  { priority: "important", label: "Important", color: C.amber,  title: "Q2 OKR review — Thursday 3 PM",            body: "All team leads to present progress. Slides due by Wednesday 5 PM.",                       pinned: false, reactions: ["📌 3", "👀 2"] },
  { priority: "info",      label: "Info",      color: C.accent, title: "New Figma components added to shared library", body: "Victor has uploaded the updated design system. Check the Docs section for details.",   pinned: false, reactions: ["🎨 6", "❤️ 4"] },
  { priority: "info",      label: "Info",      color: C.accent, title: "Welcome Amara to the team! 🎉",            body: "Amara joins as Frontend Dev. She's working on the mobile nav — say hello in #general.",      pinned: false, reactions: ["🎉 12", "👋 9"] },
];

const feats = [
  { icon: "🔴", title: "Priority Tags",         body: "Mark notices as Urgent, Important, or Info. The team knows exactly what needs immediate attention at a glance." },
  { icon: "📌", title: "Pin to Top",             body: "Pin critical notices so they're always the first thing the team sees when they open the board." },
  { icon: "💬", title: "Comments & Reactions",   body: "Team members can react to notices and leave threaded comments — all feedback lives in one place." },
  { icon: "⚡", title: "Real-Time Delivery",     body: "Notices appear instantly via Supabase Realtime. Post once and the entire team sees it immediately." },
  { icon: "🔔", title: "Push Notifications",     body: "Urgent notices trigger a notification badge so even offline teammates see it the moment they return." },
  { icon: "🏢", title: "Workspace-Wide",         body: "Every notice is visible to the entire workspace. No siloed DMs, no missed announcements." },
];

export default function NoticeBoardPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Notice Board"
          title={<>Company announcements<br />that actually get seen</>}
          backgroundImage={HERO_IMAGES.notices}
          subtitle="Priority-tagged notices ensure urgent messages rise to the top. Pin, react, and comment — the whole team stays informed in real time."
          cta="Start free trial"
        />

        {/* Notice board mockup */}
        <Section bg={C.card}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text }}>Notice Board</h3>
              <button style={{ height: 34, padding: "0 16px", borderRadius: 8, backgroundColor: C.accent, color: C.bg, fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer" }}>+ Post notice</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {notices.map(n => (
                <div key={n.title} style={{
                  backgroundColor: C.bg, borderRadius: 16, padding: "18px 20px",
                  border: `1px solid ${C.border}`, borderLeft: `3px solid ${n.color}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${n.color}18`, color: n.color, borderRadius: 6, padding: "2px 8px" }}>{n.label}</span>
                    {n.pinned && <span style={{ fontSize: 11, color: C.muted }}>📌 Pinned</span>}
                    <span style={{ marginLeft: "auto", fontSize: 11, color: C.muted }}>2h ago</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 6 }}>{n.title}</div>
                  <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.6, marginBottom: 12 }}>{n.body}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {n.reactions.map(r => (
                      <span key={r} style={{ fontSize: 12, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "3px 10px", color: C.sec, cursor: "pointer" }}>{r}</span>
                    ))}
                    <span style={{ fontSize: 12, color: C.muted, cursor: "pointer", padding: "3px 6px" }}>+ React</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>Every announcement, front and centre</h2>
          </div>
          <div className="kw-3col">
            {feats.map(f => (
              <div key={f.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontSize: 24, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Keep your whole team informed</h2>
          <p style={{ fontSize: 16, color: C.sec, marginBottom: 32 }}>14-day free trial. No card required.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Get started free <ArrowRight /></Link>
            <Link href="/pricing" className="kw-btn-outline" style={btnOutline()}>See pricing</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
