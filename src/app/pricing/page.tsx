import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';

export const metadata: Metadata = {
  title: 'Pricing — Kreww',
  description:
    'Tailored plans for teams of any scale. No hidden fees, no per-seat surprises.',
};

const plans = [
  {
    id: 'growth',
    name: 'Growth',
    desc: 'Perfect for small businesses and remote teams.',
    monthlyPrice: '₦25,000',
    yearlyPrice: '₦20,000',
    monthlyUSD: '$19',
    yearlyUSD: '$15',
    maxMembers: 15,
    highlight: false,
    cta: 'Get Started',
    features: [
      'Cyan AI for the founder (full access)',
      'Up to 15 team members',
      '10,000 Cyan AI tokens/month',
      '10 Sonnet 4.5 sessions',
      'Team & Focus collaboration',
      'Smart task management',
      'AI-and Kreww collaboration tools',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    desc: 'Designed for growing agencies and medium-scale enterprises.',
    monthlyPrice: '₦65,000',
    yearlyPrice: '₦52,000',
    monthlyUSD: '$49',
    yearlyUSD: '$39',
    maxMembers: null,
    highlight: true,
    cta: 'Get Started',
    features: [
      'Full Cyan AI for all members',
      'Unlimited members — no capacity',
      'Full-priority email support',
      '50,000 Cyan AI tokens',
      'Auditor SOC 2 audit token access',
      'AI integration & team collaboration',
      'Team analytics & data sync',
      'Enterprise-grade data security',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'Built for large-scale corporations, consulting, and executive teams.',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    monthlyUSD: 'Custom',
    yearlyUSD: 'Custom',
    maxMembers: null,
    highlight: false,
    cta: 'Contact Sales',
    features: [
      'Custom AI token allocation',
      'Dedicated Customer Success lead',
      'Full-system API access',
      'Custom security & SLAs',
      'Auditor SOC 2 audit token',
      'Everything included in Business',
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
  { country: 'Nigeria', starter: '₦25,000', business: '₦65,000' },
  { country: 'Kenya', starter: 'KES 2,300', business: 'KES 6,000' },
  { country: 'Ghana', starter: 'GH₵ 210', business: 'GH₵ 550' },
  { country: 'South Africa', starter: 'R350', business: 'R900' },
  { country: 'United Kingdom', starter: '£15', business: '£40' },
];

const faqs = [
  {
    q: 'What is the difference between Cyan AI tokens and Sonnet sessions?',
    a: 'Cyan AI tokens power your real-time virtual office assistant updates — smart notifications, visibility tools, and summaries presented on your workspace. Sonnet sessions are full conversational AI sessions for deep business intelligence work.',
  },
  {
    q: 'Can I add more team members to the Growth plan later?',
    a: 'Yes. You can add members up to the 15-member cap on Growth. If you need more, upgrade to Business at any time without losing data.',
  },
  {
    q: 'Do my unused Cyan AI tokens roll over to the next month?',
    a: 'No. For now, tokens expire at the end of each billing period. A token savings feature is on the roadmap.',
  },
  {
    q: 'How secure is our company data with Cyan AI?',
    a: 'Completely. Kreww uses industry-standard end-to-end encryption. Your workspace data is never used to train AI models.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'Payments are processed securely via Flutterwave. We accept all major cards in 30+ currencies including Naira, Cedis, and KES.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from Settings → Billing before your next billing date. No hoops, no tricks.',
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
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.1), transparent)',
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 text-center">
          <div className="label-eyebrow mx-auto">Pricing</div>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Tailored Plans for
            <br />
            Teams of Any Scale
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: 'var(--text-secondary)' }}>
            No hidden fees or complicated pricing. Pick the plan that fits your team and start growing today.
          </p>

          {/* Billing toggle */}
          <div
            className="mx-auto mt-8 inline-flex items-center rounded-full p-1"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <span
              className="rounded-full px-6 py-2 text-sm font-semibold"
              style={{ backgroundColor: 'var(--accent)', color: '#050D1A' }}
            >
              Monthly
            </span>
            <span
              className="cursor-pointer px-6 py-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: 'var(--text-muted)' }}
            >
              Yearly
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
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
              {plan.maxMembers && (
                <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                  Up to {plan.maxMembers} members
                </div>
              )}

              <Link
                href={plan.id === 'enterprise' ? '/contact' : '/signup'}
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
            We charge in USD. These are estimates based on current exchange rates.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
                    {lp.starter}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    Growth
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
