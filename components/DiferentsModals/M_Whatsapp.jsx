import React from "react";

export default function M_Whatsapp({ setShowModal }) {
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
        <div className="p-2 pt-0 pb-2 h-full md:grid md:p-8">
          <div className=" -mt-4">
            <div className="w-20 mx-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                alt="Whatsapp icon"
              />
            </div>
            <h1 className="text-center text-xl font-bold md:text-3xl">
              Whatsapp
            </h1>
          </div>
          <p className="text-center font-semibold -2xl mt-10 md:text md:mt-24">
            https//www.linkpagowhasapp.com
          </p>
          <div className="flex justify-center items-center my-20">
            <button className="border border-black w-64 h-10 bg-green-500 text-white uppercase text-sm rounded-xl hover:opacity-95 shadow-md hover:shadow-none">
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
