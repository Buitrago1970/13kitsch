import React from "react";
import ItemShoppingCard from "../ItemShoppingCard/ItemShoppingCard";
import { useSelector } from "react-redux";

export default function Shoppingcart() {
  const products = useSelector((state) => state.products);

  return (
    <div className="min-h-screen col-span-2 bg-basic-gary border-r border-black p-12">
      <div className="flex text-2xl items-center my-5">
        <h2 className="font-medium ">MI CARRITO DE COMPRAS</h2>
        <p className="text-sm">({products.cart.length})</p>
      </div>
      <div>
        {products.cart.map((product) => (
          <ItemShoppingCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
