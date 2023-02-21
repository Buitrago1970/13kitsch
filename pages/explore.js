import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExploreProducts } from "../features/product/productSlice";
import { createClient } from "contentful";

export default function Expolore() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.explore);

  useEffect(() => {
    const getStataicProps = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({ content_type: "exponer" });
      dispatch(setExploreProducts(res.items));
    };
    getStataicProps();
  }, []);
  return (
    <>
      <div className="h-10 border-b products-count flex items-center px-3 border-black">
        <p className=" text-sm ">{products && products.length} Resultados</p>
      </div>
      <section className="grid-cols-2 w-full grid md:grid-cols-3 xl:grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard
              product={product.fields}
              link={"/explore"}
              key={product.sys.id}
            />
          ))}
      </section>
    </>
  );
}
