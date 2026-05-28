"use client";
// Paste into: src/app/features/the-office/page.tsx

import Link from "next/link";
import { Nav, Footer, Section, PageHero, Eyebrow, CheckIcon, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline } from "@/components/_shared";

const deskCards = [
  { init: "AA", name: "Ayomide A.", role: "Lead Developer", task: "Building The Office", status: "online",  color: C.accent },
  { init: "VO", name: "Victor O.",  role: "Creative Director", task: "Designing brand assets", status: "online",  color: C.green },
  { init: "CM", name: "Chidi M.",  role: "Product Manager", task: "Writing user stories", status: "away",   color: C.amber },
  { init: "AK", name: "Amara K.",  role: "Frontend Dev",    task: "Reviewing PRs",       status: "online",  color: C.accent },
  { init: "SB", name: "Seun B.",   role: "UX Designer",     task: "Wireframing mobile",  status: "dnd",     color: C.red },
  { init: "TF", name: "Tola F.",   role: "Backend Dev",     task: "",                    status: "offline", color: C.muted },
];
const statusColor: Record<string,string> = { online: C.green, away: C.amber, dnd: C.red, offline: C.muted };

const features = [
  { icon: "◼", title: "Live Desk Cards",       body: "Every team member gets a card showing their avatar, role, current task, and real-time status — all in one glance." },
  { icon: "⚡", title: "Real-Time Presence",    body: "Status updates instantly via Supabase Realtime. No page refresh needed. Green pulse = online, amber = away." },
  { icon: "🕐", title: "Last Seen",             body: "When a teammate is offline, their card dims and shows when they were last active." },
  { icon: "👋", title: "Smart Greeting",        body: "Time-based greeting on entry — Good morning, Good afternoon, Good evening — with a live count of who's in." },
  { icon: "🖱", title: "One-Click Actions",     body: "Message and View Tasks buttons sit right on every desk card. Reach anyone in one click." },
  { icon: "🎨", title: "Your Desk First",       body: "Your own card always appears first, with a cyan accent border so you're never lost in the grid." },
];

export default function TheOfficePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="The Office"
          title={<>The heart of your<br />remote team</>}
          subtitle="A visual floor of desk cards showing every team member's presence, status, and active task — in real time. This is not a list. This is your office."
          cta="Try it free"
        />

        {/* Live mockup */}
        <Section bg={C.card}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow>Live Preview</Eyebrow>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>
              This is what your office looks like
            </h2>
            <p style={{ color: C.sec, fontSize: 14, marginTop: 10 }}>Good morning, Ayomide. 4 members are in the office.</p>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14,
            maxWidth: 900, margin: "0 auto",
          }}>
            {deskCards.map((card, i) => (
              <div key={card.init} style={{
                backgroundColor: C.bg, borderRadius: 16, padding: "18px 16px",
                border: i === 0 ? `1.5px solid ${C.accent}` : `1px solid ${C.border}`,
                opacity: card.status === "offline" ? 0.5 : 1,
                boxShadow: i === 0 ? `0 0 16px rgba(0,212,255,0.12)` : "none",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  width: 9, height: 9, borderRadius: "50%",
                  backgroundColor: statusColor[card.status],
                  boxShadow: card.status === "online" ? `0 0 8px ${statusColor[card.status]}` : "none",
                }} />
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", marginBottom: 12,
                  backgroundColor: `${card.color}22`, color: card.color,
                  fontSize: 13, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{card.init}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 2 }}>
                  {card.name}
                  {i === 0 && <span style={{ marginLeft: 6, fontSize: 9, fontWeight: 800, backgroundColor: "rgba(0,212,255,0.15)", color: C.accent, padding: "1px 6px", borderRadius: 4 }}>You</span>}
                </div>
                <div style={{ fontSize: 11, color: C.muted, marginBottom: 10 }}>{card.role}</div>
                {card.task && (
                  <div style={{ fontSize: 10, color: C.sec, backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "5px 8px", lineHeight: 1.5 }}>{card.task}</div>
                )}
                {card.status === "offline" && (
                  <div style={{ fontSize: 10, color: C.muted }}>Last seen 2h ago</div>
                )}
                {card.status !== "offline" && (
                  <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                    <button style={{ flex: 1, height: 26, borderRadius: 7, fontSize: 10, fontWeight: 700, backgroundColor: "rgba(0,212,255,0.12)", color: C.accent, border: "none", cursor: "pointer" }}>Message</button>
                    <button style={{ flex: 1, height: 26, borderRadius: 7, fontSize: 10, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.05)", color: C.sec, border: "none", cursor: "pointer" }}>Tasks</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>Everything you see, at a glance</h2>
          </div>
          <div className="kw-3col">
            {features.map(f => (
              <div key={f.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontSize: 24, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 16 }}>
            Ready to open your office?
          </h2>
          <p style={{ fontSize: 16, color: C.sec, marginBottom: 32 }}>Your team is waiting. Set up in under 5 minutes.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Start free trial <ArrowRight /></Link>
            <Link href="/pricing" className="kw-btn-outline" style={btnOutline()}>See pricing</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
