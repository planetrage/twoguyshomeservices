function Banner({ bannerItems }) {
  return (
    <div style={{ background: 'var(--olympus-navy)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="custom-container">
        <div className="max-w-4xl mx-auto text-center">
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-section)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-md)',
              lineHeight: 'var(--leading-display)',
            }}
          >
            Maximize Value with a Data-Driven Approach
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--marble-warm)',
              lineHeight: 'var(--leading-body)',
            }}
          >
            Goonzerflow is the most comprehensive slot analytics platform built for players who want verified RTP data, honest casino reviews, and mathematical analysis of every game worth playing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
