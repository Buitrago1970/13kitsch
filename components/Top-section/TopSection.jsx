import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

export default function HeaderSection() {
  return (
    <>
      <section className="section-top">
        <Header />
        <Navbar />
      </section>
    </>
  );
}
