function Banner() {
    return (
      <div
        className="olympus-sky"
        style={{
          marginTop: 0,
          backgroundImage: 'linear-gradient(rgba(11,17,32,0.75), rgba(11,17,32,0.75)), url(/images/hero/hero-marble-gold-vein.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="custom-container pt-[60px] pb-[60px] md:pt-24 md:pb-24">
          <h1
            className="text-[28px] md:text-[52px] font-bold text-left leading-snug"
            style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' }}
          >
            About Goonzerflow
          </h1>
        </div>
      </div>
    );
  }

  export default Banner;
