import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.05), transparent)',
        }}
      />

      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold"
        style={{
          backgroundColor: 'rgba(0,212,255,0.12)',
          border: '1px solid rgba(0,212,255,0.25)',
          color: 'var(--accent)',
        }}
      >
        K
      </div>

      <h1 className="text-6xl font-bold tabular-nums" style={{ color: 'var(--accent)' }}>
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
        This desk is empty
      </h2>
      <p className="mt-3 max-w-sm text-sm" style={{ color: 'var(--text-muted)' }}>
        Looks like this team member hasn&apos;t set up their desk yet. Head back to the office.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition-all hover:brightness-110"
        style={{ backgroundColor: 'var(--accent)', color: '#050D1A' }}
      >
        Back to the office <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
