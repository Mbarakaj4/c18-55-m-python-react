import React from 'react';
import Image from 'next/image'; 
import street from '../../../../images/png/loader.png'; // Asegúrate de que la ruta es correcta
import logo from '../../../../images/svg/logo.svg'; // Asegúrate de que la ruta es correcta
import '../../../css/animations.css'

const loader: React.FC = () => {
    return (
      // Contenedor de todos los elementos
      <div id='loader' className="h-auto w-full flex items-center justify-center overflow-hidden relative">
        {/* progress bar y imagen */}
        <div className='absolute z-10 w-3/4 h-auto flex flex-col justify-center items-center'>
          {/* imagen */}
        <Image
        src={logo}
        alt=''
        className='w-1/2 max-w-[900px]'
        /> 
        <div className="bar-loader max-w-[30%] w-full h-2 rounded-lg  overflow-hidden mt-8 bg-white">
        {/* Progress bar */}
          <div className="charger h-full w-1/2 rounded-lg bg-blue-400"></div>
        </div>
        </div>
        <div className="opacity w-full h-full absolute top-0 left-0 opacity-[60%]"></div>
        <Image 
          src={street} 
          alt="Descripción de la imagen"  
          className="min-w-[100%] w-[1490px] h-screen"
        />
      </div>
    );
  };
  
  export default loader;