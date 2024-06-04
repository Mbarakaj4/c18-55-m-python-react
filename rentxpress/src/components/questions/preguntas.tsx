import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Preguntas: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items_quest = [
    {
      question: "¿Cómo puedo registrarme en RentXpress?",
      answer: "Para registrarte en RentXpress, debes ir a la página de registro y completar el formulario con tu información personal y de contacto. Luego, recibirás un correo electrónico de confirmación para activar tu cuenta."
    },
    {
      question: "¿Qué documentos necesito para verificar mi identidad?",
      answer: "Para verificar tu identidad, necesitarás subir una copia de tu documento de identificación oficial (como una cédula de identidad, pasaporte o licencia de conducir) y una foto reciente."
    },
    {
      question: "¿Cómo funcionan las reservas de vehículos en RentXpress?",
      answer: "Las reservas de vehículos en RentXpress se realizan a través de nuestra plataforma en línea. Selecciona el vehículo que deseas alquilar, elige las fechas y completa el pago para confirmar tu reserva."
    },
    {
      question: "¿Qué debo hacer si tengo un problema con el vehículo durante el alquiler?",
      answer: "Si tienes un problema con el vehículo durante el alquiler, comunícate con nuestro servicio de atención al cliente a través de la aplicación o por teléfono para recibir asistencia."
    },
    {
      question: "¿Puedo cancelar mi reserva y obtener un reembolso?",
      answer: "Sí, puedes cancelar tu reserva y obtener un reembolso según nuestra política de cancelación. Consulta los términos y condiciones para más detalles."
    },
    {
      question: "¿Qué pasa si el vehículo no está en las condiciones anunciadas?",
      answer: "Si el vehículo no está en las condiciones anunciadas, por favor repórtalo de inmediato a nuestro servicio de atención al cliente para resolver el problema y encontrar una solución adecuada."
    },
    {
      question: "¿Cómo puedo dejar una reseña sobre mi experiencia?",
      answer: "Para dejar una reseña sobre tu experiencia, inicia sesión en tu cuenta, navega hasta la sección de historial de alquileres y selecciona la opción de dejar una reseña para el alquiler correspondiente."
    }
  ];

  return (
    <div className="mt-[8.5%] w-[80%] flex justify-center items-start flex-col p-2">
      <h1 className="font-noto-serif text-[40px] font-light ml-2">
        Preguntas Frecuentes
      </h1>
      {items_quest.map((item, index) => (
        <div
          key={index}
          className={`quest flex flex-col h-auto overflow-hidden relative justify-center items-start w-[98%] m-2 bg-[#E7E7F4] p-2 rounded-md  ${
            activeIndex === index ? "bg-transparent border border-black active" : ""
          }`}
        >
          <div className="flex w-full justify-between items-center text-[#3E20E4] text-[20px]">
            <strong className="item-quest w-[90%]">{item.question}</strong>
            <div
              className={`icons w-[10%]  h-auto pr-2 relative flex justify-end items-center ${
                activeIndex === index ? "h-auto" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className={`icon-plus text-black absolute ${
                  activeIndex === index ? "opacity-0" : ""
                }`}
              />
              <FontAwesomeIcon
                icon={faMinus}
                className={`icon-min text-black absolute ${
                  activeIndex === index ? "" : "opacity-0"
                }`}
              />
            </div>
          </div>
          <span
            className={`item-answer ml-1.5 text-[#757575] text-[16px] w-[60%] overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "h-auto" : "h-0"
            }`}
          >
            {item.answer}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Preguntas;
