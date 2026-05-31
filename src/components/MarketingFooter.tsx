import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  Tools: [
    { label: 'Cyan AI', href: '/features/cyan-ai' },
    { label: 'Virtual Office', href: '/features/the-office' },
    { label: 'Chat', href: '/features/chat' },
    { label: 'Kanban', href: '/features/tasks' },
    { label: 'Online Meeting', href: '/features/meetings' },
    { label: 'Notice Board', href: '/features/notice-board' },
    { label: 'Team collaboration', href: '/features/collaboration' },
  ],
  'Our Company': [
    { label: 'Our Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Investor', href: '/investors' },
    { label: 'Product', href: '/features' },
  ],
  Resources: [
    { label: 'Support', href: '/support' },
    { label: 'Help Center', href: '/help' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export function MarketingFooter() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
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
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                KREWW
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Your team, together. A real virtual office for remote teams — built in Africa, for the world.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://twitter.com/mykreww"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-muted)' }}
                aria-label="X / Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/mykreww"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-muted)' }}
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/mykreww"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-muted)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div
                className="mb-4 text-xs font-bold uppercase tracking-wider"
                style={{ color: 'var(--text-primary)' }}
              >
                {section}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs transition-colors hover:text-white"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-xs"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <span>© {new Date().getFullYear()} KREWW. All rights reserved.</span>
          <a
            href="mailto:hello@mykreww.com"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--text-muted)' }}
          >
            hello@mykreww.com
          </a>
        </div>
      </div>
    </footer>
  );
}
