import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import casinos from "../../data/casinos";
import getAffiliateLink from "../../lib/getAffiliateLink";
import sortCasinos from "../../lib/sortCasinos";
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

function CasinoReviewPage({ casino, affiliateUrl, similarCasinos }) {
  const faqItems = [
    {
      q: `Is ${casino.name} legit?`,
      a: `Yes. ${casino.name} operates as a legal sweepstakes casino. It uses a dual-currency model where Gold Coins are for entertainment and Sweeps Coins (or equivalent) can be redeemed for prizes. No purchase is necessary to play.`,
    },
    {
      q: "Do I need to purchase anything?",
      a: "No. Sweepstakes casinos are free to play. You can earn coins through sign-up bonuses, daily logins, mail-in offers, and social media promotions. Optional coin purchases are available but never required.",
    },
    {
      q: "What states is it available in?",
      a: "Sweepstakes casinos are available in most U.S. states. However, some states like Washington and Idaho have restrictions. Check the platform's terms of service for the most current availability list.",
    },
    {
      q: "How do I redeem prizes?",
      a: "Once you accumulate the minimum required Sweeps Coins (or equivalent premium currency), you can request a redemption. Processing times vary by platform, and you may need to complete identity verification before your first redemption.",
    },
    {
      q: "Is there a mobile app?",
      a: `Many sweepstakes casinos, including ${casino.name}, are accessible through mobile web browsers. Some platforms also offer dedicated apps. Check the platform directly for the latest mobile options.`,
    },
  ];

  const pageTitle = `${casino.name} Review 2026 — Bonus, Rating & How to Play | Goonzerflow`;
  const metaDesc = `${casino.excerpt} Rated ${casino.rating}/10. ${casino.bonus}. No purchase necessary.`;
  const canonicalUrl = `https://goonzerflow.com/reviews/${casino.slug}`;

  // FAQ structured data
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

  // BreadcrumbList structured data
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
        name: "Casino Reviews",
        item: "https://goonzerflow.com/reviews",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: casino.name,
        item: canonicalUrl,
      },
    ],
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

      {/* Hero */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,17,32,0.75), rgba(11,17,32,0.85)), url(/images/hero/hero-marble-gold-vein.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="custom-container pt-[80px] pb-[60px] md:pt-[120px] md:pb-[80px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-tiny)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--gold-primary)",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {casino.tagline}
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
                {casino.name}
              </h1>
              {/* Last Updated timestamp */}
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
                  color: "var(--gold-primary)",
                  fontWeight: 600,
                }}
              >
                {casino.bonus}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Rating badge */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
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
                  fontSize: "1.5rem",
                  color: "var(--olympus-navy)",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
                  flexShrink: 0,
                }}
              >
                {casino.rating}
              </div>
              {/* CTA 1: Hero "Get Bonus" */}
              <div>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="btn-gold-cta"
                  style={{ textDecoration: "none", whiteSpace: "nowrap", display: "inline-block" }}
                  onClick={() => trackAffiliateClick(casino.slug, "detail-hero", affiliateUrl)}
                >
                  Get Bonus
                </a>
                <p style={legalLine}>No purchase necessary. 18+. T&amp;Cs apply.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="max-w-[800px] mx-auto">
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
              {casino.excerpt} With a welcome offer of {casino.bonus},{" "}
              {casino.name} provides players with a substantial starting
              balance. As a sweepstakes casino, no purchase is necessary to
              play. Gold Coins are used for casual gameplay, while Sweeps Coins
              (or equivalent premium currency) can be redeemed for prizes where
              eligible.
            </p>
          </section>

          {/* Bonus box */}
          <section
            className="mb-12 p-6 rounded-lg"
            style={{
              background: "var(--olympus-navy-light)",
              border: "2px solid var(--gold-primary)",
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
              WELCOME OFFER
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
            {/* CTA 2: After bonus — secondary style */}
            <a
              href={affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="btn-gold-secondary inline-block text-center"
              style={{ textDecoration: "none" }}
              onClick={() => trackAffiliateClick(casino.slug, "detail-bonus", affiliateUrl)}
            >
              Claim This Offer
            </a>
            <p style={legalLine}>No purchase necessary. 18+. T&amp;Cs apply.</p>
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
                      <span style={{ color: "var(--risk-low)", marginRight: "8px" }}>
                        &#10003;
                      </span>
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
                      <span style={{ color: "var(--risk-high)", marginRight: "8px" }}>
                        &#10007;
                      </span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA 3: After Pros/Cons — secondary style */}
          <section className="mb-12 text-center">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="btn-gold-secondary inline-block"
              style={{ textDecoration: "none" }}
              onClick={() => trackAffiliateClick(casino.slug, "detail-proscons", affiliateUrl)}
            >
              Visit {casino.name}
            </a>
            <p style={legalLine}>No purchase necessary. 18+. T&amp;Cs apply.</p>
          </section>

          {/* Is It Legal? */}
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
              Is It Legal?
            </h2>
            <p
              style={{
                color: "var(--marble-warm)",
                lineHeight: "var(--leading-body)",
                fontFamily: "var(--font-body)",
                marginBottom: "var(--space-md)",
              }}
            >
              {casino.name} operates as a sweepstakes casino, which is a legal
              model in most U.S. states. Sweepstakes casinos are not classified
              as online gambling because no purchase is required to play or win.
              Players can obtain free coins through daily bonuses, mail-in
              entries, and social media promotions.
            </p>
            <p
              style={{
                color: "var(--marble-warm)",
                lineHeight: "var(--leading-body)",
                fontFamily: "var(--font-body)",
              }}
            >
              Availability may vary by state. Some states, including Washington
              and Idaho, have restrictions on sweepstakes casino participation.
              Always check your local regulations before signing up. Players
              must be 18 or older (21 in some jurisdictions).
            </p>
          </section>

          {/* How It Works */}
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
              How It Works
            </h2>
            <p
              style={{
                color: "var(--marble-warm)",
                lineHeight: "var(--leading-body)",
                fontFamily: "var(--font-body)",
                marginBottom: "var(--space-md)",
              }}
            >
              Sweepstakes casinos like {casino.name} use a dual-currency
              system. Gold Coins are used for casual, free-to-play entertainment
              with no monetary value. Sweeps Coins (or the platform's equivalent
              premium currency) can be earned for free and are redeemable for
              real prizes once you meet the minimum redemption threshold.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step: "1",
                  title: "Sign Up Free",
                  desc: "Create an account and claim your welcome bonus. No payment required.",
                },
                {
                  step: "2",
                  title: "Play Games",
                  desc: "Use Gold Coins for fun or earn Sweeps Coins through gameplay and promotions.",
                },
                {
                  step: "3",
                  title: "Redeem Prizes",
                  desc: "Once you reach the minimum, redeem Sweeps Coins for real prizes.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-lg text-center"
                  style={{ background: "var(--olympus-navy-light)" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--gold-primary)",
                      color: "var(--olympus-navy)",
                      fontFamily: "var(--font-data)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--space-sm)",
                    }}
                  >
                    {item.step}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      color: "var(--marble-white)",
                      marginBottom: "var(--space-xs)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: "var(--marble-cool)",
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--leading-body)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
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

          {/* Related Guides — internal link loop */}
          <section className="mb-12">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-subsection)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-display)",
                color: "var(--marble-white)",
                marginBottom: "var(--space-md)",
              }}
            >
              Related Guides
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <Link
                  href="/best-sweepstakes-casino-bonuses"
                  style={{
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                  }}
                >
                  Best Sweepstakes Casino Bonuses 2026 &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  style={{
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                  }}
                >
                  Compare All 22 Casinos &rarr;
                </Link>
              </li>
            </ul>
          </section>

          {/* CTA 4: Bottom — primary style */}
          <section className="mb-12 text-center">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="btn-gold-cta inline-block"
              style={{ textDecoration: "none" }}
              onClick={() => trackAffiliateClick(casino.slug, "detail-bottom", affiliateUrl)}
            >
              Get Bonus at {casino.name}
            </a>
            <p style={legalLine}>No purchase necessary. 18+. T&amp;Cs apply.</p>
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
            ratings or reviews. All sweepstakes casinos listed are free to play
            with no purchase necessary. 18+. Terms and conditions apply. Void
            where prohibited.
          </p>
        </div>

        {/* Similar Casinos */}
        {similarCasinos.length > 0 && (
          <section>
            <h2
              className="text-center mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-section)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-caps)",
                color: "var(--gold-primary)",
                textTransform: "uppercase",
              }}
            >
              Similar Casinos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {similarCasinos.map((sim) => (
                <div
                  key={sim.slug}
                  className="olympus-card overflow-hidden"
                  style={{ padding: 0 }}
                >
                  <div className="relative h-[160px] overflow-hidden">
                    <img
                      src={sim.image}
                      alt={sim.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background:
                          sim.rating >= 9.0
                            ? "var(--gold-light)"
                            : "var(--gold-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-data)",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "var(--olympus-navy)",
                      }}
                    >
                      {sim.rating}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-body)",
                        fontWeight: 600,
                        color: "var(--marble-white)",
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      <Link href={`/reviews/${sim.slug}`}>{sim.name}</Link>
                    </h3>
                    <p
                      style={{
                        color: "var(--gold-primary)",
                        fontFamily: "var(--font-data)",
                        fontSize: "var(--text-small)",
                        fontWeight: 600,
                        marginBottom: "var(--space-sm)",
                      }}
                    >
                      {sim.bonus}
                    </p>
                    <a
                      href={sim.affiliateUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="btn-gold-primary inline-block text-center text-sm"
                      style={{ textDecoration: "none", width: "100%" }}
                      onClick={() => trackAffiliateClick(sim.slug, "detail-similar", sim.affiliateUrl)}
                    >
                      Get Bonus
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const casino = casinos.find((c) => c.slug === slug);

  if (!casino) {
    return { notFound: true };
  }

  const affiliateUrl = getAffiliateLink(casino.affiliateKey, "detail-hero");

  // Similar casinos: exclude current, sort by revenueTier/priorityScore/rating, take top 3
  const similarCasinos = sortCasinos(casinos.filter((c) => c.slug !== slug))
    .slice(0, 3)
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      image: c.image,
      rating: c.rating,
      bonus: c.bonus,
      affiliateUrl: getAffiliateLink(c.affiliateKey, "detail-similar"),
    }));

  return {
    props: {
      casino,
      affiliateUrl,
      similarCasinos,
    },
  };
}

export function getStaticPaths() {
  const paths = casinos.map((c) => ({ params: { slug: c.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default CasinoReviewPage;
