import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/product/productSlice";
import { createClient } from "contentful";
import ProductCard from "../ProductCard/ProductCard";
export default function HomeCardTemp() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getStaticProps = async () => {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({ content_type: "product" });
      dispatch(setProducts(res.items));
    };
    getStaticProps();
  }, [dispatch]);
  return (
    <>
      <div className="h-10 border-b products-count flex items-center px-3 border-black">
        <p className=" text-sm ">
          {products.products && products.products.length} - Resultados
        </p>
      </div>
      <section className="grid-cols-2 w-full grid md:grid-cols-3 xl:grid-cols-4">
        {products.products &&
          products.products.map((product) => (
            <ProductCard
              product={product.fields}
              link={"/product"}
              id={product.sys.id}
              key={product.sys.id}
            />
          ))}
      </section>
    </>
  );
}
