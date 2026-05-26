'use client';

// Kreww Office mockup — desk card grid rendered in pure CSS/SVG
// No Three.js, loads fast on African 4G

const deskCards = [
  { name: 'Ayomide A.', role: 'Lead Developer', task: 'Building The Office screen', status: 'online', initials: 'AA', color: '#00D4FF' },
  { name: 'Victor O.', role: 'Creative Director', task: 'Designing brand assets', status: 'online', initials: 'VO', color: '#00E676' },
  { name: 'Chidi M.', role: 'Product Manager', task: 'Writing user stories', status: 'away', initials: 'CM', color: '#FFB300' },
  { name: 'Amara K.', role: 'Frontend Dev', task: 'Reviewing PRs', status: 'online', initials: 'AK', color: '#00D4FF' },
  { name: 'Seun B.', role: 'UX Designer', task: 'Wireframing mobile app', status: 'dnd', initials: 'SB', color: '#FF5252' },
  { name: 'Tola F.', role: 'Backend Dev', task: 'Supabase schema', status: 'offline', initials: 'TF', color: '#4A6080' },
];

const statusColors: Record<string, string> = {
  online: '#00E676',
  away: '#FFB300',
  dnd: '#FF5252',
  offline: '#4A6080',
};

const statusLabels: Record<string, string> = {
  online: 'Online',
  away: 'Away',
  dnd: 'Do not disturb',
  offline: 'Offline',
};

export function OfficeMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl"
      style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        boxShadow: '0 0 0 1px rgba(0,212,255,0.1), 0 40px 80px rgba(0,0,0,0.6)',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-sidebar)' }}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <div
          className="mx-2 flex flex-1 items-center rounded-md px-3 py-1 text-xs"
          style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)', maxWidth: '240px' }}
        >
          mykreww.com/dashboard
        </div>
      </div>

      {/* App shell */}
      <div className="flex" style={{ minHeight: '320px' }}>
        {/* Sidebar */}
        <div
          className="hidden w-14 flex-col items-center gap-3 border-r py-4 sm:flex"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-sidebar)' }}
        >
          {/* Logo */}
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
            style={{ backgroundColor: 'rgba(0,212,255,0.15)', color: 'var(--accent)' }}
          >
            K
          </div>
          <div className="mt-2 flex flex-col gap-2">
            {['◼', '☰', '💬', '📋', '📄', '📝', '🌐'].map((icon, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm transition-colors"
                style={{
                  backgroundColor: i === 0 ? 'rgba(0,212,255,0.15)' : 'transparent',
                  color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Main office area */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Greeting */}
          <div className="mb-5">
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Good morning, Ayomide.{' '}
              <span style={{ color: 'var(--accent)' }}>4 members are in the office.</span>
            </p>
          </div>

          {/* Desk card grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {deskCards.map((card, i) => (
              <div
                key={card.name}
                className="relative rounded-xl p-3 transition-all"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: i === 0 ? '1px solid var(--accent)' : '1px solid var(--border)',
                  opacity: card.status === 'offline' ? 0.5 : 1,
                  boxShadow: i === 0 ? '0 0 12px rgba(0,212,255,0.12)' : 'none',
                }}
              >
                {/* Status dot */}
                <div className="absolute right-2.5 top-2.5 flex items-center gap-1">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: statusColors[card.status],
                      boxShadow: card.status === 'online' ? `0 0 6px ${statusColors[card.status]}` : 'none',
                    }}
                  />
                </div>

                {/* Avatar */}
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${card.color}20`, color: card.color }}
                >
                  {card.initials}
                </div>

                {/* Info */}
                <div className="mt-2">
                  <div className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                    {card.name}
                    {i === 0 && (
                      <span
                        className="ml-1 rounded px-1 text-[9px] font-bold"
                        style={{ backgroundColor: 'rgba(0,212,255,0.15)', color: 'var(--accent)' }}
                      >
                        You
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>
                    {card.role}
                  </div>
                </div>

                {/* Active task */}
                {card.status !== 'offline' && (
                  <div
                    className="mt-2 rounded px-1.5 py-1 text-[9px] leading-tight"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)' }}
                  >
                    {card.task}
                  </div>
                )}

                {card.status === 'offline' && (
                  <div className="mt-2 text-[9px]" style={{ color: 'var(--text-muted)' }}>
                    Last seen 2h ago
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
