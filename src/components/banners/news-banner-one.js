function NewsBannerOne() {
    return (
      <div className="custom-container pt-[60px] pb-[60px] md:pt-24 md:pb-12">
        <div className="text-center space-y-4">
          <h1 className="text-[28px] md:text-[52px] font-bold leading-snug" style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)' }}>
            Latest from Goonzerflow
          </h1>
          <h2 className="text-[16px] md:text-[26px] leading-relaxed" style={{ color: 'var(--marble-warm)', fontFamily: 'var(--font-body)' }}>
            New slot reviews, casino rankings, and strategy guides published weekly.
          </h2>
        </div>
      </div>
    );
  }

  export default NewsBannerOne;
