import Image from 'next/image';
import { ReviewsData } from '../../assets/data/ReviewsData';

const Reviews = () => {
  return (
    <div className='mb-16'>
      <p className='text-center font-semibold text-3xl'>
        What people say about us
      </p>

      <div className='flex flex-col md:grid md:grid-cols-3 gap-10 mt-8'>
        {ReviewsData.map((data) => {
          const { id, img, name, position, reviews } = data;
          return (
            <div key={id} className='text-center p-8 rounded-xl bg-[#7593ff]'>
              <Image
                src={img}
                alt={name}
                width={60}
                height={60}
                objectFit='cover'
                className='rounded-full'
              />

              <p className='text-lg font-semibold'>{name}</p>
              <p className='text-cyan-300 text-lg font-semibold mb-3'>
                {position}
              </p>
              <p>{reviews}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
