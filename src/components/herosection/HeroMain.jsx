import React from 'react';
import HeroText from './HeroText';
import HeroPic from './HeroPic';
import HeroGradient from './HeroGradient';

const HeroMain = () => {
  return (
    <div className='relative pt-40 pb-16 m-4 w-full min-h-screen flex flex-col items-center'>
      <HeroGradient />
      <div className='flex sm:flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-32 xl:gap-40'>
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
