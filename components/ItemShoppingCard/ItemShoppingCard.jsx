import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../features/product/productSlice";

export default function ItemShoppingCard(product) {
  const dispatch = useDispatch();
  const { product: productData } = product.product;
  const { color, size } = product.product;

  //get image
  let image = productData.image.data[0].attributes.url;

  //format price
  let formattedPrice;

  if (productData.price) {
    formattedPrice = productData.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  //delete to cart
  function handleDeleteToCart() {
    // form alert to confirm delete
    const id = productData.Slug;

    if (window.confirm("¿Estás seguro de querer eliminar este producto?")) {
      dispatch(deleteFromCart({ id }));
    }
  }

  return (
    <div className=" grid overflow-hidden mb-5 border-b border-black grid-cols-1  bg-white md:grid-cols-2 md:grid-rows-[70px_minmax(500px,_1fr)_40px]  ">
      <div className="h-[500px]  border-black row-span-3 p-2 md:border-r ">
        <div className="relative h-full ">
          <div className="  ">
            <Image
              src={`http://localhost:1337${image}`}
              alt="13Kitsch"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <svg focusable="false" aria-hidden="true"></svg>
        </div>
      </div>
      <div className="flex flex-col border-t border-b border-black p-4  font-semibold text-center ">
        <p className="text-xs">{productData.Slug}</p>
        <p className="uppercase text-xl ">{productData.name}</p>
      </div>
      <div className="flex flex-col justify-between border-b p-4 space-y-10 text-center">
        <div className="text-base ">
          <ul>
            <li>
              <div className="flex justify-between ">
                <span>Color</span>
                <span>{color}</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between ">
                <span>Talla</span>
                <span>{size}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="">{productData.description}</div>
        <div className="flex justify-between">
          <div className="w-10 h-8 border border-black px-4">
            <p>L </p>
          </div>
          <div className="text-xl font-semibold">
            <p>COP ${formattedPrice}</p>
          </div>
        </div>
      </div>
      <div className="px-4 flex items-center h-10">
        <button
          className=" text-red-400 text-xs font-semibold lowercase"
          onClick={() => {
            handleDeleteToCart();
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
