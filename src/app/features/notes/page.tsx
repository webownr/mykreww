// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/features/notes/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════

// ✅ FIX: Changed to a default export so Next.js can resolve the page route
export default function NotesPage() {
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
