import { Fragment } from "react";
import Head from "next/head";

function AffiliateDisclosurePage() {
  return (
    <Fragment>
      <Head>
        <title>Affiliate Disclosure | Goonzerflow</title>
        <meta
          name="description"
          content="Goonzerflow affiliate disclosure — how we earn revenue and how it affects our content."
        />
        <link rel="canonical" href="https://goonzerflow.com/affiliate-disclosure" />
      </Head>

      <div className="custom-container pt-[120px] pb-[80px]">
        <div className="max-w-[800px] mx-auto">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-page-title)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-display)",
              color: "var(--marble-white)",
              marginBottom: "var(--space-xl)",
            }}
          >
            Affiliate Disclosure
          </h1>
          <p
            style={{
              color: "var(--marble-warm)",
              lineHeight: "var(--leading-body)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
            }}
          >
            Goonzerflow.com participates in affiliate programs with sweepstakes and social casinos.
            When you click a link and sign up, we may receive a commission at no additional cost to you.
            Our rankings are based on independent analysis. We are not responsible for third-party offers.
            All opinions are our own. No purchase necessary to participate in sweepstakes casino offers.
            18+ (21+ for crypto platforms). Please gamble responsibly.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default AffiliateDisclosurePage;
