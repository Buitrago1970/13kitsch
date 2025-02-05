import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/product/productSlice";
import { convertPrice, formatPrice } from "../../utils/currencyUtils";

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

  const { selectedCurrency, rates } = useSelector((state) => state.currency);

  useEffect(() => {
    const getStataicProps = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({
        content_type: "product",
        "fields.slug": id,
      });
      setProduct(res.items[0].fields);
    };
    getStataicProps();
  }, [id, dispatch]);

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
        alert("Selecciona color ");
        return;
      }
    }
    if (selectedSize === "") {
      alert("Selecciona talla ");
      return;
    }
    dispatch(addToCart({ product, selectedSize, selectedColorName, quantity }));
  }
  //go to cart
  function handleGoToCart() {
    if (selectedSize === "") {
      alert("Selecciona talla ");
      return;
    }
    if (colorExists) {
      if (selectedColor === "") {
        alert("Selecciona color ");
        return;
      }
    }
    dispatch(addToCart({ product, selectedSize, selectedColorName, quantity }));
    router.push("/cart");
  }
  //format price
  let formattedPrice;

  if (product.price) {
    const convertedPrice = convertPrice(product.price, rates, selectedCurrency);
    formattedPrice = formatPrice(convertedPrice, selectedCurrency);
  }
  useEffect(() => {
    if (product.colorsSlice === undefined) {
      setColorExists(false);
    } else {
      setColorExists(true);
    }
  }, [product]);

  return (
    <ProductPageTemplate
      product={product}
      selectedColor={selectedColor}
      colorExists={colorExists}
      selectedSize={selectedSize}
      formattedPrice={formattedPrice}
      selectedCurrency={selectedCurrency}
      handleGoToCart={handleGoToCart}
      handleAddToCart={handleAddToCart}
      handleSizeChange={handleSizeChange}
      handleColorChange={handleColorChange}
    />
  );
}
