import React from "react";
import Image from "next/image";
import calle from "../../../images/png/calle.png";
import located from "../../../images/svg/icon-located.svg";
import calendar from "../../../images/svg/icon-calendar.svg";
import car from "../../../images/svg/icon-car.svg";
const Main_corp: React.FC = () => {
  return (
    <div className="w-full h-auto mt-[7%] relative ">
        
        <div className=" bg-white w-full h-[520px] flex justify-center items-center">
        <Image
        src={calle}
        alt=""
        className=" w-full h-full bg-white opacity-[0.4]"
        />
        <div className="info absolute flex w-full justify-center items-center">
            <div className="absolute w-full h-auto flex justify-evenly  items-center flex-wrap">
              <div className="card w-[20%] h-auto flex flex-col items-center justify-center">
                <div className="card-header w-[120px] h-[120px] rounded-[40%] bg-white flex justify-center items-center">
                  <Image src={located} alt="" className=""/>
                </div>
                <strong className=" mt-3 text-[28px] flex w-full justify-center">Elegir Ubicación</strong>
                <span className="text-center">Selecciona la ubicación más conveniente para recoger tu vehículo. Encuentra opciones cercanas y fáciles de acceder para tu comodidad.</span>
              </div>
              <div className="card w-[20%] h-auto flex flex-col items-center justify-center">
                <div className="card-header w-[120px] h-[120px] rounded-[40%] bg-white flex justify-center items-center">
                  <Image src={calendar} alt="" className=""/>
                </div>
                <strong className=" mt-3 text-[28px] flex w-full justify-center">Fecha de recogida</strong>
                <span className="text-center">Elige la fecha y hora exacta en la que necesitas tu vehículo. Asegúrate de reservar con antelación para garantizar disponibilidad.</span>
              </div>
              <div className="card w-[20%] h-auto flex flex-col items-center justify-center">
                <div className="card-header w-[120px] h-[120px] rounded-[40%] bg-white flex justify-center items-center">
                  <Image src={car} alt="" className=""/>
                </div>
                <strong className=" mt-3 text-[28px] flex w-full justify-center">Reservar</strong>
                <span className="text-center">Confirma tu elección y asegura tu vehículo con unos pocos clics. Disfruta de un proceso de reserva rápido, sencillo y seguro.</span>
              </div>
            </div>
          </div>
        </div> 
          
        
    </div>
  );
};



export default Main_corp;