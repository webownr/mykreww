import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';

export const metadata: Metadata = {
  title: 'Contact — Kreww',
  description: 'Get in touch with the Kreww team.',
};

export default function ContactPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <MarketingHeader />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(5,13,26,0.68), rgba(5,13,26,0.96)), radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.12), transparent), url(https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=3840&q=90) center/cover no-repeat',
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="label-eyebrow">Get in Touch</div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              We&apos;d love to hear from you
            </h1>
            <p className="mt-4 text-base" style={{ color: 'var(--text-secondary)' }}>
              Have a question, a partnership idea, or just want to say hi? Reach out — we reply fast.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-[1fr_2fr]">
            {/* Contact info */}
            <div className="space-y-5">
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <Mail className="h-5 w-5 mb-3" style={{ color: 'var(--accent)' }} />
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  Email
                </div>
                <a
                  href="mailto:hello@mykreww.com"
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{ color: 'var(--text-primary)' }}
                >
                  hello@mykreww.com
                </a>
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <MapPin className="h-5 w-5 mb-3" style={{ color: 'var(--accent)' }} />
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  Location
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Lagos, Nigeria
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  Built in Africa · For the world
                </p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Average response time: under 4 hours during business hours (WAT).
              </p>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Ayomide"
                      className="h-10 w-full rounded-lg bg-transparent px-3 text-sm outline-none"
                      style={{ border: '1px solid var(--border)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)' }}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="h-10 w-full rounded-lg bg-transparent px-3 text-sm outline-none"
                      style={{ border: '1px solid var(--border)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="I have a question about…"
                    className="h-10 w-full rounded-lg bg-transparent px-3 text-sm outline-none"
                    style={{ border: '1px solid var(--border)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)' }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us everything…"
                    className="w-full rounded-lg bg-transparent px-3 py-2.5 text-sm outline-none resize-none"
                    style={{ border: '1px solid var(--border)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)' }}
                  />
                </div>
                <button
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all hover:brightness-110"
                  style={{ backgroundColor: 'var(--accent)', color: '#050D1A', boxShadow: '0 4px 16px rgba(0,212,255,0.25)' }}
                >
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
