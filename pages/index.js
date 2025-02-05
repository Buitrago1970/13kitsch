import HomeCard from "../components/HomeCard/HomeCard";
import HomeCardTemp from "../components/HomeCardTemp/HomeCardTemp";

export default function Home() {
  return (
    <>
      {/* 
        Para pantallas grandes (md en adelante) usamos un contenedor de 80vh  
        para HomeCard.  
      */}
      <div className="hidden md:block w-full h-[80vh]">
        <HomeCard />
      </div>

      {/*
        Para pantallas pequeñas (menos de md) usamos un contenedor con relación de
        aspecto definida por el viewBox de tu SVG. Así, el banner se adapta al ancho sin
        dejar espacios en blanco.
      */}
      <div className="block md:hidden w-full h-[60vh]">
        <HomeCard />
      </div>

      {/*
        Contenedor Deep:  
        - En pantallas md+ lo definimos con altura fija de 20vh para completar la proporción 80-20.  
        - En móviles (menos de md) dejamos que se ajuste con padding para evitar que quede muy forzado.
      */}
      <div className="bg-black text-white text-center w-full">
        {/* Para pantallas grandes */}
        <div className="hidden md:flex flex-col gap-4 h-[20vh] justify-center items-center">
          <p className="text-[#E61B12] text-2xl font-bold">
            Hombre Otoño-Invierno 2024
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-sm">Deslizar Para descubrir</p>
            <div className="h-8 w-[1px] bg-white mt-2 animate-line relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Para pantallas pequeñas */}
        <div className="md:hidden flex flex-col gap-4 py-4 justify-center items-center">
          <p className="text-[#E61B12] text-2xl font-bold">
            Hombre Otoño-Invierno 2024
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-sm">Deslizar Para descubrir</p>
            <div className="h-8 w-[1px] bg-white mt-2 animate-line relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Otros componentes o secciones */}
      <HomeCardTemp />

      <style jsx>{`
        @keyframes scrollIndicator {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
        .animate-line {
          animation: scrollIndicator 2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}