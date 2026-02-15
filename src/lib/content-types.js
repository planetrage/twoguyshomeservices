/**
 * Content Type Registry
 *
 * Documentary reference for structured content types.
 * Used by external mutation engines and tooling ONLY.
 *
 * THIS FILE IS NOT IMPORTED BY ANY ROUTE, RENDERER, OR COMPONENT.
 * If deleted, the site must still build and run identically.
 */

const CONTENT_TYPES = {
  blog: {
    dataDir: "blog",
    route: "/blog",
    schema: {
      required: {
        title: "string",
        date: "string",
      },
      recommended: {
        metaDescription: "string",
        h1: "string",
      },
      optional: {
        image: "string",
        isFeatured: "boolean",
        category: "string[]",
        tags: "string[]",
        author: "string",
        schemaType: "string", // default: "BlogPosting"
        contentVersion: "number",
        lastUpdated: "string",
        contentSource: "string", // "manual" | "generated" | "api"
      },
      legacy: {
        postExcerpt: "string",
        postTags: "string[]",
        blockquoteText: "string",
        icon: "string",
        postTitle: "string",
        postDesc: "string",
        postAdditionalDesc: "string",
        singlePostTitle: "string",
        singlePostDesc: "string",
      },
    },
    seoFallbacks: {
      metaDescription: ["metaDescription", "postExcerpt", "excerpt"],
      h1: ["h1", "title"],
    },
    renderer: "PostContent",
  },

  review: {
    dataDir: "reviews",
    route: "/reviews",
    schema: {
      required: {
        title: "string",
        date: "string",
        reviewType: "string",
      },
      recommended: {
        metaDescription: "string",
        h1: "string",
        rating: "number", // 0-5
      },
      optional: {
        image: "string",
        isFeatured: "boolean",
        category: "string[]",
        tags: "string[]",
        offers: "object[]",
        schemaType: "string", // default: "Review"
        contentSections: "string[]",
        contentVersion: "number",
        lastUpdated: "string",
        contentSource: "string",
        disclaimer: "string",
        faq: "object[]",
      },
    },
    seoFallbacks: {
      metaDescription: ["metaDescription", "excerpt"],
      h1: ["h1", "title"],
    },
    renderer: "ReviewContent",
    /**
     * Offer entity schema (generic):
     *
     * name: string             - Entity name
     * headline: string         - Short value proposition
     * details: string          - Terms, conditions, specifics
     * rating: number           - 0-5 (optional)
     * link: string             - CTA / external link
     * linkId: string           - Tracking identifier
     * availability: string[]   - Regions, conditions, constraints
     * metadata: object         - Key-value pairs (primitives only rendered in UI)
     */
  },
};

/**
 * FUTURE: Content Blocks Pattern
 *
 * Content types can define a contentBlocks array in frontmatter:
 *
 * contentBlocks:
 *   - type: hero
 *     heading: "..."
 *     subheading: "..."
 *   - type: faq
 *     items:
 *       - q: "..."
 *         a: "..."
 *   - type: comparison-table
 *     dataSource: "offers"
 *
 * A block renderer would map type -> component deterministically.
 * This enables portal/Docs edits to be modular — each block is
 * independently editable without touching the full page.
 *
 * Not implemented in Phase 4A. Documented here for future reference.
 */

export function getContentType(type) {
  return CONTENT_TYPES[type] || null;
}

export function getContentTypeKeys() {
  return Object.keys(CONTENT_TYPES);
}

export function getDataDir(type) {
  const ct = CONTENT_TYPES[type];
  return ct ? ct.dataDir : type;
}
