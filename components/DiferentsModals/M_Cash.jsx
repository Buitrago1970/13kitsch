import React from "react";

import Image from "next/image";

export default function M_Cash({ setShowModal }) {
  return (
    <div className="w-screen fixed inset-0 z-50  bg-transparent-black flex">
      <div className="w-[300px] my-5 bg-white rounded m-auto md:w-[600px] md:h-[650px]">
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
        <div className="p-2 pt-0 pb-2 h-full grid md:p-8 ">
          <div className="-mt-4">
            <div className="w-24 mx-auto">
              {/* <Image
                src="https://cdn-icons-png.flaticon.com/512/2086/2086775.png"
                alt=""
              /> */}
            </div>
            <h1 className="text-center font-bold text-3xl">Efectivo</h1>
          </div>
          <p className="text-center font-medium mt-10 md:mt-20">
            lLorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
          <div className="flex justify-center items-center my-10 ">
            <button className="border border-black w-64 h-10 bg-green-500 text-white uppercase text-sm rounded-xl hover:opacity-95 shadow-md hover:shadow-none">
              Continuar
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
