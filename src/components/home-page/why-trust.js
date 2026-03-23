const REASONS = [
  {
    title: 'We show up on time',
    desc: "You'll know when we're coming and we won't ghost you.",
  },
  {
    title: 'Job sites stay clean',
    desc: "We cover floors, tape edges, and clean up when we're done.",
  },
  {
    title: 'Quality you can see',
    desc: 'Smooth lines, even coats, no cutting corners.',
  },
  {
    title: 'Past work speaks for itself',
    desc: "We're happy to show you photos and references.",
  },
  {
    title: 'Referrals, not ads',
    desc: 'Most of our work comes from people telling their neighbors.',
  },
];

function WhyTrust() {
  return (
    <section
      style={{
        background: 'var(--color-bg-alt)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative',
      }}
    >
      {/* Decorative paint brush stroke divider at top */}
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          left: 0,
          width: '100%',
          height: '60px',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '60px', display: 'block' }}
        >
          {/* Main brush stroke */}
          <path
            d="M-20 32 Q180 12 360 28 Q540 46 720 22 Q900 4 1080 30 Q1260 50 1460 24"
            stroke="#D4511E"
            strokeWidth="3"
            opacity="0.09"
            fill="none"
            strokeLinecap="round"
          />
          {/* Secondary thin stroke */}
          <path
            d="M-20 38 Q240 18 480 35 Q720 50 960 26 Q1200 8 1460 32"
            stroke="#D4511E"
            strokeWidth="1.5"
            opacity="0.06"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="custom-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--color-heading)' }}>Why People Hire Us</h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {REASONS.map(({ title, desc }, i) => (
            <div
              key={title}
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                alignItems: 'flex-start',
              }}
            >
              <div className="trust-number-circle"
                style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--color-cta-light)',
                  color: 'var(--color-cta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 'var(--text-body)',
                  boxShadow: '0 0 0 0 rgba(212, 81, 30, 0.15)',
                }}
              >
                {i + 1}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 'var(--text-body-lg)',
                    fontWeight: 700,
                    color: 'var(--color-heading)',
                    marginBottom: '4px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 'var(--leading-body)',
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTrust;
