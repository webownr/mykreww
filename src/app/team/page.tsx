// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/team/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function TeamPage() {
  const team = [
    { init: "AA", name: "Ayomide Alao",  role: "Founder & CEO",        bio: "Self-taught developer from Lagos. Building Kreww to prove African builders can create world-class products.", color: C.accent, x: "@alphae_x" },
    { init: "VO", name: "Victor O.",     role: "Creative Director",     bio: "Co-founder responsible for Kreww's visual identity, design system, and all product aesthetics.",          color: C.green,  x: "" },
  ];
  const openRoles = [
    { title: "Operations Lead",    type: "Full-time · Equity",   desc: "Own onboarding, community, support, and partner relationships. Free the founder to stay in product." },
    { title: "Frontend Engineer",  type: "Contract → Full-time", desc: "Help build Kreww's React + Supabase web app to production quality. TypeScript, Tailwind, real-time." },
    { title: "Growth & Marketing", type: "Part-time · Remote",   desc: "Own social, content, and community across X, LinkedIn, and WhatsApp. Nigerian market first." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Our Team"
          title={<>Small team.<br />Big ambitions.</>}
          subtitle="We're a lean founding team building Kreww from Lagos, Nigeria. We move fast, care about quality, and believe African builders can build world-class products."
        />

        {/* Current team */}
        <Section bg={C.card}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text }}>The founding team</h2>
          </div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {team.map(m => (
              <div key={m.init} style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 20, padding: "32px 28px", maxWidth: 320, width: "100%", textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", margin: "0 auto 18px", backgroundColor: `${m.color}18`, color: m.color, fontSize: 22, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${m.color}40` }}>{m.init}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: C.accent, fontWeight: 600, marginBottom: 14 }}>{m.role}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65, marginBottom: 16 }}>{m.bio}</div>
                {m.x && (
                  <a href={`https://x.com/${m.x.replace("@","")}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: C.muted }}>{m.x}</a>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Open roles */}
        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>We're Hiring</Eyebrow>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text }}>Open roles</h2>
            <p style={{ fontSize: 15, color: C.sec, marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>We're a small team looking for the right people — not the most résumés. Equity available on all roles.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {openRoles.map(r => (
              <div key={r.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 4 }}>{r.title}</div>
                  <div style={{ fontSize: 12, color: C.accent, fontWeight: 600, marginBottom: 8 }}>{r.type}</div>
                  <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.6 }}>{r.desc}</div>
                </div>
                <Link href="/careers" style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 38, padding: "0 18px", borderRadius: 9, backgroundColor: C.accent, color: C.bg, fontSize: 13, fontWeight: 700, flexShrink: 0 }}>Apply <ArrowRight /></Link>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text, marginBottom: 14 }}>Don't see your role?</h2>
          <p style={{ fontSize: 15, color: C.sec, marginBottom: 28 }}>We're always open to exceptional people. Send us a note at <a href="mailto:hello@mykreww.com" style={{ color: C.accent }}>hello@mykreww.com</a></p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
