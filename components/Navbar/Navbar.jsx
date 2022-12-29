import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.gif";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.products.cart);
  console.log(cart, "cart");

  return (
    <nav>
      <div className="h-14 items-center flex justify-between border-b border-t border-black">
        <div className="h-full w-1/6 border-r border-black relative bg-black">
          <Image src={logo} alt="13Kitsch" objectFit="cover" layout="fill" />
        </div>
        <div className="mr-6 ">
          <p className=" text-emerald-700 border-black  font-bold">
            09:05:02 AM
          </p>
        </div>
      </div>
      <div className="flex justify-between border-b border-black h-10 items-center">
        <div className="w-2/4 ">
          <ul className="flex justify-around">
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li className="relative cursor-pointer">
              <Link href={"/cart"} className="bg-gray-800 rounded-full p-2 ">
                <div>
                  carrito
                  <span className="text-xs text-red-500 absolute right-0 top-0 m-1 bottom-0 -left-4 font-bold">
                    {cart.length}
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link href={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="italic font-semibold mx-6">
          <Link href={"https://www.instagram.com/13kitsch/"}>
            <a className="mr-2">Instagram</a>
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100084927608726"}
          >
            <a className="">Facebook</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
