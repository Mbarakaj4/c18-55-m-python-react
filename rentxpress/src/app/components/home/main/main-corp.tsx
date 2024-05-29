import React from "react";
import Image from "next/image";
import calle from "../../../../images/png/calle.png";

const Main_corp: React.FC = () => {
  return (
    <div className="w-full h-auto relative flex justify-center items-center ">
        <Image
        src={calle}
        alt=""
        className=" absolute w-full h-[70vh] bg-white z-0"
        />
        <div className="absolute bg-white z-10 w-full h-[70vh] opacity-[70%] ">
        </div>
    </div>
  );
};

export default Main_corp;