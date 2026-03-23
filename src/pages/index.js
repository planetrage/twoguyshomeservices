import Head from 'next/head';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import WhyTrust from '../components/home-page/why-trust';

/* Paint splatter decorative divider between sections */
function PaintSplatterDivider() {
  return (
    <div style={{ position: 'relative', height: '60px', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '60px', position: 'absolute', top: 0, left: 0 }}
      >
        {/* Brush stroke swoosh */}
        <path
          d="M-20 35 Q200 15 400 30 Q600 48 800 25 Q1000 8 1200 35 Q1350 50 1460 28"
          stroke="#D4511E"
          strokeWidth="3"
          opacity="0.08"
          fill="none"
          strokeLinecap="round"
        />
        {/* Paint splatters */}
        <circle cx="300" cy="28" r="6" fill="#D4511E" opacity="0.06" />
        <circle cx="310" cy="22" r="3" fill="#D4511E" opacity="0.05" />
        <circle cx="700" cy="32" r="8" fill="#1B2D4F" opacity="0.04" />
        <circle cx="715" cy="25" r="4" fill="#1B2D4F" opacity="0.03" />
        <circle cx="1100" cy="30" r="5" fill="#D4511E" opacity="0.07" />
        <circle cx="1090" cy="38" r="3" fill="#D4511E" opacity="0.04" />
        {/* Small paint drips */}
        <path d="M300 34 Q302 42 300 48" stroke="#D4511E" strokeWidth="2" opacity="0.05" fill="none" strokeLinecap="round" />
        <path d="M700 40 Q703 50 700 55" stroke="#1B2D4F" strokeWidth="2" opacity="0.03" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Head>
        <title>Painting Services in Irving, TX | Two Guys Home Services</title>
        <meta
          name="description"
          content="Professional interior and exterior painting in Irving, TX and surrounding areas. Quality work, fair pricing. Request a free quote today."
        />
        <link rel="canonical" href="https://twoguyshomeservices.us/" />
        <meta property="og:title" content="Two Guys Home Services — Professional Painting in Irving, TX" />
        <meta property="og:description" content="Professional interior and exterior painting in Irving, TX and surrounding areas. Quality work, fair pricing. Request a free quote today." />
        <meta property="og:url" content="https://twoguyshomeservices.us/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Two Guys Home Services — Professional Painting in Irving, TX" />
        <meta name="twitter:description" content="Professional interior and exterior painting in Irving, TX and surrounding areas. Quality work, fair pricing. Request a free quote today." />
      </Head>

      {/* 1. Hero */}
      <Hero />

      {/* 2. Services */}
      <Services />

      {/* Decorative paint splatter divider */}
      <PaintSplatterDivider />

      {/* 3. Service Area */}
      {/* UPDATE CITIES AS NEEDED */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div className="custom-container max-w-3xl mx-auto text-center" style={{ padding: '0 var(--space-lg)' }}>
          <h2 style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>Where We Work</h2>
          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-muted)',
              lineHeight: 'var(--leading-body)',
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Based in Irving, TX. We serve the surrounding areas including Arlington,
            Grand Prairie, Dallas, Fort Worth, and nearby cities. Typically within
            30 minutes — but willing to travel for larger jobs.
          </p>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyTrust />

      {/* 5. Recent Projects */}
      {/* ADD YOUR PROJECT PHOTOS TO public/images/work/ */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div className="custom-container">
          <h2 className="text-center" style={{ marginBottom: 'var(--space-sm)' }}>
            Recent Projects
          </h2>
          <p
            className="text-center"
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            A few of our latest painting jobs around Irving, TX.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                style={{
                  borderRadius: 'var(--card-radius)',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                className="project-image-card"
              >
                <img
                  src={`/images/work/project-${n}.jpg`}
                  alt="Painting project in Irving TX"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: 'var(--card-radius)',
                  }}
                />
              </div>
            ))}
          </div>
          <p
            className="text-center"
            style={{
              marginTop: 'var(--space-xl)',
              fontSize: 'var(--text-body)',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
            }}
          >
            Want to see more? Ask us for photos of jobs similar to yours.
          </p>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section
        id="contact"
        style={{
          background: 'var(--color-bg-alt)',
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div className="custom-container max-w-2xl mx-auto text-center">
          <h2 style={{ marginBottom: 'var(--space-md)' }}>Get Your Free Quote</h2>
          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-muted)',
              lineHeight: 'var(--leading-body)',
              marginBottom: 'var(--space-md)',
            }}
          >
            Call, text, or email — whatever&rsquo;s easiest. We&rsquo;ll get back
            to you fast.
          </p>

          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--color-cta)',
              fontWeight: 600,
              marginBottom: 'var(--space-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="18" rx="3" />
              <circle cx="12" cy="13" r="3" />
              <path d="M17 8h.01" />
            </svg>
            Text us a photo of your project for a faster quote
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* REPLACE WITH REAL PHONE NUMBER */}
            <a
              href="tel:+15551234567"
              className="btn-cta w-full sm:w-auto contact-btn"
            >
              Call Now
            </a>
            {/* REPLACE WITH REAL PHONE NUMBER */}
            <a
              href="sms:+15551234567"
              className="btn-secondary w-full sm:w-auto contact-btn"
              style={{ height: '56px', fontSize: '1rem', fontWeight: 700, padding: '0 32px' }}
            >
              Text Us
            </a>
            <a
              href="mailto:Charles.homeservices@gmail.com"
              className="btn-secondary w-full sm:w-auto contact-btn"
              style={{ height: '56px', fontSize: '1rem', fontWeight: 700, padding: '0 32px' }}
            >
              Email Us
            </a>
          </div>

          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
            }}
          >
            Ask us — if it can be painted, we probably can.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
