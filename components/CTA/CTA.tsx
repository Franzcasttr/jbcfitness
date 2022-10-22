import Image from 'next/image';
import { SetStateAction } from 'react';
import modelcta from '../../assets/modelcta.png';

const CTA = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='md:flex justify-between mb-16'>
      <div>
        <p className='text-4xl leading-relaxed font-bold text-center md:text-left md:leading-snug'>
          Get Healthy Body
          <br /> With The Perfect
          <br /> Exercise
        </p>
        <p className='text-xs text-center my-4 text-gray-500 md:text-left md:leading-5 md:text-sm'>
          Most of us are well aware of the manyhealth benefits of exercise, but
          <br />
          finding the discipline to not only start training but also to stick
          with
          <br /> it is often the hard part.
        </p>
        <div className='text-center mt-8 md:text-left'>
          <button
            className='px-8 py-2 background-clr rounded-md font-bold text-lg'
            onClick={() => setOpenModal(true)}>
            Join Us
          </button>
        </div>
      </div>
      <div className='my-12 mx-auto w-[340px] h-[321.84px] md:w-[400px] md:my-0 '>
        <Image src={modelcta} alt='Model CTA' />
      </div>
    </div>
  );
};

export default CTA;
