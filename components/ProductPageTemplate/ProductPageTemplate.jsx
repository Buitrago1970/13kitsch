import React from "react";
import Image from "next/image";

export default function ProductPage({
  product,
  formattedPrice,
  colorExists,
  selectedColor,
  handleColorChange,
  selectedSize,
  handleSizeChange,
  handleAddToCart,
  handleGoToCart,
}) {
  const { name, description, image, features, size, colorsSlice } = product;
  console.log(colorsSlice, "colorsSlice");
  console.log(colorExists, "colorExists");

  return (
    <section className="grid grid-cols-1 min-h-screen lg:grid-cols-2 grid-rows-1 ">
      <div className=" my-16 ">
        <div className="flex justify-center items-center">
          <Image
            src={image && `https:${image[0].fields.file.url}`}
            alt="13Kitsch"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>
      <article className="border-t border-black lg:border-t-transparent lg:border-l lg:border-zinc-200 ">
        <div className="w-full border-b border-black text-center flex flex-col items-center px-5">
          <p className="text-base mt-4 mb-1 font-semibold lg:text-2xl lg:my-4 ">
            {name}
          </p>
          <p className="w-3/4 text-xs mb-4 lg:hidden"> COP ${formattedPrice}</p>
          <p className="text-xs mb-10">{description}</p>
        </div>
        {colorExists && (
          <div className="border-b border-black py-4 flex flex-col">
            <p className="mx-3 text-sm">Selecionar color:</p>
            <div className="flex justify-center py-3 ">
              {colorsSlice &&
                colorsSlice.fields.thumbnail.map((item, index) => (
                  <button
                    className={`mx-4 w-[70px] h-[70px] border rounded-md flex justify-center items-center  ${
                      selectedColor === colorsSlice.fields.title[index]
                        ? " border-black "
                        : ""
                    }`}
                    key={index}
                    data-value={colorsSlice.fields.title[index]}
                    onClick={handleColorChange}
                    color-name={colorsSlice.fields.title[index]}
                  >
                    <Image
                      src={item && `https:${item.fields.file.url}`}
                      alt="13Kitsch"
                      width={55}
                      height={55}
                      objectFit="cover"
                      key={index}
                      data-value={colorsSlice.fields.title[index]}
                      onClick={handleColorChange}
                      color-name={colorsSlice.fields.title[index]}
                      className={`${
                        selectedColor === colorsSlice.fields.title[index]
                          ? " border-black "
                          : ""
                      }`}
                    />
                  </button>
                ))}
            </div>
          </div>
        )}

        <div className="border-b p-3 border-black">
          <p className="text-sm">Selecionar talla:</p>
          <div className="flex justify-center my-3 text-sm">
            {size &&
              size.map((item, index) => (
                <button
                  className={`w-12 h-8  mx-2 border rounded-lg ${
                    selectedSize === item ? "bg-orange-500  border-black " : ""
                  }`}
                  value={item}
                  onClick={handleSizeChange}
                  key={index}
                >
                  {item}
                </button>
              ))}
          </div>
        </div>
        <div className="border-b border-black p-4 text-sm">
          <ul className=" mx-5 list-disc space-y-1 ">
            {features &&
              features.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <div className="mt-8">
            <p>Material: 100% calfskin</p>
            <p>Product ID: 69581423EJY1000</p>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center font-light ">
          <div className="flex items-center space-x-3">
            <p>COP </p>
            <p className="hidden lg:block text-2xl text-center my-4 font-normal">
              ${formattedPrice}
            </p>
          </div>
          <button
            className="w-11/12 lg:w-2/3 h-11 border rounded-md mb-3 bg-black text-white hover:opacity-80"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Añadir a la cesta
          </button>
          <button
            className="w-11/12 lg:w-2/3  h-11 border rounded-md border-black bg-white text-black mb-3 hover:opacity-80"
            onClick={() => {
              handleGoToCart();
            }}
          >
            Comprar ahora
          </button>
        </div>
      </article>
    </section>
  );
}
