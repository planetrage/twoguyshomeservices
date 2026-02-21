import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import ReviewsBanner from "../../components/banners/reviews-banner";
import casinos from "../../data/casinos";
import getAffiliateLink from "../../lib/getAffiliateLink";
import sortCasinos from "../../lib/sortCasinos";
import trackAffiliateClick from "../../lib/trackAffiliateClick";

function ReviewsListingPage({ casinos }) {
  return (
    <Fragment>
      <Head>
        <title>Best Sweepstakes Casinos 2026 — Top 22 Ranked &amp; Reviewed | Goonzerflow</title>
        <meta
          name="description"
          content="Compare the top 22 sweepstakes casinos ranked by bonus value, game variety, and redemption speed. Updated February 2026. No purchase necessary."
        />
        <link rel="canonical" href="https://goonzerflow.com/reviews" />
        <meta property="og:title" content="Best Sweepstakes Casinos 2026 — Top 22 Ranked & Reviewed | Goonzerflow" />
        <meta property="og:description" content="Compare the top 22 sweepstakes casinos ranked by bonus value, game variety, and redemption speed. Updated February 2026. No purchase necessary." />
        <meta property="og:image" content="/images/goonzerflow/casino-chips-stack.png" />
        <meta property="og:url" content="https://goonzerflow.com/reviews" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Sweepstakes Casinos 2026 — Top 22 Ranked & Reviewed | Goonzerflow" />
        <meta name="twitter:description" content="Compare the top 22 sweepstakes casinos ranked by bonus value, game variety, and redemption speed. Updated February 2026. No purchase necessary." />
        <meta name="twitter:image" content="/images/goonzerflow/casino-chips-stack.png" />
      </Head>
      <ReviewsBanner />
      <div className="custom-container pt-[60px] pb-[60px]">
        {/* Timestamp header */}
        <p
          className="text-center mb-8"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-small)",
            color: "var(--marble-deep)",
          }}
        >
          Rankings last updated: February 16, 2026 | 22 casinos reviewed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casinos.map((casino) => (
            <div
              key={casino.slug}
              className="olympus-card overflow-hidden"
              style={{ padding: 0 }}
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={casino.image}
                  alt={casino.name}
                  className="w-full h-full object-cover"
                />
                {/* Rating badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background:
                      casino.rating >= 9.0
                        ? "var(--gold-light)"
                        : "var(--gold-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-data)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--olympus-navy)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  {casino.rating}
                </div>
                {/* Rank number — large gold */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    background: "rgba(11, 17, 32, 0.85)",
                    borderTopRightRadius: "8px",
                    padding: "4px 14px",
                    fontFamily: "var(--font-data)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--gold-primary)",
                  }}
                >
                  #{casino.rank}
                </div>
                {/* Rank badge for top 3 */}
                {casino.rank <= 3 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-primary) 45%, var(--gold-light) 100%)",
                        color: "var(--olympus-navy)",
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-tiny)",
                        fontWeight: 700,
                        letterSpacing: "var(--tracking-caps)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        textTransform: "uppercase",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                      }}
                    >
                      #{casino.rank} Ranked
                    </span>
                    {casino.rank === 1 && (
                      <span
                        style={{
                          background: "rgba(11, 17, 32, 0.9)",
                          border: "1px solid var(--gold-primary)",
                          color: "var(--gold-primary)",
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--text-tiny)",
                          fontWeight: 600,
                          letterSpacing: "var(--tracking-caps)",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          textTransform: "uppercase",
                        }}
                      >
                        Editor&#39;s Pick
                      </span>
                    )}
                  </div>
                )}
                {/* Tagline badge — only for rank > 3 */}
                {casino.rank > 3 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(11, 17, 32, 0.85)",
                      border: "1px solid var(--gold-muted)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-tiny)",
                      letterSpacing: "var(--tracking-caps)",
                      color: "var(--gold-primary)",
                      textTransform: "uppercase",
                    }}
                  >
                    {casino.tagline}
                  </div>
                )}
              </div>
              <div className="p-6">
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
                  <Link href={`/reviews/${casino.slug}`}>{casino.name}</Link>
                </h2>
                <p
                  style={{
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-data)",
                    fontSize: "var(--text-small)",
                    fontWeight: 600,
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {casino.bonus}
                </p>
                <p
                  style={{
                    color: "var(--marble-warm)",
                    lineHeight: "var(--leading-body)",
                  }}
                  className="line-clamp-2 text-sm"
                >
                  {casino.excerpt}
                </p>
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="btn-gold-primary inline-block mt-4 text-center"
                  style={{ width: "100%", textDecoration: "none" }}
                  onClick={() => trackAffiliateClick(casino.slug, "reviews-list", casino.affiliateUrl)}
                >
                  Get Bonus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export function getStaticProps() {
  const sorted = sortCasinos(casinos)
    .map((casino, index) => ({
      ...casino,
      rank: index + 1,
      affiliateUrl: getAffiliateLink(casino.affiliateKey, "reviews-list"),
    }));

  return {
    props: {
      casinos: sorted,
    },
  };
}

export default ReviewsListingPage;
