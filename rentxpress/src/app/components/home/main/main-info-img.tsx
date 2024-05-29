import React from "react";
import Image from "next/image";
import vector from "../../../../images/svg/vector-circle.svg";
import auto from "../../../../images/png/home_car.png";
import "../../../css/animations.css";

const Main_Info_img: React.FC = () => {
  return (
    // Contenedor de todos los elementos
    <div className="w-full h-full relative ">
      <Image
        src={vector}
        alt=""
        className=" absolute top-0 right-0"
      />
      <Image src={auto} alt="" className=" car_shadow absolute h-[453px] w-[693px] scale-[2] top-[20%] left-[0%]" />
    </div>
  );
};

export default Main_Info_img;
