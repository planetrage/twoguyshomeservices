import Head from "next/head";

function SchemaMarkup({ item, schemaType, offers, siteUrl }) {
  const resolvedType = schemaType || (item && item.schemaType) || null;

  if (!resolvedType) return null;
  if (!item || (!item.title && !item.h1)) return null;

  const schemas = [];

  if (resolvedType === "Article" || resolvedType === "BlogPosting") {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": resolvedType,
      headline: item.h1 || item.title,
    };
    if (item.date) articleSchema.datePublished = item.date;
    if (item.lastUpdated) articleSchema.dateModified = item.lastUpdated;
    if (item.author) {
      articleSchema.author = {
        "@type": "Person",
        name: item.author,
      };
    }
    if (siteUrl && item.slug) {
      articleSchema.url = `${siteUrl}/blog/${item.slug}`;
    }
    schemas.push(articleSchema);
  }

  if (resolvedType === "Review") {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      name: item.h1 || item.title,
    };
    if (item.date) reviewSchema.datePublished = item.date;
    if (typeof item.rating === "number") {
      reviewSchema.reviewRating = {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      };
    }
    if (offers && offers.length > 0 && offers[0].name) {
      reviewSchema.itemReviewed = {
        "@type": "Thing",
        name: offers[0].name,
      };
    }
    if (item.author) {
      reviewSchema.author = {
        "@type": "Person",
        name: item.author,
      };
    }
    schemas.push(reviewSchema);
  }

  if (offers && offers.length > 0) {
    const validOffers = offers.filter((o) => o && (o.name || o.headline));
    if (validOffers.length > 0) {
      const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: validOffers.map((offer, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: offer.name || offer.headline,
          ...(offer.link ? { url: offer.link } : {}),
        })),
      };
      schemas.push(itemListSchema);
    }
  }

  if (item.faq && Array.isArray(item.faq) && item.faq.length > 0) {
    const validFaqs = item.faq.filter((f) => f && f.q && f.a);
    if (validFaqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: validFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      };
      schemas.push(faqSchema);
    }
  }

  if (schemas.length === 0) return null;

  return (
    <Head>
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

export default SchemaMarkup;
