import React from "react";
import Image from "next/image";
import auto from "../../../../images/png/car-white.png";
import located from "../../../../images/svg/icon-located.svg";
import phone from "../../../../images/svg/phone.svg";
import dollar from "../../../../images/svg/dollar.svg";
const Main_select: React.FC = () => {
  return (
    <div className="bg-[#9CAAF4] w-full h-auto flex justify-center items-center p-[3%] bg-opacity-[50%] mt-[5%] pb-[5%]">
      <div className="content bg-orange w-[600px] h-[515px] mr-10 flex items-end justify-end relative rounded-lg">
        <Image src={auto} alt="" className="absolute  car_shadow translate-x-[50px] translate-y-[30px] scale-[1.5]" />
      </div>
      <div className="content w-1/2 flex flex-col justify-center items-center pr-[6%] ">
        <span>
          <strong>Porque Elegirnos </strong>{" "}
        </span>
        <span className="text-center">
          En RentXpress, nos esforzamos por ofrecerte una experiencia de
          alquiler de vehículos sin complicaciones, segura y a tu medida.
          Descubre por qué somos la mejor opción para tus necesidades de
          transporte
        </span>
        <div className="why mt-3 flex items-center justify-center w-full">
          <div className="card-header w-[120px] h-[120px] rounded-[40%] bg-white flex justify-center items-center">
            <Image src={phone} alt="" className="" />
          </div>
          <span className="text-why mt-3 w-3/4 ml-8 text-center text-[16px]">
            Nuestra atención al cliente está disponible las 24 horas del día,
            los 7 días de la semana, para asistirte en todo lo que necesites. Tu
            satisfacción es nuestra prioridad
          </span>
        </div>
        <div className="why mt-3 flex items-center justify-center w-full">
          <div className="card-header w-[120px] h-[120px] rounded-[40%] bg-white flex justify-center items-center">
            <Image src={dollar} alt="" className="" />
          </div>
          <span className="text-why mt-3 w-3/4 ml-8 text-center text-[16px]">
            Ofrecemos tarifas competitivas y sin sorpresas. Encuentra el
            vehículo perfecto a un precio que se ajusta a tu presupuesto.
          </span>
        </div>
        <div className="why mt-3 flex items-center justify-center w-full">
          <div className="card-header w-[120px] h-[120px] rounded-[40%] bg-white flex justify-center items-center">
            <Image src={located} alt="" className="" />
          </div>
          <span className="text-why mt-3 w-3/4 ml-8 text-center text-[16px]">
            Con RentXpress, puedes seleccionar la ubicación de recogida y
            devolución que más te convenga. Disfruta de la flexibilidad que
            necesitas para tu viaje.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main_select;
