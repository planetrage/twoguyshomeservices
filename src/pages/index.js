import Head from 'next/head';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import WhyTrust from '../components/home-page/why-trust';

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

      {/* 3. Service Area */}
      {/* UPDATE CITIES AS NEEDED */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div className="custom-container max-w-3xl mx-auto text-center">
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>Where We Work</h2>
          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-muted)',
              lineHeight: 'var(--leading-body)',
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

      {/* 5. Work Examples */}
      {/* REPLACE WITH ACTUAL PROJECT PHOTOS */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div className="custom-container">
          <h2 className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-alt)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--card-radius)',
                  padding: 'var(--space-2xl) var(--space-lg)',
                  textAlign: 'center',
                  color: 'var(--color-text-light)',
                  fontSize: 'var(--text-small)',
                }}
              >
                Before/After Photo Coming Soon
              </div>
            ))}
          </div>
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
              marginBottom: 'var(--space-xl)',
            }}
          >
            Call, text, or email — whatever&rsquo;s easiest. Send us photos of the
            job by text for a faster estimate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* REPLACE WITH REAL PHONE NUMBER */}
            <a href="tel:+15551234567" className="btn-cta w-full sm:w-auto">
              Call Now
            </a>
            {/* REPLACE WITH REAL PHONE NUMBER */}
            <a href="sms:+15551234567" className="btn-secondary w-full sm:w-auto" style={{ height: '56px', fontSize: '1rem', fontWeight: 700, padding: '0 32px' }}>
              Text Us
            </a>
            <a href="mailto:Charles.homeservices@gmail.com" className="btn-secondary w-full sm:w-auto" style={{ height: '56px', fontSize: '1rem', fontWeight: 700, padding: '0 32px' }}>
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
