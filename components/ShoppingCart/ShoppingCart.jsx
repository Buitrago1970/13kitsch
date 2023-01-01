import React from "react";
import ItemShoppingCard from "../ItemShoppingCard/ItemShoppingCard";

export default function Shoppingcart({ cart }) {
  return (
    <div className="min-h-screen col-span-2 bg-basic-gary border-r border-black p-12">
      <div className="flex text-2xl items-center my-5">
        <h2 className="font-medium ">Cesta</h2>
        <p className="text-sm">({cart.length})</p>
      </div>
      <div>
        {cart.map((product) => (
          <ItemShoppingCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
