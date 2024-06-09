import React from "react";
import { Card } from "./card";

export const Main_About_us: React.FC = () => {
  return (
    <div className="mt-[188px] w-[1442px] h-[497px] flex flex-col items-center justify-center bg-rentxpress">
      <Card
        title="Mision"
        body="En RentXpress, nuestra misión es transformar la experiencia de alquiler de vehículos, conectando a propietarios y arrendatarios a través de una plataforma segura, eficiente e intuitiva. Nos esforzamos por ofrecer movilidad accesible y flexible para todos, proporcionando opciones variadas y de calidad que se adapten a las necesidades de cada usuario. Creemos en la transparencia, la confianza y la innovación como pilares fundamentales para ofrecer un servicio excepcional y satisfacer a nuestros clientes."
      />
      <Card
        title="Vision"
        body="En RentXpress, aspiramos a ser la plataforma líder en alquiler de vehículos a nivel mundial, reconocida por nuestra capacidad de innovación y nuestro compromiso con la satisfacción del cliente. Imaginamos un mundo donde la movilidad compartida sea la norma, facilitando el acceso a vehículos de manera sostenible y responsable. Nos comprometemos a seguir mejorando y expandiendo nuestros servicios, creando una comunidad global de usuarios y propietarios conectados por la confianza y la excelencia en el servicio."
      />
    </div>
  );
};
