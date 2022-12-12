/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function HomeCard() {
  return (
    <section className="h-screen w-full">
      <div className="h-3/4 w-full relative">
        <Image
          src="https://balenciaga.dam.kering.com/m/4f130129f6cc026b/Large-26_New_Design_Balcom_HP_and_Balcon-HP_Mobile_PR_Winter22Campaign_2600x1300px_-ratio_200-_No_Logo_5.jpg"
          alt="test"
          objectFit="cover"
          layout="fill"
          width={100}
          height={100}
        />
      </div>
      <div className="h-1/4 flex flex-col items-center border-t border-black  ">
        <p className="text-5xl font-semibold my-6 uppercase">Spring 23</p>
        <button className="w-96 h-11 border-black border rounded-md">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default HomeCard;
