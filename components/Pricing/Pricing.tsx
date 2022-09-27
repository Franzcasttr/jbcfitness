import { PricingData } from '../../assets/data/PricingData';
import { BsCheckLg } from 'react-icons/bs';

const Pricing = () => {
  return (
    <div className='mb-32'>
      <div className='flex justify-center gap-2 font-semibold text-3xl'>
        <p>Ready to</p>
        <p className='text-clr'>get started?</p>
      </div>
      <p className='text-gray-500 mt-4 text-sm text-center'>
        Here’s our pricing for you to get started
      </p>
      <div className='grid gap-8 mt-10 md:grid-cols-3 '>
        {PricingData.map((data) => {
          const { id, title, price, service, includes } = data;
          return (
            <div key={id} className='p-4 neon rounded-2xl pricing'>
              <p className='mb-8 text-2xl font-semibold text-center'>{title}</p>
              <div className='flex gap-1 items-center mb-4'>
                <p className='text-2xl font-semibold'>₱{price}</p>
                <p>/{service}</p>
              </div>
              <p className='mb-4 text-lg'>Included</p>
              {includes.map((data, index) => {
                return (
                  <div key={index} className='flex gap-4 mb-3 items-center'>
                    <BsCheckLg className='text-cyan-300 text-xl' />
                    <p className='text-base'>{data}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
