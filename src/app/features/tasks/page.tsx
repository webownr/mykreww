"use client";
// Paste into: src/app/features/tasks/page.tsx

import Link from "next/link";
import { Nav, Footer, Section, PageHero, CheckIcon, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline, HERO_IMAGES } from "@/components/_shared";

const cols = [
  { id: "todo",       label: "To Do",       color: C.muted,  tasks: [
    { title: "Brand refresh v2", assignee: "VO", due: "Jun 3",  pct: 0 },
    { title: "Mobile nav design", assignee: "SB", due: "Jun 5", pct: 0 },
  ]},
  { id: "inprogress", label: "In Progress",  color: C.accent, tasks: [
    { title: "Dashboard UI",  assignee: "AA", due: "Jun 1", pct: 65 },
    { title: "API endpoints", assignee: "TF", due: "Jun 2", pct: 40 },
  ]},
  { id: "review",     label: "In Review",   color: C.amber,  tasks: [
    { title: "Auth flow", assignee: "CM", due: "May 30", pct: 90 },
  ]},
  { id: "done",       label: "Done",        color: C.green,  tasks: [
    { title: "Supabase schema", assignee: "TF", due: "May 28", pct: 100 },
    { title: "Logo assets",     assignee: "VO", due: "May 27", pct: 100 },
  ]},
];

const features = [
  { icon: "◻", title: "Kanban Board",        body: "Four built-in columns — To Do, In Progress, In Review, Done. Drag tasks across as work moves forward." },
  { icon: "👤", title: "Assignee Avatars",   body: "Every task card shows who owns it. Avatars make accountability visual and instant." },
  { icon: "📅", title: "Due Dates",          body: "Set deadlines on every task. Overdue items surface automatically so nothing slips." },
  { icon: "📊", title: "Progress Bar",       body: "Each task has a progress percentage — updated in real time as the team adds progress comments." },
  { icon: "💬", title: "Progress Threads",   body: "Comment on tasks with milestone updates. Full thread history lives inside each task detail panel." },
  { icon: "⚡", title: "Real-Time Sync",     body: "When a teammate moves a task, everyone's board updates instantly. No page refresh. No conflicts." },
];

export default function TasksPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Tasks"
          title={<>Kanban that moves<br />as fast as your team</>}
          backgroundImage={HERO_IMAGES.tasks}
          subtitle="A visual task board built for remote teams. Assign, track, and ship work — with real-time updates so everyone always knows what's happening."
          cta="Start free trial"
        />

        {/* Kanban mockup */}
        <Section bg={C.card}>
          <div style={{ overflowX: "auto", paddingBottom: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(200px, 1fr))", gap: 14, minWidth: 740 }}>
              {cols.map(col => (
                <div key={col.id}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: col.color }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: col.color, textTransform: "uppercase", letterSpacing: "0.07em" }}>{col.label}</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, color: C.muted, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "1px 8px" }}>{col.tasks.length}</span>
                  </div>
                  {col.tasks.map(t => (
                    <div key={t.title} style={{
                      backgroundColor: C.bg, border: `1px solid ${C.border}`,
                      borderRadius: 12, padding: "14px 14px", marginBottom: 10,
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 10, lineHeight: 1.4 }}>{t.title}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%",
                          backgroundColor: "rgba(0,212,255,0.15)", color: C.accent,
                          fontSize: 9, fontWeight: 800,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>{t.assignee}</div>
                        <span style={{ fontSize: 10, color: C.muted }}>Due {t.due}</span>
                      </div>
                      <div style={{ height: 4, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${t.pct}%`, backgroundColor: col.color, borderRadius: 2 }} />
                      </div>
                      <div style={{ fontSize: 10, color: C.muted, marginTop: 4, textAlign: "right" }}>{t.pct}%</div>
                    </div>
                  ))}
                  <button style={{
                    width: "100%", height: 36, borderRadius: 10,
                    backgroundColor: "rgba(255,255,255,0.03)", border: `1px dashed ${C.border}`,
                    color: C.muted, fontSize: 12, cursor: "pointer",
                  }}>+ Add task</button>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>Built for how remote teams actually work</h2>
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

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 16 }}>Ship your first task today</h2>
          <p style={{ fontSize: 16, color: C.sec, marginBottom: 32 }}>Free 14-day trial. No credit card required.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Get started free <ArrowRight /></Link>
            <Link href="/pricing" className="kw-btn-outline" style={btnOutline()}>View pricing</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
