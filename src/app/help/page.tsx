"use client";
// RESOURCE & LEGAL PAGES
// Help Centre, Changelog, Support, Terms of Use, Privacy Policy

import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Section, PageHero, Eyebrow, ArrowRight, C, GLOBAL_CSS, btnPrimary } from "@/components/_shared";

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/help/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function HelpPage() {
  const [search, setSearch] = useState("");
  const categories = [
    { icon: "🏢", title: "Getting Started",    count: 8,  articles: ["Creating your workspace", "Inviting your team", "Setting your profile", "The 4-step onboarding flow"] },
    { icon: "◼", title: "The Office",          count: 6,  articles: ["Understanding desk cards", "Status types explained", "Setting your active task", "Last seen & offline states"] },
    { icon: "☰", title: "Tasks & Projects",    count: 10, articles: ["Creating your first task", "Moving tasks between columns", "Assigning tasks to teammates", "Progress comments"] },
    { icon: "💬", title: "Chat & Meetings",    count: 7,  articles: ["Creating channels", "Starting a Google Meet", "Direct messages", "Message reactions"] },
    { icon: "💳", title: "Billing & Plans",    count: 5,  articles: ["Upgrading your plan", "Cancelling your subscription", "Understanding Cyan AI tokens", "Local pricing explained"] },
    { icon: "🔒", title: "Security & Privacy", count: 4,  articles: ["How your data is stored", "Role-based access control", "Data export", "Deleting your workspace"] },
  ];

  const filtered = search
    ? categories.map(c => ({ ...c, articles: c.articles.filter(a => a.toLowerCase().includes(search.toLowerCase())) })).filter(c => c.articles.length > 0)
    : categories;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        {/* Hero with search */}
        <section style={{ padding: "88px 24px 72px", textAlign: "center", background: `radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,212,255,0.09) 0%, transparent 70%), ${C.bg}` }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <Eyebrow>Help Centre</Eyebrow>
            <h1 style={{ fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 800, color: C.text, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 16 }}>How can we help?</h1>
            <p style={{ fontSize: 16, color: C.sec, marginBottom: 32 }}>Search our docs or browse by category below.</p>
            <div style={{ position: "relative", maxWidth: 480, margin: "0 auto" }}>
              <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search help articles…"
                style={{
                  width: "100%", height: 50, borderRadius: 12,
                  border: `1.5px solid ${C.border}`, backgroundColor: C.card,
                  color: C.text, fontSize: 15, paddingLeft: 46, paddingRight: 16, outline: "none",
                }}
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <Section>
          <div className="kw-3col">
            {filtered.map(cat => (
              <div key={cat.title} className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{cat.icon}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{cat.title}</div>
                  <span style={{ fontSize: 11, backgroundColor: "rgba(0,212,255,0.1)", color: C.accent, borderRadius: 10, padding: "1px 8px" }}>{cat.count}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {cat.articles.map(a => (
                    <li key={a}>
                      <a href="#" style={{ fontSize: 13, color: C.sec, display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ color: C.muted }}>›</span> {a}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Still stuck */}
        <Section bg={C.card} style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>💬</div>
          <h2 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 800, color: C.text, marginBottom: 12 }}>Still stuck?</h2>
          <p style={{ fontSize: 15, color: C.sec, marginBottom: 28 }}>Our team responds within 4 hours during business hours (WAT).</p>
          <a href="mailto:hello@mykreww.com" style={btnPrimary({ display: "inline-flex" }) as React.CSSProperties}>Email support <ArrowRight /></a>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/changelog/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function ChangelogPage() {
  const releases = [
    {
      version: "v0.4.0", date: "June 24, 2025", tag: "Major",  tagColor: C.accent,
      title: "Real-time presence goes live",
      changes: [
        { type: "new",  text: "Status dots now update live via Supabase Realtime — no refresh needed" },
        { type: "new",  text: "Page Visibility API integration: auto-away when you switch tabs" },
        { type: "new",  text: "Last seen timestamps on offline desk cards" },
        { type: "fix",  text: "Fixed RLS policy allowing presence broadcasts to workspace members" },
        { type: "fix",  text: "Status no longer resets on page reload" },
      ],
    },
    {
      version: "v0.3.0", date: "June 17, 2025", tag: "Major", tagColor: C.accent,
      title: "Tasks (Kanban) launched",
      changes: [
        { type: "new",  text: "Four-column Kanban board: To Do, In Progress, In Review, Done" },
        { type: "new",  text: "Task detail panel with description, due date, and progress comments" },
        { type: "new",  text: "Progress bar on task cards (updates live)" },
        { type: "new",  text: "Assignee avatars on all task cards" },
        { type: "impr", text: "Active task now syncs from task board to desk card automatically" },
      ],
    },
    {
      version: "v0.2.0", date: "June 10, 2025", tag: "Update", tagColor: C.green,
      title: "Chat, Notice Board, and Documents",
      changes: [
        { type: "new",  text: "Team channels and direct messages" },
        { type: "new",  text: "Google Meet integration — one click to start, link auto-posts to channel" },
        { type: "new",  text: "Notice Board with Urgent / Important / Info priority tags" },
        { type: "new",  text: "Documents: folder tree + rich text editor" },
        { type: "new",  text: "Personal Notes (private per user)" },
        { type: "fix",  text: "Fixed message ordering on slow connections" },
      ],
    },
    {
      version: "v0.1.0", date: "June 3, 2025", tag: "Launch", tagColor: C.amber,
      title: "The Office — first build",
      changes: [
        { type: "new",  text: "The Office: visual grid of desk cards with status dots" },
        { type: "new",  text: "Authentication: email + Google OAuth via Supabase" },
        { type: "new",  text: "4-step onboarding flow: workspace → profile → invite → office" },
        { type: "new",  text: "Workspace settings: profile, team management" },
        { type: "new",  text: "Notification centre with real-time delivery" },
      ],
    },
  ];

  const typeStyles: Record<string, { bg: string; color: string; label: string }> = {
    new:  { bg: "rgba(0,230,118,0.1)",  color: C.green, label: "New" },
    fix:  { bg: "rgba(255,82,82,0.1)",  color: C.red,   label: "Fix" },
    impr: { bg: "rgba(0,212,255,0.1)",  color: C.accent,label: "Improved" },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Changelog"
          title="What's new in Kreww"
          subtitle="Every update, improvement, and fix — in plain English. We ship fast and we're transparent about it."
        />

        <Section>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
            {releases.map((rel, ri) => (
              <div key={rel.version} style={{ display: "flex", gap: 32, paddingBottom: 56, position: "relative" }}>
                {/* Timeline line */}
                {ri < releases.length - 1 && (
                  <div style={{ position: "absolute", left: 15, top: 32, bottom: 0, width: 1, backgroundColor: C.border }} />
                )}
                {/* Dot */}
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", backgroundColor: `${rel.tagColor}18`, border: `2px solid ${rel.tagColor}`, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, zIndex: 1 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: rel.tagColor }} />
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: C.text }}>{rel.version}</span>
                    <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${rel.tagColor}18`, color: rel.tagColor, borderRadius: 6, padding: "2px 8px" }}>{rel.tag}</span>
                    <span style={{ fontSize: 12, color: C.muted }}>{rel.date}</span>
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 16 }}>{rel.title}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {rel.changes.map((c, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: C.sec }}>
                        <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", backgroundColor: typeStyles[c.type].bg, color: typeStyles[c.type].color, borderRadius: 5, padding: "2px 6px", flexShrink: 0, marginTop: 1 }}>{typeStyles[c.type].label}</span>
                        {c.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/support/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function SupportPage() {
  const faqs = [
    { q: "How do I reset my password?",           a: "Go to the login page and click 'Forgot password'. You'll receive a reset link at your registered email within 2 minutes." },
    { q: "How do I invite my team?",              a: "From Settings → Team, click 'Invite member'. Enter their email and select a role. They'll receive an invite link valid for 7 days." },
    { q: "Can I change my workspace slug?",       a: "Workspace slugs are permanent after creation. If you need a new slug, contact us at hello@mykreww.com and we'll handle it manually." },
    { q: "How do I cancel my subscription?",      a: "Settings → Billing → Cancel plan. Your workspace stays active until the end of your paid period. No penalty, no hoops." },
    { q: "What happens when my trial ends?",      a: "Your workspace is locked (read-only) until you add a payment method. Your data is never deleted — you have 30 days to reactivate." },
    { q: "How do I export my workspace data?",   a: "Settings → Privacy → Export data. You'll receive a ZIP with all tasks, messages, documents, and member data in JSON format." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <PageHero
          eyebrow="Support"
          title="We're here to help"
          subtitle="Check the FAQs below, search the Help Centre, or reach out directly. We respond within 4 hours during business hours."
        />

        {/* Contact cards */}
        <Section bg={C.card}>
          <div className="kw-3col">
            {[
              { icon: "✉️", title: "Email Support",   desc: "hello@mykreww.com", sub: "Response under 4 hours · WAT business hours", href: "mailto:hello@mykreww.com" },
              { icon: "📚", title: "Help Centre",     desc: "Browse all articles",sub: "Self-serve answers for common questions",    href: "/help" },
              { icon: "📋", title: "Changelog",       desc: "See what's new",    sub: "Every update, fix, and improvement",          href: "/changelog" },
            ].map(c => (
              <a key={c.title} href={c.href} style={{ textDecoration: "none" }}>
                <div className="kw-card-hover" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 18, padding: "28px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 14, color: C.accent, fontWeight: 600, marginBottom: 6 }}>{c.desc}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{c.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* FAQs */}
        <Section>
          <h2 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 800, color: C.text, marginBottom: 32 }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
            {faqs.map((faq, i) => (
              <SupportFAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function SupportFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(o => !o)} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 20px", cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{q}</div>
        <div style={{ fontSize: 18, color: C.muted, flexShrink: 0 }}>{open ? "−" : "+"}</div>
      </div>
      {open && <div style={{ fontSize: 14, color: C.sec, lineHeight: 1.7, marginTop: 12 }}>{a}</div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/terms/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function TermsPage() {
  const sections = [
    { title: "1. Acceptance of Terms", body: "By accessing or using Kreww (mykreww.com), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the service. These terms apply to all visitors, users, and workspace members." },
    { title: "2. Description of Service", body: "Kreww is a virtual office platform for remote teams. It provides presence tracking, task management, team chat, announcements, document storage, and related collaboration features accessible via a web browser at mykreww.com." },
    { title: "3. Account Registration", body: "To use Kreww, you must create an account with a valid email address or authenticate via Google OAuth. You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorised access." },
    { title: "4. Subscriptions & Billing", body: "Kreww offers paid subscription plans billed monthly or annually. Payments are processed via Flutterwave in USD. A 14-day free trial is offered for new workspaces. After the trial, a valid payment method is required to continue access. Subscriptions auto-renew until cancelled." },
    { title: "5. Cancellations & Refunds", body: "You may cancel your subscription at any time from Settings → Billing. Cancellation takes effect at the end of the current billing period. Kreww does not offer pro-rated refunds for unused subscription time. Exceptional circumstances may be reviewed on request." },
    { title: "6. Acceptable Use", body: "You agree not to use Kreww for any unlawful purpose, to distribute malicious code, to harass or harm other users, to scrape or reverse-engineer the platform, or to violate any applicable laws or regulations. Violation of these terms may result in immediate account termination." },
    { title: "7. Data & Privacy", body: "Your use of Kreww is also governed by our Privacy Policy. We collect only the data necessary to provide the service. We do not sell personal data to third parties. Workspace data is owned by the workspace owner." },
    { title: "8. Intellectual Property", body: "Kreww and all associated logos, designs, and product content are the intellectual property of Kreww (Ayomide Alao). You retain ownership of all content you upload to Kreww. By uploading content, you grant Kreww a licence to store and display it for the purpose of providing the service." },
    { title: "9. Service Availability", body: "We aim for maximum uptime but do not guarantee uninterrupted service. Planned maintenance will be announced via the Notice Board and our status page. We are not liable for any losses resulting from service interruptions." },
    { title: "10. Changes to Terms", body: "We may update these Terms of Use at any time. We will notify workspace owners of significant changes via email and in-app notice. Continued use of Kreww after changes constitutes acceptance of the updated terms." },
    { title: "11. Contact", body: "Questions about these terms? Email us at hello@mykreww.com. We aim to respond within 2 business days." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <section style={{ padding: "80px 24px 48px", background: `radial-gradient(ellipse 70% 40% at 50% -5%, rgba(0,212,255,0.07) 0%, transparent 70%), ${C.bg}` }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Eyebrow>Legal</Eyebrow>
            <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 12 }}>Terms of Use</h1>
            <p style={{ fontSize: 14, color: C.muted }}>Last updated: June 2025</p>
          </div>
        </section>
        <section style={{ padding: "48px 24px 96px", backgroundColor: C.bg }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
            {sections.map(s => (
              <div key={s.title}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 10 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: C.sec, lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/privacy/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function PrivacyPage() {
  const sections = [
    { title: "1. Who we are", body: "Kreww is operated by Ayomide Alao (trading as Kreww) from Lagos, Nigeria. Our platform is accessible at mykreww.com. Questions: hello@mykreww.com." },
    { title: "2. What data we collect", body: "We collect: account information (name, email, profile photo), workspace data (tasks, messages, documents, notices), usage data (pages visited, features used, session duration), and billing information (processed by Flutterwave — we do not store card details). We collect only what is necessary to provide the service." },
    { title: "3. How we use your data", body: "We use your data to: provide and improve the Kreww service, send transactional emails (invites, billing, security alerts), analyse usage to improve product quality, and comply with legal obligations. We do not sell your data. We do not use your workspace content to train AI models." },
    { title: "4. Data storage & security", body: "Your data is stored on Supabase (hosted on AWS infrastructure). All data is encrypted at rest and in transit (TLS). We use Row Level Security (RLS) to ensure workspace data is accessible only to authorised members. Payment data is handled entirely by Flutterwave and is not stored on our servers." },
    { title: "5. Data sharing", body: "We do not sell or rent your data. We share data only with: Supabase (database and auth infrastructure), Flutterwave (payment processing), and where required by law. We do not share data with advertisers or data brokers." },
    { title: "6. Your rights", body: "You have the right to: access all data we hold about you, export your workspace data (Settings → Privacy → Export), delete your account and all associated data, and correct inaccurate information. To exercise these rights, email hello@mykreww.com." },
    { title: "7. Cookies", body: "Kreww uses cookies for authentication session management (Supabase Auth), and local preferences (dark/light mode). We do not use advertising or third-party tracking cookies." },
    { title: "8. Children's privacy", body: "Kreww is not intended for users under the age of 16. We do not knowingly collect data from minors. If you believe a minor has created an account, contact us immediately." },
    { title: "9. Changes to this policy", body: "We may update this Privacy Policy from time to time. We will notify workspace owners of significant changes via email. Continued use of Kreww after changes constitutes acceptance." },
    { title: "10. Contact", body: "For privacy questions, data requests, or concerns: hello@mykreww.com. We respond within 5 business days." },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        <section style={{ padding: "80px 24px 48px", background: `radial-gradient(ellipse 70% 40% at 50% -5%, rgba(0,212,255,0.07) 0%, transparent 70%), ${C.bg}` }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Eyebrow>Legal</Eyebrow>
            <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 12 }}>Privacy Policy</h1>
            <p style={{ fontSize: 14, color: C.muted }}>Last updated: June 2025</p>
          </div>
        </section>
        <section style={{ padding: "48px 24px 96px", backgroundColor: C.bg }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
            {sections.map(s => (
              <div key={s.title}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 10 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: C.sec, lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HelpPage;
