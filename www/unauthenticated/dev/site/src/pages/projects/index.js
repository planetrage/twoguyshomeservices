import Head from 'next/head';
import HeaderThree from '../../components/header/header-3';
import Hero from '../../components/home-page/hero';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blue Trust Water Management</title>
        <meta
          name="description"
          content="Florida’s Premier Environmental Haus"
        />
      </Head>

      {/* Header / Navigation */}
      <HeaderThree />

      {/* Hero Section */}
      <Hero />

      {/* 
        All SmartTIX-related sections have been intentionally removed.
        We will reintroduce Blue Trust–specific sections next.
      */}
    </>
  );
}
