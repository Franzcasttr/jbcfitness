import type { NextPage } from 'next';
import Head from 'next/head';
import Clips from '../components/Clips/Clips';
import Contact from '../components/Contact/Contact';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Pricing from '../components/Pricing/Pricing';
import Programs from '../components/Programs/Programs';
import Reviews from '../components/Reviews/Reviews';
import Services from '../components/Services/Services';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JBC Fitness</title>
        <meta name='description' content='Created by Francis Castro' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='section-center'>
        <Navbar />
        <CTA />
        <Programs />
        <Services />
        <Clips />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
