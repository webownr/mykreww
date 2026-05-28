"use client";
// ─────────────────────────────────────────────────────────────────────────────
// COMPANY PAGES: About, Our Team, Investors, Careers
// Each export is a separate page. Copy each to its path shown above it.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import { Nav, Footer, Section, PageHero, Eyebrow, ArrowRight, CheckIcon, C, GLOBAL_CSS, btnPrimary, btnOutline } from "@/components/_shared";

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/about/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function AboutPage() {
  const pillars = [
    { n: "01", title: "Real",               body: "Honest, human, and direct. No corporate language. No fake enthusiasm. We say what we mean." },
    { n: "02", title: "Together",           body: "We build for belonging, not just productivity. Culture is built in small moments — and Kreww is where they happen." },
    { n: "03", title: "Quality",            body: "We ship things that feel premium. No broken flows. No ugly UX. If it doesn't feel right, it doesn't ship." },
    { n: "04", title: "African by Design",  body: "Mobile-first, low-bandwidth aware, warm, and culturally intelligent. Built for our context first." },
    { n: "05", title: "Growth-Obsessed",    body: "Every decision must help users make more money or save more time. If it doesn't, it doesn't get built." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        {/* Hero */}
        <section style={{
          padding: "96px 24px 80px", textAlign: "center",
          background: `radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,212,255,0.10) 0%, transparent 70%), ${C.bg}`,
        }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Eyebrow>Our Company</Eyebrow>
            <h1 style={{ fontSize: "clamp(32px,5vw,58px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: C.text, marginBottom: 22 }}>
              Built in Africa.<br />Built for the world.
            </h1>
            <p style={{ fontSize: "clamp(15px,2vw,18px)", color: C.sec, lineHeight: 1.65, maxWidth: 560, margin: "0 auto" }}>
              Kreww exists because remote work broke something. Teams became task lists. People became avatars. Culture became a Slack channel nobody reads. We're fixing that — starting from Lagos, Nigeria.
            </p>
          </div>
        </section>

        {/* Mission + Vision */}
        <Section bg={C.card}>
          <div className="kw-2col">
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 18 }}>
                Make remote teams feel genuinely together.
              </h2>
              <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.7 }}>
                Every team, regardless of size or location, deserves a real office culture they actually want to belong to. Not just tasks and messages — but presence, culture, warmth, and identity. When your team logs into Kreww, they should feel like they showed up to work together.
              </p>
            </div>
            <div>
              <Eyebrow>Our Vision</Eyebrow>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 18 }}>
                The world's most human virtual office.
              </h2>
              <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.7 }}>
                The platform where remote teams don't just work — they belong. We're building Kreww to prove that African builders can create world-class tools that serve global audiences, starting from the context they know best.
              </p>
            </div>
          </div>
        </Section>

        {/* Founder story */}
        <Section>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <Eyebrow>Founder Story</Eyebrow>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 32 }}>
              From WebOwnr to Kreww
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 15, color: C.sec, lineHeight: 1.75 }}>
              <p>Ayomide Alao (Alphae X) is a self-taught developer and entrepreneur from Lagos, Nigeria. He built Kreww because he lived the problem — remote teams that feel disconnected, fragmented across tools, with no real sense of presence or culture.</p>
              <p>He started with WebOwnr, a store builder for African SMEs, and learned through building it that the deeper problem for African businesses isn't just selling online — it's operating as a real, coordinated team. Kreww is the evolution of that understanding.</p>
              <p>He is building Kreww to become a company — a real, funded, globally recognised product that starts in Nigeria and scales to the world. He knows the path is long. He is committed to it.</p>
              <p style={{ color: C.accent, fontStyle: "italic", fontWeight: 500, fontSize: 16, borderLeft: `3px solid ${C.accent}`, paddingLeft: 20 }}>
                "African builders deserve world-class tools built for their reality. The best way to prove it is to build one yourself."
              </p>
            </div>

            {/* Founder card */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 36, backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "20px 24px", flexWrap: "wrap" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, backgroundColor: "rgba(0,212,255,0.14)", color: C.accent, fontSize: 18, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid rgba(0,212,255,0.3)` }}>AA</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Ayomide Alao</div>
                <div style={{ fontSize: 13, color: C.muted }}>Founder & CEO · Alphae X</div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>📍 Lagos, Nigeria</div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <a href="https://x.com/alphae_x" target="_blank" rel="noopener noreferrer" style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.muted, fontSize: 13 }}>𝕏</a>
                <a href="https://linkedin.com/in/alphae-x" target="_blank" rel="noopener noreferrer" style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.muted, fontSize: 13 }}>in</a>
              </div>
            </div>
          </div>
        </Section>

        {/* Culture pillars */}
        <Section bg={C.card}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>What We Believe</Eyebrow>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em" }}>The Five Culture Pillars</h2>
          </div>
          <div className="kw-3col">
            {pillars.map(p => (
              <div key={p.n} className="kw-card-hover" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.accent, letterSpacing: "0.08em", marginBottom: 10 }}>{p.n}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 10 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 16 }}>Ready to bring your team together?</h2>
          <p style={{ fontSize: 16, color: C.sec, marginBottom: 32 }}>Join the teams already building with Kreww.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="kw-btn-primary" style={btnPrimary()}>Start free trial <ArrowRight /></Link>
            <Link href="/team" className="kw-btn-outline" style={btnOutline()}>Meet the team</Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

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

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/investors/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function InvestorsPage() {
  const metrics = [
    { v: "Pre-launch", l: "Current Stage" },
    { v: "$19/mo",     l: "Starting Price" },
    { v: "Africa",     l: "Primary Market" },
    { v: "25",         l: "Phase 1 Target Teams" },
  ];
  const grants = [
    { name: "Google for Startups Africa", status: "Applying",  desc: "Cloud credits + mentorship. No equity." },
    { name: "Tony Elumelu Foundation",    status: "Applying",  desc: "$5,000 non-refundable seed. Strong fit." },
    { name: "Meta Startup Program",       status: "Planned",   desc: "Ad credits. Applying post-launch." },
    { name: "Techstars / YC Africa",      status: "Planned",   desc: "Applying at 50+ paying teams." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Investors"
          title={<>Building the remote office<br />for the next billion workers</>}
          subtitle="Kreww is rebuilding workplace culture for teams that deserve more than a task list. We start in Africa — a continent where remote work is growing 20%+ year-on-year on infrastructure built for Silicon Valley."
        />

        {/* Key metrics */}
        <Section bg={C.card}>
          <div className="kw-4col">
            {metrics.map(m => (
              <div key={m.l} style={{ textAlign: "center", backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: "28px 20px" }}>
                <div style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 800, color: C.accent, letterSpacing: "-0.02em", marginBottom: 8 }}>{m.v}</div>
                <div style={{ fontSize: 13, color: C.muted }}>{m.l}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Narrative */}
        <Section>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <Eyebrow>The Opportunity</Eyebrow>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 28 }}>Why Kreww, why now</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "The market is massive and underserved", body: "Africa has 1.4B people and remote work infrastructure growing at 20%+/year — but every major collaboration tool was designed for Silicon Valley. Kreww is built for the realities of our context first." },
                { title: "Presence-first creates daily habits", body: "Kreww's visual presence layer (The Office) creates emotional attachment that productivity tools cannot replicate. Teams open Kreww every morning the same way they'd walk into an office. That's a moat." },
                { title: "Revenue-first approach", body: "We are not burning cash to acquire users. Phase 1 goal is 25 paying teams. We prove unit economics before we scale. Every $9–$49/month subscription is recurring, predictable revenue." },
                { title: "Phase 2 AI creates compounding value", body: "Cyan AI — our proactive business intelligence agent — will give Kreww a data advantage that no competitor can replicate without our presence and task data. It ships post Phase 1 traction." },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: C.accent, flexShrink: 0, marginTop: 7 }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: C.sec, lineHeight: 1.7 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Grants pipeline */}
        <Section bg={C.card}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow>Non-Dilutive Capital</Eyebrow>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text }}>Grant & accelerator pipeline</h2>
          </div>
          <div className="kw-2col">
            {grants.map(g => (
              <div key={g.name} style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: "22px 22px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{g.name}</div>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", padding: "3px 8px", borderRadius: 6, flexShrink: 0, backgroundColor: g.status === "Applying" ? "rgba(0,230,118,0.12)" : "rgba(255,255,255,0.05)", color: g.status === "Applying" ? C.green : C.muted }}>{g.status}</span>
                </div>
                <div style={{ fontSize: 13, color: C.sec }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text, marginBottom: 14 }}>Interested in Kreww?</h2>
          <p style={{ fontSize: 15, color: C.sec, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>
            We're raising our first round after reaching 50 paying teams. If you'd like to be in the conversation early, reach out.
          </p>
          <a href="mailto:hello@mykreww.com?subject=Investor%20Inquiry" style={btnPrimary({ display: "inline-flex" } as React.CSSProperties) as React.CSSProperties}>
            Get in touch <ArrowRight />
          </a>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/careers/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function CareersPage() {
  const roles = [
    { title: "Operations Lead",      type: "Full-time · Lagos or Remote", equity: "10%", desc: "Manage user onboarding, support, community outreach, and partner relationships. The person who frees the founder to stay in product full-time.", skills: ["Async communication", "Community management", "Customer success", "Organised & reliable"] },
    { title: "Frontend Engineer",    type: "Contract → Full-time",        equity: "2–5%", desc: "Build Kreww's React + Supabase web app. TypeScript (strict), Tailwind, real-time presence. You care about quality as much as we do.", skills: ["React + TypeScript", "Tailwind CSS", "Supabase / PostgreSQL", "Real-time UX"] },
    { title: "Growth & Marketing",   type: "Part-time · Remote",          equity: "1–3%", desc: "Own Kreww's voice across X, LinkedIn, and WhatsApp communities. Build the audience that brings the first 1,000 paying teams.", skills: ["Social media", "Build-in-public", "Nigerian market", "Content strategy"] },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Careers"
          title={<>Build the future of<br />remote work in Africa</>}
          subtitle="We're a small, ambitious team building something that matters. If you want to do the best work of your life and own a real piece of what you build — Kreww is for you."
        />

        {/* Why Kreww */}
        <Section bg={C.card}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text }}>Why work here</h2>
          </div>
          <div className="kw-3col">
            {[
              { icon: "💰", title: "Real Equity",        body: "Not options that expire. Not phantom stock. Actual equity with a clear vesting schedule and cliff." },
              { icon: "🌍", title: "Global Ambition",    body: "We start in Nigeria and scale to the world. The work you do here will be used by teams on every continent." },
              { icon: "🚀", title: "Founding Team",      body: "You're not employee #500. You're a founder. Your decisions shape the product, the culture, and the company." },
              { icon: "🎯", title: "Meaningful Work",    body: "Remote work is broken. We're fixing it. Every line of code and every campaign genuinely helps real teams." },
              { icon: "⚡", title: "Move Fast",          body: "Small team. Short feedback loops. No bureaucracy. You ship on day one." },
              { icon: "🏡", title: "Async-First",        body: "We work remotely with respect for focused time. Your output matters more than your hours online." },
            ].map(p => (
              <div key={p.title} className="kw-card-hover" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 22px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.65 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Open roles */}
        <Section>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>Open Roles</Eyebrow>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text }}>We're hiring right now</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 820, margin: "0 auto" }}>
            {roles.map(r => (
              <div key={r.title} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "28px 28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: C.text, marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: 12, color: C.sec }}>{r.type}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: C.muted, marginBottom: 2 }}>Equity</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: C.accent }}>{r.equity}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: C.sec, lineHeight: 1.65, marginBottom: 18 }}>{r.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {r.skills.map(s => (
                    <span key={s} style={{ fontSize: 12, backgroundColor: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.18)", color: C.accent, borderRadius: 8, padding: "3px 10px" }}>{s}</span>
                  ))}
                </div>
                <a href={`mailto:hello@mykreww.com?subject=Application: ${r.title}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 38, padding: "0 18px", borderRadius: 9, backgroundColor: C.accent, color: C.bg, fontSize: 13, fontWeight: 700 }}>Apply for this role <ArrowRight /></a>
              </div>
            ))}
          </div>
        </Section>

        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text, marginBottom: 14 }}>Don't see your role?</h2>
          <p style={{ fontSize: 15, color: C.sec, marginBottom: 28 }}>We're always open to exceptional people. Tell us who you are.</p>
          <a href="mailto:hello@mykreww.com?subject=General%20Application" style={btnPrimary({ display: "inline-flex" } as React.CSSProperties) as React.CSSProperties}>Say hello <ArrowRight /></a>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
