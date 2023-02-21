import React from "react";

import Image from "next/image";

export default function M_Whatsapp({ setShowModal, handleSendOrderWhasapp }) {
  return (
    <div className="w-screen  fixed inset-0 z-50  bg-transparent-black flex">
      <div className="w-[300px] bg-white rounded md:w-[600px] md:h-[650px] m-auto  ">
        <div className="flex justify-end">
          <button
            className="rounded-full bg-red-500 text-black w-5 h-5 border border-black flex justify-center items-center m-2 shadow-md hover:bg-red-600 hover:shadow-none"
            onClick={() => {
              setShowModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="p-2 pt-0 pb-2 h-full md:grid md:p-8 md:pt-0">
          <div className=" -mt-4">
            <div className="w-20 mx-auto">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                alt="Whatsapp icon"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-center text-xl font-bold md:text-3xl">
              Whatsapp
            </h1>
          </div>
          <div className="text-center md:mt-5">
            <p className="font-semibold text-2xl my-5">+57 310 570 62 38</p>
            <p className="-2xl md:text ">
              👋 ¡Hola! Si deseas hacer tus pagos a través de WhatsApp, puedes
              contactarnos al número +57 3105706238 y acordar los detalles de
              pago. También puedes hacerlo desde nuestro sitio web, donde
              encontrarás un enlace disponible para realizar tus pagos. ¡Estamos
              a tu disposición para ayudarte en lo que necesites!
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <button
              onClick={() => {
                handleSendOrderWhasapp();
              }}
              className="border border-black w-64 h-10 bg-green-500 text-white uppercase text-sm rounded-xl hover:opacity-95 shadow-md hover:shadow-none"
            >
              CONTINUAR A WHASAPP
            </button>
          </div>
          <footer className="text-center  ">
            <p className="text-sm mb-3">
              ❗️Le enviaremos por correo electrónico una confirmación del
              pedido con los detalles e información de seguimiento.
            </p>
            <p className="text-xs text-gray-400">
              Para más información llamar al +57 310-570-6238, teléfono 6746457.
            </p>
            <p className="text-xs text-gray-400 ">correo contacto@kitsch.com</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
