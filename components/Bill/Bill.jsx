import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTotal } from "../../features/product/productSlice";

export default function Bill({ cart, totalPrice }) {
  const dispatch = useDispatch();
  //cal subtotal price
  const subtotal = totalPrice;

  //call delivery
  let delivery = 0;
  //free delivery
  const freeDelivery = 80000;
  //cal total
  const total = subtotal + delivery;
  //cal free delivery
  if (subtotal > freeDelivery) {
    delivery = 0;
  } else {
    delivery = 7000;
  }

  //format price
  let formattedSubtotal = subtotal.toLocaleString("es-CO");
  let formattedDelivery = delivery.toLocaleString("es-CO");
  let formattedTotal = total.toLocaleString("es-CO");
  let formattedFreeDelivery = freeDelivery.toLocaleString("es-CO");

  return (
    <div className="h-72 row-1 mt-1 md:h-64 md:grid-area-none md:col-3 ">
      <div className="w-full p-5 md:p-8">
        <ul className="mb-10 md:mb-5">
          <li>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>COP ${formattedSubtotal}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between font-semibold mt-2">
              <span>Envio</span>
              {delivery > 0 ? (
                <span>COP ${formattedDelivery}</span>
              ) : (
                <span className="text-green-500 italic">Gratis</span>
              )}
            </div>
          </li>
          <li>
            <div className="flex justify-between font-semibold mt-6">
              <span>Total</span>
              <span>COP ${formattedTotal}</span>
            </div>
          </li>
        </ul>
        <div className="text-xs italic text-center flex space-x-1 justify-center">
          <p>Pedidos superiores a ${formattedFreeDelivery}, envio</p>
          {/* <p>Este pedido cuenta con envio </p> */}
          <p className="text-green-500 italic">gratis</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link href="/checkout">
          <button
            className="bg-black  h-14 w-96 text-white"
            onClick={() => {
              dispatch(setTotal({ type: "FETCH_SUCCESS", payload: total }));
            }}
          >
            Realizar pedido {cart.length > 0 ? `(${cart.length})` : null}
          </button>
        </Link>
      </div>
    </div>
  );
}
