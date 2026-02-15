import { Fragment } from "react";
import Link from "next/link";
import HeaderOne from "../../components/header/header-1";
import BlogBanner from "../../components/banners/blog-banner";
import SeoHead from "../../components/seo/seo-head";
import { getAllItems } from "../../lib/items-util";

function BlogListingPage({ posts }) {
  return (
    <Fragment>
      <SeoHead
        item={{
          h1: "Blog",
          metaDescription: "Browse all blog posts.",
        }}
      />
      <HeaderOne />
      <BlogBanner />
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const description =
              post.postExcerpt || post.excerpt || post.metaDescription || "";
            return (
              <div
                key={post.slug}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="relative h-[200px] bg-gray-100">
                    <img
                      src={`/images/posts/${post.slug}/${post.image}`}
                      alt={post.h1 || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.date && (
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  )}
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.h1 || post.title}
                    </Link>
                  </h2>
                  {description && (
                    <p className="text-secondary leading-[27px] line-clamp-3">
                      {description}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-primary font-semibold"
                  >
                    Read More
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
  const allItems = getAllItems("blog");

  return {
    props: {
      posts: allItems,
    },
  };
}

export default BlogListingPage;
