import Image from 'next/image';
import section3 from '../../assets/section3.png';
import { IoIosArrowForward } from 'react-icons/io';

const Services = () => {
  return (
    <div className='mb-32 md:flex gap-4 items-center'>
      <div className='mb-10'>
        <Image src={section3} alt='section3 Image' />
      </div>
      <div>
        <p className='text-3xl font-bold text-left'>
          If You Want To Get Fit In Life
          <br />
          You Gotta Fit & Fine
        </p>
        <p className='text-gray-500 mt-4 text-sm'>
          Whether you’re at the beginning of your fitness journey or desprerate
          need of some motivation to keep going. At JBC fitness gym we value our
          customers.
        </p>
        <div className='mt-4'>
          <div className='flex items-center gap-3 mb-2'>
            <IoIosArrowForward className='text-clr text-3xl' />
            <p className='font-semibold'>Professional Trainer</p>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <IoIosArrowForward className='text-clr text-3xl' />
            <p className='font-semibold'>Best Gym Assets</p>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <IoIosArrowForward className='text-clr text-3xl' />
            <p className='font-semibold'>Easy To Apply</p>
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <IoIosArrowForward className='text-clr text-3xl' />
            <p className='font-semibold'>Best Advices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
