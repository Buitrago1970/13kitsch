import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Header() {
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="grid-header px-14  h-20">
      <div className="flex items-center relative w-full text-white">
        <a
          href="https://www.instagram.com/13kitsch/"
          target="_blank"
          className=" flex items-center justify-center bg-[#EE218A] border border-black h-8 w-40 text-center rounded-full absolute  cursor-pointer  hover:w-72 z-30 duration-1000"
        >
          <p>Instagram</p>
        </a>
        <a className=" flex items-center justify-center bg-[#006DD1] border border-black h-8 w-36 text-center rounded-full  absolute left-[136px] cursor-pointer hover:w-56 z-20 duration-1000">
          facebook
        </a>
        <a className=" flex items-center justify-center bg-white border border-black h-8 w-24 text-center rounded-full text-black  absolute left-[255px] cursor-pointer  hover:w-40 duration-1000">
          TikTok
        </a>
      </div>
      <div className="font-bold italic text-7xl">
        <h1 className="text-border-white">Kitsch</h1>
      </div>
      <div className="flex relative w-full justify-end mr-14">
        <Link href="/cart">
          <div className="cursor-pointer hover:text-border-white text-blacktransition-colors duration-500">
            <p className="font-bold text-base">CARRITO</p>
            <span className="rounded-full border border-black bg-white w-[26px] h-[26px] text-center absolute bottom-3 -right-7">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
      <hr className="border-black w-full" />
      <hr className="border-black w-full" />
      <hr className="border-black w-full" />
    </header>
  );
}
