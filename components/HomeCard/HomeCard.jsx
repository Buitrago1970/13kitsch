import React from "react";

function HomeCard() {
  return (
    <section className="h-screen w-full">
      <div className="h-3/5"></div>
      <div className="h-1/3 flex  flex-col items-center border-t border-black">
        <p className="text-5xl font-semibold my-6 uppercase">Spring 23</p>
        <button className="w-96 h-11 border-black border rounded-md">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default HomeCard;
