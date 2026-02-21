import affiliateLinks from "../data/affiliateLinks";

/**
 * Returns the affiliate URL for a given casino slug.
 * Falls back to "#" and warns if the slug is missing.
 *
 * @param {string} slug — casino slug key
 * @param {string} [position] — click position for attribution tracking
 */
export default function getAffiliateLink(slug, position) {
  const entry = affiliateLinks[slug];
  if (!entry) {
    console.warn(`[getAffiliateLink] Missing affiliate link for slug: "${slug}"`);
    return "#";
  }

  const url = entry.url;

  // Don't append tracking params to placeholder links
  if (url === "#") return "#";

  // Append attribution query parameters
  const separator = url.includes("?") ? "&" : "?";
  const params = [`source=goonzerflow`, `slug=${encodeURIComponent(slug)}`];
  if (position) params.push(`position=${encodeURIComponent(position)}`);

  return `${url}${separator}${params.join("&")}`;
}
