import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCard({ product, link }) {
  const [hoverItemCard, setHoverItemCard] = useState(false);
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(900);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  const formattedPrice = (price) => {
    let formattedPrice;
    formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `$ ${formattedPrice}`;
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setWidth(270);
        setHeight(270);
      } else {
        setWidth(900);
        setHeight(900);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      href={`${link}/${product.id}`}
      as={`${link}/${product.id}`}
      key={product.id}
    >
      <div
        className="flex flex-col justify-evenly h-[400px] border-r border-b border-black items-center relative cursor-pointer   md:h-[500px] md:justify-around md:pt-2"
        onMouseEnter={() => setHoverItemCard(true)}
        onMouseLeave={() => setHoverItemCard(false)}
      >
        <div className="w-full h-3/4 relative ">
          <Slider {...settings}>
            {product.attributes.image.data.map((image) => (
              <Image
                src={`http://localhost:1337${image.attributes.url}`}
                alt="test"
                width={width}
                height={height}
                quality={100}
                objectFit="contain"
              />
            ))}
          </Slider>
        </div>
        <div
          className={`${
            hoverItemCard ? "opacity-0" : ""
          } text-center text-xs space-y-0 relative flex flex-col items-center h-full justify-center duration-700`}
        >
          <p className="font-bold uppercase">{product.attributes.name}</p>
          <p className="font-light">
            {formattedPrice(product.attributes.price)}
          </p>
        </div>
        <div
          className={`${
            hoverItemCard ? "" : "opacity-0"
          } flex space-x-5  items-center absolute  bottom-16  duration-700 `}
        >
          {product.attributes.colors.map((item) => (
            <>
              <div
                style={{ backgroundColor: item.hashcolor }}
                className="rounded-sm w-4 h-4 border border-black hover:w-[18px] hover:h-[18px] hover:border-2 duration-700"
              ></div>
            </>
          ))}
        </div>
        <div
          className={`${
            hoverItemCard ? "" : "opacity-0"
          } flex space-x-2  items-center absolute  bottom-8  duration-300 text-center`}
        >
          {product.attributes.sizes.map((item) => (
            <>
              <div className="w-4 h-4 flex font-light text-xs  hover:font-medium duration-500">
                {item.size}
              </div>
            </>
          ))}
        </div>
      </div>
    </Link>
  );
}
