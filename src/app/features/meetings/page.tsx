"use client";

import Link from "next/link";
import { ArrowRight, C, Footer, GLOBAL_CSS, HERO_IMAGES, Nav, PageHero, Section, btnOutline, btnPrimary } from "@/components/_shared";

const features = [
  { icon: "🎥", title: "One-click Meet links", body: "Start a Google Meet from chat and post the join card directly into the active team conversation." },
  { icon: "📌", title: "Meeting context", body: "Keep meeting links beside the channel, task, or announcement that created the conversation." },
  { icon: "⚡", title: "Fast team huddles", body: "Jump from async updates to a live huddle when blockers need voice, screen sharing, and decisions." },
];

export default function MeetingsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Online Meetings"
          title={<>Live huddles without<br />losing context</>}
          backgroundImage={HERO_IMAGES.meetings}
          subtitle="Kreww keeps meetings connected to the work that triggered them, so teammates join faster and return to the right context after every call."
          cta="Start free trial"
        />

        <Section bg={C.card}>
          <div className="kw-2col">
            <div>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 18 }}>Meet where the work is happening.</h2>
              <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.75, marginBottom: 24 }}>Instead of copying links between tools, teams can start live conversations from the same workspace that holds their tasks, chats, notices, and documents.</p>
              <Link href="/features/chat" className="kw-btn-primary" style={btnPrimary()}>See chat <ArrowRight /></Link>
            </div>
            <div style={{ minHeight: 360, borderRadius: 22, border: `1px solid ${C.border}`, overflow: "hidden", backgroundImage: `linear-gradient(180deg, rgba(5,13,26,0.05), rgba(5,13,26,0.72)), url(${HERO_IMAGES.meetings})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>
        </Section>

        <Section>
          <div className="kw-3col">
            {features.map((feature) => (
              <div key={feature.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{feature.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{feature.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{feature.body}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Bring meetings back into the team workspace</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Book demo <ArrowRight /></Link>
            <Link href="/pricing" className="kw-btn-outline" style={btnOutline()}>View pricing</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
