"use client";

import Link from "next/link";
import { ArrowRight, C, Footer, GLOBAL_CSS, HERO_IMAGES, Nav, PageHero, Section, btnPrimary } from "@/components/_shared";

const tools = [
  { title: "Cyan AI", href: "/features/cyan-ai", body: "AI workspace help for summaries, answers, and faster drafting.", image: HERO_IMAGES.ai },
  { title: "Virtual Office", href: "/features/the-office", body: "A visual floor where teammates can see presence and active work.", image: HERO_IMAGES.office },
  { title: "Chat", href: "/features/chat", body: "Channels, DMs, reactions, and meeting links in context.", image: HERO_IMAGES.chat },
  { title: "Kanban", href: "/features/tasks", body: "Track ownership, due dates, and progress across visual task boards.", image: HERO_IMAGES.tasks },
  { title: "Online Meetings", href: "/features/meetings", body: "Start live huddles from the conversations that need them.", image: HERO_IMAGES.meetings },
  { title: "Notice Board", href: "/features/notice-board", body: "Broadcast company-wide updates with priority and visibility.", image: HERO_IMAGES.notices },
  { title: "Team collaboration", href: "/features/collaboration", body: "Bring remote culture, presence, and coordination into one workspace.", image: HERO_IMAGES.collaboration },
  { title: "Documents", href: "/features/documents", body: "Keep team knowledge organized, searchable, and close to work.", image: HERO_IMAGES.documents },
  { title: "Notes", href: "/features/notes", body: "A private space for ideas, plans, and personal working notes.", image: HERO_IMAGES.notes },
  { title: "In-App Browser", href: "/features/browser", body: "Open dashboards, references, and web tools without leaving Kreww.", image: HERO_IMAGES.browser },
];

export default function FeaturesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Product"
          title={<>Everything your team needs<br />to feel together</>}
          backgroundImage={HERO_IMAGES.product}
          subtitle="Explore the connected Kreww toolkit: a virtual office, collaboration tools, AI assistance, and the context remote teams need to move as one."
          cta="Start free trial"
        />

        <Section bg={C.card}>
          <div className="kw-3col">
            {tools.map((tool) => (
              <Link key={tool.title} href={tool.href} className="kw-card-hover" style={{ display: "block", backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden" }}>
                <div style={{ height: 160, backgroundImage: `linear-gradient(180deg, rgba(5,13,26,0.0), rgba(5,13,26,0.58)), url(${tool.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div style={{ padding: "22px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                    <h2 style={{ fontSize: 16, fontWeight: 800, color: C.text }}>{tool.title}</h2>
                    <ArrowRight />
                  </div>
                  <p style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{tool.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Ready to bring your team into Kreww?</h2>
          <p style={{ fontSize: 15, color: C.sec, marginBottom: 28 }}>Start with one workspace and connect every part of your remote team's rhythm.</p>
          <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Book demo <ArrowRight /></Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}
