import { Fragment } from 'react';
import Head from 'next/head';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import FeaturedPosts from '../components/home-page/featured-posts';
import LightningDivider from '../components/ui/LightningDivider';
import GoldCTA from '../components/ui/GoldCTA';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Goonzerflow — Structured Intelligence for Gaming</title>
                <meta
                    name='description'
                    content='RTP-verified slot reviews, data-driven casino guides, and analytical tools. Find the slots worth playing.'
                />
            </Head>
            <Hero />
            <Services />
            <FeaturedPosts posts={props.posts} />

            {/* CTA Section */}
            <section style={{ background: 'var(--olympus-navy-light)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
                <LightningDivider className="mb-16" />
                <div className="custom-container text-center">
                    <h2
                        className="gold-text mb-4"
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'var(--text-section)',
                            fontWeight: 700,
                            letterSpacing: 'var(--tracking-display)',
                        }}
                    >
                        Ready to Find Your Edge?
                    </h2>
                    <p style={{ color: 'var(--marble-warm)', fontSize: 'var(--text-body-lg)', marginBottom: 'var(--space-xl)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Browse RTP-verified reviews and data-driven analysis from the team that does the math.
                    </p>
                    <GoldCTA href="/posts" variant="cta">
                        Explore All Slots
                    </GoldCTA>
                </div>
            </section>

            {/* Discord CTA Section */}
            <section style={{ background: 'var(--olympus-navy-mid)', paddingTop: 0, paddingBottom: 'var(--space-2xl)' }}>
                <LightningDivider />
                <div className="custom-container text-center" style={{ paddingTop: 'var(--space-2xl)' }}>
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
                        Community
                    </p>
                    <h2
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'var(--text-section)',
                            fontWeight: 700,
                            letterSpacing: 'var(--tracking-display)',
                            color: 'var(--marble-white)',
                            marginBottom: 'var(--space-md)',
                        }}
                    >
                        Live Gambling Radar
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-body-lg)',
                            color: 'var(--marble-warm)',
                            marginBottom: 'var(--space-xl)',
                            maxWidth: '550px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        Real-time stream alerts. Creator highlights. Join the community.
                    </p>
                    <GoldCTA href="#" variant="secondary">
                        Join Discord &rarr;
                    </GoldCTA>
                </div>
            </section>
        </Fragment>
    );
}

export function getStaticProps() {
    const posts = getAllItems('posts');
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            posts: FeaturedPost,
        },
    };
}

export default HomePage;
