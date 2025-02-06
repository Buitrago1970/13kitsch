import React from "react";
import Image from "next/image";

export default function ProductPage({
  product,
  formattedPrice,
  selectedCurrency,
  colorExists,
  selectedColor,
  handleColorChange,
  selectedSize,
  handleSizeChange,
  handleAddToCart,
  handleGoToCart,
}) {
  // Agregamos un loader mientras "product" no esté disponible
  if (!product) {
    return (
      <section className="grid grid-cols-1 min-h-screen lg:grid-cols-2 grid-rows-1 gap-8 px-4">
        {/* Skeleton para la imagen */}
        <div className="my-16">
          <div className="flex justify-center items-center">
            <div className="w-[500px] h-[500px] bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Skeleton para la información */}
        <article className="border-t border-black lg:border-t-transparent lg:border-l lg:border-zinc-200">
          {/* Título y descripción */}
          <div className="w-full border-b border-black p-5 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
            <div className="h-20 bg-gray-200 rounded w-5/6 mx-auto animate-pulse"></div>
          </div>

          {/* Colores */}
          <div className="border-b border-black py-4">
            <div className="flex justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-[70px] h-[70px] bg-gray-200 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Tallas */}
          <div className="border-b border-black p-4">
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Características */}
          <div className="border-b border-black p-4 space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            ))}
          </div>

          {/* Botones */}
          <div className="my-4 flex flex-col items-center space-y-3">
            <div className="w-2/3 h-11 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-2/3 h-11 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </article>
      </section>
    );
  }

  const { name, description, image, features, size, colorsSlice } = product;
  return (
    <section className="grid grid-cols-1 min-h-screen lg:grid-cols-2 grid-rows-1 gap-8 px-4">
      <div className="my-16">
        <div className="flex justify-center items-center rounded-lg shadow-lg overflow-hidden">
          <Image
            src={image && `https:${image[0].fields.file.url}`}
            alt="13Kitsch"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>
      <article className="border-t border-black lg:border-t-transparent lg:border-l lg:border-zinc-200">
        <div className="w-full border-b border-black text-center flex flex-col items-center px-5">
          <p className="text-xl mt-4 mb-1 font-bold lg:text-3xl lg:my-4">
            {name}
          </p>
          <p className="w-3/4 text-xs mb-4 lg:hidden">
            {formattedPrice}
          </p>
          <p className="text-sm mb-10 text-gray-600">{description}</p>
        </div>
        {colorExists && (
          <div className="border-b border-black py-4 flex flex-col">
            <p className="mx-3 text-sm">Selecionar color:</p>
            <div className="flex justify-center py-3">
              {colorsSlice &&
                colorsSlice.fields.thumbnail.map((item, index) => (
                  <button
                    className={`mx-4 w-[70px] h-[70px] border rounded-md flex justify-center items-center transition duration-200 transform hover:scale-105 ${
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
                      className={`transition duration-200 transform hover:scale-105 ${
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
                  className={`w-12 h-8 mx-2 border rounded-lg transition duration-200 transform hover:scale-105 ${
                    selectedSize === item ? "bg-orange-500 border-black" : ""
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
          <ul className="mx-5 list-disc space-y-1">
            {features &&
              features.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <div className="mt-8 text-gray-700">
            <p>Material: 100% calfskin</p>
            <p>Product ID: 69581423EJY1000</p>
          </div>
          {/* Nueva sección de información adicional */}
          <div className="mt-6 text-gray-700 border-t pt-4">
            <p className="font-semibold">Detalles del Producto</p>
            <p>Marca: 13Kitsch Premium</p>
            <p>Calidad: Ropa de alta calidad, confeccionada con atención al detalle.</p>
            <p>Instrucciones de cuidado: Lavar a mano o en ciclo suave.</p>
            <p>Origen: Diseñado y fabricado localmente.</p>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center font-light">
          <div className="flex items-center space-x-3">
            <p className="hidden lg:block text-2xl text-center my-4 font-normal">
              {formattedPrice}
            </p>
          </div>
          <button
            className="w-11/12 lg:w-2/3 h-11 border rounded-md mb-3 bg-black text-white hover:opacity-80 transition duration-200 transform hover:scale-105"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Añadir a la cesta
          </button>
          <button
            className="w-11/12 lg:w-2/3 h-11 border rounded-md border-black bg-white text-black mb-3 hover:opacity-80 transition duration-200 transform hover:scale-105"
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
