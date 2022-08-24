import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="h-14 items-center flex justify-between border-b border-black">
        <div className="h-full w-1/4 border-r border-black">13Kitsch</div>
        <div className="mr-6 ">
          <p className=" text-lime-600  ">09:05:02 AM</p>
        </div>
      </div>
      <div className="flex justify-between border-b border-black h-10 items-center">
        <div className="w-2/4 ">
          <ul className="flex justify-around">
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>Explorar</Link>
            </li>
            <li>
              <Link href={"/"}>Carrito</Link>
            </li>
            <li>
              <Link href={"/"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="italic font-semibold mx-6">
          <a className="mr-2">Instagram</a>
          <a>Facebook</a>
        </div>
      </div>
    </nav>
  );
}
