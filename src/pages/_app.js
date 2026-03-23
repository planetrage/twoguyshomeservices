import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='shortcut icon' href='../favicon.png' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
