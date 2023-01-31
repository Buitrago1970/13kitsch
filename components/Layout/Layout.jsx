import React from "react";
// import Navbar from "../Navbar/Navbar";
import TopSection from "../Top-section/TopSection";

export default function Layout({ children }) {
  return (
    <>
      {/* <TopSection /> */}
      {children}
      <footer className="grid  grid-cols-2  border-t border-black bg-gray-100  items-center ">
        <div className="px-2 font-semibold text-sm my-1">
          <p className="font-normal text-base mb-2">CONECTAR</p>
          <a
            href="https://www.instagram.com/13kitsch/"
            target="_blank"
            rel="noreferrer"
            className="  cursor-pointer hover:text-gray-400 duration-700"
          >
            <p>Instagram</p>
          </a>
          <a
            className="  cursor-pointer  hover:text-gray-400 duration-700 "
            href="https://www.instagram.com/13kitsch/"
            target="_blank"
            rel="noreferrer"
          >
            <p>facebook</p>
          </a>
          <a
            className="  rounded-full cursor-pointer   hover:text-gray-400 duration-700"
            href="https://www.instagram.com/13kitsch/"
            target="_blank"
            rel="noreferrer"
          >
            <p>TikTok</p>
          </a>
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
