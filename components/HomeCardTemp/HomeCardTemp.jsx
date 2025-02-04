import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/product/productSlice";
import { createClient } from "contentful";
import ProductCard from "../ProductCard/ProductCard";

export default function HomeCardTemp() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const x = async () => {
      setIsLoading(true);
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({ content_type: "product" });
      dispatch(setProducts(res.items));
      setIsLoading(false);
    };
    x();
  }, [dispatch]);

  const SkeletonCard = () => (
    <div className="flex flex-col rounded-sm min-h-[400px] max-h-[600px] h-full bg-white m-1 items-center relative pt-3">
      <div className="justify-start relative flex flex-col w-full pl-3 mb-2">
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded-xl w-3 animate-pulse"></div>
      </div>
      <div className="flex-1 w-full p-4">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center gap-2 w-full py-4">
        <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="h-10 border-b products-count flex items-center px-3 border-black">
        <p className="text-sm">
          {!isLoading && products.products && products.products.length} - Resultados
        </p>
      </div>
      <section className="grid-cols-2 w-full grid md:grid-cols-3 min-h-screen bg-black p-1">
        {isLoading ? (
          <>
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </>
        ) : (
          products.products &&
          products.products.map((product) => (
            <ProductCard
              product={product.fields}
              link={"/product"}
              id={product.sys.id}
              key={product.sys.id}
            />
          ))
        )}
      </section>
    </>
  );
}
