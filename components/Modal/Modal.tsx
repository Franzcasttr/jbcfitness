import { ImFacebook2 } from 'react-icons/im';
import { GrClose } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

const Modal = () => {
  return (
    <div className='text-black'>
      <p className='text-center mb-8 text-lg'>
        You can reach us through our social media platform
      </p>
      <Link href='https://web.facebook.com/JBCFitness18?_rdc=1&_rdr'>
        <a>
          <div className='flex flex-col items-center gap-2'>
            <ImFacebook2 className='text-blue-400 text-4xl' />
            <p>Facebook</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Modal;
