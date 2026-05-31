// TWO FILES:
// 1. src/app/blog/page.tsx  — Blog index
// 2. src/app/blog/[slug]/page.tsx — Individual post (with 3 sample posts)

import Link from "next/link";
import { Nav, Footer, Section, Eyebrow, ArrowRight, C, GLOBAL_CSS } from "@/components/_shared";

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: post data
// ─────────────────────────────────────────────────────────────────────────────
export const POSTS = [
  {
    slug: "remote-work-killed-team-culture",
    tag: "Culture", tagColor: C.accent,
    date: "May 20, 2025",
    title: "Remote work killed team culture. Here's what we're doing about it.",
    excerpt: "When your team only exists as avatars in a Slack sidebar, something important gets lost. Presence, warmth, identity. Kreww is built to bring it back.",
    readTime: "5 min read",
    author: "Ayomide Alao",
    authorInit: "AA",
    content: [
      { type: "p", text: "Something broke when remote work went mainstream. It wasn't the productivity — teams shipped just as much, sometimes more. What broke was the feeling. The sense that you're in it together. The ambient awareness of your teammates. The culture." },
      { type: "h2", text: "The problem isn't tools. It's presence." },
      { type: "p", text: "We have more tools than ever. Slack, Notion, Asana, Zoom, Loom, Figma, Linear. Pick any ten-person remote team and they're using at least six of them. But none of these tools tell you that your designer is deep in focus right now. None of them make you feel like you walked into an office this morning." },
      { type: "p", text: "That's the gap Kreww is designed to fill. Not another task manager. Not another chat tool. A virtual office — a place where your team's presence is visible, felt, and real." },
      { type: "h2", text: "What culture actually is" },
      { type: "p", text: "Culture isn't a values document or a team retreat. It's built in small moments. The morning greeting. Knowing a teammate is heads-down on something important. Celebrating a win in the same virtual room. Kreww is built around these moments — not workflows." },
      { type: "p", text: "When you open Kreww in the morning, you see your team's desk cards. You know who's online. You can see what Chidi is working on. You can drop a message directly from his card. That's presence. That's culture." },
      { type: "h2", text: "Why we built The Office as the hero screen" },
      { type: "p", text: "Every decision in Kreww flows from one belief: the team comes first. Not the tasks, not the documents — the people. That's why The Office — the visual grid of desk cards — is the first screen you see when you log in. It's not a dashboard. It's your floor. Your team's home." },
      { type: "p", text: "We're building the product we wished existed when we were running remote teams across Lagos, Abuja, and beyond. We're building it right. And we're building it to last." },
    ],
  },
  {
    slug: "building-kreww-from-lagos",
    tag: "Build in Public", tagColor: C.green,
    date: "May 28, 2025",
    title: "Building Kreww from Lagos: Week 1",
    excerpt: "What it actually looks like to build a SaaS product from Lagos in 2025. The wins, the blockers, and what we shipped this week.",
    readTime: "4 min read",
    author: "Ayomide Alao",
    authorInit: "AA",
    content: [
      { type: "p", text: "I'm building in public. That means sharing the real stuff — not just the wins. This is week one of the Kreww build log." },
      { type: "h2", text: "What we shipped" },
      { type: "p", text: "This week was about foundations. Auth (email + Google OAuth via Supabase), workspace creation, and the basic shell of The Office screen. The desk cards are rendering. Presence isn't real-time yet — that comes next week — but the layout is done and it already feels like something." },
      { type: "p", text: "Victor dropped the first version of the brand identity. Navy background, cyan accent. It clicked. The Kreww logo in Inter Bold with a K icon. Simple, premium, ours." },
      { type: "h2", text: "What was hard" },
      { type: "p", text: "Supabase RLS (Row Level Security) ate two days. Getting the policies right so members can only see their own workspace data while still allowing real-time subscriptions to broadcast correctly — it's not obvious. I have it working now but it needs a proper write-up." },
      { type: "p", text: "Also: scope creep. I almost started building the Cyan AI layer before The Office was done. The knowledge base has a rule for this: if it's Phase 2, it doesn't get touched. I caught myself and parked it." },
      { type: "h2", text: "Next week" },
      { type: "p", text: "Real-time presence via Supabase Realtime. The status dots need to pulse. Teammates need to show as online the moment they connect. That's the magic moment — when the desk cards feel alive. That's what I'm building next." },
    ],
  },
  {
    slug: "why-african-teams-need-kreww",
    tag: "Market", tagColor: C.amber,
    date: "June 3, 2025",
    title: "Why African remote teams are uniquely underserved — and what that means for Kreww",
    excerpt: "Every major remote work tool was designed for a San Francisco office. Here's what gets lost in translation when African teams try to use them.",
    readTime: "6 min read",
    author: "Ayomide Alao",
    authorInit: "AA",
    content: [
      { type: "p", text: "Walk into any Nigerian tech company's Slack and you'll find something that pattern-matches to a Western remote team. Channels. Threads. Emoji reactions. But look closer and you'll see the workarounds." },
      { type: "h2", text: "The WhatsApp problem" },
      { type: "p", text: "The most common collaboration tool for African businesses isn't Slack or Teams. It's WhatsApp. Why? Because it's already installed. It's fast on mobile. It works on 3G. It doesn't require a credit card to access. And everyone is already on it." },
      { type: "p", text: "But running a business in WhatsApp is chaos. No task tracking. No document management. No presence layer. Files get buried. Decisions get lost. Accountability disappears into 400-message threads." },
      { type: "h2", text: "What Kreww does differently" },
      { type: "p", text: "Kreww is designed from the ground up for the African context. Mobile-first. Low-bandwidth aware. The Office screen uses CSS and SVG — not Three.js or WebGL — because it needs to load in under 2 seconds on a Nigerian 4G connection." },
      { type: "p", text: "Pricing in local context. We charge in USD (Flutterwave handles the conversion) but we display approximate local prices — Naira, Cedis, KES — so the cost feels real, not foreign." },
      { type: "p", text: "The Kreww brand is warm. It speaks like a friend, not a corporation. Because that's how we communicate." },
      { type: "h2", text: "The opportunity" },
      { type: "p", text: "Africa has 1.4 billion people. Remote work infrastructure is growing at 20%+ year-on-year. The tools being built for this moment are almost entirely built elsewhere, for people with different realities. Kreww is our answer to that. And we're just getting started." },
    ],
  },
  {
    slug: "one-workspace-every-tool",
    tag: "Product", tagColor: "#9B59B6",
    date: "June 10, 2025",
    title: "One workspace, every tool your team needs",
    excerpt: "Why we built tasks, chat, documents, and a notice board into Kreww — and why the integration is the product.",
    readTime: "4 min read",
    author: "Ayomide Alao",
    authorInit: "AA",
    content: [
      { type: "p", text: "The most common question we get: 'Why does Kreww have tasks AND chat AND documents? Isn't that trying to do too much?'" },
      { type: "h2", text: "The fragmentation problem" },
      { type: "p", text: "The average remote team uses 6–10 tools. Notion for docs. Asana for tasks. Slack for chat. Loom for async video. Zoom for calls. Figma for design. None of these tools know about each other. Context lives in everyone's heads — and gets lost every time someone leaves the company." },
      { type: "p", text: "Kreww doesn't try to replace every tool. But it provides the core layer: presence, tasks, chat, announcements, and documents. The things every team needs. Unified." },
      { type: "h2", text: "The integration is the product" },
      { type: "p", text: "When you assign a task to a teammate in Kreww, it shows on their desk card in The Office. When you post a notice, the whole team sees it. When you start a meeting from Chat, the link auto-posts. Nothing is siloed. Everything is connected." },
      { type: "p", text: "That's the product. Not any individual feature — the integration between all of them, lived in a single place your team actually wants to open in the morning." },
    ],
  },
  {
    slug: "pricing-for-african-startups",
    tag: "Business", tagColor: C.green,
    date: "June 17, 2025",
    title: "How we think about pricing for African startups",
    excerpt: "Charging $20/user/month doesn't work when your customer is a 10-person agency in Lagos. Here's our pricing philosophy.",
    readTime: "3 min read",
    author: "Ayomide Alao",
    authorInit: "AA",
    content: [
      { type: "p", text: "Most SaaS pricing is per-seat. $10/user/month. $20/user/month. For a US company, that's fine. For a 10-person Nigerian startup, $200/month is a meaningful chunk of operating costs." },
      { type: "h2", text: "Our approach: per-team, not per-seat" },
      { type: "p", text: "Kreww charges per workspace, not per user. $19/month for up to 15 members. $49/month for unlimited. That's it. One number. No surprises when you hire your 11th person." },
      { type: "p", text: "We display approximate local pricing — Naira, Cedis, Kenyan Shillings — so teams can contextualise the cost. We charge in USD via Flutterwave but the framing matters." },
      { type: "h2", text: "No free plan by design" },
      { type: "p", text: "We don't have a free plan. We have a 14-day full trial. Why? Because free plans attract teams that never convert. A trial with a real end date attracts teams that are serious. We'd rather have 25 paying teams than 500 free ones." },
    ],
  },
  {
    slug: "supabase-realtime-presence",
    tag: "Engineering", tagColor: C.red,
    date: "June 24, 2025",
    title: "How we built real-time presence with Supabase — and what we learned",
    excerpt: "A technical deep-dive into building The Office's live status dots, last-seen tracking, and Page Visibility API integration.",
    readTime: "7 min read",
    author: "Ayomide Alao",
    authorInit: "AA",
    content: [
      { type: "p", text: "The magic moment in Kreww is when you open The Office and the status dots are alive. Green for online, amber for away, grey for offline. They update the instant a teammate's state changes. Here's how we built it." },
      { type: "h2", text: "The architecture" },
      { type: "p", text: "We use Supabase Realtime Presence channels for broadcasting live state, and Supabase Postgres for persisting status to the workspace_members table. The two work together: Realtime for instant updates, Postgres as the source of truth." },
      { type: "h2", text: "Page Visibility API" },
      { type: "p", text: "When a user switches tabs or minimises the window, we use the Page Visibility API to set their status to 'away'. When they return, we flip them back to 'online'. This happens client-side in a useEffect hook that subscribes to the visibilitychange event." },
      { type: "p", text: "On unmount (sign out or close), we set status to 'offline' and last_seen to now(). On the server, a Postgres function runs every 5 minutes to mark anyone with last_seen > 5 minutes ago as offline — catching cases where the client disconnects uncleanly." },
      { type: "h2", text: "The gotcha: RLS and real-time" },
      { type: "p", text: "Row Level Security is essential for Kreww's data model — users should only see their own workspace. But Supabase Realtime requires RLS policies to be carefully crafted or broadcasts won't reach subscribers. The key insight: members can read all workspace_members rows in their workspace, but can only update their own row." },
      { type: "p", text: "We wrote a single RLS policy for each operation and tested with two separate browser sessions. When it worked — watching one tab's status dot update the moment the other tab became active — that was the moment Kreww felt real." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FILE 1: src/app/blog/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
export function BlogIndexPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ padding: "88px 24px 64px", background: `radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,212,255,0.09) 0%, transparent 70%), ${C.bg}` }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <Eyebrow>Blog</Eyebrow>
            <h1 style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.text, lineHeight: 1.05, marginBottom: 16 }}>
              Thoughts on remote work,<br />product, and building in Africa
            </h1>
            <p style={{ fontSize: 16, color: C.sec, lineHeight: 1.65 }}>Written by the Kreww team as we build in public.</p>
          </div>
        </section>

        {/* Featured post */}
        <Section bg={C.card}>
          <Link href={`/blog/${featured.slug}`} style={{ display: "block" }}>
            <div className="kw-card-hover" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 22, padding: "40px 40px", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${featured.tagColor}18`, color: featured.tagColor, borderRadius: 6, padding: "3px 10px" }}>{featured.tag}</span>
                <span style={{ fontSize: 12, color: C.muted }}>Featured</span>
              </div>
              <h2 style={{ fontSize: "clamp(20px,2.8vw,34px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: C.sec, lineHeight: 1.65, marginBottom: 24, maxWidth: 680 }}>{featured.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(0,212,255,0.14)", color: C.accent, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{featured.authorInit}</div>
                <span style={{ fontSize: 13, color: C.sec }}>{featured.author}</span>
                <span style={{ fontSize: 12, color: C.muted }}>{featured.date}</span>
                <span style={{ fontSize: 12, color: C.muted }}>{featured.readTime}</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: C.accent, fontWeight: 600 }}>Read post <ArrowRight /></span>
              </div>
            </div>
          </Link>
        </Section>

        {/* All posts grid */}
        <Section>
          <div className="kw-blog-grid">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block" }}>
                <div className="kw-card-hover" style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "26px 24px", height: "100%", cursor: "pointer" }}>
                  <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${post.tagColor}18`, color: post.tagColor, borderRadius: 6, padding: "3px 10px" }}>{post.tag}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.text, lineHeight: 1.4, margin: "14px 0 10px" }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: C.sec, lineHeight: 1.6, marginBottom: 20 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "rgba(0,212,255,0.14)", color: C.accent, fontSize: 9, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{post.authorInit}</div>
                    <span style={{ fontSize: 12, color: C.muted }}>{post.date}</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, color: C.muted }}>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Newsletter */}
        <Section bg={C.card} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: C.text, marginBottom: 12 }}>Get new posts in your inbox</h2>
          <p style={{ fontSize: 15, color: C.sec, marginBottom: 28 }}>We write about remote work, building in public, and product. No spam.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", maxWidth: 440, margin: "0 auto" }}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: 200, height: 44, borderRadius: 10, border: `1px solid ${C.border}`, backgroundColor: C.bg, color: C.text, fontSize: 14, padding: "0 16px", outline: "none" }} />
            <button style={{ height: 44, borderRadius: 10, border: "none", backgroundColor: C.accent, color: C.bg, fontSize: 14, fontWeight: 700, padding: "0 20px", cursor: "pointer" }}>Subscribe</button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE 2: src/app/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
export function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find(p => p.slug === params.slug) ?? POSTS[0];
  const related = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS + `
        .kw-prose h2 { font-size: clamp(18px,2.5vw,26px); font-weight: 800; color: #F0F4F8; margin: 36px 0 14px; letter-spacing: -0.02em; }
        .kw-prose p  { font-size: 16px; color: #8BA0B8; line-height: 1.8; margin-bottom: 18px; }
      `}} />
      <Nav />
      <main>
        {/* Post hero */}
        <section style={{ padding: "80px 24px 60px", background: `radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,212,255,0.08) 0%, transparent 70%), ${C.bg}` }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: C.muted, marginBottom: 28 }}>
              ← Back to blog
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${post.tagColor}18`, color: post.tagColor, borderRadius: 6, padding: "3px 10px" }}>{post.tag}</span>
              <span style={{ fontSize: 13, color: C.muted }}>{post.date}</span>
              <span style={{ fontSize: 13, color: C.muted }}>{post.readTime}</span>
            </div>
            <h1 style={{ fontSize: "clamp(24px,4vw,46px)", fontWeight: 800, color: C.text, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>{post.title}</h1>
            <p style={{ fontSize: 17, color: C.sec, lineHeight: 1.65, marginBottom: 32 }}>{post.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", backgroundColor: "rgba(0,212,255,0.14)", color: C.accent, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{post.authorInit}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{post.author}</div>
                <div style={{ fontSize: 12, color: C.muted }}>Founder & CEO · Kreww</div>
              </div>
            </div>
          </div>
        </section>

        {/* Post body */}
        <section style={{ padding: "56px 24px 80px", backgroundColor: C.bg }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }} className="kw-prose">
            {post.content.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </section>

        {/* Related posts */}
        <Section bg={C.card}>
          <h2 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 800, color: C.text, marginBottom: 28 }}>More from the blog</h2>
          <div className="kw-3col">
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display: "block" }}>
                <div className="kw-card-hover" style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: "22px 20px", cursor: "pointer" }}>
                  <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", backgroundColor: `${p.tagColor}18`, color: p.tagColor, borderRadius: 6, padding: "3px 9px" }}>{p.tag}</span>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: "12px 0 8px", lineHeight: 1.4 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{p.date} · {p.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default BlogIndexPage;
