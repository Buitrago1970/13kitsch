import React from "react";
import ItemShoppingCard from "../ItemShoppingCard/ItemShoppingCard";

export default function Shoppingcart({ cart }) {
  return (
    <div className="row-2 p-5 col-span-2 bg-basic-gary pb-28 border-b  border-black md:p-12 md:col-1 md:border-r ">
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
