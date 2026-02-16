import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="custom-container pt-24 pb-12 space-y-12" style={{ color: 'var(--marble-white)' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--marble-warm)' }}>
            <FaClock />
            <span>11/23/2024</span>
            <span className="border-l pl-2" style={{ borderColor: 'var(--marble-warm)', color: 'var(--marble-white)' }}>Casino Analysis</span>
          </div>
          <p className="text-[20px]">
            Casino bonus terms are designed to look generous while being mathematically unfavorable. Understanding wagering requirements, game weighting, and max bet rules is the difference between a profitable bonus and a hidden cost. Here are the five most important factors to evaluate.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/slots/slot-dice-gold.png"
            alt="Casino Bonus Analysis"
            width={500}
            height={375}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Article content */}
      <div className="prose max-w-none text-[18px] space-y-10" style={{ fontFamily: 'var(--font-body)' }}>

        {[
          {
            title: '1. Wagering Requirements: The True Cost of a Bonus',
            desc: 'A 45x wagering requirement on a $100 bonus means you must wager $4,500 before withdrawing. Factor in the house edge and most bonuses cost you money.',
            bullets: [
              'Calculate expected loss: bonus amount x wagering requirement x house edge',
              'Compare effective value across different bonus types',
              'Look for sub-30x requirements as the threshold for positive expected value',
            ]
          },
          {
            title: '2. Game Weighting: Not All Games Count Equally',
            desc: 'Slots typically contribute 100% to wagering, but table games may contribute 10-20% or nothing at all.',
            bullets: [
              'Check which games contribute to wagering requirements',
              'Slots usually offer the fastest clearing path',
              'Live dealer games often contribute 0% to wagering',
            ]
          },
          {
            title: '3. Max Bet Rules: The Hidden Trap',
            desc: 'Most bonuses cap your maximum bet at $5-$10 per spin. Exceeding this voids the bonus and any winnings.',
            bullets: [
              'Always check the max bet limit before playing',
              'Some casinos void the entire balance for violations',
              'Lower max bet limits extend the time needed to clear wagering',
            ]
          },
          {
            title: '4. Time Limits: The Countdown Factor',
            desc: 'Bonuses typically expire in 7-30 days. Shorter windows make high wagering requirements even harder to clear.',
            bullets: [
              'Calculate required daily wagering to clear in time',
              'Factor in your realistic play schedule',
              'Avoid bonuses with sub-7-day expiration windows',
            ]
          },
          {
            title: '5. Withdrawal Caps: The Ceiling on Your Winnings',
            desc: 'Some bonuses cap the maximum amount you can withdraw, regardless of how much you win.',
            bullets: [
              'Check for maximum cashout limits on bonus winnings',
              'No-cap bonuses are significantly more valuable',
              'Factor caps into your expected value calculation',
            ]
          }
        ].map((section, i) => (
          <div key={i}>
            <h3 className="text-[24px] font-bold">{section.title}</h3>
            <p>{section.desc}</p>
            <p className="font-semibold mt-4">Key Factors:</p>
            <ul className="list-disc ml-6 space-y-1">
              {section.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[24px] font-bold">Conclusion</h3>
          <p>
            Casino bonuses can be valuable when you understand the math. By evaluating wagering requirements, game weighting, max bet rules, time limits, and withdrawal caps, you can identify the offers that actually deliver positive expected value.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
