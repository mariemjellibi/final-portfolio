import React from 'react';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan-500">
        Full Stack Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special  text-orange-500">
        Mariem Jellibi
      </h1>
      <p className='text-lg mt-4'>A passionate web developer and instructor <br/>with 1 year of experience</p>
    </div>
  );
};

export default HeroText;
