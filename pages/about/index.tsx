import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from '../../components/Modal/Modal';
import Navbar from '../../components/Navbar/Navbar';

const AboutUs = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className='section-center'>
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
      AboutUs
    </div>
  );
};

export default AboutUs;
