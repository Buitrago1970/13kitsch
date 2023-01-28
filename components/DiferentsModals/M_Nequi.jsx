import React from "react";

export default function M_Nequi({ setShowModal }) {
  return (
    <div className="w-screen  fixed inset-0 z-50  bg-transparent-black flex">
      <div className="w-[300px]  my-5 bg-white rounded md:w-[600px] h-[650px] m-auto  ">
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
          <div className="-mt-4">
            <div className="w-20 mx-auto">
              <img
                src="https://play-lh.googleusercontent.com/J2CfzgROe1_weYm7yNIffrAGsGeahADM6r2qMN3C9pNw-i0TJR71LGbVX9y2N7t6dw"
                alt="Nequi icon"
              />
            </div>
            <h1 className="text-center font-bold text-3xl">Nequi</h1>
          </div>
          <div className="text-center ">
            <div className="w-32 my-10 mx-auto md:w-36">
              <img
                src="https://www.ocu.org/-/media/ta/images/qr-code.png?rev=2e1cc496-40d9-4e21-a7fb-9e2c76d6a288&hash=AF7C881FCFD0CBDA00B860726B5E340B&mw=960"
                alt=""
              />
            </div>
            <p className="font-semibold text-2xl my-5">310 570 62 38</p>
            <p className="text-gray-400">
              paga escaneando este código QR o paga a este numero
            </p>
          </div>
          <div className="flex justify-center items-center my-10 mt-0">
            <button className="border border-black w-64 my-10 h-10 bg-[#FF2F73] text-white uppercase text-sm rounded-xl hover:opacity-95 shadow-md hover:shadow-none">
              CONTINUAR
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
