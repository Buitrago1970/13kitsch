import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  // actual time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Setear el tiempo inicial cuando se renderiza el componente en el cliente
  useEffect(() => {
    const initialTime = new Date();
    setTime(initialTime);
  }, []);

  const timeString = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return (
    <nav className="grid-navbar px-14 h-[66px]">
      <div className="w-full">
        <Link href="/">
          <div className="bg-white rounded-full border border-black w-36 h-8 flex items-center justify-center font-bold italic cursor-pointer  hover:bg-gray-300 text-blacktransition-colors duration-700">
            <p>13Kitsch</p>
          </div>
        </Link>
      </div>
      <div className="flex w-full justify-between">
        <Link href="/">
          <div className="bg-white rounded-full border border-black w-[166px] h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 text-blacktransition-colors duration-700">
            <p>INICIO</p>
          </div>
        </Link>
        <Link href="/explore">
          <div className="bg-white rounded-full border border-black w-[166px] h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 text-blacktransition-colors duration-700">
            <p>EXPLORAR</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="bg-white rounded-full border border-black w-[166px] h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 text-blacktransition-colors duration-700">
            <p>CONTACTOS</p>
          </div>
        </Link>
      </div>
      <div className="w-full text-end mr-14">
        <p className="font-semibold text-border-white ">{timeString}</p>
      </div>
    </nav>
  );
}
