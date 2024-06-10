import React from 'react';
import Main_footer from '../components/home/main/main-footer';
import {Main_About_us} from '../components/about-us/about-us';

const Nosotros: React.FC = () => {
  return (
    <div className='relative h-auto w-full flex justify-center items-center overflow-hidden bg-transparent'>
        <div className='main z-10 relative overflow-y-auto w-full h-screen flex flex-col items-center '>
        <Main_About_us/>
        <Main_footer/>
      </div>
    </div>
  );
};

export default Nosotros;
