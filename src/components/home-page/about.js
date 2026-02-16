import Link from 'next/link';
import GoldCTA from '../ui/GoldCTA';

function About() {
  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="custom-container">
        <div className="max-w-3xl mx-auto">
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
            About Goonzerflow
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-lg)',
              lineHeight: 'var(--leading-display)',
            }}
          >
            Data-Driven Intelligence for Smarter Gambling
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--marble-warm)',
              lineHeight: 'var(--leading-body)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            We built Goonzerflow because most slot reviews are marketing copy, not analysis.
            Our team cross-references published RTPs with independent audit data, tests real
            withdrawal speeds, and calculates the actual expected value of every bonus we review.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              color: 'var(--marble-cool)',
              lineHeight: 'var(--leading-body)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            No affiliate rankings masquerading as reviews. No hype. Just structured intelligence
            for players who want to make informed decisions.
          </p>
          <GoldCTA href="/about" variant="secondary">
            More About Us
          </GoldCTA>
        </div>
      </div>
    </div>
  );
}

export default About;
