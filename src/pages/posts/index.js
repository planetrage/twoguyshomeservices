import Head from "next/head";
import { Fragment } from "react";
import HeaderThree from "../../components/header/header-3";
import { getAllItems } from "../../lib/items-util";
import { getPostCategories } from "../../lib/getPostCategories";
import { getPostTags } from "../../lib/getPostTags";
import NewsBanner from "../../components/banners/posts-banner";
import NewsBannerOne from "../../components/banners/posts-banner-one";
import ServicesOne from "../../components/home-page/services-one";

function allItemsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All News</title>
        <meta name="description" content="SmartTix" />
      </Head>
      <HeaderThree />
      <NewsBanner />
      <NewsBannerOne /> 
      <ServicesOne />
    </Fragment>
  );
}

export function getStaticProps() {
  const allItems = getAllItems("posts");
  const categories = getPostCategories();
  const tags = getPostTags();
  const testimonialItems = getAllItems('testimonial');
  
  return {
    props: {
      posts: allItems,
      categories,
      tags,
      testimonialItems,
    },
  };
}

export default allItemsPage;
