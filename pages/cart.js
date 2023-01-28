import React from "react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Bill from "../components/Bill/Bill";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopularProducts } from "../features/product/productSlice";
import Link from "next/link";
import Image from "next/image";

export default function cart() {
  const products = useSelector((state) => state.products);
  const popular = useSelector((state) => state.products.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:1337/api/populars?populate=*"
      );

      dispatch(
        setPopularProducts({ type: "FETCH_SUCCESS", payload: result.data.data })
      );
    }
    fetchData();
  }, [dispatch]);
  if (products.cart.length === 0) {
    return (
      <div className="flex flex-col mt-20">
        <h1 className="text-2xl font-semibold mb-16 text-center">
          Algunos productos que podrían interesarte ✨
        </h1>
        <div className="grid-cols-2 w-full min-h-screen grid md:grid-cols-3 lg:grid-cols-4">
          {popular.payload &&
            popular.payload.map((product) => (
              <Link
                href="/popular/[id]"
                as={`/popular/${product.id}`}
                key={product.id}
              >
                <div className="h-[500px] border-r border-b border-t border-black flex flex-col items-center relative cursor-pointer hover:bg-gray-100">
                  <div className="w-full h-3/4 relative mt-10">
                    {product.attributes.image.data[0].attributes.url ? (
                      <Image
                        src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
                        alt="test"
                        objectFit="contain"
                        layout="fill"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="text-center absolute bottom-1 text-sm mb-10">
                    <p className="font-bold">{product.attributes.name}</p>
                    <p className="font-light">colors</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <section className="grid-shopping-cart grid grid-cols-1 grid-rows-1 md:grid-cols-3">
        <ShoppingCart cart={products.cart} />
        <Bill cart={products.cart} />
      </section>
    );
  }
}
