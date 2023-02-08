import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/product/productSlice";

import axios from "axios";
import ProductPageTemplate from "../../components/ProductPageTemplate/ProductPageTemplate";
export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorName, setSelectedColorName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();
  //get data product
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:1337/api/explores/${id}?populate=*`
      );
      setProduct(result.data.data.attributes);
    }
    fetchData();
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
    if (selectedSize === "") {
      alert("Selecciona talla ");
      return;
    }
    if (selectedColor === "") {
      alert("Selecciona color ");
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
    if (selectedColor === "") {
      alert("Selecciona color ");
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

  let colorWithImage = [];

  if (product.colors && product.imagecolorslider) {
    colorWithImage = product.colors.map((color, index) => {
      const colorImage = product.imagecolorslider.data[index].attributes.url;
      return {
        id: color.id,
        color: color.color,
        image: colorImage ? colorImage : null,
      };
    });
  }

  return (
    <ProductPageTemplate
      product={product}
      selectedColor={selectedColor}
      selectedSize={selectedSize}
      colorWithImage={colorWithImage}
      formattedPrice={formattedPrice}
      handleGoToCart={handleGoToCart}
      handleAddToCart={handleAddToCart}
      handleSizeChange={handleSizeChange}
      handleColorChange={handleColorChange}
    />
  );
}
