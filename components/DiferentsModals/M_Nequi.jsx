import React from "react";

import Image from "next/image";
import axios from "axios";

export default function M_Nequi({ setShowModal, handleSendOrderNequi }) {
  const goWhatsapp = () => {
    // window.open(
    //   "https://wa.me/+573105706238?text=Hola%2C%20quiero%20realizar%20un%20pago%20a%20trav%C3%A9s%20de%20la%20plataforma%20Nequi%20para%20mi%20compra%20en%20su%20tienda.%20Me%20pueden%20ayudar%3F"
    // );
    // const url = "https://graph.facebook.com/v15.0/114476118229734/messages";
    // const accessToken =
    //   "EAAGZBgE5dZBbwBALnrMxyfbLghsJ5ZBuLHdKkEsXtpcSrIVKlff0ZAYV0YssRW0hhv6yZBZCOHgiOnPMgPLKNJ1jPP61bPSGiZCMSTlC7gfWjUiZAkvFgIDc7aXpjUxHxvQvnZC3aUuFvOXnnZAmwRB5wDynXJZCfSBXeOYXmokIZCVKA8db2bQHUSCZAan6WJAARI86ZAT408Yn3XYwZDZD";
    // const data = {
    //   messaging_product: "whatsapp",
    //   to: "573105706238",
    //   type: "template",
    //   template: {
    //     name: "hello_world",
    //     language: { code: "en_US" },
    //   },
    // };
    // axios
    //   .post(url, data, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="w-screen  fixed inset-0 z-[99999]  bg-transparent-black flex justify-center">
      <div className="w-[500px] h-full my-5 bg-white rounded m-2 md:w-[600px] md:h-[650px]  ">
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
        <div className="p-5 pt-4 pb-2 h-full grid md:p-8 overflow-y-scroll ">
          <div className="-mt-4">
            <div className="w-20 mx-auto flex justify-center">
              <Image
                src="https://play-lh.googleusercontent.com/J2CfzgROe1_weYm7yNIffrAGsGeahADM6r2qMN3C9pNw-i0TJR71LGbVX9y2N7t6dw"
                alt="Nequi icon"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-center font-bold text-3xl">Nequi</h1>
          </div>
          <div className="text-center ">
            <p className="font-semibold text-2xl my-5">+57 310 570 62 38</p>
            <p>
              Estimado cliente, si desea realizar su pago a través de la
              plataforma Nequi para su compra en nuestra tienda , le ofrecemos
              dos opciones para hacerlo de manera cómoda y segura. Puede
              escribirnos a través de WhatsApp al número +57 3105706238 para
              acordar los detalles del pago, o también puede hacerlo a través
              del siguiente enlace que se encuentra disponible en nuestro sitio
              web.
            </p>
            <p className="mt-3 ">
              ¡Gracias por su compra y esperamos su mensaje!
            </p>
          </div>
          <div
            className="flex justify-center items-center mt-0 mb-11"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <button
              className="border border-black w-64 h-10 bg-green-500 text-white uppercase text-sm rounded-xl hover:opacity-95 shadow-md hover:shadow-none"
              onClick={() => {
                handleSendOrderNequi();
              }}
            >
              CONTINUAR A WHASAPP
            </button>
          </div>
          <footer className="text-center  ">
            <p className="text-sm mb-3">
              ❗️Le enviaremos por correo electronico una confirmacion del
              pedido con detalles e informacion de seguimiento
            </p>
            <p className="text-xs text-gray-400">
              Para mas información llamar al +57 310-570-6238 | tel 6746457
            </p>
            <p className="text-xs text-gray-400 ">correo contacto@kitsch.com</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
