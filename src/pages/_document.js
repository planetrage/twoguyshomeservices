import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en' className='scroll-smooth'>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body className='relative'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
