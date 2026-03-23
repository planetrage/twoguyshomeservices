const SERVICES = [
  {
    title: 'Interior Painting',
    desc: 'Rooms, walls, ceilings, doors, trim, and cabinets.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <path d="M4 8v4a2 2 0 002 2h1v6a1 1 0 001 1h0a1 1 0 001-1v-6h6v6a1 1 0 001 1h0a1 1 0 001-1v-6h1a2 2 0 002-2V8" />
      </svg>
    ),
  },
  {
    title: 'Exterior Painting',
    desc: 'Siding, trim, doors, shutters, and full exterior repaints.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
      </svg>
    ),
  },
  {
    title: 'Fence Painting & Staining',
    desc: 'Wood, metal, or vinyl. Stain, paint, or spray.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6v14M8 4v16M12 6v14M16 4v16M20 6v14" />
        <path d="M2 10h20M2 16h20" />
      </svg>
    ),
  },
  {
    title: 'Brick Painting',
    desc: 'Refresh your brick with a clean, lasting finish.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="1" />
        <path d="M1 8h22M1 12h22M1 16h22" />
        <path d="M6 4v4M14 4v4M10 8v4M18 8v4M6 12v4M14 12v4M10 16v4M18 16v4" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section
      style={{
        background: 'var(--color-bg-alt)',
        paddingTop: 'var(--space-lg)',
        paddingBottom: 'var(--space-3xl)',
      }}
    >
      <div className="custom-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            style={{
              color: 'var(--color-heading)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
            }}
          >
            Ask us — if it can be painted, we probably can.
          </p>
        </div>

        {/* Services Grid — 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {SERVICES.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="service-card"
              style={{
                background: 'var(--color-bg)',
                borderLeft: '4px solid var(--color-cta)',
                borderRadius: 'var(--card-radius)',
                padding: 'var(--space-lg)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              {/* Icon with light burnt-orange background circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--color-cta-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cta)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-subsection)',
                  color: 'var(--color-heading)',
                  marginBottom: 'var(--space-xs)',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary mentions */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            style={{
              padding: 'var(--space-md) var(--space-lg)',
              borderLeft: '3px solid var(--color-cta)',
              background: 'var(--color-bg)',
              borderRadius: '0 var(--card-radius) var(--card-radius) 0',
            }}
          >
            <h4 style={{ fontSize: 'var(--text-body)', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '4px' }}>
              Residential Homes
            </h4>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}>
              Our bread and butter. Houses of all sizes.
            </p>
          </div>
          <div
            style={{
              padding: 'var(--space-md) var(--space-lg)',
              borderLeft: '3px solid var(--color-border)',
              background: 'var(--color-bg)',
              borderRadius: '0 var(--card-radius) var(--card-radius) 0',
            }}
          >
            <h4 style={{ fontSize: 'var(--text-body)', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '4px' }}>
              Light Commercial
            </h4>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}>
              Small offices, retail fronts, and commercial touch-ups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
