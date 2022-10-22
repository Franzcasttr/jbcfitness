import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook2 } from 'react-icons/im';

const Contact = () => {
  return (
    <div className='my-32'>
      <p className='text-center font-semibold text-3xl'>Have a question?</p>
      <p className='text-gray-500 mt-4 text-sm text-center'>
        You can contact us through our facebook account
      </p>
      <div className='mt-8'>
        <Link href='https://www.facebook.com/'>
          <a>
            <div className='flex flex-col items-center gap-2'>
              <ImFacebook2 className='text-blue-400 text-4xl' />
              <p>Facebook</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
{
  /* <p className='text-center font-semibold text-3xl'>Have a question?</p>
      <p className='text-gray-500 mt-4 text-sm text-center'>
        Whether you’re at the beginning of your fitness journey or desprerate
        need of some motivation to keep going. At JBC fitness gym we value our
        customers.
      </p>
      <div className=' md:flex md:justify-between gap-8 mt-10'>
        <div className='mb-10 w-[272px] h-[272px] mx-auto mt-5 md:w-[800px] '>
          <Image src={contact} alt='Contact Image' />
        </div>
        <div className='bg-white p-8 text-black rounded-2xl w-full'>
          <p className='text-center text-4xl font-bold mb-4 text-[#14DAB6]'>
            Contact Us
          </p>
          <form className='flex flex-col'>
            <label htmlFor='name' className='capitalize'>
              Enter your name
            </label>
            <input type='text' name='name' id='name' required />
            <label htmlFor='mail' className='capitalize'>
              Enter your email
            </label>
            <input type='email' name='mail' id='mail' required />
            <label htmlFor='message' className='capitalize'>
              enter your message
            </label>
            <textarea
              name='message'
              id='message'
              className='w-full h-32 resize-none'></textarea>
            <button className='p-4 mx-auto rounded-xl bg-[#14DAB6] text-white cursor-pointer'>
              Submit
            </button>
          </form>
        </div>
      </div> */
}
