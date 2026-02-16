function Banner() {
  return (
    <div className="olympus-sky">
      <div className="custom-container pt-[80px] pb-[80px] md:pt-24 md:pb-24">
        <div className="grid grid-cols-1">
          <h1
            className="text-[32px] md:text-[56px] mb-[10px] md:mb-[30px] text-center leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--gold-primary)',
            }}
          >
            Goonzerflow Empowers Every Player
          </h1>
          <p
            className="text-[16px] md:text-[24px] mb-[10px] md:mb-[30px] text-center leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--marble-white)',
            }}
          >
            From casual players to high-rollers, Goonzerflow empowers every gambler to play smarter using data-driven slot reviews and casino analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
