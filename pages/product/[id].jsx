import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/product/productSlice";

import Image from "next/image";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorName, setSelectedColorName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();
  //get data product
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:1337/api/products/${id}?populate=*`
      );
      setProduct(result.data.data.attributes);
    }
    fetchData();
  }, [id]);
  //save color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.getAttribute("data-value"));
    setSelectedColorName(event.target.getAttribute("color-name"));
  };

  // save size
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  //add to cart
  function handleAddToCart() {
    if (selectedSize === "") {
      alert("Selecciona talla ");
      return;
    }
    if (selectedColor === "") {
      alert("Selecciona color ");
      return;
    }
    dispatch(addToCart({ product, selectedSize, selectedColorName }));
  }
  //go to cart
  function handleGoToCart() {
    if (selectedSize === "") {
      alert("Selecciona talla ");
      return;
    }
    if (selectedColor === "") {
      alert("Selecciona color ");
      return;
    }
    dispatch(addToCart({ product, selectedSize, selectedColorName }));
    router.push("/cart");
  }
  //format price
  let formattedPrice;

  if (product.price) {
    formattedPrice = product.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const { name, description, image, features, sizes } = product;

  let colorWithImage = [];
  if (product.colors && product.imagecolorslider) {
    colorWithImage = product.colors.map((color, index) => {
      const colorImage = product.imagecolorslider.data[index].attributes.url;
      return {
        id: color.id,
        color: color.color,
        image: colorImage ? colorImage : null,
      };
    });
  }

  return (
    <section className="grid grid-cols-1 min-h-screen lg:grid-cols-2 grid-rows-1 ">
      <div className=" my-16 ">
        <div className="flex justify-center items-center">
          <Image
            src={
              image &&
              `http://localhost:1337${image.data[0].attributes.formats.medium.url}`
            }
            alt="13Kitsch"
            // objectFit="cover"
            // layout="fill"
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
        <div className="border-b border-black py-4 flex flex-col">
          <p className="mx-3 text-sm">Selecionar color:</p>
          <div className="flex justify-center py-3 ">
            {colorWithImage.map((item) => (
              <>
                <button
                  className={`mx-4 w-[70px] h-[70px] border rounded-md flex justify-center items-center  ${
                    parseInt(selectedColor) === item.id ? " border-black " : ""
                  }`}
                  key={item.color}
                  data-value={item.id}
                  onClick={handleColorChange}
                  color-name={item.color}
                >
                  <Image
                    src={image && `http://localhost:1337${item.image}`}
                    alt="13Kitsch"
                    width={55}
                    height={55}
                    objectFit="cover"
                    key={item.color}
                    data-value={item.id}
                    onClick={handleColorChange}
                    color-name={item.color}
                    className={`${
                      parseInt(selectedColor) === item.color
                        ? " border-black "
                        : ""
                    }`}
                  />
                </button>
              </>
            ))}
          </div>
        </div>

        <div className="border-b p-3 border-black">
          <p className="text-sm">Selecionar talla:</p>
          <div className="flex justify-center my-3 text-sm">
            {sizes &&
              sizes.map((item) => (
                <button
                  className={`w-12 h-8  mx-2 border rounded-lg ${
                    selectedSize === item.size
                      ? "bg-orange-500  border-black "
                      : ""
                  }`}
                  value={item.size}
                  onClick={handleSizeChange}
                >
                  {item.size}
                </button>
              ))}
          </div>
        </div>
        <div className="border-b border-black p-4 text-sm">
          <ul className=" mx-5 list-disc space-y-1 ">
            {features &&
              features.map((item) => <li key={item.id}>{item.feature}</li>)}
          </ul>
          <div className="mt-8">
            <p>Material: 100% calfskin</p>
            <p>Product ID: 69581423EJY1000</p>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center font-light ">
          <div className="flex items-center space-x-3">
            <p>COP</p>
            <p className="hidden lg:block text-2xl text-center my-4 font-normal">
              {formattedPrice}
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
