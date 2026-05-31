import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Globe } from 'lucide-react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';

export const metadata: Metadata = {
  title: 'About — Kreww',
  description:
    'Built in Lagos, Nigeria. Our mission is to make remote teams feel genuinely together.',
};

export default function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <MarketingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,13,26,0.62), rgba(5,13,26,0.95)), radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.14), transparent), url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=3840&q=90) center/cover no-repeat',
          }}
        />
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center">
          <div className="label-eyebrow mx-auto">Our Company</div>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Built in Africa.
            <br />
            Built for the world.
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Kreww exists because remote work broke something. Teams became task lists. People became avatars. Culture became a Slack channel nobody reads. We&apos;re fixing that — starting from Lagos, Nigeria.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="border-y py-20"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="label-eyebrow">Our Mission</div>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                To make remote teams feel genuinely together.
              </h2>
              <p
                className="mt-5 text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Every team, regardless of size or location, deserves a real office culture they actually want to belong to. Not just tasks and messages — but presence, culture, warmth, and identity.
              </p>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                When your team logs into Kreww, they should feel like they showed up to work together.
              </p>
            </div>

            <div>
              <div className="label-eyebrow">Our Vision</div>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                The world&apos;s most human virtual office.
              </h2>
              <p
                className="mt-5 text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                The platform where remote teams don&apos;t just work — they belong. We&apos;re building Kreww to prove that African builders can create world-class tools for global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="label-eyebrow">Founder Story</div>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              From WebOwnr to Kreww
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Ayomide Alao (Alphae X) is a self-taught developer and entrepreneur from Lagos, Nigeria. He built Kreww because he lived the problem — remote teams that feel disconnected, fragmented across tools, with no real sense of presence or culture.
              </p>
              <p>
                He started with WebOwnr, a store builder for African SMEs, and learned through building it that the deeper problem for African businesses isn&apos;t just selling online — it&apos;s operating as a real, coordinated team. Kreww is the evolution of that understanding.
              </p>
              <p>
                His ambition is not a side project. He is building Kreww to become a company — a real, funded, globally recognised product that starts in Nigeria and scales to the world.
              </p>
              <p style={{ color: 'var(--accent)' }} className="font-medium">
                &ldquo;African builders deserve world-class tools built for their reality — and the best way to prove it is to build one yourself.&rdquo;
              </p>
            </div>

            {/* Founder card */}
            <div
              className="mt-10 flex items-center gap-4 rounded-2xl p-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                style={{
                  backgroundColor: 'rgba(0,212,255,0.15)',
                  color: 'var(--accent)',
                  border: '2px solid rgba(0,212,255,0.3)',
                }}
              >
                AA
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Ayomide Alao
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Founder & CEO · Alphae X
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <MapPin className="h-3 w-3" /> Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="border-t py-20"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="label-eyebrow">What We Believe</div>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              The Five Culture Pillars
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { number: '01', title: 'Real', body: 'Honest, human, and direct. No corporate language. No fake enthusiasm.' },
              { number: '02', title: 'Together', body: 'We build for belonging, not just productivity. The team comes first.' },
              { number: '03', title: 'Quality', body: 'We ship things that feel premium. No broken flows. No ugly UX. Ever.' },
              { number: '04', title: 'African by Design', body: 'Mobile-first, low-bandwidth aware, warm, culturally intelligent.' },
              { number: '05', title: 'Growth-Obsessed', body: 'Every decision must help users make more money or save more time.' },
            ].map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="text-xs font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  {pillar.number}
                </div>
                <h3
                  className="mt-2 text-base font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Ready to bring your team together?
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--text-secondary)' }}>
            Join the teams already building with Kreww.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold transition-all hover:brightness-110"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#050D1A',
                boxShadow: '0 4px 24px rgba(0,212,255,0.3)',
              }}
            >
              Start Growing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
