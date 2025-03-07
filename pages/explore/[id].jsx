import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/product/productSlice";
import { ToastContainer, toast } from 'react-toastify';

import { createClient } from "contentful";
import ProductPageTemplate from "../../components/ProductPageTemplate/ProductPageTemplate";
export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorName, setSelectedColorName] = useState("");
  const [colorExists, setColorExists] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();
  //get data product

  useEffect(() => {
    const getStataicProps = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({
        content_type: "exponer",
        "fields.slug": id,
      });
      setProduct(res.items[0].fields);
    };
    getStataicProps();
  }, [id]);

  //save color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.getAttribute("data-value"));
    setSelectedColorName(event.target.getAttribute("color-name"));
  };

  // save size
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  //add to cart
  function handleAddToCart() {
    if (colorExists) {
      if (selectedColor === "") {
        toast.info("Selecciona color ");
        return;
      }
    }
    if (selectedSize === "") {
      toast.info("Selecciona talla ");
      return;
    }
    dispatch(addToCart({ product, selectedSize, selectedColorName, quantity }));
  }
  //go to cart
  function handleGoToCart() {
    if (colorExists) {
      if (selectedColor === "") {
        toast.info("Selecciona color ");
        return;
      }
    }
    if (selectedSize === "") {
      toast.info("Selecciona talla ");
      return;
    }
    dispatch(addToCart({ product, selectedSize, selectedColorName, quantity }));
    router.push("/cart");
  }
  //format price
  let formattedPrice;

  if (product.price) {
    formattedPrice = product.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {
    if (product.colorsSlice === undefined) {
      setColorExists(false);
    } else {
      setColorExists(true);
    }
  }, [product]);

  return (
    <>
     <ToastContainer position="top-center" />
     <ProductPageTemplate
       product={product}
       selectedColor={selectedColor}
       colorExists={colorExists}
       selectedSize={selectedSize}
       formattedPrice={formattedPrice}
       handleGoToCart={handleGoToCart}
       handleAddToCart={handleAddToCart}
       handleSizeChange={handleSizeChange}
       handleColorChange={handleColorChange}
     />
    </>
  );
}
