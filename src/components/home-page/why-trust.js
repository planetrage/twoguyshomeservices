const TRUST_CARDS = [
  {
    title: 'Transparent Ratings',
    desc: 'Every casino scored on bonus value, game variety, and redemption speed.',
  },
  {
    title: 'Independent Reviews',
    desc: 'No pay-to-rank. No sponsored placements. Data-driven analysis only.',
  },
  {
    title: 'Updated Weekly',
    desc: 'Offers verified and rankings refreshed so you always see current bonuses.',
  },
];

function WhyTrust() {
  return (
    <section
      style={{
        background: 'var(--olympus-navy)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
      }}
    >
      <div className="custom-container">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            Our Approach
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
            Why Trust Goonzerflow
          </h2>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_CARDS.map(({ title, desc }) => (
            <div
              key={title}
              style={{
                background: 'var(--olympus-navy-light)',
                borderRadius: 'var(--card-radius)',
                padding: 'var(--space-lg)',
                borderTop: '2px solid var(--gold-primary)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
              }}
            >
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
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  color: 'var(--marble-warm)',
                  lineHeight: 'var(--leading-body)',
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTrust;
