import banner from '../assets/banner/banner.jpg';

import Search from './Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] text-dark-blue font-semibold leading-none mb-6'>
            <span className='text-gold'>Buy</span> Your Next Luxury House
          </h1>
          <p className='max-w-[480px] mb-8 text-dark-blue'>
            Explore exclusive properties that combine elegance, comfort, and prime locations.
            Your dream luxury home is just a step away, designed to match
            your unique style and aspirations.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={banner} alt='banner brown and black wooden house' className='rounded-tl-[90px]' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;