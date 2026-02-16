function Banner() {
    return (
      <div className="custom-container pt-[60px] pb-[60px] md:pt-24 md:pb-12">
        <div>
          <h1
            className="text-[28px] md:text-[56px] font-bold text-center leading-snug mb-[30px] md:mb-[60px]"
            style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' }}
          >
            The Goonzerflow Story
          </h1>

          <h2
            className="text-[16px] md:text-[26px] text-center mb-[20px] md:mb-[30px] leading-relaxed "
            style={{ color: 'var(--marble-warm)' }}
          >
            Built by analysts and players who were tired of affiliate sites disguised as reviews, Goonzerflow started as a simple spreadsheet tracking RTP data across hundreds of slots.
          </h2>

          <h2
            className="text-[16px] md:text-[26px] text-center mb-[30px] leading-relaxed "
            style={{ color: 'var(--marble-warm)' }}
          >
            That spreadsheet became a database. The database became an analytical platform. Today, Goonzerflow delivers structured intelligence for every slot and casino worth your time — verified data, honest analysis, zero hype.
          </h2>

          <div className="mt-[60px] border-b-2 w-full rounded-lg" style={{ borderColor: 'var(--gold-primary)' }} />
        </div>
      </div>
    );
  }

export default Banner;
