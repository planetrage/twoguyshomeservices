import { Fragment } from "react";
import HeaderOne from "../../components/header/header-1";
import PostContent from "../../components/posts/post-detail/post-content";
import SeoHead from "../../components/seo/seo-head";
import SchemaMarkup from "../../components/seo/schema-markup";
import { getItemData, getItemsFiles } from "../../lib/items-util";

function BlogDetailPage({ post }) {
  return (
    <Fragment>
      <SeoHead item={post} />
      <SchemaMarkup item={post} schemaType="BlogPosting" />
      <HeaderOne />
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getItemData(slug, "blog");

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const blogFilenames = getItemsFiles("blog");

  const slugs = blogFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default BlogDetailPage;
