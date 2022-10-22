import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Clips from '../components/Clips/Clips';
import Contact from '../components/Contact/Contact';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar/Navbar';
import Pricing from '../components/Pricing/Pricing';
import Programs from '../components/Programs/Programs';
import Reviews from '../components/Reviews/Reviews';
import Services from '../components/Services/Services';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>JBC Fitness</title>
        <meta name='description' content='Created by Francis Castro' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='section-center'>
        <div>
          <AnimatePresence>
            {openModal && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='modal-backdrop'
                  onClick={() => setOpenModal(false)}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='content scrollbar-hide'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <div className='flex justify-end cursor-pointer mb-3'>
                      <IoMdClose
                        className='text-[#FF008A] text-3xl'
                        onClick={() => setOpenModal(false)}
                      />
                    </div>
                    {/* <AddVenue setAddVenue={setAddVenue} /> */}
                    <Modal />
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <Navbar setOpenModal={setOpenModal} />
        <CTA setOpenModal={setOpenModal} />
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
