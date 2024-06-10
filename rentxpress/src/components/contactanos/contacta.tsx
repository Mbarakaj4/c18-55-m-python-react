import React, { useState } from "react";
import Image from "next/image";
import Send from "../../images/svg/send.svg";

const Contact_form_text: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto justify-center items-center flex">
      <form className="flex flex-col h-auto justify-center font-cairo w-10/12 text-black gap-2">
        <span>Nombre</span>
        <input type="text" className="text-[#757575] p-2.5 outline-blue-400 rounded-xl border-[2px] border-gray-300" placeholder="Ingresa tu nombre" />
        <span>Correo</span>
        <input type="email" className="text-[#757575] p-2.5 outline-blue-400 rounded-xl border-[2px] border-gray-300" placeholder="Ingresa tu correo" />
        <span>Mensaje</span>
        <textarea className="text-[#757575] p-2.5 outline-blue-400 rounded-xl border-[2px] border-gray-300 h-[200px]"></textarea>
        <div className="flex mt-3 items-center">
          <div
            className={`confirm w-10 h-5 g-3 rounded-2xl flex items-center pr-1 pl-1 mr-2 ${isActive ? "bg-blue-600 justify-end" : "bg-gray-600"}`}
            onClick={handleClick}
          >
            <div className="circle bg-white h-[10px] w-[10px] rounded-full"></div>
          </div>
          <span>He leído y acepto términos y condiciones</span>
        </div>
        <button type="submit" className="flex gap-2 w-[20%] items-center justify-center bg-[#3E20E4] p-4 rounded-l-full rounded-r-full">
          <span className="text-white">Send</span>
          <Image src={Send} alt="Send Icon" className="" />
        </button>
      </form>
    </div>
  );
};

export default Contact_form_text;
