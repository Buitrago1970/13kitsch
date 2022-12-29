import React from "react";
import Image from "next/image";

export default function ItemShoppingCard(product) {
  // console.log(product.product.product, "product");
  const { product: productData } = product.product;
  const { color, size } = product.product;
  const image = productData.image.data[0].attributes.formats.medium.url;
  return (
    <div className=" grid overflow-hidden mb-5 border-b border-black grid-cols-2 grid-rows-[70px_minmax(500px,_1fr)_40px] bg-white ">
      <div className="border-r border-black row-span-3 p-2 ">
        <div className=" h-full relative">
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
      <div className="flex flex-col  border-b border-black p-4  font-semibold">
        <p className="text-xs">M46161</p>
        <p className="uppercase text-xl ">{productData.name}</p>
      </div>
      <div className="flex flex-col justify-between border-b p-4">
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
            <p>COP ${productData.price}</p>
          </div>
        </div>
      </div>
      <div className="px-4 flex items-center">
        <p>Eliminar</p>
      </div>
    </div>
  );
}
