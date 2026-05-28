"use client";
// THREE FEATURE PAGES IN ONE FILE
// Copy each export default function to its own file at the path shown above it.

import Link from "next/link";
import { Nav, Footer, Section, PageHero, ArrowRight, C, GLOBAL_CSS, btnPrimary, btnOutline } from "@/components/_shared";

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/features/documents/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function DocumentsPage() {
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

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/features/notes/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function NotesPage() {
  const notes = [
    { title: "Sprint planning ideas",    preview: "Move standup to async. Try Loom for updates. Consider...", updated: "Just now" },
    { title: "1:1 with Ayomide",         preview: "Talk about the dashboard timeline. Ask about design review...", updated: "1h ago" },
    { title: "Things to learn this month", preview: "TypeScript generics, Supabase RLS patterns, Figma auto-layout...", updated: "Yesterday" },
    { title: "Meeting notes — investors", preview: "Key questions raised: traction metrics, burn rate, team size...", updated: "3 days ago" },
  ];
  const feats = [
    { icon: "🔒", title: "Completely Private",  body: "Your notes are only ever visible to you. No admin, no teammate, no one else can see them." },
    { icon: "✍️", title: "Rich Text",           body: "Write with formatting — headings, bullets, bold, code. A clean editor that doesn't get in the way." },
    { icon: "⚡", title: "Always Available",     body: "Your notes live in your workspace sidebar. One click from anywhere inside Kreww." },
    { icon: "🔍", title: "Searchable",          body: "Find any note instantly by title or content. Your personal knowledge base, searchable." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Notes"
          title={<>Your private space to<br />think and plan</>}
          subtitle="Personal notes that only you can see. Keep ideas, meeting notes, to-dos, and anything else right inside your workspace."
          cta="Start free trial"
        />

        <Section bg={C.card}>
          <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", gap: 0, border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden" }}>
            {/* Note list */}
            <div style={{ width: 240, borderRight: `1px solid ${C.border}`, backgroundColor: C.sidebar, flexShrink: 0 }}>
              <div style={{ padding: "14px 14px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>My Notes</span>
                <button style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: C.accent, color: C.bg, fontSize: 16, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
              </div>
              {notes.map((n, i) => (
                <div key={n.title} style={{
                  padding: "10px 14px", cursor: "pointer",
                  backgroundColor: i === 0 ? "rgba(0,212,255,0.08)" : "transparent",
                  borderLeft: i === 0 ? `2px solid ${C.accent}` : "2px solid transparent",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: i === 0 ? C.text : C.sec, marginBottom: 3 }}>{n.title}</div>
                  <div style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{n.preview}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 3 }}>{n.updated}</div>
                </div>
              ))}
            </div>
            {/* Editor */}
            <div style={{ flex: 1, padding: "20px 24px", backgroundColor: C.bg }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 16 }}>Sprint planning ideas</div>
              <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 12 }}>Move standup to async. Try Loom for updates. Consider daily written check-ins instead.</p>
                <p style={{ marginBottom: 12 }}>🎯 Key focus areas:</p>
                <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Ship The Office screen by Friday", "Get 5 beta teams onboarded this week", "Review Flutterwave integration"].map(item => (
                    <li key={item} style={{ fontSize: 13, color: C.sec }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="kw-2col-faq" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {feats.map(f => (
              <div key={f.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Your thoughts, always with you</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Start free <ArrowRight /></Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/features/browser/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function BrowserPage() {
  const bookmarks = [
    { icon: "G", label: "Google Analytics", url: "analytics.google.com", color: "#E34135" },
    { icon: "N", label: "Notion",           url: "notion.so",             color: "#FFF" },
    { icon: "F", label: "Figma",            url: "figma.com",             color: "#A259FF" },
    { icon: "G", label: "GitHub",           url: "github.com",            color: "#6E5494" },
    { icon: "S", label: "Supabase",         url: "supabase.com",          color: "#3ECF8E" },
  ];
  const feats = [
    { icon: "🌐", title: "Browse Without Leaving",  body: "Open any website inside your Kreww workspace. Stay in the flow — no context switching." },
    { icon: "🔖", title: "Personal Bookmarks Bar",   body: "Save your most-used tools as bookmarks. One click to any app, any dashboard, any URL." },
    { icon: "🔒", title: "Private Per User",         body: "Your bookmarks are yours alone. Each team member has their own private bookmark collection." },
    { icon: "⚡", title: "Instant Access",           body: "The browser panel is always one sidebar click away. No tabs, no separate windows." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="In-App Browser"
          title={<>Browse the web without<br />leaving your office</>}
          subtitle="An embedded browser panel with a personal bookmarks bar. Open any tool, any dashboard, any link — right inside Kreww."
          cta="Start free trial"
        />

        <Section bg={C.card}>
          <div style={{ maxWidth: 800, margin: "0 auto", border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden" }}>
            {/* Browser chrome */}
            <div style={{ backgroundColor: C.sidebar, borderBottom: `1px solid ${C.border}`, padding: "10px 14px" }}>
              <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
                {[C.red, C.amber, C.green].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c, opacity: 0.7 }} />)}
              </div>
              {/* Bookmark bar */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {bookmarks.map(b => (
                  <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, borderRadius: 8, padding: "4px 10px", cursor: "pointer" }}>
                    <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: b.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 800, color: "#fff", flexShrink: 0 }}>{b.icon}</div>
                    <span style={{ fontSize: 11, color: C.sec }}>{b.label}</span>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "rgba(0,212,255,0.08)", border: `1px solid rgba(0,212,255,0.2)`, borderRadius: 8, padding: "4px 10px", cursor: "pointer" }}>
                  <span style={{ fontSize: 11, color: C.accent }}>+ Add</span>
                </div>
              </div>
              {/* URL bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 12px", marginTop: 10 }}>
                <span style={{ fontSize: 11, color: C.green }}>🔒</span>
                <span style={{ fontSize: 12, color: C.sec, flex: 1 }}>analytics.google.com</span>
              </div>
            </div>
            {/* Page preview */}
            <div style={{ height: 200, backgroundColor: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>📊</div>
                <div style={{ fontSize: 13, color: C.sec }}>Your external tools load right here</div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="kw-2col-faq" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {feats.map(f => (
              <div key={f.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: C.text, marginBottom: 16 }}>Keep your focus inside Kreww</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Get started free <ArrowRight /></Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default DocumentsPage;
