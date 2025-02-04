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
  }, [dispatch]);

  if (cart.length === 0) {
    return (
      <div className="w-full">
        <div className="container mx-auto px-6 py-16 pb-5 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-6 tracking-wide">
              Su carrito está vacío
            </h1>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg font-light tracking-wide mb-12">
              Le invitamos a explorar nuestra exclusiva colección
            </p>
          </div>
        </div>

        <div className="w-full bg-black/95 py-16">
          <div className=" mx-auto px-4">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1">
              {popular && popular.map((product) => (
                <div key={product.sys.id} 
                     className="bg-black/90 p-0.5 transition-colors duration-300 hover:bg-zinc-900">
                  <ProductCard
                    product={product.fields}
                    link={"/popular"}
                    id={product.sys.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="grid-shopping-cart grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-shopping-cart-md">
      <ShoppingCart cart={cart} />
      <Bill cart={cart} totalPrice={totalPrice} />
    </section>
  );
}
