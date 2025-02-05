import React from "react";

export default function HomeCard({ className = "" }) {
  const imageSrc = "/kitschRecurso 777.svg";
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Imagen de fondo que se ajusta siempre al contenedor */}
      <img
        src="/banner.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenedor del SVG animado */}
      <div className="absolute inset-0 flex justify-center">
        <div className="flex animate-scroll">
          {/* Primera copia del SVG */}
          <img
            src={imageSrc}
            alt="SVG"
            className="h-full w-[300vw] object-cover"
          />
          {/* SVG (con preserveAspectRatio para controlar el escalado) */}
          <svg
            preserveAspectRatio="none"
            width="300vw"
            height="100%"
            viewBox="0 0 4615 841"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Aquí va el contenido de tu SVG */}
          </svg>
          {/* Segunda copia del SVG */}
          <img
            src={imageSrc}
            alt="SVG"
            className="h-full w-[300vw] object-cover"
          />
        </div>
      </div>
    </div>
  );
}