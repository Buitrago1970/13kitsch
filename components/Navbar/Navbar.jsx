import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.gif";
export default function Navbar() {
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
            {/* <li>
              <Link href={"/explore"}>Explorar</Link>
            </li> */}
            <li>
              <Link href={"/cart"}>Carrito</Link>
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
