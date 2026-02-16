import { Fragment } from "react";
import Link from "next/link";
import BlogBanner from "../../components/banners/blog-banner";
import SeoHead from "../../components/seo/seo-head";
import { getAllItems } from "../../lib/items-util";

function BlogListingPage({ posts }) {
  return (
    <Fragment>
      <SeoHead
        item={{
          h1: "Strategy Guides",
          metaDescription: "In-depth analysis, RTP breakdowns, and bankroll strategies.",
        }}
      />
      <BlogBanner />
      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-section)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              marginBottom: 'var(--space-md)',
            }}
          >
            Strategy Guides
          </h2>
          <p style={{ color: 'var(--marble-warm)', fontSize: 'var(--text-body-lg)' }}>
            In-depth analysis, RTP breakdowns, and bankroll strategies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const description =
              post.postExcerpt || post.excerpt || post.metaDescription || "";
            const imageUrl = post.image || '/images/goonzerflow/guide-calculator-gold.png';
            return (
              <div
                key={post.slug}
                className="olympus-card overflow-hidden"
                style={{ padding: 0 }}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={post.h1 || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  {post.date && (
                    <p className="text-sm mb-2" style={{ color: 'var(--marble-deep)', fontFamily: 'var(--font-data)' }}>{post.date}</p>
                  )}
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-subsection)', fontWeight: 600, letterSpacing: 'var(--tracking-display)', color: 'var(--marble-white)', marginBottom: 'var(--space-sm)' }}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.h1 || post.title}
                    </Link>
                  </h2>
                  {description && (
                    <p style={{ color: 'var(--marble-warm)', lineHeight: 'var(--leading-body)' }} className="line-clamp-3">
                      {description}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 font-semibold"
                    style={{ color: 'var(--gold-primary)' }}
                  >
                    Read Guide &rarr;
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
