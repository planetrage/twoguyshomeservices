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
      }}
    >
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
              <div
                style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-cta-light)',
                  color: 'var(--color-cta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 'var(--text-small)',
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
