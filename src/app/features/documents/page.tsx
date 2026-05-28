"use client";
// THREE FEATURE PAGES IN ONE FILE
// Copy each export default function to its own file at the path shown above it.

import Link from "next/link";
import { Nav, Footer, Section, PageHero, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline } from "@/components/_shared";

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/features/documents/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export default function DocumentsPage() {
  const folders = ["Product", "Engineering", "Design", "Marketing", "HR"];
  const docs = [
    { title: "Product Roadmap Q3 2025",    edited: "2h ago",   words: "2,400" },
    { title: "API Documentation v2",        edited: "Yesterday","words": "5,100" },
    { title: "Brand Guidelines",            edited: "3 days ago","words": "1,800" },
    { title: "Employee Handbook",           edited: "1 week ago","words": "8,200" },
  ];
  const feats = [
    { icon: "📁", title: "Folder Tree",         body: "Organise all your team's documents in a nested folder structure. Find anything instantly." },
    { icon: "✍️", title: "Rich Text Editor",    body: "Write with headings, lists, bold, code blocks — a clean editor that gets out of the way." },
    { icon: "👥", title: "Workspace-Shared",    body: "Every document is visible to all workspace members. No silos, no broken permissions." },
    { icon: "🕐", title: "Last Edited By",      body: "Always know who last touched a document and when. Full edit tracking built in." },
    { icon: "🔗", title: "Link Anywhere",       body: "Drop document links in tasks, chat, or notices. Everything is cross-linked." },
    { icon: "⚡", title: "Instant Search",      body: "Search across all documents and folders. The right doc surfaces in milliseconds." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Documents"
          title={<>One place for everything<br />your team writes</>}
          subtitle="Organised folders, a clean rich text editor, and workspace-wide access. Your team's knowledge, always findable."
          cta="Start free trial"
        />

        <Section bg={C.card}>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", gap: 0, border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden", backgroundColor: C.bg }}>
            {/* Folder tree */}
            <div style={{ width: 180, borderRight: `1px solid ${C.border}`, padding: "14px 0", backgroundColor: C.sidebar, flexShrink: 0 }}>
              <div style={{ padding: "0 14px", marginBottom: 10, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: C.muted }}>Folders</div>
              {folders.map((f, i) => (
                <div key={f} style={{
                  padding: "8px 14px", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                  backgroundColor: i === 0 ? "rgba(0,212,255,0.10)" : "transparent",
                  color: i === 0 ? C.accent : C.sec, fontWeight: i === 0 ? 600 : 400,
                }}>
                  <span>📁</span> {f}
                </div>
              ))}
            </div>
            {/* Doc list */}
            <div style={{ flex: 1, padding: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Product</span>
                <button style={{ height: 30, padding: "0 12px", borderRadius: 7, backgroundColor: C.accent, color: C.bg, fontSize: 11, fontWeight: 700, border: "none", cursor: "pointer" }}>+ New doc</button>
              </div>
              {docs.map(d => (
                <div key={d.title} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "11px 14px", borderRadius: 10, marginBottom: 8, cursor: "pointer",
                  backgroundColor: C.card, border: `1px solid ${C.border}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16 }}>📄</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{d.title}</div>
                      <div style={{ fontSize: 11, color: C.muted }}>Edited {d.edited} · {d.words} words</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: C.muted }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>Your team's knowledge base, built in</h2>
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
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Stop losing important docs in chat</h2>
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
