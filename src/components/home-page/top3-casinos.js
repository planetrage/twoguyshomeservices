import Link from 'next/link';
import GoldCTA from '../ui/GoldCTA';

function Top3Casinos({ casinos }) {
  const top3 = casinos.slice(0, 3);

  return (
    <section
      style={{
        background: 'var(--olympus-navy)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
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
            Top Picks
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
            Highest Rated Sweepstakes Casinos
          </h2>
        </div>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {top3.map((casino) => (
            <div
              key={casino.slug}
              className="top3-card"
              style={{
                background: 'var(--olympus-navy-light)',
                borderRadius: 'var(--card-radius-lg)',
                border: '1px solid rgba(201, 168, 76, 0.15)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Image */}
              <div className="relative" style={{ height: '180px', overflow: 'hidden' }}>
                <img
                  src={casino.image}
                  alt={casino.name}
                  className="w-full h-full object-cover"
                />
                {/* Rating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: casino.rating >= 9.0 ? 'var(--gold-light)' : 'var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-data)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--olympus-navy)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  }}
                >
                  {casino.rating}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'var(--space-lg)' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-subsection)',
                    fontWeight: 600,
                    letterSpacing: 'var(--tracking-display)',
                    color: 'var(--marble-white)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  {casino.name}
                </h3>

                {/* Bonus */}
                <p
                  style={{
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-data)',
                    fontSize: 'var(--text-small)',
                    fontWeight: 600,
                    marginBottom: 'var(--space-md)',
                    padding: '6px 0',
                    borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
                  }}
                >
                  {casino.bonus}
                </p>

                {/* CTA */}
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary inline-block text-center"
                  style={{ width: '100%', textDecoration: 'none', marginBottom: 'var(--space-sm)' }}
                >
                  Get Bonus
                </a>

                {/* Legal */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-tiny)',
                    color: 'var(--marble-deep)',
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  No purchase necessary. 18+. T&amp;Cs apply.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .top3-card:hover {
          transform: translateY(-2px);
          border-color: rgba(201, 168, 76, 0.5) !important;
        }
      `}</style>
    </section>
  );
}

export default Top3Casinos;
