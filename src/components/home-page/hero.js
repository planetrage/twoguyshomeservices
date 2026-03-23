function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--color-bg-alt) 100%)',
      }}
    >
      {/* Decorative paint roller — right side, very subtle */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.09,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg width="360" height="450" viewBox="0 0 360 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Roller head */}
          <rect x="40" y="30" width="220" height="90" rx="18" fill="#D4511E" />
          <rect x="52" y="42" width="196" height="66" rx="12" fill="#B8431A" opacity="0.5" />
          {/* Roller texture lines */}
          <line x1="75" y1="48" x2="75" y2="102" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="108" y1="48" x2="108" y2="102" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="141" y1="48" x2="141" y2="102" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="174" y1="48" x2="174" y2="102" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="207" y1="48" x2="207" y2="102" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          {/* Handle connector */}
          <rect x="140" y="120" width="22" height="34" rx="5" fill="#D4511E" />
          {/* Handle */}
          <rect x="144" y="154" width="14" height="180" rx="7" fill="#D4511E" />
          {/* Paint drip from roller */}
          <path d="M85 120 Q88 155 84 178 Q82 190 85 192" stroke="#D4511E" strokeWidth="3" fill="none" opacity="0.3" />
          <path d="M195 120 Q200 165 196 200 Q194 218 198 222 Q200 232 196 234" stroke="#D4511E" strokeWidth="3" fill="none" opacity="0.3" />
          <circle cx="196" cy="240" r="5" fill="#D4511E" opacity="0.2" />
          {/* Paint splash */}
          <ellipse cx="85" cy="198" rx="9" ry="7" fill="#D4511E" opacity="0.15" />
        </svg>
      </div>

      <div className="custom-container relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Business Name */}
          <p
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-small)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
              color: 'var(--color-cta)',
            }}
          >
            Two Guys Home Services
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 800,
              lineHeight: 'var(--leading-display)',
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--color-heading)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            Professional Painting Services in Irving, TX
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Interior, exterior, fences, and more. Quality work, fair pricing —
            we show up on time and get it done right.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#contact" className="btn-cta btn-shimmer w-full sm:w-auto">
              Request Free Quote
            </a>
            {/* REPLACE WITH REAL PHONE NUMBER */}
            <a
              href="tel:+15551234567"
              className="btn-secondary w-full sm:w-auto"
              style={{ height: '56px', fontSize: '1rem', fontWeight: 700, padding: '0 32px' }}
            >
              Call or Text Us
            </a>
          </div>

          {/* Trust Signals */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-small)',
              color: 'var(--color-text-muted)',
            }}
          >
            <span>&#10003; Free Estimates</span>
            <span>&#10003; Residential &amp; Commercial</span>
            <span>&#10003; Irving, TX &amp; Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Soft gradient fade into next section — no hard line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, var(--color-bg-alt))',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}

export default Hero;
