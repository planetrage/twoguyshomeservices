import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="custom-container pt-24 pb-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          {/* Date + Category */}
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--marble-warm)' }}>
            <FaClock />
            <span>01/02/2025</span>
            <span className="border-l pl-2" style={{ borderColor: 'var(--marble-warm)', color: 'var(--marble-white)' }}>Slot Review</span>
          </div>

          {/* Intro Paragraphs */}
          <p className="text-[18px]" style={{ color: 'var(--marble-white)' }}>
            Goonzerflow delivers RTP-verified slot reviews, data-driven casino guides, and analytical tools for the informed player. Our team tests every slot and casino we recommend with real money and rigorous methodology.
          </p>
          <p className="text-[18px]" style={{ color: 'var(--marble-white)' }}>
            We analyze over 200 titles each year, cross-referencing published RTPs with third-party audit data and live session results. Our mission is structured intelligence for gaming — no hype, no affiliate bias, just data.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/images/slots/slot-ace-spade-gold.png"
            alt="Slot Analysis"
            width={500}
            height={375}
            className="rounded-lg w-full h-auto"
            quality={70}
            priority
          />
        </div>
      </div>
      {/* Additional Paragraphs */}
      <div className="mt-10 space-y-6 text-[18px]" style={{ color: 'var(--marble-white)' }}>
        <p>
          Our team combines statistical analysis with real-play testing to deliver reviews you can trust. Every slot rating reflects verified RTP data, volatility profiling, and hands-on gameplay evaluation.
        </p>
        <p>
          Browse our collection of slot reviews, casino rankings, and strategy guides to find the games worth your bankroll.
        </p>
      </div>
    </div>
  );
}

export default BannerTwo;
