import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Header() {
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="grid-header px-14  h-20">
      <div className="flex items-center justify-between w-full text-white font-semibold text-border ">
        <a
          href="https://www.instagram.com/13kitsch/"
          target="_blank"
          className=" flex items-center justify-center  cursor-pointer hover:text-gray-400 duration-700"
        >
          <p>Instagram</p>
        </a>
        <a className=" flex items-center justify-center  cursor-pointer  hover:text-gray-400 duration-700 ">
          facebook
        </a>
        <a className=" flex items-center justify-centertext-center rounded-full cursor-pointer text-orange-400  hover:text-gray-400 duration-700">
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
