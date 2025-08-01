import Head from 'next/head';
import { Fragment } from 'react';
import HeaderThree from '../components/header/header-3';
import Banner from '../components/banners/title-banner-posts-two';
import BannerOne from '../components/banners/posts-banner-five';
import Services from '../components/home-page/services-one-bgAzure';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function PostThree(props) {
    return (
        <Fragment>
            <Head>
                <title>Top 5 Features</title>
            </Head>
            <HeaderThree />
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

export default PostThree;
