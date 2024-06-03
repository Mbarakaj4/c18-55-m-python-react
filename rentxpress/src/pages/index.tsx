import React from 'react';
import Home from "./home";
import LoaderComponent  from '../components/home/loader/main-load';
import MainMenu from '../components/home/main/main-menu';
import Main_vector from '../components/home/main/main-vectors';
import Main_Info from '../components/home/main/main-info';
import Main_Info_img from '../components/home/main/main-info-img';
import Main_Form from '../components/home/main/main-form';
import Main_corp from '../components/home/main/main-corp';
import Main_cars from '../components/home/main/main-cars';
import Main_select from '../components/home/main/main-why-select';
import Main_footer from '../components/home/main/main-footer';
const index: React.FC = () => {
  return (
    <div className="relative h-auto w-full flex justify-center items-center overflow-hidden bg-transparent">
      {/* Pantalla de carga */}
      <div className="line loader w-full h-full absolute overflow-hidden">
        <LoaderComponent />
      </div>
      {/* Pantalla inicio */}
      <div className="main z-10 relative overflow-y-auto w-full h-screen flex flex-col items-center">
        <Main_vector />
        {/* Información */}
        <div className="w-full h-full flex z-0 items-center">
          <div className="info w-full h-full flex justify-center items-center z-0">
            <Main_Info />
          </div>
          <div className="img w-full h-full flex justify-center items-center z-0">
            <Main_Info_img />
          </div>
        </div>
        <Main_Form />
        <Main_corp />
        <Main_cars />
        <Main_select />
        {/* <Main_footer /> */}
      </div>
    </div>
  );
};

export default index;