import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="grid-header place-items-center bg-pink-400 px-14  h-20">
      <div className="flex items-center relative w-full text-white">
        <div className=" flex items-center justify-center bg-[#EE218A] border border-black h-8 w-40 text-center rounded-full absolute ">
          Instagram
        </div>
        <div className=" flex items-center justify-center bg-[#006DD1] border border-black h-8 w-36 text-center rounded-full  absolute left-[136px]">
          facebook
        </div>
        <div className=" flex items-center justify-center bg-white border border-black h-8 w-24 text-center rounded-full text-black  absolute left-[255px] ">
          TikTok
        </div>
      </div>
      <div className="font-bold italic text-7xl">
        <h1 className="text-border-white">Kitsch</h1>
      </div>
      <div className="flex relative">
        <p className="font-bold text-lg">Carrito</p>
        <span className="rounded-full border border-black bg-white w-[26px] h-[26px] text-center absolute left-[70px] bottom-3">
          {cart.length}
        </span>
      </div>
      <hr className="border-black w-full" />
      <hr className="border-black w-full" />
      <hr className="border-black w-full" />
    </header>
  );
}
