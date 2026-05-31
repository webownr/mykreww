"use client";
// ═══════════════════════════════════════════════════════════════════════════
// FILE 2: src/app/features/notice-board/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// Copy everything below into that file:

import Link from "next/link";
import { Nav, Footer, Section, PageHero, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline } from "@/components/_shared";

const notices = [
  { priority: "urgent",    label: "Urgent",    color: "#FF5252", title: "System maintenance — Saturday 2 AM WAT", body: "The platform will be down for 30 mins. Plan accordingly.", pinned: true, reactions: ["👍 8", "✅ 5"] },
  { priority: "important", label: "Important", color: "#FFB300", title: "Q2 OKR review — Thursday 3 PM", body: "All team leads to present progress. Slides due by Wednesday.", pinned: false, reactions: ["📌 3"] },
  { priority: "info",      label: "Info",      color: "#00D4FF", title: "New Figma components in shared library", body: "Victor has uploaded the updated design system. Check the docs.", pinned: false, reactions: ["🎨 6", "❤️ 4"] },
];

export default function NoticeBoardPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Notice Board"
          title={<>Company-wide announcements<br />that actually get seen</>}
          subtitle="Priority-tagged notices ensure urgent messages rise to the top. Everyone sees the same board, in real time."
          cta="Start free trial"
        />
        <Section bg={C.card}>
          <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
            {notices.map(n => (
              <div key={n.title} style={{
                backgroundColor: C.bg, border: `1px solid ${C.border}`,
                borderRadius: 16, padding: "20px 20px",
                borderLeft: `3px solid ${n.color}`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${n.color}18`, color: n.color, borderRadius: 6, padding: "2px 8px" }}>{n.label}</span>
                  {n.pinned && <span style={{ fontSize: 10, color: C.muted }}>📌 Pinned</span>}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 6 }}>{n.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.6, marginBottom: 12 }}>{n.body}</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {n.reactions.map(r => (
                    <span key={r} style={{ fontSize: 12, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "3px 10px", color: C.sec }}>{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <div className="kw-3col">
            {[
              { icon: "🔴", title: "Priority Tags",      body: "Mark notices as Urgent, Important, or Info. Everyone knows what needs immediate attention." },
              { icon: "📌", title: "Pin to Top",          body: "Pin critical notices so they're always the first thing the team sees when they open the board." },
              { icon: "💬", title: "Comments & Reactions",body: "Team members can react to notices and leave comments — keeping feedback in one place." },
            ].map(f => (
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
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Get started <ArrowRight /></Link>
            <Link href="/pricing" className="kw-btn-outline" style={btnOutline()}>See pricing</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
