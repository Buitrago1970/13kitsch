import React from "react";
import Link from "next/link";
import Image from "next/image";

import successIcon from "../../public/ok.png";

const SuccessReceipt = () => {
  return (
    <div className="flex justify-center p-5 bg-green-400 pb-20 pt-10 md:p-20">
      <div className="w-[550px]  bg-white px-5 py-6 border border-black rounded-xl shadow-md">
        <div className="info-success-order">
          <div className="grid items-center mx-3 mb-5  md:mx-8 md:mb-10">
            <div className="img-container-success m-auto">
              <Image
                src={successIcon}
                alt="test"
                width={60}
                height={60}
                quality={100}
                objectFit="contain"
              />
            </div>
            <h1 className="text-center font-medium text-2xl my-5 text-gray-900">
              ¡Gracias por tu compra!
            </h1>
          </div>
          <div className="mx-5 font-semibold md:mx-16">
            <h3 className="text-gray-900 mb-5 ">DETALLES DEL PEDIDO</h3>
            <p className="text-gray-900">
              Número de pedido: <span>#</span>
            </p>
            <p className="text-gray-900">
              Fecha de pedido: <span></span>
            </p>
            <p className="text-gray-900">
              Estado del pedido: <span></span>
            </p>
            <p className="text-gray-900">
              Total: <span>$</span>
            </p>
            <p className="text-gray-900">
              Entrega estimada: <span> </span>
            </p>
          </div>
        </div>
        <div className="buttons-mail-info">
          <div className="flex flex-col mx-2 my-14 md:my-20 space-y-4">
            <Link href="/userprofile">
              <button className="bg-white border shadow border-black text-black h-10  rounded-md w-full hover:bg-gray-300 text-blacktransition-colors duration-700 md:mx-4">
                Ver mis pedidos
              </button>
            </Link>

            <Link href="/">
              <button className="bg-white border shadow border-black text-black h-10  rounded-md w-full hover:bg-gray-300 text-blacktransition-colors duration-700 md:mx-4">
                Ir al Home
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm mb-3 text-gray-900">
            ❗️Le enviaremos por correo electronico una confirmacion del pedido
            con detalles e informacion de seguimiento
          </p>
          <p className="text-xs text-gray-400">
            Para mas información llamar al +57 310-570-6238 | tel 6746457
          </p>
          <p className="text-xs text-gray-400 op">correo contacto@kitsch.com</p>
        </div>
      </div>
    </div>
  );
};
export default SuccessReceipt;
