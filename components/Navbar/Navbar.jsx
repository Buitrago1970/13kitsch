import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.gif";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  // const cart = useSelector((state) => state.products.cart);
  // // actual time
  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // // Setear el tiempo inicial cuando se renderiza el componente en el cliente
  // useEffect(() => {
  //   const initialTime = new Date();
  //   setTime(initialTime);
  // }, []);

  // const timeString = time.toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  //   hour12: true,
  // });
  return <>navbar</>;
}
