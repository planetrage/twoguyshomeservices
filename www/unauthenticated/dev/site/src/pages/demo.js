import Head from 'next/head';
import { Fragment } from 'react';
import HeaderThree from '../components/header/header-3';
import DemoForm from '../components/demo/demo-form';
import DemoBanner from '../components/banners/demo-banner';
import DemoBannerOne from '../components/banners/demo-banner-one';
import { getAllItems } from '../lib/items-util';

function DemoPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Schedule a demo</title>
                <meta name='description' content='Send us your messages!' />
            </Head>
            <HeaderThree />
            <DemoBanner />
            <DemoBannerOne />
            <DemoForm />
        </Fragment>
    );
}

export function getStaticProps() {
    const testimonialItems = getAllItems('testimonial');
    
    return {
        props: {
            testimonialItems,
        },
    };
}
export default DemoPage;
