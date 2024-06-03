import React from "react";
import Image from "next/image";
import fo_esc from "../../../images/jpg/fo-esc.jpg";
import ho_civ_11 from "../../../images/jpg/ho-civ-11.jpg";
import ho_civ_21 from "../../../images/jpg/ho-civ-21.jpg";
import ho_crv from "../../../images/jpg/ho-crv.jpg";
import ho_fit from "../../../images/jpg/ho-fit.jpg";
import hy_ela from "../../../images/jpg/hy-ela.jpg";
import kila from "../../../images/jpg/kila.jpg";
import rush from "../../../images/jpg/rush.jpg";
import ty_cor from "../../../images/jpg/ty-cor.jpg";
import ty_hil_13 from "../../../images/jpg/ty-hil-13.jpg";
import ty_hil_19 from "../../../images/jpg/ty-hil-19.jpg";
import ty_hil_20 from "../../../images/jpg/ty-hil-20.jpg";
import star from "../../../images/svg/star.svg";

const Main_cars: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-8 bg-[#ebeefd]  p-6 pb-[5%]">
      <span className="text-center text-[40px] w-1/2 font-noto-serif">
        <strong>Ofertas de alquiler de vehículos mas populares</strong>
      </span>
      <span className="text-[14px] w-1/2 text-center">
        Explora nuestra selección de los vehículos más populares entre nuestros
        usuarios. Desde compactos eficientes hasta SUVs espaciosos, estos autos
        destacan por su alta demanda, excelentes reseñas y confiabilidad.
        ¡Encuentra el vehículo perfecto para tu próxima aventura y únete a
        nuestros clientes satisfechos!
      </span>
      <div className="card-cars flex justify-evenly flex-wrap w-11/12 mt-10 ">
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1  z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">  
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
        <div className="card-c w-[272px] mt-[3%] rounded-lg flex flex-col justify-between h-[215px] border overflow-hidden relative ">
          <div className="card-c-head w-full h-auto p-2 z-[1] text-white bg-black opacity-[70%] flex justify-between  ">
            <span className="car-name text-[14px]">Toyota Corolla 2005</span>
            <div>
              <Image src={star} alt="" className="" />
            </div>
          </div>
          <div className="card-body -top-[30%] overflow-hidden flex justify-center items-center absolute">
            <Image src={ty_cor} alt="" className="h-full " />
          </div>
          <div className="card-c-foot pl-2 pr-2 pt-1 pb-1 z-10 text-white bg-black bg-opacity-[50%] flex justify-between p-1">
            <span className="car-price">45$</span>
            <button className="btn-rent h-auto w-3/12 rounded-lg">Rentar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main_cars;
