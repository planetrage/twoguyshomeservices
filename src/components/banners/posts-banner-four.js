import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="custom-container pt-24 pb-12 space-y-12" style={{ color: 'var(--marble-white)' }}>
      {/* Top section with date and intro */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--marble-warm)' }}>
            <FaClock />
            <span>11/23/2024</span>
            <span className="border-l pl-2" style={{ borderColor: 'var(--marble-warm)', color: 'var(--marble-white)' }}>Strategy Guide</span>
          </div>

          <p className="text-[20px]">
            Choosing the right slot goes beyond flashy themes and bonus rounds. A data-driven approach to slot selection considers RTP, volatility, max win potential, and session bankroll requirements. Here are three key factors every informed player should evaluate before spinning.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/images/slots/slot-crystal-gold.png"
            alt="Slot Strategy Analysis"
            width={500}
            height={375}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Article content */}
      <div className="prose max-w-none text-[18px] space-y-10" style={{ fontFamily: 'var(--font-body)' }}>

        <div>
          <h3 className="text-[24px] font-bold">1. RTP: The Foundation of Slot Selection</h3>
          <p>
            Return to Player percentage is the mathematical backbone of every slot decision. A slot with 96.5% RTP returns $96.50 for every $100 wagered over millions of spins. That 2-3% difference between slots can mean hundreds of dollars over a typical session.
          </p>
          <p className="font-semibold mt-4">What to look for:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Published RTP verified against independent testing lab reports</li>
            <li>RTP consistency across different casinos (some adjust RTP per operator)</li>
            <li>Base game RTP vs. feature-inclusive RTP (some slots inflate numbers with bonus rounds)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[24px] font-bold">2. Volatility: Matching Risk to Bankroll</h3>
          <p>
            Volatility determines the rhythm of your session. High-volatility slots deliver rare but large payouts; low-volatility slots pay frequently but modestly. Neither is objectively better — the right choice depends on your bankroll and session length.
          </p>
        </div>

        <div>
          <h3 className="text-[24px] font-bold">3. Max Win Potential and Hit Frequency</h3>
          <p>
            A slot's max win multiplier tells you the theoretical ceiling of any single spin. Combined with hit frequency data, you can model expected session outcomes and set realistic expectations for your bankroll.
          </p>
        </div>

        <div>
          <h3 className="text-[24px] font-bold">Conclusion</h3>
          <p>
            Informed slot selection is about probability, not luck. By evaluating RTP, volatility, and max win potential together, you can make data-driven decisions that maximize your expected value over time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
