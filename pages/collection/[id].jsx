import React from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function Collections() {
  const [products, setProducts] = useState([]);
  const {
    query: { id },
  } = useRouter();
  const url = `https://strapikitsch-app-lpgoh.ondigitalocean.app/collections/${id}?populate=*`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setProducts(response.data.data.attributes.products.data);
    }
    fetchData();
  }, [url]);
  return (
    <>
      <div className="h-10 border-b border-black flex items-center px-3">
        <p className="">23 Productos</p>
      </div>
      <section className="w-full h-screen grid grid-cols-3">
        {products &&
          products.map((product) => (
            <Link href="/product/1" key={product.id}>
              <div className="h-128 border-r border-b border-black flex flex-col justify-center items-center relative cursor-pointer">
                <div className="w-full h-full relative">
                  <Image
                    src={product.attributes}
                    alt="test"
                    objectFit="cover"
                    layout="fill"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center absolute bottom-1">
                  <p>{product.attributes.name}</p>
                  <p>2 colors</p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
}
