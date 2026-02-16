function Banner({ bannerItems }) {
  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="custom-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-md)',
              lineHeight: 'var(--leading-display)',
            }}
          >
            Maximize Value with<br />Data-Driven Slot Analytics
          </h1>
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
