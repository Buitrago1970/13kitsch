import React from "react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Bill from "../components/Bill/Bill";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopularProducts } from "../features/product/productSlice";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const products = useSelector((state) => state.products);
  const popular = useSelector((state) => state.products.popular);
  const dispatch = useDispatch();

  const URL = "http://localhost:1337/api/recommendeds?populate=*";

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL);
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
        <div className="grid-cols-2 w-full grid md:grid-cols-3 lg:grid-cols-4 border-t border-black">
          {popular.payload &&
            popular.payload.map((popularProduct) => (
              <Link
                href="/popular/[id]"
                as={`/popular/${popularProduct.id}`}
                key={popularProduct.id}
              >
                <div className="flex flex-col justify-evenly h-[340px] border-r border-b border-black items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700 md:h-[500px] md:justify-around">
                  <div className="w-full h-3/4 relative ">
                    <Image
                      src={`http://localhost:1337${popularProduct.attributes.image.data[0].attributes.formats.medium.url}`}
                      alt="test"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className=" text-center text-sm ">
                    <p className="font-bold">
                      {popularProduct.attributes.name}
                    </p>
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
      <section className="grid-shopping-cart grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-shopping-cart-md">
        <ShoppingCart cart={products.cart} />
        <Bill cart={products.cart} />
      </section>
    );
  }
}
