import Link from 'next/link';
import GoldCTA from '../ui/GoldCTA';

function ServicesOne({ features }) {
  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="custom-container">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="gold-text mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-md)',
              lineHeight: 'var(--leading-display)',
            }}
          >
            Explore Our Slot & Casino Analysis
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--marble-warm)',
              marginBottom: 'var(--space-xl)',
              lineHeight: 'var(--leading-body)',
            }}
          >
            Browse RTP-verified reviews, compare casinos side-by-side, and find the games worth your bankroll.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldCTA href="/posts" variant="cta">
              Browse All Reviews
            </GoldCTA>
            <GoldCTA href="/about" variant="ghost">
              How We Rate &rarr;
            </GoldCTA>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOne;
