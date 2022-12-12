/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import image from "../../public/Large-35735_SMI_Balenciaga_060_11_V03_2200x1100.jpeg";

function HomeCard() {
  return (
    <section className="h-screen w-full">
      <div className="h-3/4 w-full bg-slate-500 relative"></div>
      <div className="h-1/4 flex flex-col items-center border-t border-black  bg-fuchsia-800">
        <p className="text-5xl font-semibold my-6 uppercase">Spring 23</p>
        <button className="w-96 h-11 border-black border rounded-md">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default HomeCard;
