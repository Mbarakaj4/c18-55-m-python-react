// src/components/MyLocationMap.tsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MyLocationMap: React.FC = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

  // Definir el icono del marcador como un círculo
  const circleIcon = L.divIcon({
    className: 'circle-icon',
    html: '<div class="circle bg-[#DD00B8] h-10 w-10 border-[16px] border-[#e8aade] rounded-full"></div>'
  });

  return (
    <div style={{ height: "67vh", width: "100%" }} className="w-full h-full">
      {position ? (
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={circleIcon}>
            <Popup>Estás aquí</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
    </div>
  );
};

export default MyLocationMap;
