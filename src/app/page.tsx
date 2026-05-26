import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Layout,
  Users,
  Check,
  MessageSquare,
  Sparkles,
  Zap,
  Shield,
  Brain,
  Globe,
  ChevronDown,
} from 'lucide-react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import { OfficeMockup } from '@/components/OfficeMockup';

export const metadata: Metadata = {
  title: 'Kreww — Your team deserves a real office',
  description:
    'Stop running your business in WhatsApp groups. Kreww gives your remote team a professional virtual office — one place to work, collaborate, and grow.',
};

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <MarketingHeader />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <WorkflowSection />
      <ToolsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <MarketingFooter />
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,255,0.1), transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{
              border: '1px solid rgba(0,212,255,0.2)',
              backgroundColor: 'rgba(0,212,255,0.06)',
              color: 'var(--accent)',
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            THE OFFICE FOR BUSINESSES
          </div>

          <h1
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Your team deserves a real office
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            Stop running your business in WhatsApp groups. Kreww gives your remote team a professional virtual office, a unified platform, one place to work, collaborate, and grow.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold transition-all hover:brightness-110 active:scale-[0.97]"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#050D1A',
                boxShadow: '0 4px 24px rgba(0,212,255,0.3)',
              }}
            >
              Start Growing →
            </Link>
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold transition-all hover:bg-white/5"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              Book Demo
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <OfficeMockup />
        </div>
      </div>
    </section>
  );
}

/* ─── STATS BAR ─────────────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: '2000+', label: 'Businesses' },
    { value: '80', label: 'Businesses' },
    { value: '98%', label: 'Businesses' },
    { value: '24/7', label: 'Support Availability' },
  ];

  return (
    <section
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div
                className="text-3xl font-bold tabular-nums"
                style={{ color: 'var(--text-primary)' }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ──────────────────────────────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: Building2,
      title: 'Unified Operations',
      body: 'Kreww keeps your office running for disconnected teams with automated, highly synchronised workflows.',
    },
    {
      icon: MessageSquare,
      title: 'Context-Aware Alerts',
      body: 'Context-Aware AI sync keeps the business intelligence on your workspace status presented on your desktop.',
    },
    {
      icon: Users,
      title: 'Real-Time Presence',
      body: 'Powerful tools to your team with workspace, presence, and status information right at their fingertips.',
    },
    {
      icon: Zap,
      title: 'Push Communication',
      body: 'Asynchronous collaboration brings the gap between remote workers. Ship tasks quickly without context loss.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Left: feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover rounded-2xl p-5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'rgba(0,212,255,0.12)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    color: 'var(--accent)',
                  }}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {f.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right: copy */}
          <div className="flex flex-col justify-center lg:pl-8">
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              One workspace.
              <br />
              Every tool your
              <br />
              team needs.
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Your entire office space integrated in a single platform. Everything your team needs to run a smooth company workflow, putting every tool and team member right at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WORKFLOW / COMPLETE VISIBILITY ─────────────────────────────────────────── */
function WorkflowSection() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Complete visibility.
              <br />
              Zero friction.
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              This is what running a business looks like with Kreww. A centralised command centre that gives your entire organisation a birds-eye view of all operations in a single, beautifully organised feed.
            </p>
          </div>

          {/* App screenshot / mockup */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              border: '1px solid var(--border)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.06)',
            }}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Mini dashboard preview mockup */
function DashboardMockup() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-sidebar)' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded text-[10px] font-bold"
            style={{ backgroundColor: 'rgba(0,212,255,0.15)', color: 'var(--accent)' }}
          >
            K
          </div>
          <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
            Kreww
          </span>
        </div>
        <div className="flex gap-1">
          {['Office', 'Tasks', 'Chat'].map((tab, i) => (
            <span
              key={tab}
              className="rounded px-2 py-1 text-[10px] font-medium"
              style={{
                backgroundColor: i === 0 ? 'rgba(0,212,255,0.15)' : 'transparent',
                color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Mini kanban */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { col: 'To Do', tasks: ['Brand refresh', 'Mobile nav'], color: 'var(--text-muted)' },
            { col: 'In Progress', tasks: ['Dashboard v2', 'API docs'], color: 'var(--accent)' },
            { col: 'Done', tasks: ['Auth flow', 'Supabase setup'], color: 'var(--success)' },
          ].map((col) => (
            <div key={col.col}>
              <div
                className="mb-2 text-[10px] font-bold uppercase"
                style={{ color: col.color }}
              >
                {col.col}
              </div>
              {col.tasks.map((task) => (
                <div
                  key={task}
                  className="mb-1.5 rounded-lg p-2 text-[10px]"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {task}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Presence strip */}
        <div
          className="mt-4 flex items-center gap-2 rounded-xl p-3"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="flex -space-x-1.5">
            {['AA', 'VO', 'CM'].map((init, i) => (
              <div
                key={init}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold ring-2"
                style={{
                  backgroundColor: ['rgba(0,212,255,0.2)', 'rgba(0,230,118,0.2)', 'rgba(255,179,0,0.2)'][i],
                  color: ['var(--accent)', 'var(--success)', 'var(--warning)'][i],
                  ringColor: 'var(--bg-card)',
                }}
              >
                {init}
              </div>
            ))}
          </div>
          <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>
            3 members online now
          </span>
          <div
            className="ml-auto h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: 'var(--success)' }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── TOOLS GRID ────────────────────────────────────────────────────────────── */
function ToolsSection() {
  const tools = [
    {
      icon: Zap,
      title: 'Seamless Tool Integrations',
      body: 'Connect third-party apps you already love to manage tasks, without losing workflow context.',
    },
    {
      icon: Brain,
      title: 'Meet Cyan AI',
      body: 'Your AI virtual office assistant. Updates smart notifications, visibility tools, and surfaces insights instantly.',
    },
    {
      icon: Globe,
      title: 'Virtual Headquarters',
      body: 'Create a professional virtual office that spans any country, removing location barriers and enabling collaboration.',
    },
    {
      icon: Building2,
      title: 'Central Asset Hub',
      body: 'Keep projects, files, tokens, and documentation in one place. No more searching across tools you cannot find.',
    },
    {
      icon: Check,
      title: 'Smart Task Management',
      body: 'Track milestones, assign action items, and monitor workload in real-time across your team permissions.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      body: 'Protect your business data with enterprise-standard encryption, role-based access control, and customisable user permissions.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Efficient and Effective
            <br />
            All-in-One Business Workspace
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Top-notch integrations and a powerful ecosystem designed to streamline your team&apos;s workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="card-hover rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: 'var(--accent)',
                }}
              >
                <tool.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {tool.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {tool.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ────────────────────────────────────────────────────────────────── */
function PricingSection() {
  const plans = [
    {
      id: 'growth',
      name: 'Growth',
      desc: 'Perfect for small businesses and remote teams.',
      monthlyPrice: '₦25,000',
      yearlyPrice: '₦20,000',
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
      desc: 'Designed for growing agencies and medium scale enterprises.',
      monthlyPrice: '₦65,000',
      yearlyPrice: '₦52,000',
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
      desc: 'Built for large-scale corporations consulting and executive teams.',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
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

  return (
    <section
      className="py-24"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Tailored Plans for
            <br />
            Teams of Any Scale
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
            No hidden fees or complicated pricing. Pick the plan that fits your team and start growing today.
          </p>

          {/* Billing toggle — decorative */}
          <div
            className="mx-auto mt-6 inline-flex items-center rounded-full p-1"
            style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
          >
            <span
              className="rounded-full px-5 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: 'var(--accent)', color: '#050D1A' }}
            >
              Monthly
            </span>
            <span className="px-5 py-1.5 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              Yearly
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative rounded-2xl p-6"
              style={{
                backgroundColor: plan.highlight ? 'rgba(0,212,255,0.04)' : 'var(--bg-primary)',
                border: plan.highlight ? '2px solid rgba(0,212,255,0.4)' : '1px solid var(--border)',
                boxShadow: plan.highlight ? '0 0 40px rgba(0,212,255,0.08)' : 'none',
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'var(--accent)', color: '#050D1A' }}
                >
                  Recommended
                </div>
              )}

              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {plan.name}
              </div>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {plan.desc}
              </p>

              <div className="mt-4">
                <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {plan.monthlyPrice}
                </span>
                {plan.monthlyPrice !== 'Custom' && (
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {' '}/monthly
                  </span>
                )}
              </div>

              <Link
                href={plan.id === 'enterprise' ? '/contact' : '/signup'}
                className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all hover:brightness-110"
                style={{
                  backgroundColor: plan.highlight ? 'var(--accent)' : 'transparent',
                  color: plan.highlight ? '#050D1A' : 'var(--accent)',
                  border: plan.highlight ? 'none' : '1px solid rgba(0,212,255,0.3)',
                }}
              >
                {plan.cta}
              </Link>

              <ul className="mt-5 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: 'var(--accent)' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: 'What is the difference between Cyan AI tokens and Sonnet sessions?',
      a: 'Cyan AI tokens power your real-time virtual office assistant updates — smart notifications, visibility tools, and summaries presented on your workspace status. Sonnet sessions are full conversational AI sessions where you can dive deep into business intelligence with Cyan AI. Think tokens as daily micro-intelligence and sessions as your strategic deep-dives.',
    },
    {
      q: 'Can I add more team members to the Growth plan later?',
      a: 'Yes. You are able to add new members to the Growth plan with up to a cap of 15 members. If you need to scale beyond that, you can upgrade to Business at any time from your billing settings without losing any existing data or configurations.',
    },
    {
      q: 'Do my unused Cyan AI tokens roll over to the next month?',
      a: 'No. For now, Cyan AI tokens do not roll over. Unused tokens expire at the end of each billing period. We are working on a token savings feature that will allow teams to bank unused compute for future strategic work.',
    },
    {
      q: 'How secure is our company data with Cyan AI?',
      a: 'Completely. Kreww uses industry-standard end-to-end encryption. Your workspace data is never used to train AI models, and access logs are available to workspace administrators. Enterprise customers can also request dedicated data residency and custom data retention policies.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Frequently Asked Operations
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Got questions about features, security, or billing support? Here is everything your teams need to know.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  backgroundColor: 'rgba(0,212,255,0.12)',
                  color: 'var(--accent)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {faq.q}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.07), transparent)',
        }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Bring Your Kreww
          <br />
          Together Today.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
          Eliminate the digital noise. Experience a virtual office that works as hard as you do and keeps your teams connected, productive and profitable.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold transition-all hover:brightness-110 active:scale-[0.97]"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#050D1A',
              boxShadow: '0 4px 24px rgba(0,212,255,0.3)',
            }}
          >
            Start Growing →
          </Link>
          <Link
            href="/demo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold transition-all hover:bg-white/5"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            Book Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
