import { Fragment } from "react";
import HeaderOne from "../../components/header/header-1";
import ReviewContent from "../../components/content-types/review/review-content";
import SeoHead from "../../components/seo/seo-head";
import SchemaMarkup from "../../components/seo/schema-markup";
import { getItemData, getItemsFiles } from "../../lib/items-util";

function ReviewDetailPage({ review }) {
  return (
    <Fragment>
      <SeoHead item={review} />
      <SchemaMarkup
        item={review}
        schemaType="Review"
        offers={review.offers}
      />
      <HeaderOne />
      <ReviewContent review={review} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const review = getItemData(slug, "reviews");

  return {
    props: {
      review,
    },
  };
}

export function getStaticPaths() {
  const reviewFilenames = getItemsFiles("reviews");

  const slugs = reviewFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ReviewDetailPage;
