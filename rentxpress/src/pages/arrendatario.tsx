import React from 'react';
import Main_Arrendatario from "../components/arrendatario/cm_arrendatario"
import Main_footer from '../components/home/main/main-footer';

const Arrendatario: React.FC = () => {
  return (
    <div className='main z-10 relative overflow-y-auto w-full h-screen flex flex-col items-center '>
      <Main_Arrendatario/>
      <Main_footer/>
    </div>
  );
};

export default Arrendatario;