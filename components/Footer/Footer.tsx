import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-[#7593ff]'>
      <div className='section-center pt-8'>
        <div className='md:flex md:justify-between'>
          <div>
            <div className='flex flex-row gap-2 font-semibold text-xl mb-4'>
              <span className='text-clr'>JBC</span>
              <p>Fitness</p>
            </div>
            <p>Brgy. Alabug, Tuao Cagayan, Philippines</p>
            <div className='my-4'>
              <p>Tel:</p>
              <p>0917-622-3204</p>
            </div>
            <div className='my-4'>
              <p>Email:</p>
              <p>jbcfitness@gmail.com</p>
            </div>
          </div>
          <div>
            <p className='text-2xl mb-2 mt-6'>About Us</p>
            <div className='cursor-pointer my-3'>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </div>
            <p className='my-3'>Services</p>
            <p className='my-3'>Terms and condition</p>
          </div>
          <div>
            <p className='text-2xl mb-2 mt-6'>Follow Us</p>
            <div className='cursor-pointer my-3'>
              <Link href='https://web.facebook.com'>
                <a>Facebook</a>
              </Link>
            </div>
            <div className='cursor-pointer my-3'>
              <Link href='https://www.instagram.com'>
                <a>Instagram</a>
              </Link>
            </div>
            <div className='cursor-pointer my-3'>
              <Link href='https://twitter.com'>
                <a>Twitter</a>
              </Link>
            </div>
          </div>
        </div>
        <footer className='text-sm mt-8 pb-2 text-center'>
          © JBC Fitness. All rights reserved 2022.
        </footer>
      </div>
    </div>
  );
};

export default Footer;
