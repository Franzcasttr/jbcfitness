import type { NextPage } from 'next';
import Head from 'next/head';
import Clips from '../components/Clips/Clips';
import CTA from '../components/CTA/CTA';
import Navbar from '../components/Navbar/Navbar';
import Programs from '../components/Programs/Programs';
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
      </main>
    </>
  );
};

export default Home;
