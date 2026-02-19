import affiliateLinks from "../data/affiliateLinks";

/**
 * Returns the affiliate URL for a given casino slug.
 * Falls back to "#" and warns if the slug is missing.
 */
export default function getAffiliateLink(slug) {
  const entry = affiliateLinks[slug];
  if (!entry) {
    console.warn(`[getAffiliateLink] Missing affiliate link for slug: "${slug}"`);
    return "#";
  }
  return entry.url;
}
