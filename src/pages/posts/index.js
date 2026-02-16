import Head from "next/head";
import { Fragment } from "react";
import { getAllItems } from "../../lib/items-util";
import { getPostCategories } from "../../lib/getPostCategories";
import { getPostTags } from "../../lib/getPostTags";
import NewsBanner from "../../components/banners/posts-banner";
import NewsBannerOne from "../../components/banners/posts-banner-one";

function allItemsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Slot Reviews & Casino Guides — Goonzerflow</title>
        <meta name="description" content="RTP-verified slot reviews, casino rankings, and data-driven gambling guides from Goonzerflow." />
      </Head>
      <NewsBanner />
      <NewsBannerOne />
    </Fragment>
  );
}

export function getStaticProps() {
  const allItems = getAllItems("posts");
  const categories = getPostCategories();
  const tags = getPostTags();

  return {
    props: {
      posts: allItems,
      categories,
      tags,
    },
  };
}

export default allItemsPage;
