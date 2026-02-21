import Link from 'next/link';
import trackAffiliateClick from '../../lib/trackAffiliateClick';

function Top6Casinos({ casinos }) {
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
            Casino Rankings
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
            Top Rated Sweepstakes Casinos
          </h2>
        </div>

        {/* Casino Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casinos.map((casino) => (
            <div
              key={casino.slug}
              className="top6-card"
              style={{
                background: 'var(--olympus-navy-light)',
                borderRadius: 'var(--card-radius)',
                border: '1px solid rgba(201, 168, 76, 0.1)',
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
                {/* Tagline Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(11, 17, 32, 0.85)',
                    border: '1px solid var(--gold-muted)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-tiny)',
                    letterSpacing: 'var(--tracking-caps)',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  {casino.tagline}
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
                  }}
                >
                  {casino.bonus}
                </p>

                {/* CTA */}
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="btn-gold-primary inline-block text-center"
                  style={{ width: '100%', textDecoration: 'none' }}
                  onClick={() => trackAffiliateClick(casino.slug, 'homepage-grid', casino.affiliateUrl)}
                >
                  Get Bonus
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/reviews"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              fontWeight: 600,
              color: 'var(--gold-primary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            View All 22 Casinos &rarr;
          </Link>
        </div>
      </div>

      <style jsx>{`
        .top6-card:hover {
          transform: translateY(-2px);
          border-color: rgba(201, 168, 76, 0.3) !important;
        }
      `}</style>
    </section>
  );
}

export default Top6Casinos;
