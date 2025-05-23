import React from 'react';
import { PiHexagonThin } from 'react-icons/pi';

const HeroPic = () => {
  return (
    <div className='relative flex items-center justify-center max-w-[450px]'>
      {/* Hexagon Border */}
      <div className='absolute flex justify-center items-center animate-pulse z-10'>
        <PiHexagonThin className='md:h-[80%] sm:h-[100%] min-h-[500px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite]' />
      </div>

      {/* Profile Image with Hexagon Shape */}
      <img 
        src='/profile.jpeg' 
        alt='profile' 
        className='max-h-[400px] w-auto relative z-0 opacity-90 
                   clip-path-hexagon border-4 border-cyan-400'
      />
    </div>
  );
};

export default HeroPic;
