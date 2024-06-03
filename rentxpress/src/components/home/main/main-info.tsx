"use client";
import React, { useState } from "react";
import Image from "next/image";
import apple from "../../../images/svg/icon_apple.svg"; // Asegúrate de que la ruta es correcta
import google_play from "../../../images/svg/icon_google.svg"; // Asegúrate de que la ruta es correcta

const Main_Info: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Por defecto, el índice activo es 0 (Inicio)

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="main-info w-11/12 h-full flex justify-center items-center overflow-hidden flex-col">
      <h1 className="text-[40px] w-[586px] font-bold font-noto-serif">
        Alquila el vehículo perfecto para tu próximo viaje con nosotros
      </h1>
      <span className="xl:text-[14px] w-[586px] sm:text-[50px] font-cairo">
        Descubre los vehículos favoritos de nuestros usuarios en RentXpress.
        Desde elegantes sedanes hasta robustos SUVs, estos autos son los más
        alquilados y mejor valorados por su confiabilidad y confort. Encuentra
        el vehículo ideal para tu próximo viaje y disfruta de una experiencia de
        alquiler sin igual.
      </span>
      <div className="icons-store flex justify-between gap-[14px] mt-[38px]">
        <div className="gg_play flex border border-black rounded-lg bg-white p-2">
          <div className="icon flex items-center justify-center">
            <Image src={google_play} alt="" className="w-[21px] h-[24px] max-w-[900px]" />
          </div>
          <div className="text  flex flex-col ml-2">
            <span className="text-[10px] pt-sans font-[400px]">GET IT ON</span>
            <span className="text-[15px] pt-sans font-bold">GOOGLE PLAY</span>
          </div>
        </div> 
        <div className="gg_play flex border border-black rounded-lg bg-white p-2">
          <div className="icon flex items-center justify-center">
            <Image src={apple} alt="" className="w-[21px] h-[24px] max-w-[900px]" />
          </div>
          <div className="text  flex flex-col ml-2">
            <span className="text-[10px] pt-sans font-[400px]">Download on the</span>
            <span className="text-[15px] pt-sans font-bold">App Store</span>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Main_Info;
