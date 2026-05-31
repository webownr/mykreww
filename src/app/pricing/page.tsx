import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';

export const metadata: Metadata = {
  title: 'Pricing — Kreww',
  description:
    'Simple $4.99/month pricing for teams, with approximate Nigerian Naira pricing.',
};

const plans = [
  {
    id: 'pro',
    name: 'Kreww Pro',
    desc: 'Everything your team needs to run a virtual office.',
    monthlyPrice: '$4.99',
    localPrice: 'Approx. ₦6,842/month in Nigeria',
    maxMembers: null,
    highlight: true,
    cta: 'Get Started',
    features: [
      'Full virtual office workspace',
      'Tasks, chat, notices, documents, notes, and browser',
      'Cyan AI workspace assistance',
      'Real-time team presence and collaboration',
      'All future updates included',
      'Priority email support',
    ],
  },
];

const allFeatures = [
  'The Office — visual workspace with live presence',
  'Tasks — Kanban board with progress threads',
  'Chat — channels, DMs & Google Meet',
  'Notice Board — company-wide announcements',
  'Documents — folders & collaborative editor',
  'Personal Notes — your private workspace',
  'In-app Browser — bookmarks & tabs',
  'Real-time team presence',
  'Priority email support',
  'All future updates included',
];

const localPrices = [
  { country: 'Nigeria', price: '₦6,842' },
];

const faqs = [
  {
    q: 'What can my team do inside The Office?',
    a: 'The Office gives everyone a shared virtual workspace with live presence, status, and quick access to the tools they need to coordinate work without jumping between apps.',
  },
  {
    q: 'How do Tasks help remote teams stay accountable?',
    a: 'Tasks give teams a visual Kanban board with owners, due dates, progress updates, and real-time movement so everyone can see what is blocked, in review, or ready to ship.',
  },
  {
    q: 'Can we share company-wide updates in Kreww?',
    a: 'Yes. Notice Board is built for announcements, policy updates, and important broadcasts so updates are visible and easy for the whole company to find.',
  },
  {
    q: 'Are documents, notes, chat, and browsing included?',
    a: 'Yes. Kreww brings chat, collaborative documents, private notes, bookmarks, and an in-app browser into the same workspace so teams can keep context in one place.',
  },
];

export default function PricingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <MarketingHeader />

      {/* Beta banner */}
      <div
        className="border-b py-3 text-center text-sm font-medium"
        style={{
          borderColor: 'rgba(0,212,255,0.2)',
          backgroundColor: 'rgba(0,212,255,0.06)',
          color: 'var(--accent)',
        }}
      >
        <Zap className="mr-1.5 inline h-4 w-4" />
        <span className="font-bold">Beta is live!</span> Kreww is free until August 1st, 2026.{' '}
        <Link href="/signup" className="font-bold underline underline-offset-2">
          Join free →
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,13,26,0.66), rgba(5,13,26,0.95)), radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.14), transparent), url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=3840&q=90) center/cover no-repeat',
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 text-center">
          <div className="label-eyebrow mx-auto">Pricing</div>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Simple Pricing for
            <br />
            Every Growing Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: 'var(--text-secondary)' }}>
            One affordable plan at $4.99/month. Nigeria visitors can use the approximate whole-number Naira estimate below.
          </p>

        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto grid max-w-xl gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative rounded-2xl p-6"
              style={{
                backgroundColor: plan.highlight ? 'rgba(0,212,255,0.04)' : 'var(--bg-card)',
                border: plan.highlight
                  ? '2px solid rgba(0,212,255,0.4)'
                  : '1px solid var(--border)',
                boxShadow: plan.highlight
                  ? '0 0 40px rgba(0,212,255,0.08)'
                  : 'none',
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'var(--accent)', color: '#050D1A' }}
                >
                  Recommended
                </div>
              )}

              <div
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                {plan.name}
              </div>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {plan.desc}
              </p>

              <div className="mt-5">
                <span
                  className="text-3xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {plan.monthlyPrice}
                </span>
                {plan.monthlyPrice !== 'Custom' && (
                  <span className="ml-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    /monthly
                  </span>
                )}
              </div>
              <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                {plan.localPrice}
              </div>

              <Link
                href="/signup"
                className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all hover:brightness-110 active:scale-[0.97]"
                style={{
                  backgroundColor: plan.highlight ? 'var(--accent)' : 'transparent',
                  color: plan.highlight ? '#050D1A' : 'var(--accent)',
                  border: plan.highlight ? 'none' : '1px solid rgba(0,212,255,0.3)',
                }}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      style={{ color: 'var(--accent)' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Everything included */}
        <div
          className="mt-10 rounded-2xl p-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <h3
            className="mb-5 text-sm font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Everything included in every plan
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {allFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: 'var(--accent)' }}
                />
                <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local pricing */}
        <div
          className="mt-6 rounded-2xl p-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <h3 className="mb-1 text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
            Approximate local pricing
          </h3>
          <p className="mb-5 text-xs" style={{ color: 'var(--text-muted)' }}>
            We charge $4.99 in USD. The Nigerian Naira estimate is rounded to a whole number and may vary with exchange rates.
          </p>
          <div className="grid gap-2 sm:grid-cols-1">
            {localPrices.map((lp) => (
              <div
                key={lp.country}
                className="flex items-center justify-between rounded-xl px-4 py-3"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {lp.country}
                </span>
                <div className="text-right">
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    {lp.price}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    $4.99/month
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-14">
          <h2
            className="mb-7 text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Common questions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {faq.q}
                </div>
                <div
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
