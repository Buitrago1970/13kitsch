import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="grid  grid-cols-2  border-t border-black bg-gray-100 ">
        <div className="px-2">
          <p>CONECTAR</p>
          <div className="italic font-semibold flex flex-col text-sm">
            <a>Instagram</a>
            <a>Facebook</a>
          </div>
        </div>
        <div className="text-sm font-bold italic text-end px-2">
          <p>Lamanos: +57 20 33 18 60 32</p>
          <p>Lunes-Sabados 9am - 6:30pm</p>
        </div>
        <div className=" text-center text-xs col-span-2 py-2 border-black border-t">
          {" "}
          ® 2022 Kitsch
        </div>
      </footer>
    </>
  );
}
