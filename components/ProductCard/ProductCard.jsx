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
    formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
      href={`${link}/${product.slug}`}
      as={`${link}/${product.slug}`}
      key={product.slug}
    >
      <div
        className="flex flex-col justify-evenly h-[400px] border-r border-b border-black items-center relative cursor-pointer   md:h-[500px] md:justify-around md:pt-2"
        onMouseEnter={() => setHoverItemCard(true)}
        onMouseLeave={() => setHoverItemCard(false)}
      >
        <div className="w-full h-3/4 relative ">
          <Slider {...settings}>
            {product.image.map((image) => (
              <Image
                src={`https:${image.fields.file.url}`}
                alt="test"
                width={width}
                height={height}
                quality={100}
                objectFit="contain"
                key={image.id}
              />
            ))}
          </Slider>
        </div>
        <div
          className={`${
            hoverItemCard ? "opacity-0" : ""
          } text-center text-xs space-y-0 relative flex flex-col items-center h-full justify-center duration-700`}
        >
          <p className="font-bold uppercase">{product.name}</p>
          <p className="font-light">{formattedPrice(product.price)}</p>
        </div>
        <div
          className={`${
            hoverItemCard ? "" : "opacity-0"
          } flex space-x-5  items-center absolute  bottom-16  duration-700 `}
        >
          {product.colors.map((item) => (
            <div
              style={{ backgroundColor: item }}
              className="rounded-sm w-4 h-4 border border-black hover:w-[18px] hover:h-[18px] hover:border-2 duration-700"
              key={item}
            ></div>
          ))}
        </div>
        <div
          className={`${
            hoverItemCard ? "" : "opacity-0"
          } flex space-x-2  items-center absolute  bottom-8  duration-300 text-center`}
        >
          {product.size.map((item) => (
            <div
              className="w-4 h-4 flex font-light text-xs  hover:font-medium duration-500"
              key={item.id}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
