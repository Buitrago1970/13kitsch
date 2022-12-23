import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeCardTemp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:1337/api/products?populate=*"
      );
      setProducts(result.data.data);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="h-10 border-b border-black flex items-center px-3">
        <p className="">23 Productos</p>
      </div>
      <section className="w-full h-screen grid grid-cols-3">
        {products.map((product) => (
          <Link href="/product/1" key={product.id}>
            <div className="h-128 border-r border-b border-black flex flex-col justify-center items-center relative cursor-pointer ">
              <div className="w-full h-full relative">
                <Image
                  src={`http://localhost:1337${product.attributes.image.data[0].attributes.formats.medium.url}`}
                  alt="test"
                  objectFit="contain"
                  layout="fill"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-center absolute bottom-1">
                <p>{product.attributes.name}</p>
                <p>{product.attributes.colors[0].number} colors</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}