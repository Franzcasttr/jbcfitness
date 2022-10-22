import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { SetStateAction, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
const Navbar = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        // delay: 0.5,
      },
    },
  };

  return (
    <div className='my-10'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-row gap-2 font-semibold text-xl'>
          <span className='text-clr'>JBC</span>
          <p className='text-white'>Fitness</p>
        </div>
        <div className='menu flex gap-8 items-center font-semibold'>
          <Link href='/'>
            <a className='cursor-pointer'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='cursor-pointer'>About Us</a>
          </Link>

          <button
            className='p-2 background-clr rounded-lg cursor-pointer'
            onClick={() => setOpenModal(true)}>
            Contact
          </button>
        </div>
        {isOpen ? (
          <IoMdClose
            className='text-[#FF008A] text-[32px] cursor-pointer'
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            className='md:hidden text-clr text-[32px] cursor-pointer'
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='md:hidden flex flex-col gap-8 items-center font-semibold'
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '20vh', opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit='exit'>
            <Link href='/'>
              <a className='cursor-pointer'>Home</a>
            </Link>
            <Link href='/about'>
              <a className='cursor-pointer'>About Us</a>
            </Link>

            <button
              className='p-2 background-clr rounded-lg cursor-pointer'
              onClick={() => setOpenModal(true)}>
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
