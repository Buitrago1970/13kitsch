import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="shadow-md">
      <div className="h-14 items-center flex justify-between border-b border-t border-black">
        <div className="h-full w-1/4 border-r border-black relative">
          <Image
            src={
              "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/299929199_466662911984732_799547483397682689_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yma5BsaTLEgAX-8zTfA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCeR5GXLiPUf-N8es02XpW-R2-uidQJ5IvTnRk7GvoVSQ&oe=639BF8C9&_nc_sid=8fd12b"
            }
            alt="13Kitsch"
            objectFit="cover"
            layout="fill"
          />
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
            <li>
              <Link href={"/explore"}>Explorar</Link>
            </li>
            <li>
              <Link href={"/cart"}>Carrito</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contacto</Link>
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
