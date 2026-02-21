import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import casinos from "../data/casinos";
import getAffiliateLink from "../lib/getAffiliateLink";
import sortCasinos from "../lib/sortCasinos";
import trackAffiliateClick from "../lib/trackAffiliateClick";
import LightningDivider from "../components/ui/LightningDivider";
import GoldCTA from "../components/ui/GoldCTA";

function BestBonusesPage({ topCasinos }) {
  return (
    <Fragment>
      <Head>
        <title>Best Sweepstakes Casino Bonuses 2026 — Top 5 Ranked | Goonzerflow</title>
        <meta
          name="description"
          content="Compare the best sweepstakes casino bonuses for 2026. Crown Coins, Baba Casino, Jackpota and more — ranked by bonus value. No purchase necessary."
        />
        <link rel="canonical" href="https://goonzerflow.com/best-sweepstakes-casino-bonuses" />
        <meta property="og:title" content="Best Sweepstakes Casino Bonuses 2026 — Top 5 Ranked | Goonzerflow" />
        <meta property="og:description" content="Compare the best sweepstakes casino bonuses for 2026. Crown Coins, Baba Casino, Jackpota and more — ranked by bonus value. No purchase necessary." />
        <meta property="og:image" content="/images/goonzerflow/casino-chips-stack.png" />
        <meta property="og:url" content="https://goonzerflow.com/best-sweepstakes-casino-bonuses" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Sweepstakes Casino Bonuses 2026 — Top 5 Ranked | Goonzerflow" />
        <meta name="twitter:description" content="Compare the best sweepstakes casino bonuses for 2026. Crown Coins, Baba Casino, Jackpota and more — ranked by bonus value. No purchase necessary." />
        <meta name="twitter:image" content="/images/goonzerflow/casino-chips-stack.png" />
      </Head>

      {/* Hero */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,17,32,0.72), rgba(11,17,32,0.72)), url(/images/hero/hero-marble-gold-vein.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="custom-container pt-[100px] pb-[60px] md:pt-[140px] md:pb-[80px] text-center">
          <p
            className="gold-text mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-small)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-caps)",
              textTransform: "uppercase",
            }}
          >
            Updated February 2026
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 700,
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--marble-white)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Best Sweepstakes Casino Bonuses in 2026
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-body)",
              color: "var(--marble-warm)",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Sweepstakes casinos let you play casino-style games using virtual currencies like Gold Coins and Sweeps Coins.
            Gold Coins are for entertainment only, while Sweeps Coins can be redeemed for real prizes. These platforms are
            legal in most U.S. states because no purchase is necessary to play. Below are the top 5 sweepstakes casinos
            ranked by bonus value, game variety, and redemption speed.
          </p>
        </div>
      </div>

      <LightningDivider />

      {/* Top 5 Feature Cards */}
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="max-w-[900px] mx-auto">
          {topCasinos.map((casino, i) => (
            <div
              key={casino.slug}
              className="mb-8 rounded-lg overflow-hidden"
              style={{
                background: "var(--olympus-navy-light)",
                border: i === 0 ? "2px solid var(--gold-primary)" : "1px solid rgba(201, 168, 76, 0.15)",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Rank + Image */}
                <div className="relative md:w-[240px] h-[180px] md:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={casino.image}
                    alt={casino.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-primary) 45%, var(--gold-light) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-data)",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "var(--olympus-navy)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    #{i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--text-subsection)",
                          fontWeight: 600,
                          letterSpacing: "var(--tracking-display)",
                          color: "var(--marble-white)",
                          marginBottom: "var(--space-xs)",
                        }}
                      >
                        {casino.name}
                      </h2>
                      <p
                        style={{
                          color: "var(--gold-primary)",
                          fontFamily: "var(--font-data)",
                          fontSize: "var(--text-body)",
                          fontWeight: 700,
                        }}
                      >
                        {casino.bonus}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: casino.rating >= 9.0 ? "var(--gold-light)" : "var(--gold-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-data)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "var(--olympus-navy)",
                        flexShrink: 0,
                      }}
                    >
                      {casino.rating}
                    </div>
                  </div>

                  {/* Pros */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-md) 0" }}>
                    {casino.pros.map((pro, j) => (
                      <li
                        key={j}
                        style={{
                          color: "var(--marble-warm)",
                          fontSize: "var(--text-small)",
                          lineHeight: "var(--leading-body)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        <span style={{ color: "var(--risk-low)", marginRight: "6px" }}>&#10003;</span>
                        {pro}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="btn-gold-primary inline-block text-center"
                    style={{ textDecoration: "none", padding: "10px 28px" }}
                    onClick={() => trackAffiliateClick(casino.slug, "seo-landing", casino.affiliateUrl)}
                  >
                    Get Bonus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LightningDivider />

      {/* How We Rank */}
      <div className="custom-container pt-[60px] pb-[40px]">
        <div className="max-w-[800px] mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-display)",
              color: "var(--marble-white)",
              marginBottom: "var(--space-md)",
            }}
          >
            How We Rank Sweepstakes Casinos
          </h2>
          <p
            style={{
              color: "var(--marble-warm)",
              lineHeight: "var(--leading-body)",
              fontFamily: "var(--font-body)",
              marginBottom: "var(--space-md)",
            }}
          >
            Our rankings are based on independent analysis across four key factors: welcome bonus value
            (both Gold Coins and Sweeps Coins), game variety and provider quality, redemption speed and
            reliability, and overall platform experience. We sign up, play, and test the redemption process
            ourselves before publishing a review.
          </p>
        </div>
      </div>

      {/* What Are Sweepstakes Casinos? */}
      <div className="custom-container pb-[40px]">
        <div className="max-w-[800px] mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-display)",
              color: "var(--marble-white)",
              marginBottom: "var(--space-md)",
            }}
          >
            What Are Sweepstakes Casinos?
          </h2>
          <p
            style={{
              color: "var(--marble-warm)",
              lineHeight: "var(--leading-body)",
              fontFamily: "var(--font-body)",
              marginBottom: "var(--space-md)",
            }}
          >
            Sweepstakes casinos are online gaming platforms that operate using a dual-currency system.
            Gold Coins are the primary currency used for casual, free-to-play entertainment with no real
            monetary value. Sweeps Coins (or equivalent premium currencies like Diamonds, Fortune Coins,
            or Super Coins) can be earned for free and are redeemable for real prizes once you meet the
            minimum threshold. Because no purchase is required to play or win, sweepstakes casinos are
            legal in most U.S. states under sweepstakes promotional law.
          </p>
        </div>
      </div>

      {/* Are They Legal? */}
      <div className="custom-container pb-[60px]">
        <div className="max-w-[800px] mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-display)",
              color: "var(--marble-white)",
              marginBottom: "var(--space-md)",
            }}
          >
            Are Sweepstakes Casinos Legal?
          </h2>
          <p
            style={{
              color: "var(--marble-warm)",
              lineHeight: "var(--leading-body)",
              fontFamily: "var(--font-body)",
              marginBottom: "var(--space-md)",
            }}
          >
            Yes, sweepstakes casinos are legal in most U.S. states. They operate under sweepstakes
            promotional law, which requires that no purchase is necessary to participate. Some states,
            including Washington and Idaho, have restrictions on sweepstakes casino participation. Players
            must be 18 or older (21 in some jurisdictions). Always check your local regulations before
            signing up.
          </p>
        </div>
      </div>

      <LightningDivider />

      {/* Bottom CTA */}
      <div className="custom-container pt-[60px] pb-[60px] text-center">
        <h2
          className="gold-text mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-display)",
          }}
        >
          Explore All 22 Casinos
        </h2>
        <p
          style={{
            color: "var(--marble-warm)",
            fontSize: "var(--text-body-lg)",
            marginBottom: "var(--space-xl)",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          See the full rankings with detailed reviews, bonus breakdowns, and pros/cons for every casino.
        </p>
        <GoldCTA href="/reviews" variant="cta">
          View All 22 Casinos
        </GoldCTA>
      </div>

      {/* Affiliate Disclosure */}
      <div className="custom-container pb-[40px]">
        <p
          style={{
            color: "var(--marble-deep)",
            fontSize: "var(--text-tiny)",
            lineHeight: "var(--leading-body)",
            borderTop: "1px solid var(--olympus-navy-mid)",
            paddingTop: "var(--space-md)",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Affiliate Disclosure: Goonzerflow may receive compensation when you sign up through links on
          this page. This does not influence our rankings or reviews. All sweepstakes casinos listed are
          free to play with no purchase necessary. 18+. Terms and conditions apply. Void where prohibited.
        </p>
      </div>
    </Fragment>
  );
}

export function getStaticProps() {
  const topCasinos = sortCasinos(casinos)
    .slice(0, 5)
    .map((casino) => ({
      ...casino,
      affiliateUrl: getAffiliateLink(casino.affiliateKey, "seo-landing"),
    }));

  return {
    props: {
      topCasinos,
    },
  };
}

export default BestBonusesPage;
