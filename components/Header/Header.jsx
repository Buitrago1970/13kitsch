import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Header() {
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="grid-cols-2 grid-rows-1 h-16 grid-header relative px-5  bg-header sm:grid-cols-1 md:grid-header  md:h-20  ">
      <div className="hidden  md:flex items-center justify-between w-full text-white font-semibold text-border ">
        <a
          href="https://www.instagram.com/13kitsch/"
          target="_blank"
          rel="noreferrer"
          className=" flex items-center justify-center  cursor-pointer hover:text-gray-400 duration-700"
        >
          <p>Instagram</p>
        </a>
        <a
          className=" flex items-center justify-center  cursor-pointer  hover:text-gray-400 duration-700 "
          href="https://www.instagram.com/13kitsch/"
          target="_blank"
          rel="noreferrer"
        >
          facebook
        </a>
        <a
          className=" flex items-center justify-centertext-center rounded-full cursor-pointer text-orange-400  hover:text-gray-400 duration-700"
          href="https://www.instagram.com/13kitsch/"
          target="_blank"
          rel="noreferrer"
        >
          TikTok
        </a>
      </div>
      <div className="text-5xl font-bold italic sm:text-7xl">
        <h1 className="text-border-white">Kitsch</h1>
      </div>
      <div className="flex absolute mr-24 w-full justify-end md:relative md:mr-14">
        <Link href="/cart">
          <div className=" cursor-pointer hover:text-border-white text-blacktransition-colors duration-500">
            <p className="font-bold text-base">CARRITO</p>
            <span
              className={`${
                cart.length > 0 ? "full rounded" : "bg-white rounded-full"
              } flex justify-center items-center  border border-black  w-[26px] h-[26px] text-center absolute bottom-3 -right-7 duration-700`}
            >
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
      <hr className="hidden md:block border-black w-full" />
      <hr className="hidden md:block border-black w-full" />
      <hr className="hidden md:block border-black w-full" />
    </header>
  );
}
