import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/product/productSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCardTemp() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const URL = "http://localhost:1337/api/products?populate=*";

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL);
      dispatch(
        setProducts({ type: "FETCH_SUCCESS", payload: result.data.data })
      );
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="h-10 border-b products-count flex items-center px-3 border-black">
        <p className=" text-sm ">
          {products.products.payload && products.products.payload.length}{" "}
          Resultados
        </p>
      </div>
      <section className="grid-cols-2 w-full grid md:grid-cols-3 xl:grid-cols-4">
        {products.products.payload &&
          products.products.payload.map((product) => (
            <Link
              href="/product/[id]"
              as={`/product/${product.id}`}
              key={product.id}
            >
              <div className="flex flex-col justify-evenly h-[340px] border-r border-b border-black items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700 md:h-[500px] md:justify-around">
                <div className="w-full h-3/4 relative ">
                  <Slider {...settings}>
                    {product.attributes.image.data.map((image) => (
                      <Image
                        src={`http://localhost:1337${image.attributes.formats.medium.url}`}
                        alt="test"
                        width={900}
                        height={900}
                        quality={100}
                        objectFit="contain"
                      />
                    ))}
                  </Slider>
                </div>
                <div className=" text-center text-sm ">
                  <p className="font-bold">
                    {products.products.payload[0].attributes.name}
                  </p>
                  <p className="font-light">colors</p>
                </div>
              </div>
            </Link>
          ))}
        {products.products.payload &&
          products.products.payload.map((product) => (
            <Link
              href="/product/[id]"
              as={`/product/${product.id}`}
              key={product.id}
            >
              <div className="flex flex-col justify-evenly h-[340px] border-r border-b border-black items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700 md:h-[500px] md:justify-around">
                <div className="w-full h-3/4 relative ">
                  <Slider {...settings}>
                    {product.attributes.image.data.map((image) => (
                      <Image
                        src={`http://localhost:1337${image.attributes.formats.medium.url}`}
                        alt="test"
                        width={900}
                        height={900}
                        quality={100}
                        objectFit="contain"
                      />
                    ))}
                  </Slider>
                </div>
                <div className=" text-center text-sm ">
                  <p className="font-bold">
                    {products.products.payload[0].attributes.name}
                  </p>
                  <p className="font-light">colors</p>
                </div>
              </div>
            </Link>
          ))}
        {products.products.payload &&
          products.products.payload.map((product) => (
            <Link
              href="/product/[id]"
              as={`/product/${product.id}`}
              key={product.id}
            >
              <div className="flex flex-col justify-evenly h-[340px] border-r border-b border-black items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700 md:h-[500px] md:justify-around">
                <div className="w-full h-3/4 relative ">
                  <Slider {...settings}>
                    {product.attributes.image.data.map((image) => (
                      <Image
                        src={`http://localhost:1337${image.attributes.formats.medium.url}`}
                        alt="test"
                        width={900}
                        height={900}
                        quality={100}
                        objectFit="contain"
                      />
                    ))}
                  </Slider>
                </div>
                <div className=" text-center text-sm ">
                  <p className="font-bold">
                    {products.products.payload[0].attributes.name}
                  </p>
                  <p className="font-light">colors</p>
                </div>
              </div>
            </Link>
          ))}
        {products.products.payload &&
          products.products.payload.map((product) => (
            <Link
              href="/product/[id]"
              as={`/product/${product.id}`}
              key={product.id}
            >
              <div className="flex flex-col justify-evenly h-[340px] border-r border-b border-black items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700 md:h-[500px] md:justify-around">
                <div className="w-full h-3/4 relative ">
                  <Slider {...settings}>
                    {product.attributes.image.data.map((image) => (
                      <Image
                        src={`http://localhost:1337${image.attributes.formats.medium.url}`}
                        alt="test"
                        width={900}
                        height={900}
                        quality={100}
                        objectFit="contain"
                      />
                    ))}
                  </Slider>
                </div>
                <div className=" text-center text-sm ">
                  <p className="font-bold">
                    {products.products.payload[0].attributes.name}
                  </p>
                  <p className="font-light">colors</p>
                </div>
              </div>
            </Link>
          ))}
        {products.products.payload &&
          products.products.payload.map((product) => (
            <Link
              href="/product/[id]"
              as={`/product/${product.id}`}
              key={product.id}
            >
              <div className="flex flex-col justify-evenly h-[340px] border-r border-b border-black items-center relative cursor-pointer hover:bg-gray-200 text-blacktransition-colors duration-700 md:h-[500px] md:justify-around">
                <div className="w-full h-3/4 relative ">
                  <Slider {...settings}>
                    {product.attributes.image.data.map((image) => (
                      <Image
                        src={`http://localhost:1337${image.attributes.formats.medium.url}`}
                        alt="test"
                        width={900}
                        height={900}
                        quality={100}
                        objectFit="contain"
                      />
                    ))}
                  </Slider>
                </div>
                <div className=" text-center text-sm ">
                  <p className="font-bold">
                    {products.products.payload[0].attributes.name}
                  </p>
                  <p className="font-light">colors</p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
}
