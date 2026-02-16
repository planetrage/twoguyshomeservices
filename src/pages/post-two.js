import Head from 'next/head';
import { Fragment } from 'react';
import Banner from '../components/banners/title-banner-posts-one';
import BannerOne from '../components/banners/posts-banner-four';
import Services from '../components/home-page/services-one-bgAzure';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function PostOne(props) {
    return (
        <Fragment>
            <Head>
                <title>Casino Bonus Evaluation Guide — Goonzerflow</title>
            </Head>
            <Banner />
            <BannerOne />
            <Services services={props.services} />
        </Fragment>
    );
}

export function getStaticProps() {
    const services = getAllItems('services');
    const posts = getAllItems('posts')
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const teamItems = getAllItems('teams');
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            services,
            posts: FeaturedPost,
            testimonialItems,
            brandItems,
            teamItems,
        },
    };
}

export default PostOne;
