import React from "react";
import Image from "next/image";
import vector from "../../../images/svg/vector-circle.svg";
import auto from "../../../images/png/home_car.png";

const Main_Info_img: React.FC = () => {
  return (
    // Contenedor de todos los elementos
    <div className="w-full h-full relative flex items-center justify-end">
      <Image src={vector} alt="" className="translate-x-[680px]" />
      <Image
        src={auto}
        alt=""
        className=" car_shadow h-[453px] w-[693px] scale-[2] -translate-x-[100px] translate-y-[50px]"
      />
    </div>
  );
};

export default Main_Info_img;
