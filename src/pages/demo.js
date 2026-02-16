import Head from 'next/head';
import { Fragment } from 'react';
import DemoForm from '../components/demo/demo-form';
import DemoBanner from '../components/banners/demo-banner';
import DemoBannerOne from '../components/banners/demo-banner-one';
import { getAllItems } from '../lib/items-util';

function DemoPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Get Started — Goonzerflow</title>
                <meta name='description' content='See how Goonzerflow can help you find the best slots and casinos.' />
            </Head>
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
