import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import cryptoCasinos from "../../data/cryptoCasinos";
import getAffiliateLink from "../../lib/getAffiliateLink";
import trackAffiliateClick from "../../lib/trackAffiliateClick";

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const legalLine = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-tiny)",
  color: "var(--marble-deep)",
  textAlign: "center",
  lineHeight: 1.4,
  marginTop: "var(--space-xs)",
};

function CryptoReviewPage({ casino, affiliateUrl }) {
  const faqItems = [
    {
      q: `Is ${casino.name} legit?`,
      a: `${casino.name} is a crypto gambling platform that uses provably fair technology to verify game outcomes. As with all real-money gambling, players should exercise caution, set limits, and only wager what they can afford to lose.`,
    },
    {
      q: "What cryptocurrencies are accepted?",
      a: `${casino.name} typically accepts major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and various stablecoins. Check the platform directly for the current list of supported currencies.`,
    },
    {
      q: `Is ${casino.name} legal in my state?`,
      a: "Crypto gambling legality varies by jurisdiction. Some U.S. states explicitly prohibit online gambling, while others have more permissive frameworks. Always verify your local laws before participating in any real-money gambling activity.",
    },
    {
      q: "How fast are withdrawals?",
      a: `Cryptocurrency withdrawals on ${casino.name} are typically processed within minutes, depending on blockchain confirmation times. Bitcoin transactions may take 10-30 minutes, while other cryptocurrencies can be faster.`,
    },
    {
      q: "Is there a mobile app?",
      a: `${casino.name} is accessible through mobile web browsers with a responsive design optimized for smartphones and tablets. Check the platform directly for any dedicated mobile app availability.`,
    },
  ];

  const pageTitle = `${casino.name} Review 2026 — Crypto Casino | Goonzerflow`;
  const metaDesc = `${casino.excerpt} Rated ${casino.rating}/10. 21+. Real-money gambling. Gamble responsibly.`;
  const canonicalUrl = `https://goonzerflow.com/crypto-casinos/${casino.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://goonzerflow.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Crypto Casinos",
        item: "https://goonzerflow.com/crypto-casinos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: casino.name,
        item: canonicalUrl,
      },
    ],
  };

  const ctaButtonStyle = {
    textDecoration: "none",
    display: "inline-block",
    background: "linear-gradient(135deg, #B33A3A 0%, #D94F4F 45%, #E87A5C 100%)",
    color: "var(--marble-white)",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "var(--text-body)",
    padding: "14px 32px",
    borderRadius: "var(--card-radius)",
    transition: "opacity 0.2s ease",
    whiteSpace: "nowrap",
  };

  const ctaSecondaryStyle = {
    textDecoration: "none",
    display: "inline-block",
    background: "transparent",
    border: "2px solid #D94F4F",
    color: "#D94F4F",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "var(--text-body)",
    padding: "12px 28px",
    borderRadius: "var(--card-radius)",
    transition: "background 0.2s ease, color 0.2s ease",
  };

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={casino.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={casino.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* Disclaimer Banner */}
      <div
        style={{
          background: "rgba(217, 79, 79, 0.15)",
          borderBottom: "2px solid var(--risk-high)",
          padding: "var(--space-md) var(--space-lg)",
          textAlign: "center",
          marginTop: "72px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            color: "var(--risk-high)",
            fontSize: "var(--text-body)",
          }}
        >
          &#9888;&#65039; This is a real-money crypto gambling platform. Not a sweepstakes casino.
        </p>
      </div>

      {/* Hero */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,17,32,0.82), rgba(11,17,32,0.92)), url(/images/hero/hero-marble-gold-vein.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="custom-container pt-[40px] pb-[60px] md:pt-[60px] md:pb-[80px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-tiny)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "#D94F4F",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {casino.tagline} — CRYPTO CASINO
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "var(--tracking-display)",
                  color: "var(--marble-white)",
                  lineHeight: "var(--leading-display)",
                  marginBottom: "var(--space-xs)",
                }}
              >
                {casino.name} Review
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  color: "var(--marble-warm)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Last Updated: {formatDate(casino.updatedAt)}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-data)",
                  fontSize: "var(--text-body-lg)",
                  color: "#D94F4F",
                  fontWeight: 600,
                }}
              >
                {casino.bonus}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: casino.rating >= 9.0 ? "var(--gold-light)" : "var(--gold-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-data)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--olympus-navy)",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
                  flexShrink: 0,
                }}
              >
                {casino.rating}
              </div>
              {/* CTA 1: Hero */}
              <div>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  style={ctaButtonStyle}
                  onClick={() => trackAffiliateClick(casino.slug, "detail-hero", affiliateUrl)}
                >
                  Get Started
                </a>
                <p style={legalLine}>21+. Real-money gambling. Gamble responsibly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="max-w-[800px] mx-auto">
          {/* Featured Creator Callout */}
          {casino.featuredCreator && (
            <div
              className="mb-12 p-5 rounded-lg"
              style={{
                background: "var(--olympus-navy-light)",
                border: "1px solid var(--gold-muted)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-tiny)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--gold-primary)",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-xs)",
                }}
              >
                FEATURED BY
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: "var(--marble-white)",
                  fontSize: "var(--text-body-lg)",
                }}
              >
                {casino.featuredCreator}
              </p>
            </div>
          )}

          {/* About */}
          <section className="mb-12">
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
              About {casino.name}
            </h2>
            <p
              style={{
                color: "var(--marble-warm)",
                lineHeight: "var(--leading-body)",
                fontFamily: "var(--font-body)",
              }}
            >
              {casino.excerpt} This is a real-money crypto gambling platform, not a sweepstakes casino.
              Deposits and withdrawals are processed using cryptocurrency. Players must be 21 or older
              and should only gamble with funds they can afford to lose.
            </p>
          </section>

          {/* Bonus box */}
          <section
            className="mb-12 p-6 rounded-lg"
            style={{
              background: "var(--olympus-navy-light)",
              border: "2px solid #D94F4F",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-tiny)",
                letterSpacing: "var(--tracking-caps)",
                color: "#D94F4F",
                textTransform: "uppercase",
                marginBottom: "var(--space-xs)",
              }}
            >
              CRYPTO CASINO
            </p>
            <p
              style={{
                fontFamily: "var(--font-data)",
                fontSize: "var(--text-subsection)",
                fontWeight: 700,
                color: "var(--marble-white)",
                marginBottom: "var(--space-md)",
              }}
            >
              {casino.bonus}
            </p>
            <p
              style={{
                color: "var(--marble-cool)",
                fontSize: "var(--text-small)",
                marginBottom: "var(--space-md)",
              }}
            >
              {casino.legalNote}
            </p>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              style={ctaSecondaryStyle}
              onClick={() => trackAffiliateClick(casino.slug, "detail-bonus", affiliateUrl)}
            >
              Visit {casino.name}
            </a>
            <p style={legalLine}>21+. Real-money gambling. Gamble responsibly.</p>
          </section>

          {/* Pros & Cons */}
          <section className="mb-12">
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
              Pros & Cons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-5 rounded-lg"
                style={{
                  background: "var(--olympus-navy-light)",
                  borderLeft: "3px solid var(--risk-low)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--risk-low)",
                    marginBottom: "var(--space-sm)",
                    fontSize: "var(--text-small)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-caps)",
                  }}
                >
                  Pros
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {casino.pros.map((pro, i) => (
                    <li
                      key={i}
                      style={{
                        color: "var(--marble-warm)",
                        lineHeight: "var(--leading-body)",
                        paddingBottom: "var(--space-xs)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <span style={{ color: "var(--risk-low)", marginRight: "8px" }}>&#10003;</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-5 rounded-lg"
                style={{
                  background: "var(--olympus-navy-light)",
                  borderLeft: "3px solid var(--risk-high)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--risk-high)",
                    marginBottom: "var(--space-sm)",
                    fontSize: "var(--text-small)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-caps)",
                  }}
                >
                  Cons
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {casino.cons.map((con, i) => (
                    <li
                      key={i}
                      style={{
                        color: "var(--marble-warm)",
                        lineHeight: "var(--leading-body)",
                        paddingBottom: "var(--space-xs)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <span style={{ color: "var(--risk-high)", marginRight: "8px" }}>&#10007;</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA 3 */}
          <section className="mb-12 text-center">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              style={ctaSecondaryStyle}
              onClick={() => trackAffiliateClick(casino.slug, "detail-proscons", affiliateUrl)}
            >
              Visit {casino.name}
            </a>
            <p style={legalLine}>21+. Real-money gambling. Gamble responsibly.</p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
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
              Frequently Asked Questions
            </h2>
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="mb-4 p-5 rounded-lg"
                style={{ background: "var(--olympus-navy-light)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--marble-white)",
                    marginBottom: "var(--space-xs)",
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    color: "var(--marble-warm)",
                    lineHeight: "var(--leading-body)",
                    fontSize: "var(--text-small)",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </section>

          {/* CTA 4: Bottom */}
          <section className="mb-12 text-center">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              style={ctaButtonStyle}
              onClick={() => trackAffiliateClick(casino.slug, "detail-bottom", affiliateUrl)}
            >
              Get Started at {casino.name}
            </a>
            <p style={legalLine}>21+. Real-money gambling. Gamble responsibly.</p>
          </section>

          {/* Affiliate disclosure */}
          <p
            style={{
              color: "var(--marble-deep)",
              fontSize: "var(--text-tiny)",
              lineHeight: "var(--leading-body)",
              borderTop: "1px solid var(--olympus-navy-mid)",
              paddingTop: "var(--space-md)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Affiliate Disclosure: Goonzerflow may receive compensation when you
            sign up through links on this page. This does not influence our
            reviews. This is a real-money crypto gambling platform. 21+. Gamble
            responsibly.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const casino = cryptoCasinos.find((c) => c.slug === slug);

  if (!casino) {
    return { notFound: true };
  }

  const affiliateUrl = getAffiliateLink(casino.affiliateKey, "detail-hero");

  return {
    props: {
      casino,
      affiliateUrl,
    },
  };
}

export function getStaticPaths() {
  const paths = cryptoCasinos.map((c) => ({ params: { slug: c.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default CryptoReviewPage;
