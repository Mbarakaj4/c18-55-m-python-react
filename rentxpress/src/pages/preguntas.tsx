import React from 'react';
import Quest from "../components/questions/preguntas"
import Main_footer from '../components/home/main/main-footer';

const Preguntas: React.FC = () => {
  return (
    <div className='main z-10 relative overflow-y-auto w-full h-screen flex flex-col items-center '>
      <Quest/>
      <Main_footer/>
    </div>
  );
};

export default Preguntas;
