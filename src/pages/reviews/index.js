import { Fragment } from "react";
import Link from "next/link";
import ReviewsBanner from "../../components/banners/reviews-banner";
import SeoHead from "../../components/seo/seo-head";
import { getAllItems } from "../../lib/items-util";

function ReviewsListingPage({ reviews }) {
  return (
    <Fragment>
      <SeoHead
        item={{
          h1: "Casino Reviews",
          metaDescription: "Browse all casino reviews — trust scores, withdrawal speeds, and bonus terms.",
        }}
      />
      <ReviewsBanner />
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => {
            const description =
              review.postExcerpt ||
              review.excerpt ||
              review.metaDescription ||
              "";
            const imageUrl = review.image || '/images/goonzerflow/casino-chips-stack.png';
            return (
              <div
                key={review.slug}
                className="olympus-card overflow-hidden"
                style={{ padding: 0 }}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={review.h1 || review.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  {review.date && (
                    <p className="text-sm mb-2" style={{ color: 'var(--marble-deep)', fontFamily: 'var(--font-data)' }}>{review.date}</p>
                  )}
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-subsection)', fontWeight: 600, letterSpacing: 'var(--tracking-display)', color: 'var(--marble-white)', marginBottom: 'var(--space-sm)' }}>
                    <Link href={`/reviews/${review.slug}`}>
                      {review.h1 || review.title}
                    </Link>
                  </h2>
                  {typeof review.rating === "number" && (
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-data)' }}>
                      Rating: {review.rating}/5
                    </p>
                  )}
                  {description && (
                    <p style={{ color: 'var(--marble-warm)', lineHeight: 'var(--leading-body)' }} className="line-clamp-3">
                      {description}
                    </p>
                  )}
                  <Link
                    href={`/reviews/${review.slug}`}
                    className="inline-block mt-4 font-semibold"
                    style={{ color: 'var(--gold-primary)' }}
                  >
                    Read Review &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export function getStaticProps() {
  const allItems = getAllItems("reviews");

  return {
    props: {
      reviews: allItems,
    },
  };
}

export default ReviewsListingPage;
