import Link from 'next/link';
import trackAffiliateClick from '../../lib/trackAffiliateClick';

function ComparisonTable({ casinos }) {
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
        <div className="text-center mb-10">
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
            Quick Compare
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
            Top Casino Bonuses at a Glance
          </h2>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'var(--font-body)',
            }}
          >
            <thead>
              <tr
                style={{
                  background: 'var(--olympus-navy-mid)',
                  borderBottom: '2px solid var(--gold-muted)',
                }}
              >
                <th className="compare-rank-col" style={thStyle}>Rank</th>
                <th style={{ ...thStyle, textAlign: 'left' }}>Casino</th>
                <th style={{ ...thStyle, textAlign: 'left' }}>Bonus</th>
                <th style={thStyle}>Rating</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {casinos.map((casino, i) => (
                <tr
                  key={casino.slug}
                  style={{
                    background: i % 2 === 0 ? 'var(--olympus-navy-light)' : 'var(--olympus-navy)',
                    borderBottom: '1px solid rgba(201, 168, 76, 0.08)',
                  }}
                >
                  <td className="compare-rank-col" style={{ ...tdStyle, textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-data)',
                        fontWeight: 700,
                        color: 'var(--gold-primary)',
                        fontSize: '1.1rem',
                      }}
                    >
                      #{casino.rank}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'left' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        color: 'var(--marble-white)',
                      }}
                    >
                      {casino.name}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'left' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-data)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--gold-primary)',
                        fontWeight: 600,
                      }}
                    >
                      {casino.bonus}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-data)',
                        fontWeight: 700,
                        color: 'var(--gold-light)',
                        fontSize: '1rem',
                      }}
                    >
                      {casino.rating}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    <a
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="btn-gold-primary"
                      style={{
                        textDecoration: 'none',
                        fontSize: 'var(--text-small)',
                        padding: '6px 16px',
                        whiteSpace: 'nowrap',
                      }}
                      onClick={() => trackAffiliateClick(casino.slug, 'homepage-table', casino.affiliateUrl)}
                    >
                      Get Bonus
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            href="/reviews"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              fontWeight: 600,
              color: 'var(--gold-primary)',
              textDecoration: 'none',
            }}
          >
            See All 22 Casinos &rarr;
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .compare-rank-col {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

const thStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-tiny)',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--gold-primary)',
  padding: '12px 16px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '14px 16px',
  verticalAlign: 'middle',
  color: 'var(--marble-warm)',
};

export default ComparisonTable;
