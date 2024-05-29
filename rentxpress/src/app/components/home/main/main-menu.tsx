"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../images/svg/logo.svg"; // Asegúrate de que la ruta es correcta
import "../../../css/animations.css";

const Main: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Por defecto, el índice activo es 0 (Inicio)

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="menu w-[1208px] h-[125px] flex justify-between fixed items-center overflow-hidden mt-2 z-10">
      <div className="logo mr-2 w-auto z-10">
        <Image src={logo} alt="" className="w-[254px] h-[125px] select-none" />
      </div>
      <div className="menu">
        <ul className="flex ml-[1%]">
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleClick(0)} // Hacer clic en "Inicio"
          >
            <span className="hover:mb-2 transition-all">Inicio</span>
            <div
              className={`line bg-black ${activeIndex === 0 ? "active" : ""}`}
            ></div>
          </li>
          {[
            "Preguntas Frecuentes",
            "Convertirse en Arrendatario",
            "Sobre Nosotros",
            "Contactanos",
          ].map((text, index) => (
            <li
              key={index}
              className="option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center"
              onClick={() => handleClick(index + 1)} // Hacer clic en los otros elementos
            >
              <span className="hover:mb-2 transition-all">{text}</span>
              <div
                className={`line bg-black ${
                  activeIndex === index + 1 ? "active" : ""
                }`}
              ></div>
            </li>
          ))}
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center text-[#3E20E4] ${
              activeIndex === 5 ? "active" : ""
            }`}
            onClick={() => handleClick(5)} // Hacer clic en "Registrarse"
          >
            <span className="hover:mb-2 transition-all">Registrarse</span>
            <div
              className={`line bg-black ${activeIndex === 5 ? "active" : ""}`}
            ></div>
          </li>
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center bg-[#3E20E4] pr-5 pl-5 rounded-[50px] text-white ${
              activeIndex === 6 ? "active" : ""
            }`}
            onClick={() => handleClick(6)} // Hacer clic en "Iniciar Sesión"
          >
            <span className="hover:mb-2 transition-all">Iniciar Sesión</span>
            <div
              className={`line bg-white ${activeIndex === 6 ? "active" : ""}`}
            ></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
