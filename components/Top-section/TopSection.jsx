import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

export default function HeaderSection() {
  return (
    <section className="bg-pink-500">
      <Header />
      <Navbar />
    </section>
  );
}
