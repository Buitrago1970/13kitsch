import React from "react";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExploreProducts } from "../features/product/productSlice";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Expolore() {
  const API_URL = process.env.NEXT_PUBLIC_URL;
  const URL = `${API_URL}/api/explores?populate=*`;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL);
      dispatch(
        setExploreProducts({ type: "FETCH_SUCCESS", payload: result.data.data })
      );
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="h-10 border-b products-count flex items-center px-3 border-black">
        <p className=" text-sm ">
          {products.explore.payload && products.explore.payload.length}{" "}
          Resultados
        </p>
      </div>
      <section className="grid-cols-2 w-full grid md:grid-cols-3 xl:grid-cols-4">
        {products.explore.payload &&
          products.explore.payload.map((product) => (
            <ProductCard
              product={product}
              link={"/explore"}
              key={product.id}
              URL={URL}
            />
          ))}
      </section>
    </>
  );
}
