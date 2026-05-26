'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const navTools = [
  { label: 'The Office', href: '/#office', desc: 'Visual team presence' },
  { label: 'Tasks', href: '/#tasks', desc: 'Kanban project management' },
  { label: 'Chat', href: '/#chat', desc: 'Channels, DMs & meetings' },
  { label: 'Notice Board', href: '/#notices', desc: 'Company-wide announcements' },
  { label: 'Documents', href: '/#documents', desc: 'Shared workspace docs' },
  { label: 'In-App Browser', href: '/#browser', desc: 'Browse without leaving' },
];

const navResources = [
  { label: 'Blog', href: '/blog' },
  { label: 'Help Centre', href: '/help' },
  { label: 'Changelog', href: '/changelog' },
];

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'rgba(5,13,26,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm"
            style={{
              backgroundColor: 'rgba(0,212,255,0.12)',
              border: '1px solid rgba(0,212,255,0.25)',
              color: 'var(--accent)',
            }}
          >
            K
          </div>
          <span className="text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            KREWW
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Tools dropdown */}
          <div className="relative" onMouseLeave={() => setToolsOpen(false)}>
            <button
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={() => setToolsOpen(true)}
            >
              Tools <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {toolsOpen && (
              <div
                className="absolute left-0 top-full mt-1 w-64 rounded-xl p-2 shadow-2xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                {navTools.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                    onClick={() => setToolsOpen(false)}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resource dropdown */}
          <div className="relative" onMouseLeave={() => setResourcesOpen(false)}>
            <button
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={() => setResourcesOpen(true)}
            >
              Resource <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {resourcesOpen && (
              <div
                className="absolute left-0 top-full mt-1 w-48 rounded-xl p-2 shadow-2xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                {navResources.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
                    style={{ color: 'var(--text-secondary)' }}
                    onClick={() => setResourcesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Our Company dropdown */}
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5"
            style={{ color: 'var(--text-secondary)' }}
          >
            Our Company
          </Link>

          <Link
            href="/pricing"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5"
            style={{ color: 'var(--text-secondary)' }}
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/5"
            style={{ color: 'var(--text-primary)' }}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:brightness-110 active:scale-[0.97]"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#050D1A',
              boxShadow: '0 4px 16px rgba(0,212,255,0.25)',
            }}
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 lg:hidden"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t px-6 py-5 lg:hidden"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}
        >
          <nav className="flex flex-col gap-1">
            {navTools.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px" style={{ backgroundColor: 'var(--border)' }} />
            <Link
              href="/about"
              className="rounded-lg px-3 py-2.5 text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen(false)}
            >
              Our Company
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg px-3 py-2.5 text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/login"
                className="rounded-lg border px-4 py-2.5 text-center text-sm font-semibold"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="rounded-lg px-4 py-2.5 text-center text-sm font-semibold"
                style={{ backgroundColor: 'var(--accent)', color: '#050D1A' }}
                onClick={() => setMobileOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
