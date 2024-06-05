"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../images/svg/logo.svg";
import Link from "next/link";

const MainMenu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="menu w-[1208px] h-[125px] flex justify-between items-center overflow-hidden z-20 fixed">
      <div className="logo mr-2 w-auto z-10">
        <Image src={logo} alt="" className="w-[254px] h-[125px] select-none" />
      </div>
      <div className="menu">
        <ul className="flex ml-[1%] font-cairo text-[14px]">
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            <Link href="/home">
              <span className="hover:mb-2 transition-all">Inicio</span>
            </Link>
            <div
              className={`line bg-black ${activeIndex === 0 ? "active" : ""}`}
            ></div>
          </li>
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center ${
              activeIndex === 1 ? "active" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            <Link href="/preguntas">
              <span className="hover:mb-2 transition-all">
                Preguntas Frecuentes
              </span>
            </Link>
            <div
              className={`line bg-black ${activeIndex === 1 ? "active" : ""}`}
            ></div>
          </li>
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center ${
              activeIndex === 2 ? "active" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            <Link href="/arrendatario">
              <span className="hover:mb-2 transition-all">
                Convertirse en Arrendatario
              </span>
            </Link>
            <div
              className={`line bg-black ${activeIndex === 2 ? "active" : ""}`}
            ></div>
          </li>
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center ${
              activeIndex === 3 ? "active" : ""
            }`}
            onClick={() => handleClick(3)}
          >
            <Link href="/nosotros">
              <span className="hover:mb-2 transition-all">Sobre Nosotros</span>
            </Link>
            <div
              className={`line bg-black ${activeIndex === 3 ? "active" : ""}`}
            ></div>
          </li>
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center ${
              activeIndex === 4 ? "active" : ""
            }`}
            onClick={() => handleClick(4)}
          >
            <Link href="/contactanos">
              <span className="hover:mb-2 transition-all">Contactanos</span>
            </Link>
            <div
              className={`line bg-black ${activeIndex === 4 ? "active" : ""}`}
            ></div>
          </li>
          <li
            className={`option-select text-nowrap text-[14px] font-bold mr-6 flex flex-col items-center select-none h-10 justify-center text-[#3E20E4] ${
              activeIndex === 5 ? "active" : ""
            }`}
            onClick={() => handleClick(5)}
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
            onClick={() => handleClick(6)}
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

export default MainMenu;
