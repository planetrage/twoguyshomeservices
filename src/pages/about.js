import Head from 'next/head';
import { Fragment } from 'react';
import HeaderThree from '../components/header/header-3';
import Banner from '../components/banners/title-banner-about';
import BannerOne from '../components/banners/about-banner';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import FeaturedPost from '../components/home-page/featured-posts';
import ServicesOne from '../components/home-page/services-one-bgAzure';

function AboutPage(props) {
    return (
        <Fragment>
            <Head>
                <title>About</title>
            </Head>
            <HeaderThree />
            <Banner />
            <BannerOne bannerItems={props.bannerItems} />
            <FeaturedPost posts={props.posts} />
            <ServicesOne services={props.services} />
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

export default AboutPage;
