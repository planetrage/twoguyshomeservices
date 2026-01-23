import Head from 'next/head';
import { Fragment } from 'react';
import HeaderThree from '../components/header/header-3';
import GoogleMap from '../components/contact/google-map';
import ContactForm from '../components/contact/contact-form';
import Banner from '../components/banners/title-banner-contact';
import ContactUsBanner from '../components/banners/contact-us-banner';
import ContactUsBannerOne from '../components/banners/contact-us-banner-one';
import Testimonial from '../components/home-page/testimonial';
import { getAllItems } from '../lib/items-util';

function ContactPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta name='description' content='Send us your messages!' />
            </Head>
            <HeaderThree />
            <ContactUsBanner />
            <ContactUsBannerOne />
            <Banner />
            <ContactForm />
            <GoogleMap />
            <Testimonial testimonialItems={props.testimonialItems} />
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
export default ContactPage;
