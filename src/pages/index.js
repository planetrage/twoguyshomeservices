import { Fragment, useState, useMemo } from 'react';
import Head from 'next/head';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import casinos from '../data/casinos';
import getAffiliateLink from '../lib/getAffiliateLink';
import Hero from '../components/home-page/hero';
import Top3Casinos from '../components/home-page/top3-casinos';
import BonusFilterStrip from '../components/home-page/bonus-filter-strip';
import Top6Casinos from '../components/home-page/top6-casinos';
import ComparisonTable from '../components/home-page/comparison-table';
import WhyTrust from '../components/home-page/why-trust';
import Services from '../components/home-page/services';
import FeaturedPosts from '../components/home-page/featured-posts';
import MobileStickyCTA from '../components/home-page/mobile-sticky-cta';
import LightningDivider from '../components/ui/LightningDivider';
import GoldCTA from '../components/ui/GoldCTA';

/**
 * Extract a numeric SC/premium-coin value from bonus text for sorting.
 * e.g. "UP TO 1.5M CC + 75 FREE SC" → 75
 *      "80K GC + 40 SC" → 40
 *      "UP TO 450K GC + 2000 FC" → 2000
 */
function parseSCValue(bonus) {
  // Match patterns like "75 FREE SC", "40 SC", "125 SC FREE", "25 DIAMONDS", "2000 FC", "60 SUPER COINS"
  const scMatch = bonus.match(/([\d.]+)\s*(?:FREE\s+)?(?:SC|DIAMONDS|FC|SUPER COINS)/i);
  if (scMatch) return parseFloat(scMatch[1]);
  return 0;
}

/** Approximate bonus magnitude for "Highest Bonus" sort */
function parseBonusValue(bonus) {
  // Sum all numeric values — higher total = bigger package
  let total = 0;
  const matches = bonus.match(/([\d,.]+)\s*([MK]?)/gi);
  if (!matches) return 0;
  for (const m of matches) {
    const parts = m.match(/([\d,.]+)\s*([MK]?)/i);
    if (!parts) continue;
    let num = parseFloat(parts[1].replace(/,/g, ''));
    const suffix = (parts[2] || '').toUpperCase();
    if (suffix === 'M') num *= 1000000;
    else if (suffix === 'K') num *= 1000;
    total += num;
  }
  return total;
}

// Static popularity ranking (top 6 by manual editorial order)
const POPULARITY_ORDER = [
  'crown-coins', 'jackpota', 'baba-casino', 'spree', 'lonestar', 'sweepnext',
  'big-pirate', 'splash-coins', 'spinfinite', 'rolla', 'jackpot-rabbit',
  'big-shot-games', 'the-win-zone', 'fire-sevens', 'vegas-way', 'sweepico',
  'playtana', 'mr-goodwin', 'scarlet-sands', 'storm-rush', 'real-prize', 'fortune-wheelz',
];

function HomePage(props) {
  const [activeFilter, setActiveFilter] = useState('rating');

  const top3 = props.allCasinos.slice(0, 3);

  const top6Sorted = useMemo(() => {
    const pool = props.allCasinos.slice(0, 6);
    switch (activeFilter) {
      case 'bonus':
        return [...pool].sort((a, b) => parseBonusValue(b.bonus) - parseBonusValue(a.bonus));
      case 'freeSC':
        return [...pool].sort((a, b) => parseSCValue(b.bonus) - parseSCValue(a.bonus));
      case 'popular': {
        return [...pool].sort((a, b) => {
          const ai = POPULARITY_ORDER.indexOf(a.slug);
          const bi = POPULARITY_ORDER.indexOf(b.slug);
          return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        });
      }
      case 'rating':
      default:
        return pool;
    }
  }, [activeFilter, props.allCasinos]);

  return (
    <Fragment>
      <Head>
        <title>Best Sweepstakes Casino Bonuses — Goonzerflow</title>
        <meta
          name="description"
          content="Compare the best sweepstakes casino bonuses. Updated rankings, verified offers, and independent reviews. No purchase necessary. 18+."
        />
      </Head>

      {/* 1. Hero */}
      <Hero />

      {/* 2. Top 3 Casinos — immediate conversion */}
      <Top3Casinos casinos={top3} />

      <LightningDivider />

      {/* 3. Mini Comparison Table */}
      <ComparisonTable casinos={props.allCasinos.slice(0, 6)} />

      {/* 4. Bonus Filter Strip */}
      <BonusFilterStrip activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* 5. Top 6 Casino Grid */}
      <Top6Casinos casinos={top6Sorted} />

      <LightningDivider />

      {/* 5. Why Trust Goonzerflow */}
      <WhyTrust />

      <LightningDivider />

      {/* 6. Category cards (demoted from above-the-fold) */}
      <Services />

      {/* 7. Latest guides (demoted) */}
      <FeaturedPosts posts={props.posts} />

      {/* 8. Final CTA Section — rewritten */}
      <section style={{ background: 'var(--olympus-navy-light)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
        <LightningDivider className="mb-16" />
        <div className="custom-container text-center">
          <h2
            className="gold-text mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-section)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
            }}
          >
            Ready to Claim Your Bonus?
          </h2>
          <p style={{ color: 'var(--marble-warm)', fontSize: 'var(--text-body-lg)', marginBottom: 'var(--space-xl)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Browse verified sweepstakes casino offers ranked by our team.
          </p>
          <GoldCTA href="/reviews" variant="cta">
            View Top Casinos
          </GoldCTA>
        </div>
      </section>

      {/* 9. Discord Section — kept as-is */}
      <section style={{ background: 'var(--olympus-navy-mid)', paddingTop: 0, paddingBottom: 'var(--space-2xl)' }}>
        <LightningDivider />
        <div className="custom-container text-center" style={{ paddingTop: 'var(--space-2xl)' }}>
          <p
            className="gold-text mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
            }}
          >
            Community
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-section)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-md)',
            }}
          >
            Live Gambling Radar
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--marble-warm)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '550px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Real-time stream alerts. Creator highlights. Join the community.
          </p>
          <GoldCTA href="#" variant="secondary">
            Join Discord &rarr;
          </GoldCTA>
        </div>
      </section>

      {/* 10. Mobile Sticky CTA Bar */}
      <MobileStickyCTA />
    </Fragment>
  );
}

export function getStaticProps() {
  const posts = getAllItems('posts');
  const featuredPosts = getFeaturedItems(posts);

  // Prepare casino data with affiliate URLs — sorted by priorityScore
  const allCasinos = [...casinos]
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .map((casino, index) => ({
      ...casino,
      rank: index + 1,
      affiliateUrl: getAffiliateLink(casino.affiliateKey),
    }));

  return {
    props: {
      posts: featuredPosts,
      allCasinos,
    },
  };
}

export default HomePage;
