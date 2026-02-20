import { Fragment } from "react";
import Link from "next/link";
import ReviewsBanner from "../../components/banners/reviews-banner";
import SeoHead from "../../components/seo/seo-head";
import casinos from "../../data/casinos";
import getAffiliateLink from "../../lib/getAffiliateLink";

function ReviewsListingPage({ casinos }) {
  return (
    <Fragment>
      <SeoHead
        item={{
          h1: "Casino Reviews",
          metaDescription:
            "Browse sweepstakes casino reviews — bonus offers, ratings, and honest analysis. No purchase necessary.",
        }}
      />
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
                  rel="noopener noreferrer"
                  className="btn-gold-primary inline-block mt-4 text-center"
                  style={{ width: "100%", textDecoration: "none" }}
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
  const sorted = [...casinos]
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .map((casino, index) => ({
      ...casino,
      rank: index + 1,
      affiliateUrl: getAffiliateLink(casino.affiliateKey),
    }));

  return {
    props: {
      casinos: sorted,
    },
  };
}

export default ReviewsListingPage;
