import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/product/productSlice";

import Image from "next/image";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [existColor, setExistColor] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();
  //get data product
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:1337/api/populars/${id}?populate=*`
      );
      setProduct(result.data.data.attributes);
    }
    fetchData();
  }, [id]);
  //check if exist color
  useEffect(() => {
    if (
      product.imgcolorslider &&
      product.imgcolorslider.data &&
      product.imgcolorslider.data.length > 0
    ) {
      setExistColor(true);
    }
  }, [product]);

  //save color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.getAttribute("data-value"));
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
    dispatch(addToCart({ product, selectedSize, selectedColor }));
  }
  //go to cart
  function handleGoToCart() {
    if (selectedSize === "") {
      alert("Selecciona talla ");
      return;
    }
    if (existColor) {
      if (selectedColor === "") {
        alert("Selecciona color ");
        return;
      }
    }
    dispatch(addToCart({ product, selectedSize, selectedColor }));
    router.push("/cart");
  }
  //format price
  let formattedPrice;

  if (product.price) {
    formattedPrice = product.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const { name, description, image, features, imgcolorslider } = product;

  console.log(existColor, "existColor");
  return (
    <section className="min-h-screen  grid grid-cols-2 grid-rows-1 ">
      <div className="border-r ">
        <div className="h-screen relative">
          <Image
            src={
              image && `http://localhost:1337${image.data[0].attributes.url}`
            }
            alt="13Kitsch"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <article className="">
        <div className="w-full border-b font-semibold text-center flex flex-col items-center">
          <p className="text-2xl my-4">{name}</p>
          <p className="w-3/4 text-xs mb-4">{description}</p>
        </div>
        {existColor && (
          <div className="border-b  py-4 flex flex-col">
            <p className="mx-3">Selecionar color:</p>
            <div className="flex justify-center py-3">
              {imgcolorslider.data.map((item) => (
                <button
                  className={`mx-4 w-[70px] h-[70px] border rounded-md flex justify-center items-center  ${
                    parseInt(selectedColor) === item.id ? " border-black " : ""
                  }`}
                  key={item.id}
                  data-value={item.id}
                  onClick={handleColorChange}
                >
                  <Image
                    src={
                      image &&
                      `http://localhost:1337${item.attributes.formats.small.url}`
                    }
                    alt="13Kitsch"
                    width={55}
                    height={55}
                    objectFit="cover"
                    key={item.id}
                    data-value={item.id}
                    onClick={handleColorChange}
                    className={`${
                      parseInt(selectedColor) === item.id
                        ? " border-black "
                        : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="border-b  p-3">
          <p className="">Selecionar talla:</p>
          <div className="my-3 text-sm">
            <button
              className={`w-12 h-8  mx-2 border rounded-lg ${
                selectedSize === "M" ? "bg-orange-500  border-black " : ""
              }`}
              value="M"
              onClick={handleSizeChange}
            >
              M
            </button>
            <button
              className={`w-12 h-8 mx-2 border rounded-lg ${
                selectedSize === "L" ? "bg-orange-500  border-black" : ""
              }`}
              value="L"
              onClick={handleSizeChange}
            >
              L
            </button>
            <button
              className={`w-12 h-8  mx-2 border rounded-lg ${
                selectedSize === "XL" ? "bg-orange-500  border-black" : ""
              }`}
              value="XL"
              onClick={handleSizeChange}
            >
              XL
            </button>
            <button
              className={`w-12 h-8  mx-2 border rounded-lg ${
                selectedSize === "XXL" ? "bg-orange-500  border-black" : ""
              }`}
              value="XXL"
              onClick={handleSizeChange}
            >
              XXL
            </button>
          </div>
        </div>
        <div className="border-b p-4 text-sm">
          <ul className=" mx-5 list-disc space-y-1 ">
            {features &&
              features.map((item) => <li key={item.id}>{item.features}</li>)}
          </ul>
          <div className="mt-8">
            <p>Material: 100% calfskin</p>
            <p>Product ID: 69581423EJY1000</p>
          </div>
        </div>
        <div className="  my-4 flex flex-col items-center font-light ">
          <p className="text-2xl text-center my-4 font-normal">
            COP ${formattedPrice}
          </p>
          <button
            className="w-2/3 h-11 border rounded-md mb-3 bg-black text-white hover:opacity-80"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Añadir a la cesta
          </button>
          <button
            className="w-2/3 h-11 border rounded-md border-black bg-white text-black mb-3 hover:opacity-80"
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
