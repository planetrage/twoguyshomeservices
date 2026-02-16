import Head from 'next/head';
import { Fragment } from 'react';
import Banner from '../components/banners/title-banner-login';
import BannerOne from '../components/banners/login-banner';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function Login(props) {
    return (
        <Fragment>
            <Head>
                <title>Login — Goonzerflow</title>
            </Head>
            <Banner />
            <BannerOne bannerItems={props.bannerItems} />
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

export default Login;
