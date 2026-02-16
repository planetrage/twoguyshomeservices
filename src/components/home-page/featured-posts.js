import Link from 'next/link';
import Image from 'next/image';

function FeaturedPosts({ posts }) {
  const formattedPosts = posts?.map(post => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  })) || [];

  return (
    <section style={{ background: 'var(--olympus-navy)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="custom-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="gold-text mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
            }}
          >
            Latest Guides
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-section)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
            }}
          >
            Expert Analysis &amp; Reviews
          </h2>
        </div>

        {/* Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formattedPosts.slice(0, 4).map((post, index) => {
            const imageUrl = post.image && post.image.startsWith('/') ? post.image : `/images/slots/slot-seven-gold.png`;
            return (
              <Link
                key={index}
                href={`/posts/${post.slug}`}
                className="olympus-card group block"
                style={{ textDecoration: 'none', padding: 0, overflow: 'hidden' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ borderRadius: 'var(--card-radius) var(--card-radius) 0 0' }}>
                  <img
                    src={imageUrl}
                    alt={post.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    style={{ display: 'block', maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: 'var(--space-lg)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontFamily: 'var(--font-data)', fontSize: 'var(--text-tiny)', color: 'var(--marble-deep)' }}>
                      {post.formattedDate}
                    </span>
                    <span style={{ color: 'var(--gold-muted)' }}>|</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-tiny)', color: 'var(--gold-primary)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}>
                      Slot Review
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-subsection)',
                      fontWeight: 600,
                      letterSpacing: 'var(--tracking-display)',
                      color: 'var(--marble-white)',
                      marginBottom: 'var(--space-sm)',
                      lineHeight: 'var(--leading-display)',
                    }}
                  >
                    {post.title}
                  </h3>

                  <span style={{ color: 'var(--gold-primary)', fontSize: 'var(--text-small)', fontWeight: 500 }}>
                    Read Review &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
