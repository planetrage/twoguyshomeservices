import LightningDivider from '../ui/LightningDivider';
import GoldCTA from '../ui/GoldCTA';

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(rgba(11,17,32,0.72), rgba(11,17,32,0.72)), url(/images/hero/hero-temple-goldlight.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="custom-container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
            }}
          >
            <span className="gold-text">Updated February 2026</span>
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 700,
              lineHeight: 'var(--leading-display)',
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            Claim the Best Sweepstakes Casino Bonuses
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--marble-warm)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Updated rankings. Verified offers. Structured analysis — not hype.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <GoldCTA href="/reviews" variant="cta">
              Explore Top Bonuses
            </GoldCTA>
            <GoldCTA href="/about" variant="ghost">
              How We Rank &rarr;
            </GoldCTA>
          </div>

          {/* Trust Signals */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-small)',
              color: 'var(--marble-warm)',
            }}
          >
            <span>&#10003; No purchase necessary</span>
            <span>&#10003; 18+ only</span>
            <span>&#10003; Updated Feb 2026</span>
            <span>&#10003; Independent reviews</span>
          </div>
        </div>
      </div>

      {/* Lightning divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <LightningDivider />
      </div>
    </section>
  );
}

export default Hero;
