/**
 * Track an affiliate CTA click via GA4 and navigate to the destination.
 *
 * @param {string} slug — casino slug
 * @param {string} position — button position identifier
 * @param {string} url — destination affiliate URL
 */
export default function trackAffiliateClick(slug, position, url) {
  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.info(`Affiliate click: slug=${slug} position=${position} url=${url}`);
  }

  // Fire GA4 event
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "affiliate_click", {
      casino_slug: slug,
      button_position: position,
      destination_url: url,
    });
  }

  // Fallback: use sendBeacon so the event doesn't drop on redirect
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const payload = JSON.stringify({
      event: "affiliate_click",
      casino_slug: slug,
      button_position: position,
      destination_url: url,
    });
    navigator.sendBeacon(
      `https://www.google-analytics.com/mp/collect?measurement_id=G-XXXXXXXXXX&api_secret=placeholder`,
      payload
    );
  }
}
