import Head from 'next/head';
import { Fragment } from 'react';
import Banner from '../components/banners/title-banner-about';
import BannerOne from '../components/banners/about-banner';
import { getAllItems } from '../lib/items-util';
import ServicesOne from '../components/home-page/services-one-bgAzure';

function AboutPage(props) {
    return (
        <Fragment>
            <Head>
                <title>About — Goonzerflow</title>
            </Head>
            <Banner />
            <BannerOne />
            <ServicesOne services={props.services} />
        </Fragment>
    );
}

export function getStaticProps() {
    const services = getAllItems('services');

    return {
        props: {
            services,
        },
    };
}

export default AboutPage;
