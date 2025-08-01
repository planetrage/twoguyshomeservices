import { Fragment } from 'react';
import Head from 'next/head';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import HeaderTwo from '../components/header/header-2';
import HeaderThree from '../components/header/header-3';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import ServicesOne from '../components/home-page/services-one';
import ServicesTwo from '../components/home-page/services-two';
import About from '../components/home-page/about';
import PricingTab from '../components/home-page/pricing-tab';
import Testimonial from '../components/home-page/testimonial';
import Banner from '../components/home-page/banner';
import BannerOne from '../components/home-page/banner-one';
import BannerTwo from '../components/home-page/banner-two';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import FeaturedPosts from '../components/home-page/featured-posts';
import LatestProject from '../components/home-page/latest-project';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>SmartTIX Landing Page</title>
                <meta
                    name='description'
                    content='an advanced ticketing system without compare to any other ticketing system'
                />
            </Head>
            <HeaderThree />
            {/*<HeaderTwo />*/}
            <Hero heroItems={props.heroItems} />
            {/*<LatestProject projects={props.projects} />
            <About />
            <PricingTab pricingItems={props.pricingItems} />*/}
            <Banner bannerItems={props.bannerItems} />
            <BannerOne bannerItems={props.bannerItems} />
            <Services services={props.services} />
            <ServicesOne services={props.services} />
            <ServicesTwo features={props.features} />
            {/*<BannerTwo bannerItems={props.bannerItems} />
            <Brand brandItems={props.brandItems} />*/}
            <FeaturedPosts posts={props.posts} />
            <Testimonial testimonialItems={props.testimonialItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const features = getAllItems('features');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const bannerItems = getAllItems('testimonial')
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            features,
            pricingItems,
            testimonialItems,
            brandItems,
        },
    };
}

export default HomePage;
