import { ProgramsData } from '../../assets/data/ProgramData';

const Programs = () => {
  return (
    <div className='mb-32 md:mt-36'>
      <div>
        <p className='font-bold text-center text-3xl'>Our Best Programs</p>
      </div>
      <div className='md:grid md:grid-cols-3 gap-10'>
        {ProgramsData.map((data, index) => {
          const { icons, title, description, color } = data;
          return (
            <div key={index} className='text-center mt-8 '>
              <div className='p-8 neon rounded-2xl'>
                <div className='flex justify-center'>
                  <icons.iconsStyle className={`text-clr text-5xl mb-8`} />
                </div>

                <p className='font-semibold mb-8'>{title}</p>
                <p className='text-gray-400'>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
