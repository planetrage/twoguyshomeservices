import { Fragment } from "react";
import Link from "next/link";
import HeaderOne from "../../components/header/header-1";
import ReviewsBanner from "../../components/banners/reviews-banner";
import SeoHead from "../../components/seo/seo-head";
import { getAllItems } from "../../lib/items-util";

function ReviewsListingPage({ reviews }) {
  return (
    <Fragment>
      <SeoHead
        item={{
          h1: "Reviews",
          metaDescription: "Browse all reviews.",
        }}
      />
      <HeaderOne />
      <ReviewsBanner />
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => {
            const description =
              review.postExcerpt ||
              review.excerpt ||
              review.metaDescription ||
              "";
            return (
              <div
                key={review.slug}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  {review.date && (
                    <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                  )}
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/reviews/${review.slug}`}>
                      {review.h1 || review.title}
                    </Link>
                  </h2>
                  {typeof review.rating === "number" && (
                    <p className="text-sm font-semibold text-primary mb-2">
                      Rating: {review.rating}/5
                    </p>
                  )}
                  {description && (
                    <p className="text-secondary leading-[27px] line-clamp-3">
                      {description}
                    </p>
                  )}
                  <Link
                    href={`/reviews/${review.slug}`}
                    className="inline-block mt-4 text-primary font-semibold"
                  >
                    Read Review
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
