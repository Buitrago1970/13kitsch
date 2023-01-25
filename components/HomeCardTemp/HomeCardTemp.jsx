import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/product/productSlice";

export default function HomeCardTemp() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:1337/api/products?populate=*"
      );
      dispatch(
        setProducts({ type: "FETCH_SUCCESS", payload: result.data.data })
      );
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="h-10 border-b border-black flex items-center px-3">
        <p className="">
          {products.products.payload && products.products.payload.length}{" "}
          Productos
        </p>
      </div>
      <section className="w-full min-h-screen grid grid-cols-3">
        {products.products.payload &&
          products.products.payload.map((product) => (
            <Link
              href="/product/[id]"
              as={`/product/${product.id}`}
              key={product.id}
            >
              <div className="h-[550px] border-r border-b border-black flex flex-col items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700">
                <div className="w-full h-3/4 relative mt-10">
                  <Image
                    src={`http://localhost:1337${product.attributes.image.data[0].attributes.formats.medium.url}`}
                    alt="test"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
                <div className="text-center absolute bottom-1 text-sm mb-10">
                  <p className="font-bold">{product.attributes.name}</p>
                  <p className="font-light">colors</p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
}
