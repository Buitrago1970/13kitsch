import React from "react";
import axios from "axios";
import Bill from "../components/Bill/Bill";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import ProductCard from "../components/ProductCard/ProductCard";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopularProducts } from "../features/product/productSlice";

export default function Cart() {
  const products = useSelector((state) => state.products);
  const popular = useSelector((state) => state.products.popular);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = React.useState(0);

  // cal total price
  useEffect(() => {
    let totalPrice = 0;

    if (products.cart.length > 0) {
      products.cart.forEach((product) => {
        totalPrice += product.product.price * product.quantity;
      });
    }
    setTotalPrice(totalPrice);
  }, [dispatch, products.cart]);

  const URL = "http://localhost:1337/api/recommendeds?populate=*";

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL);
      dispatch(
        setPopularProducts({ type: "FETCH_SUCCESS", payload: result.data.data })
      );
    }
    fetchData();
  }, [dispatch]);

  if (products.cart.length === 0) {
    return (
      <div className="flex flex-col mt-20">
        <h1 className="text-2xl font-semibold mb-16 text-center">
          Algunos productos que podrían interesarte ✨
        </h1>
        <div className="grid-cols-2 w-full grid md:grid-cols-3 lg:grid-cols-4 border-t border-black">
          {popular.payload &&
            popular.payload.map((popularProduct) => (
              <ProductCard product={popularProduct} link={"/popular"} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <section className="grid-shopping-cart grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-shopping-cart-md">
        <ShoppingCart cart={products.cart} />
        <Bill cart={products.cart} totalPrice={totalPrice} />
      </section>
    );
  }
}
