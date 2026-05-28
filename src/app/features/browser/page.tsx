
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
