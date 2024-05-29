import React from "react";
import Image from "next/image";
import calle from "../../../../images/png/calle.png";

const Main_corp: React.FC = () => {
  return (
    <div className="w-full h-auto mt-[7%] relative ">
        <Image
        src={calle}
        alt=""
        className="absolute w-full h-auto bg-white z-0"
        />
        <div className=" bg-white z-[1] w-full h-[520px] opacity-[0.4]  flex justify-center items-center">
        </div>
        
    </div>
  );
};

export default Main_corp;