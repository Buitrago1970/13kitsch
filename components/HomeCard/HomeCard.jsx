import React from "react";

export default function HomeCard() {
  const imageSrc = "/kitschRecurso 777.svg";
  return (
    // Reemplazado: se elimina "aspect-[16/9]" y se usa "h-[32vh]" para reducir la altura en un 60%
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Imagen de fondo responsiva */}
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
            alt="Background"
            className="h-full w-[300vw]"
          />
          {/* SVG sin contenido anidado inválido */}
          <svg
            width="300vw"
            height="100%"
            viewBox="0 0 4615 841"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
          {/* Segunda copia del SVG */}
          <img
            src={imageSrc}
            alt="Background"
            className="h-full w-[300vw]"
          />
        </div>
      </div>
    </div>
  );
}
