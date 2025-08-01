import Link from "next/link";
import Image from "next/image";

function Hero({ heroItems }) {
  return (
    <section className="relative w-full min-h-screen bg-[#13144D] pt-[120px] overflow-hidden">
      {heroItems?.map((heroItem, i) => (
        <div key={i} className="custom-container z-[2]">
          <div className="hero-inner grid grid-cols-12 items-center gap-6">
            {/* TEXT CONTENT */}
            <div className="md:col-span-7 col-span-12">
              <div
                className="text-[28px] md:text-[64px] tracking-[3px] md:tracking-[5px] text-[#22C763] font-bold md:mb-[2px] mb-[10px]"
                dangerouslySetInnerHTML={{
                  __html: heroItem.heroCategory,
                }}
              />
              <h2
                className="text-[32px] md:text-[52px] leading-[40px] md:leading-[60px] font-bold text-white mb-[20px]"
                dangerouslySetInnerHTML={{
                  __html: heroItem.heroTitle,
                }}
              />
              <div
                className="text-[18px] md:text-[24px] leading-7 md:leading-8 font-poppins tracking-[2px] md:tracking-[5px] text-white max-w-full md:max-w-[650px] mb-[10px] md:mb-[30px]"
                dangerouslySetInnerHTML={{
                  __html: heroItem.heroDescription,
                }}
              />
              <div>
                <Link href="/demo">
                  <a className="boxed-btn text-[20px] md:text-[24px] font-bold font-poppins">
                    Schedule a demo &gt;
                  </a>
                </Link>
              </div>
            </div>

            {/* IMAGE CONTENT */}
            <div className="md:col-span-5 col-span-12 flex justify-center">
              <div className="w-full max-w-[375px]">
                <Image
                  src={heroItem?.image}
                  alt="Hero visual"
                  width={375}
                  height={375}
                  className="rounded-xl shadow-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;
