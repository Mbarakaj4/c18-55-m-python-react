import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Preguntas: React.FC = () => {
  return (
    <div className="mt-[8.5%] w-[80%] flex justify-center items-start flex-col p-2">
      <h1 className="font-noto-serif text-[40px] font-light ml-2">Preguntas Frecuentes</h1>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Cómo puedo registrarme en RentXpress? </strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]"></span>
      </div>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Qué documentos necesito para verificar mi identidad?</strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]">Para verificar tu identidad, necesitarás subir una copia de tu documento de identificación oficial (como una cédula de identidad, pasaporte o licencia de conducir) y una foto reciente</span>            
      </div>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Cómo funcionan las reservas de vehículos en RentXpress?</strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
            
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]"></span>
      </div>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Qué debo hacer si tengo un problema con el vehículo durante el alquiler?</strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
            
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]"></span>
      </div>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Puedo cancelar mi reserva y obtener un reembolso?</strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
            
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]"></span>
      </div>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Qué pasa si el vehículo no está en las condiciones anunciadas?</strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
            
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]"></span>
      </div>
      <div className="quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md">
        <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
        <strong className="item-quest w-[90%]">¿Cómo puedo dejar una reseña sobre mi experiencia?</strong>
        <div className="icons w-[10%] relative flex justify-end items-center">
            <FontAwesomeIcon icon={faPlus}  className="icon-plus text-black absolute "/>
            <FontAwesomeIcon icon={faMinus} className="icon-min text-black absolute " />
            
        </div>
        </div>
        <span className="item-answer ml-1.5 text-[#757575] text-[16px] w-[60%]"></span>
      </div>
    </div>
  );
};

export default Preguntas;
