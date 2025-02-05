import React from "react";

export default function HomeCard() {
  const imageSrc = "/kitschRecurso 777.svg";
  return (
    <div className="relative w-screen h-[80vh] max-w-full overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/banner.jpg"
        alt="Background"
        className="absolute w-screen h-[80vh] object-cover top-0 left-0 "
      />
      {/* Contenedor del SVG animado */}
      <div className="absolute inset-0 flex justify-center ">
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
