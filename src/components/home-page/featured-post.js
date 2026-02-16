import PostSlider from '../posts/post-slider';

function FeaturedPost(props) {
  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="custom-container">
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
            }}
          >
            Latest from Goonzerflow
          </h2>
        </div>
        <PostSlider posts={props.posts} />
      </div>
    </div>
  );
}

export default FeaturedPost;
