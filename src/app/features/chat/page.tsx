"use client";
// ─────────────────────────────────────────────────────────────────────────────
// FEATURE PAGES: Chat, Notice Board, Documents, Notes, In-App Browser
//
// Each section below is a separate page file. Copy each one to its path.
// ─────────────────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// FILE 1: src/app/features/chat/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
import Link from "next/link";
import { Nav, Footer, Section, PageHero, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline } from "@/components/_shared";

const chatFeatures = [
  { icon: "#", title: "Team Channels",      body: "Create dedicated channels for projects, departments, or any topic. Keep every conversation in context." },
  { icon: "→", title: "Direct Messages",    body: "One-on-one private DMs with any teammate. Start a DM right from their desk card in The Office." },
  { icon: "📹", title: "Google Meet",       body: "Hit Start Meeting and a Meet link auto-posts as a card in the active channel — everyone joins in one click." },
  { icon: "👍", title: "Reactions",         body: "React to any message with an emoji. Keep conversations light and fast without cluttering threads." },
  { icon: "⚡", title: "Real-Time Delivery",body: "Messages appear instantly via Supabase Realtime. No polling, no delays, no refresh." },
  { icon: "📎", title: "Message Types",     body: "Text messages, Meet link cards, and system notifications — each rendered distinctly for instant scanning." },
];

export function ChatPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Chat"
          title={<>Team chat that stays<br />in context</>}
          subtitle="Channels, DMs, and instant Google Meet links — all inside your Kreww workspace. No tab switching, no lost conversations."
          cta="Start free trial"
        />

        {/* Chat mockup */}
        <Section bg={C.card}>
          <div style={{
            maxWidth: 720, margin: "0 auto",
            backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 18,
            overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}>
            <div style={{ display: "flex", height: 360 }}>
              {/* Channel list */}
              <div style={{ width: 180, borderRight: `1px solid ${C.border}`, padding: "14px 0", backgroundColor: C.sidebar, flexShrink: 0 }}>
                <div style={{ padding: "0 14px", marginBottom: 12, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: C.muted }}>Channels</div>
                {["# general", "# product", "# design", "# engineering"].map((ch, i) => (
                  <div key={ch} style={{
                    padding: "7px 14px", fontSize: 13, cursor: "pointer",
                    backgroundColor: i === 0 ? "rgba(0,212,255,0.12)" : "transparent",
                    color: i === 0 ? C.accent : C.sec, fontWeight: i === 0 ? 600 : 400,
                  }}>{ch}</div>
                ))}
                <div style={{ padding: "12px 14px 6px", marginTop: 8, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: C.muted }}>Direct</div>
                {["Ayomide", "Victor", "Chidi"].map(name => (
                  <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", fontSize: 13, color: C.sec, cursor: "pointer" }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.green, flexShrink: 0 }} />
                    {name}
                  </div>
                ))}
              </div>

              {/* Message area */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontSize: 14, fontWeight: 600, color: C.text }}># general</div>
                <div style={{ flex: 1, padding: "14px 18px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { user: "AA", name: "Ayomide", msg: "Good morning team! Dashboard v2 is in review 🎉", time: "9:02 AM", reactions: ["🎉 3", "👍 2"] },
                    { user: "VO", name: "Victor",  msg: "Brand assets are done — uploading to docs now", time: "9:14 AM", reactions: ["✅ 1"] },
                    { user: "CM", name: "Chidi",   msg: "", time: "9:22 AM", isMeet: true },
                  ].map((m, i) => (
                    <div key={i} style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, backgroundColor: "rgba(0,212,255,0.15)", color: C.accent, fontSize: 9, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{m.user}</div>
                      <div>
                        <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 4 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{m.name}</span>
                          <span style={{ fontSize: 11, color: C.muted }}>{m.time}</span>
                        </div>
                        {m.isMeet ? (
                          <div style={{ backgroundColor: "rgba(0,212,255,0.08)", border: `1px solid rgba(0,212,255,0.2)`, borderRadius: 10, padding: "10px 14px", fontSize: 12, color: C.accent }}>
                            📹 Meeting started — <span style={{ textDecoration: "underline", cursor: "pointer" }}>Join Google Meet</span>
                          </div>
                        ) : (
                          <>
                            <div style={{ fontSize: 13, color: C.sec }}>{m.msg}</div>
                            {m.reactions && (
                              <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                                {m.reactions.map(r => (
                                  <span key={r} style={{ fontSize: 11, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "2px 8px", color: C.sec }}>{r}</span>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "10px 14px", borderTop: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "8px 12px" }}>
                    <span style={{ fontSize: 12, color: C.muted, flex: 1 }}>Message #general…</span>
                    <span style={{ fontSize: 11, color: C.accent, fontWeight: 600, cursor: "pointer" }}>Meet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>Everything your team needs to communicate</h2>
          </div>
          <div className="kw-3col">
            {chatFeatures.map(f => (
              <div key={f.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontSize: 22, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>All your conversations, one place</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Start free <ArrowRight /></Link>
            <Link href="/pricing" className="kw-btn-outline" style={btnOutline()}>View pricing</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default ChatPage;

