import React from "react";
import Image from "next/image";

export default function ItemShoppingCard() {
  return (
    <div className=" grid overflow-hidden mb-5 border-b border-black grid-cols-2 grid-rows-[70px_minmax(500px,_1fr)_40px] bg-white ">
      <div className="border-r border-black row-span-3 p-2 mb-5">
        <div className="bg-gray-100 h-full relative">
          <div>
            <Image
              src="https://balenciaga.dam.kering.com/m/12e38bc725baafd4/Medium-725268TNU181000_F.jpg?v=3"
              alt="test"
              objectFit="cover"
              layout="fill"
              width={100}
              height={100}
            />
          </div>
          <svg focusable="false" aria-hidden="true"></svg>
        </div>
      </div>
      <div className="flex flex-col  border-b border-black p-4  font-semibold">
        <p className="text-xs">M46161</p>
        <p className="uppercase text-xl ">SCOPE T-SHIRT</p>
      </div>
      <div className="flex flex-col justify-between border-b p-4">
        <div className="text-base ">
          <ul>
            <li>
              <div className="flex justify-between ">
                <span>Color</span>
                <span>Rojo</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between ">
                <span>Talla</span>
                <span>L</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="">Texto descripcion</div>
        <div className="flex justify-between">
          <div className="w-10 h-8 border border-black px-4">
            <p>L </p>
          </div>
          <div className="text-xl font-semibold">
            <p>COP $50.000</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <p>Eliminar</p>
      </div>
    </div>
  );
}
