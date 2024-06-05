import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../images/svg/arrow.svg";
import arrow2 from "../../images/svg/arrow-p2.svg";
const Arrendatario: React.FC = () => {
  return (
    <div className="w-full h-auto mt-[8.5%] flex justify-center items-center flex-col">
      <h6 className="text-[40px] font-noto-serif font-semibold">
        Hazte Arrendatario en RentXpress
      </h6>
      <h4 className="text-[32px] font-noto-serif">
        Pasos para Hacerse Arrendatario
      </h4>
      <div className="container-pasos flex flex-col justify-center items-center mt-[2%]">
        <div className="flex justify-between items-center w-10/12 font-cairo text-[14px] flex-wrap gap-1">
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Registrarse</span>
            <span>Crea una cuenta en RentXpress proporcionando tu nombre, correo electrónico y una contraseña segura. También puedes registrarte utilizando tus cuentas de Google o Facebook para mayor comodidad.</span>
          </div>
          <Image src={arrow} alt="" className="" />
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl">
            <span className=" mb-2 font-bold">Verificar tu Identidad</span>
            <span>Verifica tu identidad subiendo una copia de tu documento de identificación y una foto reciente. Esto ayuda a garantizar la seguridad y confianza dentro de nuestra comunidad.</span>
          </div>
          <Image src={arrow} alt="" className="" />
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Configurar tu Perfil</span>
            <span>Completa tu perfil añadiendo información adicional como tu número de teléfono, dirección y una breve biografía. Un perfil completo aumenta la confianza de los propietarios.</span>
          </div>
        </div>
        <div>
          <Image src={arrow2} alt="" className="" />
        </div>
        <div className="flex justify-between items-center w-10/12 font-cairo text-[14px] flex-wrap gap-1">
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Explorar Vehículos</span>
            <span>Navega por nuestra amplia selección de vehículos disponibles para alquiler. Utiliza filtros para encontrar el vehículo perfecto según tus necesidades y ubicación.</span>
          </div>
          <Image src={arrow} alt="" className="" />
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Reservar un Vehículo</span>
            <span>Elige el vehículo que más te guste y selecciona las fechas de recogida y devolución. Revisa los detalles del alquiler y confirma tu reserva.</span>
          </div>
          <Image src={arrow} alt="" className="" />
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Comunicación y Recolección</span>
            <span>Comunícate con el propietario para coordinar la recogida del vehículo. Asegúrate de revisar todos los detalles importantes y hacer cualquier pregunta que tengas.</span>
          </div>
        </div>
        <div>
          <Image src={arrow2} alt="" className="" />
        </div>
        <div className="flex justify-between items-center w-10/12 font-cairo text-[14px] flex-wrap gap-1">
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Disfruta del Viaje</span>
            <span>Disfruta de tu viaje con el vehículo alquilado. Si tienes alguna duda o problema durante el alquiler, nuestro equipo de atención al cliente está disponible para ayudarte.</span>
          </div>
          <Image src={arrow} alt="" className="" />
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Devolución del Vehículo</span>
            <span>Devuelve el vehículo en el lugar y la hora acordados. Asegúrate de que el vehículo esté en las mismas condiciones en las que lo recibiste.</span>
          </div>
          <Image src={arrow} alt="" className="" />
          <div className="paso flex flex-col bg-[#eebe9c] overflow-hidden w-[22.3%] h-60 p-5 justify-center rounded-xl shadow-2xl ">
            <span className=" mb-2 font-bold">Deja una Reseña</span>
            <span>Después de finalizar el alquiler, deja una reseña sobre tu experiencia y el vehículo. Tu opinión es importante para nosotros y para otros usuarios.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrendatario;
