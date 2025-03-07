import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../features/product/productSlice";
import { changeQuantity } from "../../features/product/productSlice";
import { ToastContainer, toast } from 'react-toastify';

export default function ItemShoppingCard({ product }) {
  const dispatch = useDispatch();
  const { product: productData } = product;
  const { color, size, quantity } = product;
  const [quantityProduct, setQuantityProduct] = React.useState(quantity);

  //format price
  let formattedPrice;

  if (productData.price) {
    // price is multiply by number of products
    formattedPrice = productData.price * quantityProduct;
    formattedPrice = formattedPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  //delete to cart
  function handleDeleteToCart() {
    const id = productData.slug;
    toast.info(
      ({ closeToast }) => (
        <div>
          <p>¿Estás seguro de querer eliminar este producto?</p>
          <div className="mt-2 flex justify-end gap-2">
            <button 
              onClick={() => {
                dispatch(deleteFromCart({ id }));
                closeToast();
              }}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Sí
            </button>
            <button 
              onClick={closeToast}
              className="bg-gray-500 text-white px-2 py-1 rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeButton: false,
      }
    );
  }

  function handleAddmore() {
    setQuantityProduct(quantityProduct + 1);
    dispatch(
      changeQuantity({
        type: "FETCH_SUCCESS",
        payload: quantityProduct + 1,
        product,
      })
    );
  }
  function handleRemove() {
    setQuantityProduct(quantityProduct - 1);
    dispatch(
      changeQuantity({
        type: "FETCH_SUCCESS",
        payload: quantityProduct - 1,
        product,
      })
    );
  }
  if (quantityProduct === 0) {
    const id = productData.Slug;
    if (window.confirm("¿Estás seguro de querer eliminar este producto?")) {
      dispatch(deleteFromCart({ id }));
    }
    setQuantityProduct(1);
  }

  return (
    <div>
      <ToastContainer position="top-center" />
      <div className=" grid overflow-hidden mb-5 border border-black border-b grid-cols-1 shadow-lg rounded-sm  bg-white md:grid-cols-2 md:grid-rows-[100px_minmax(500px,_1fr)_40px]  ">
        <div className="h-[500px]  border-black row-span-3 p-2  ">
          <div className="relative h-full ">
            <div>
              <Image
                src={`https:${product.product.image[0].fields.file.url}`}
                alt="13Kitsch"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <svg focusable="false" aria-hidden="true"></svg>
          </div>
        </div>
        <div className="flex flex-col border-t border-b border-black p-4  font-semibold text-center md:text-left md:border-t-0 md:border-l ">
          <p className="text-xs">{productData.slug}</p>
          <p className="uppercase text-xl ">{productData.name}</p>
        </div>
        <div className="flex flex-col justify-between border-b p-4 space-y-10 text-center md:border-l md: border-black md:border-b-0">
          <div className="text-base ">
            <ul>
              <li key={"color"}>
                <div className="flex justify-between ">
                  <span>Color</span>
                  <span>{color}</span>
                </div>
              </li>
              <li key={"size"}>
                <div className="flex justify-between ">
                  <span>Talla</span>
                  <span>{size}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="">{productData.description}</div>
          <div className="flex justify-between">
            <div className=" h-8 border border-black flex rounded-md">
              <div
                className="border-r w-10 h-full flex items-center justify-center bg-gray-200 rounded-md rounded-r-none border-black cursor-pointe hover:bg-gray-300 duration-200"
                onClick={() => handleRemove()}
              >
                <p>-</p>
              </div>
              <div className="w-14 items-center flex justify-center duration-1000">
                <p>{quantityProduct}</p>
              </div>
              <div
                className="border-l w-10 h-full flex items-center justify-center bg-gray-200 rounded-md rounded-l-none border-black cursor-pointer  hover:bg-gray-300 duration-200 "
                onClick={() => handleAddmore()}
              >
                <p>+</p>
              </div>
            </div>
            <div className="text-xl font-semibold">
              <p>COP ${formattedPrice}</p>
            </div>
          </div>
        </div>
        <div className="px-4 flex items-center h-10 md:border-t md:border-l border-black">
          <button
            className=" text-red-400 text-xs font-semibold lowercase"
            onClick={() => {
              handleDeleteToCart();
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
