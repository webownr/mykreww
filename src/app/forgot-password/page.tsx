'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function Logo() {
  return (
    <div className="mb-8 text-center">
      <Link href="/" className="inline-flex items-center gap-2">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
          style={{
            backgroundColor: 'rgba(0,212,255,0.12)',
            border: '1px solid rgba(0,212,255,0.25)',
            color: 'var(--accent)',
          }}
        >
          K
        </div>
        <span className="text-lg font-bold tracking-tight">KREWW</span>
      </Link>
    </div>
  );
}

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6 py-20"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(0,212,255,0.06), transparent)',
        }}
      />

      <div className="w-full max-w-sm">
        <Logo />

        {sent ? (
          <div className="text-center">
            <div className="mb-5 text-5xl">📬</div>
            <h1 className="mb-3 text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
              Check your inbox
            </h1>
            <p className="mb-7 text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>
              We&apos;ve sent a password reset link to your email. It expires in 1 hour. Check your spam folder if you don&apos;t see it.
            </p>
            <Link href="/login" className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
              ← Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <h1 className="mb-2 text-2xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Reset your password
            </h1>
            <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
              Enter your email and we&apos;ll send a reset link.
            </p>

            <div
              className="rounded-2xl p-7"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-10 w-full rounded-lg bg-transparent px-3 text-sm outline-none"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-primary)',
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setSent(true)}
                  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all hover:brightness-110 active:scale-[0.97]"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#050D1A',
                    boxShadow: '0 4px 16px rgba(0,212,255,0.25)',
                  }}
                >
                  Send reset link <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
              Remember it?{' '}
              <Link href="/login" className="font-bold" style={{ color: 'var(--accent)' }}>
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
