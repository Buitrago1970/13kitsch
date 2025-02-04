import HomeCard from "../components/HomeCard/HomeCard";
import HomeCardTemp from "../components/HomeCardTemp/HomeCardTemp";

export default function Home() {
  return (
    <>
      <HomeCard />
      <div className="bg-black text-white text-center  w-full h-[25vh] flex flex-col  gap-4">
        <p className="text-[#E61B12] text-2xl font-bold">Hombre Otoño-Invierno 2024</p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-sm">Deslizar Para descubrir</p>
          <div className="h-8 w-[1px] bg-white animate-bounce mt-2">
            <div className="h-full w-full bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </div>
      <HomeCardTemp />
    </>
  );
}
