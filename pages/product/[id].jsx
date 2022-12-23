import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sticky, setSticky] = useState(false);

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
  }, []);
  //save color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // save size
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  let formattedPrice;
  //format price
  if (product && product.price) {
    formattedPrice = product.price.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
  } else {
    formattedPrice = "No disponible";
  }
  const { name, description, price, image, colors, characteristics } = product;
  console.log(selectedColor);
  return (
    <Layout>
      <section className="min-h-screen bg-black grid grid-cols-2 grid-rows-1 text-white ">
        <div className="border-r ">
          <div className="h-screen relative">
            <Image
              src={
                image &&
                `http://localhost:1337${image.data[0].attributes.formats.medium.url}`
              }
              alt="13Kitsch"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="h-screen relative">
            <Image
              src={
                image &&
                `http://localhost:1337${image.data[0].attributes.formats.medium.url}`
              }
              alt="13Kitsch"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <article className="">
          <div className="w-full h-1/5 border-b font-semibold text-center flex flex-col items-center">
            <p className="text-2xl my-6">{name}</p>
            <p className="w-3/4 text-xs">{description}</p>
          </div>
          <div className="border-b h-28 py-4">
            <div className="flex">
              <p className="mx-3">Color</p>
              <ul className="flex">
                <li className="mx-3 capitalize">
                  {colors && colors[0].colors.first}
                </li>
                <li className="mx-3 capitalize">
                  {colors && colors[0].colors.second}
                </li>
                <li className="mx-3 capitalize">
                  {colors && colors[0].colors.third}
                </li>
              </ul>
            </div>
            <div className="flex my-2">
              <button
                className={`text-transparent mx-3 bg-orange-500 rounded-full w-9 h-9 ${
                  selectedColor === "orange" ? "border-white border-2" : ""
                }`}
                value="orange"
                onClick={handleColorChange}
              >
                ••••
              </button>
              <button
                className={`text-transparent mx-3 bg-red-500 rounded-full w-9 h-9 ${
                  selectedColor === "red" ? "border-white border-2" : ""
                }`}
                value="red"
                onClick={handleColorChange}
              >
                ••••
              </button>
              <button
                className={`text-transparent mx-3 bg-blue-500 rounded-full w-9 h-9 ${
                  selectedColor === "blue" ? "border-white border-2" : ""
                }`}
                value="blue"
                onClick={handleColorChange}
              >
                ••••
              </button>
            </div>
          </div>
          <div className="border-b h-24 p-3">
            <p className="">Talla(Col): XL</p>
            <div className="my-3 text-sm">
              <button
                className={`w-12 h-8  mx-2 border rounded-lg ${
                  selectedSize === "M" ? "bg-orange-500" : ""
                }`}
                value="M"
                onClick={handleSizeChange}
              >
                M
              </button>
              <button
                className={`w-12 h-8 mx-2 border rounded-lg ${
                  selectedSize === "L" ? "bg-orange-500" : ""
                }`}
                value="L"
                onClick={handleSizeChange}
              >
                L
              </button>
              <button
                className={`w-12 h-8  mx-2 border rounded-lg ${
                  selectedSize === "XL" ? "bg-orange-500" : ""
                }`}
                value="XL"
                onClick={handleSizeChange}
              >
                XL
              </button>
              <button
                className={`w-12 h-8  mx-2 border rounded-lg ${
                  selectedSize === "XXL" ? "bg-orange-500" : ""
                }`}
                value="XXL"
                onClick={handleSizeChange}
              >
                XXL
              </button>
            </div>
          </div>
          <div className="border-b p-4 text-sm">
            <ul className=" mx-5 list-disc">
              {/* <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li> */}
              <p>{characteristics}</p>
            </ul>
            <div className="mt-8">
              <p>Material: 100% calfskin</p>
              <p>Product ID: 69581423EJY1000</p>
            </div>
          </div>
          <div className=" border-b my-4 flex flex-col items-center ">
            <p className="text-2xl text-center my-4">$ {formattedPrice}</p>
            <button className="w-2/3 h-11 border rounded-md mb-3">
              Añadir a la cesta
            </button>
            <button className="w-2/3 h-11 border rounded-md border-black bg-white text-black mb-3">
              Comprar ahora
            </button>
          </div>
        </article>
      </section>
    </Layout>
  );
}
