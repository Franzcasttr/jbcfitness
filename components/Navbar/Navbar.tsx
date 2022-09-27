import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
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
          <Link href='/about'>
            <a className='p-2 background-clr rounded-lg cursor-pointer'>
              Contact
            </a>
          </Link>
        </div>
        <GiHamburgerMenu className='md:hidden text-clr text-[32px] cursor-pointer' />
      </div>
    </div>
  );
};

export default Navbar;
