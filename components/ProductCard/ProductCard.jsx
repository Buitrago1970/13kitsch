import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { convertPrice, formatPrice } from '../../utils/currencyUtils';

export default function ProductCard({ product, link, id }) {
  const { selectedCurrency, rates } = useSelector((state) => state.currency);
  const [hoverItemCard, setHoverItemCard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(900);

  const formattedPrice = (price) => {
    const convertedPrice = convertPrice(price, rates, selectedCurrency);
    return formatPrice(convertedPrice, selectedCurrency);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWidth(200);
        setHeight(200);
      } else if (window.innerWidth < 768) {
        setWidth(270);
        setHeight(270);
      } else {
        setWidth(400);
        setHeight(400);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1
    );
  };

  return (
    <Link
      href={`${link}/${product.slug}`}
      as={`${link}/${product.slug}`}
      key={id}
    >
      <div
        className="flex flex-col rounded-sm min-h-[300px] sm:min-h-[400px] max-h-[600px] h-full bg-white m-1 items-center relative cursor-pointer pt-3"
        onMouseEnter={() => setHoverItemCard(true)}
        onMouseLeave={() => setHoverItemCard(false)}
      >
        <div className="justify-start relative flex flex-col w-full pl-3 mb-2">
          <p className="text-sm font-bold uppercase">{product.name}</p>
          <p className="font-light text-xs mb-2">{formattedPrice(product.price)}</p>
          <div className="flex gap-1">
          {product.colors?.map((item, index) => (
            <p
              style={{ backgroundColor: item }}
              className=" rounded-xl w-3 h-3 border border-y-gray-300 hover:w-[18px] hover:h-[18px] hover:border-2 duration-700"
              key={index}
            ></p>
          ))}
          </div>
        </div>
        
        <div className="flex-1 w-full relative overflow-hidden flex items-center justify-center p-4">
          {product.image && product.image[currentImageIndex] && (
            <div className="relative w-full h-full aspect-square flex justify-center items-center">
              <Image
                src={`https:${product.image[currentImageIndex].fields.file.url}`}
                alt={product.name}
                width={width}
                height={height}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                className="object-contain"
                loading="lazy"
                priority={false}
              />
            </div>
          )}
          {hoverItemCard && product.image.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                &#8592;
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                &#8594;
              </button>
            </>
          )}
        </div>

        <div
          className={`${
            hoverItemCard ? "" : "opacity-0"
          } flex items-center justify-center gap-2 w-full py-4 duration-300`}
        >
          {product.size.map((item, index) => (
            <div
              className="px-2 py-1 text-xs border border-gray-300 rounded hover:border-black hover:bg-gray-100 transition-all duration-200 cursor-pointer uppercase"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
