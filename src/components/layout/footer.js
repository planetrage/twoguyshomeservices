function Footer() {
  return (
    <footer className="site-footer">
      <div className="custom-container">
        <div className="py-12 text-center">
          {/* Business Name */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: '#FFFFFF',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Two Guys Home Services
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'var(--text-body)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            Professional painting services in Irving, TX and surrounding areas.
          </p>

          {/* Contact */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            style={{ fontSize: 'var(--text-body)' }}
          >
            {/* REPLACE WITH REAL PHONE NUMBER */}
            <a href="tel:+15551234567" style={{ color: 'var(--color-cta)', fontWeight: 600 }}>
              (555) 123-4567
            </a>
            <span className="hidden sm:inline" style={{ opacity: 0.3 }}>|</span>
            <a href="mailto:Charles.homeservices@gmail.com" style={{ color: 'var(--color-cta)', fontWeight: 600 }}>
              Charles.homeservices@gmail.com
            </a>
          </div>

          {/* Service Areas */}
          {/* UPDATE AS NEEDED */}
          <p
            style={{
              fontSize: 'var(--text-small)',
              marginBottom: 'var(--space-lg)',
              opacity: 0.7,
            }}
          >
            Irving &bull; Arlington &bull; Grand Prairie &bull; Dallas &bull; Fort Worth
          </p>

          {/* Copyright */}
          <p style={{ fontSize: 'var(--text-tiny)', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} Two Guys Home Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
