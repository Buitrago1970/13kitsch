import React from "react";

import Bill from "../components/Bill/Bill";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import ProductCard from "../components/ProductCard/ProductCard";
import { createClient } from "contentful";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopularProducts } from "../features/product/productSlice";

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const popular = useSelector((state) => state.products.popular);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = React.useState(0);

  // cal total price
  useEffect(() => {
    let totalPrice = 0;
    if (cart.length > 0) {
      cart.forEach((product) => {
        totalPrice += product.product.price * product.quantity;
      });
    }
    setTotalPrice(totalPrice);
  }, [dispatch, cart]);

  useEffect(() => {
    const getStataicProps = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({ content_type: "cart" });
      dispatch(setPopularProducts(res.items));
    };
    getStataicProps();
  }, []);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col mt-20">
        <h1 className="text-2xl font-semibold mb-16 text-center">
          Algunos productos que podrían interesarte ✨
        </h1>
        <div className="grid-cols-2 w-full grid md:grid-cols-3 lg:grid-cols-4 border-t border-black">
          {popular &&
            popular.map((product) => (
              <ProductCard
                product={product.fields}
                link={"/popular"}
                key={product.sys.id}
                id={product.sys.id}
              />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <section className="grid-shopping-cart grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-shopping-cart-md">
        <ShoppingCart cart={cart} />
        <Bill cart={cart} totalPrice={totalPrice} />
      </section>
    );
  }
}
