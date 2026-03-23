function Hero() {
  return (
    <section
      className="relative w-full"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--color-bg-alt) 100%)',
      }}
    >
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
    </section>
  );
}

export default Hero;
