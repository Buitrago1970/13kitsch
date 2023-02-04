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
    <nav className="px-3 grid-cols-1 grid-navbar h-[66px] md:px-10 md:grid-navbar  ">
      <div className="hidden md:block w-full">
        <Link href="/">
          <div className="flex bg-white rounded-full border border-black w-36 h-8  items-center justify-center font-bold italic cursor-pointer  hover:bg-gray-300 text-blacktransition-colors duration-700">
            <p>13Kitsch</p>
          </div>
        </Link>
      </div>
      <div className="flex w-full justify-between">
        <Link href="/">
          <div className=" w-28 text-[13px] font-bold bg-white rounded-full border border-black h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 text-blacktransition-colors duration-700 md:w-[166px] ">
            <p>INICIO</p>
          </div>
        </Link>
        <Link href="/explore">
          <div className="w-28 text-[13px] font-bold bg-white rounded-full border border-black h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 text-blacktransition-colors duration-700 md:w-[166px] ">
            <p>EXPLORAR</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="w-28 text-[13px] font-bold bg-white rounded-full border border-black h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 text-blacktransition-colors duration-700 md:w-[166px] ">
            <p>CONTACTOS</p>
          </div>
        </Link>
      </div>
      <div className="hidden  md:block w-full text-end mr-14">
        <p className="font-semibold text-border-white ">9:00:00PM</p>
      </div>
    </nav>
  );
}
