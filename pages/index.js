import HomeCard from "../components/HomeCard/HomeCard";
import HomeCardTemp from "../components/HomeCardTemp/HomeCardTemp";

export default function Home() {
  return (
    <>
      <HomeCard className="overflow-hidden"/>
      <div className="bg-black text-white text-center w-full h-[25vh] flex flex-col gap-4">
        <p className="text-[#E61B12] text-2xl font-bold">Hombre Otoño-Invierno 2024</p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-sm">Deslizar Para descubrir</p>
          <div className="h-8 w-[1px] bg-white mt-2 animate-line relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </div>
      <HomeCardTemp />
      <style jsx>{`
        @keyframes scrollIndicator {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        .animate-line {
          animation: scrollIndicator 2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
