"use client";

import Link from "next/link";
import { ArrowRight, C, Footer, GLOBAL_CSS, HERO_IMAGES, Nav, PageHero, Section, btnOutline, btnPrimary } from "@/components/_shared";

const features = [
  { icon: "✨", title: "Workspace answers", body: "Ask Cyan what changed, who owns a task, or where a decision lives without searching every tool yourself." },
  { icon: "🧠", title: "Context-aware help", body: "Cyan understands the current workspace area, so help feels specific to your team's flow instead of generic." },
  { icon: "📝", title: "Draft faster", body: "Turn rough notes into clearer notices, task updates, meeting summaries, and polished team messages." },
];

export default function CyanAiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Cyan AI"
          title={<>An AI teammate for<br />your workspace</>}
          backgroundImage={HERO_IMAGES.ai}
          subtitle="Cyan helps remote teams find context, summarize work, and move faster without leaving Kreww. It is designed to feel like a calm assistant inside your virtual office."
          cta="Try Cyan AI"
        />

        <Section bg={C.card}>
          <div className="kw-2col">
            <div style={{ minHeight: 360, borderRadius: 22, border: `1px solid ${C.border}`, overflow: "hidden", backgroundImage: `linear-gradient(180deg, rgba(5,13,26,0.08), rgba(5,13,26,0.74)), url(${HERO_IMAGES.ai})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 18 }}>Less searching. More shipping.</h2>
              <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.75, marginBottom: 24 }}>Cyan is built around the realities of busy remote teams: scattered updates, fast decisions, and teammates in different time zones. It keeps answers close to the work.</p>
              <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Start free <ArrowRight /></Link>
            </div>
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
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Put AI where your team already works</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Book demo <ArrowRight /></Link>
            <Link href="/features" className="kw-btn-outline" style={btnOutline()}>Explore product</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
