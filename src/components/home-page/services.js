import LightningDivider from '../ui/LightningDivider';

const CATEGORIES = [
  {
    title: 'Slot Reviews',
    desc: 'RTP-verified analysis of every slot worth playing. No filler, no hype — just data.',
    href: '/posts',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 8v8M12 8v8M17 8v8" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Casino Reviews',
    desc: 'Trust scores, withdrawal speeds, bonus terms — the data casinos don\'t advertise.',
    href: '/reviews',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4M9 9h1M14 9h1M9 13h1M14 13h1" />
      </svg>
    ),
  },
  {
    title: 'Strategy Guides',
    desc: 'Bankroll management, volatility math, and game selection strategies that work.',
    href: '/blog',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    title: 'Comparison Tools',
    desc: 'Side-by-side slot and casino comparisons. Sort by RTP, volatility, max win.',
    href: '/projects',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section style={{ background: 'var(--olympus-navy)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="custom-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="gold-text mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
            }}
          >
            Explore by Category
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-section)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
            }}
          >
            Everything You Need to Play Smarter
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map(({ title, desc, href, icon }) => (
            <a
              key={title}
              href={href}
              className="olympus-card group"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{ color: 'var(--gold-primary)', marginBottom: 'var(--space-md)' }}>
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-subsection)',
                  fontWeight: 600,
                  letterSpacing: 'var(--tracking-display)',
                  color: 'var(--marble-white)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--marble-cool)', lineHeight: '1.6' }}>
                {desc}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <LightningDivider />
      </div>
    </section>
  );
}

export default Services;
