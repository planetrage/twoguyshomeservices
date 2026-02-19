const FILTERS = [
  { key: 'rating', label: 'Highest Rating' },
  { key: 'bonus', label: 'Highest Bonus' },
  { key: 'freeSC', label: 'Most Free SC' },
  { key: 'popular', label: 'Most Popular' },
];

function BonusFilterStrip({ activeFilter, onFilterChange }) {
  return (
    <section
      style={{
        background: 'var(--olympus-navy-mid)',
        paddingTop: 'var(--space-md)',
        paddingBottom: 'var(--space-md)',
      }}
    >
      <div className="custom-container">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map(({ key, label }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => onFilterChange(key)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--gold-primary)' : 'var(--marble-cool)',
                  background: isActive ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                  border: isActive
                    ? '1px solid var(--gold-primary)'
                    : '1px solid rgba(201, 168, 76, 0.2)',
                  borderRadius: '6px',
                  padding: '8px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { FILTERS };
export default BonusFilterStrip;
