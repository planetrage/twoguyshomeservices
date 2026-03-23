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
      {/* Decorative paint roller — right side background element */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.12,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg width="320" height="400" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Roller head */}
          <rect x="40" y="30" width="200" height="80" rx="16" fill="#D4511E" />
          <rect x="50" y="40" width="180" height="60" rx="10" fill="#B8431A" opacity="0.5" />
          {/* Roller texture lines */}
          <line x1="70" y1="45" x2="70" y2="95" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="100" y1="45" x2="100" y2="95" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="130" y1="45" x2="130" y2="95" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="160" y1="45" x2="160" y2="95" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          <line x1="190" y1="45" x2="190" y2="95" stroke="#D4511E" strokeWidth="2" opacity="0.4" />
          {/* Handle connector */}
          <rect x="130" y="110" width="20" height="30" rx="4" fill="#D4511E" />
          {/* Handle */}
          <rect x="133" y="140" width="14" height="160" rx="7" fill="#D4511E" />
          {/* Paint drip from roller */}
          <path d="M80 110 Q82 140 78 160 Q76 170 80 170" stroke="#D4511E" strokeWidth="3" fill="none" opacity="0.3" />
          <path d="M180 110 Q184 150 180 180 Q178 195 182 200 Q184 210 180 210" stroke="#D4511E" strokeWidth="3" fill="none" opacity="0.3" />
          <circle cx="180" cy="215" r="5" fill="#D4511E" opacity="0.2" />
          {/* Paint splash */}
          <ellipse cx="80" cy="175" rx="8" ry="6" fill="#D4511E" opacity="0.15" />
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
            <a href="#contact" className="btn-cta w-full sm:w-auto">
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

      {/* Paint brush stroke bottom divider */}
      <div
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          width: '100%',
          zIndex: 5,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '40px', display: 'block' }}
        >
          <path
            d="M0 30 Q120 5 240 25 Q360 50 480 20 Q600 0 720 28 Q840 55 960 22 Q1080 0 1200 30 Q1320 55 1440 20 L1440 60 L0 60Z"
            fill="var(--color-bg-alt)"
          />
          <path
            d="M0 35 Q180 10 360 30 Q540 50 720 25 Q900 5 1080 32 Q1260 55 1440 28"
            stroke="#D4511E"
            strokeWidth="2"
            opacity="0.12"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
