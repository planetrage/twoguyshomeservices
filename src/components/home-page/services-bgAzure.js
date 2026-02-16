import * as MdIcons from 'react-icons/md';

function Services({ services }) {
  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="custom-container">
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-md)',
              lineHeight: 'var(--leading-display)',
            }}
          >
            Structured Intelligence for Every Player
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--marble-warm)',
              lineHeight: 'var(--leading-body)',
            }}
          >
            Built by analysts and players, Goonzerflow combines verified data with real-world testing to deliver reviews and tools you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services?.map((service) => {
            const Icon = MdIcons[service?.icon];
            return (
              <div className="olympus-card" key={service?.title}>
                <div className="flex items-start gap-4">
                  {Icon && (
                    <div style={{ color: 'var(--gold-primary)', fontSize: '1.5rem', flexShrink: 0 }}>
                      <Icon />
                    </div>
                  )}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-body-lg)',
                        fontWeight: 600,
                        letterSpacing: 'var(--tracking-display)',
                        color: 'var(--marble-white)',
                        marginBottom: 'var(--space-xs)',
                      }}
                    >
                      {service?.title}
                    </h3>
                    <p style={{ fontSize: 'var(--text-small)', color: 'var(--marble-cool)', lineHeight: '1.6' }}>
                      {service?.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
