import React from "react";
import ItemShoppingCard from "../ItemShoppingCard/ItemShoppingCard";

export default function Shoppingcart() {
  return (
    <div className="min-h-screen col-span-2 bg-basic-gary border-r border-black p-12">
      <div className="flex text-2xl items-center my-5">
        <h2 className="font-medium ">MI CARRITO DE COMPRAS</h2>
        <p className="text-sm">{"(2)"}</p>
      </div>
      <div>
        <ItemShoppingCard />
        <ItemShoppingCard />
        <ItemShoppingCard />
      </div>
    </div>
  );
}
