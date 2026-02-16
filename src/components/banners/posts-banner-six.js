import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="container pt-24 pb-12" style={{ color: 'var(--marble-white)' }}>
      {/* Metadata section */}
      <div className="flex items-center space-x-4 text-[16px] mb-4" style={{ color: 'var(--marble-warm)' }}>
        <FaClock />
        <span>04/07/2025</span>
        <span className="border-l pl-4" style={{ borderColor: 'var(--marble-warm)', color: 'var(--marble-white)' }}>Casino Review</span>
      </div>
      {/* Intro paragraph */}
      <p className="text-[20px] mb-6" style={{ color: 'var(--marble-white)' }}>
        Goonzerflow is a structured intelligence platform for gambling content. Built by analysts and players who were tired of affiliate sites disguised as reviews, we deliver RTP-verified analysis, data-driven guides, and analytical tools for the informed player.
      </p>
      {/* Body content */}
      <div className="space-y-6 text-[20px]" style={{ color: 'var(--marble-white)' }}>
        <p>
          Our methodology is rigorous: we deposit real money, test every game we review, time every withdrawal, and cross-reference published data with independent testing labs. No casino partnerships influence our rankings.
        </p>
        <p>
          From slot volatility analysis and RTP verification to casino trust scoring and bonus value calculations, Goonzerflow provides the structured data that informed players need to make better decisions.
        </p>

        <h2 className="text-[24px] font-bold mt-8">About Goonzerflow</h2>
        <p>
          Goonzerflow started as a simple spreadsheet tracking RTP data across hundreds of slots. That spreadsheet became a database. The database became an analytical platform. Today, Goonzerflow delivers structured intelligence for every slot and casino worth your time.
        </p>

        <p>
          Learn more at{' '}
          <Link href="/about" className="underline" style={{ color: 'var(--gold-primary)' }}>
            our About page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BannerTwo;
