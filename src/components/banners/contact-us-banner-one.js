function Banner() {
    return (
      <div className="custom-container pt-[60px] pb-[60px] md:pt-24 md:pb-12">
        <div className="text-center space-y-4">
          <h1 className="text-[28px] md:text-[56px] font-bold leading-snug" style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)' }}>
            Connect With Us
          </h1>
          <h2 className="text-[16px] md:text-[26px] leading-relaxed" style={{ color: 'var(--marble-warm)', fontFamily: 'var(--font-body)' }}>
            Reach out to our team for questions or feedback about Goonzerflow
          </h2>
        </div>
      </div>
    );
  }

export default Banner;
