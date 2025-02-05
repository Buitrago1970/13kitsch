import React from "react";
import Header from "../Header/Header";

export default function HeaderSection() {
  return (
    <>
      <section className="section-top">
        <Header />
      </section>
      <div className="pt-11 md:pt-11">{/* This div adds padding to prevent content from being hidden behind the fixed header */}</div>
    </>
  );
}
