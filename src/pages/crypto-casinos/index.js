import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import cryptoCasinos from "../../data/cryptoCasinos";
import getAffiliateLink from "../../lib/getAffiliateLink";
import trackAffiliateClick from "../../lib/trackAffiliateClick";
import LightningDivider from "../../components/ui/LightningDivider";

function CryptoCasinosPage({ casinos }) {
  return (
    <Fragment>
      <Head>
        <title>Crypto Casino Reviews 2026 | Goonzerflow</title>
        <meta
          name="description"
          content="Independent reviews of real-money crypto gambling platforms. 21+. Gamble responsibly."
        />
        <link rel="canonical" href="https://goonzerflow.com/crypto-casinos" />
        <meta property="og:title" content="Crypto Casino Reviews 2026 | Goonzerflow" />
        <meta property="og:description" content="Independent reviews of real-money crypto gambling platforms. 21+. Gamble responsibly." />
        <meta property="og:image" content="/images/goonzerflow/casino-vip-lounge.png" />
        <meta property="og:url" content="https://goonzerflow.com/crypto-casinos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Casino Reviews 2026 | Goonzerflow" />
        <meta name="twitter:description" content="Independent reviews of real-money crypto gambling platforms. 21+. Gamble responsibly." />
        <meta name="twitter:image" content="/images/goonzerflow/casino-vip-lounge.png" />
      </Head>

      {/* Hero */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,17,32,0.82), rgba(11,17,32,0.92)), url(/images/hero/hero-marble-gold-vein.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="custom-container pt-[100px] pb-[60px] md:pt-[140px] md:pb-[80px] text-center">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-display)",
              color: "var(--marble-white)",
              lineHeight: "var(--leading-display)",
              marginBottom: "var(--space-md)",
            }}
          >
            Crypto Casino Reviews
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              color: "var(--marble-warm)",
              marginBottom: "var(--space-lg)",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Real-money crypto gambling platforms — reviewed independently.
          </p>

          {/* Disclaimer banner */}
          <div
            style={{
              background: "rgba(217, 79, 79, 0.15)",
              border: "1px solid var(--risk-high)",
              borderRadius: "var(--card-radius)",
              padding: "var(--space-md) var(--space-lg)",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "var(--space-md)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: "var(--risk-high)",
                fontSize: "var(--text-body)",
                marginBottom: "var(--space-xs)",
              }}
            >
              &#9888;&#65039; Real-money gambling. 21+. Gamble responsibly. Not sweepstakes.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-small)",
                color: "var(--marble-cool)",
              }}
            >
              These are real-money crypto gambling platforms, not sweepstakes casinos. Risk of financial loss.
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-small)",
              color: "var(--marble-deep)",
            }}
          >
            Not sweepstakes | Real-money crypto gambling | 21+ only
          </p>
        </div>
      </div>

      <LightningDivider />

      {/* Casino Cards */}
      <div className="custom-container pt-[60px] pb-[60px]">
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
                    background: casino.rating >= 9.0 ? "var(--gold-light)" : "var(--gold-primary)",
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
                {/* Tagline badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(217, 79, 79, 0.9)",
                    borderRadius: "4px",
                    padding: "4px 10px",
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-tiny)",
                    letterSpacing: "var(--tracking-caps)",
                    color: "var(--marble-white)",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {casino.tagline}
                </div>
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
                  <Link href={`/crypto-casinos/${casino.slug}`}>{casino.name}</Link>
                </h2>
                <p
                  style={{
                    color: "var(--risk-high)",
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
                  className="inline-block mt-4 text-center"
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #B33A3A 0%, #D94F4F 45%, #E87A5C 100%)",
                    color: "var(--marble-white)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "var(--text-body)",
                    padding: "12px 24px",
                    borderRadius: "var(--card-radius)",
                    transition: "opacity 0.2s ease",
                  }}
                  onClick={() => trackAffiliateClick(casino.slug, "crypto-list", casino.affiliateUrl)}
                >
                  Get Started
                </a>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-tiny)",
                    color: "var(--marble-deep)",
                    textAlign: "center",
                    lineHeight: 1.4,
                    marginTop: "var(--space-xs)",
                  }}
                >
                  21+. Real-money gambling. Gamble responsibly.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export function getStaticProps() {
  const casinos = cryptoCasinos.map((casino) => ({
    ...casino,
    affiliateUrl: getAffiliateLink(casino.affiliateKey, "crypto-list"),
  }));

  return {
    props: {
      casinos,
    },
  };
}

export default CryptoCasinosPage;
