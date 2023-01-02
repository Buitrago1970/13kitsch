import React from "react";
import Link from "next/link";

export default function checkout() {
  return (
    <section className="min-h-screen">
      <div className="m-auto w-1/2  border-l border-r border-black ">
        {/* title */}
        <div className="text-center py-10 font-bold text-2xl border-b border-black">
          <p>PAGAR</p>
        </div>
        {/* mail from */}
        <div className="py-10 border-b border-black flex flex-col ">
          <p className="text-center font-bold">1. Correo electronico</p>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Correo electronico</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Telefono de contacto</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <button className="bg-black text-white w-4/6 h-11 m-auto mt-10 rounded mx-auto uppercase">
            Continuar
          </button>
          <button className="bg-white text-black w-4/6 h-11 m-auto mt-5 rounded mx-auto border border-black uppercase">
            Iniciar sesion con google
          </button>
        </div>
        {/* shipping */}
        <div className="py-10 border-b border-black flex flex-col ">
          <p className="text-center font-bold">2. Envio</p>
          <div className="text-center text-sm mt-3 flex justify-center space-x-1">
            <p className="text-gray-400">Entregar en: </p>
            <p>Colombia.</p>
            <Link href={"/checkout"}>
              <p className="underline">Editar</p>
            </Link>
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Direccion</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Referencias adicionales </p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-20 rounded"
            />
          </div>
          <button className="bg-black text-white w-4/6 h-11 m-auto mt-10 rounded mx-auto uppercase">
            Continuar
          </button>
        </div>
        {/* payment */}
        <div className="py-10 border-b border-black flex flex-col ">
          <p className="text-center font-bold">3. Pago</p>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Nombre de la tarjeta</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Numero de la tarjeta</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Fecha de expiracion</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Codigo de seguridad</p>
              <p>*obligatorio</p>
            </div>
            <input
              type="text"
              className="w-4/6 border border-black h-11 rounded"
            />
          </div>
          <button className="bg-black text-white w-4/6 h-11 m-auto mt-10 rounded mx-auto uppercase">
            Continuar
          </button>
        </div>
        {/* review */}
        <div className="py-10 border-b border-black flex flex-col ">
          <p className="text-center font-bold">4. Resumen</p>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Nombre del producto</p>
              <p>Precio</p>
            </div>
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Nombre del producto</p>
              <p>Precio</p>
            </div>
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Nombre del producto</p>
              <p>Precio</p>
            </div>
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Nombre del producto</p>
              <p>Precio</p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mt-7">
            <div className="flex justify-between w-4/6 mb-1 text-gray-400 text-sm">
              <p>Total</p>
              <p>Precio</p>
            </div>
          </div>
          <button className="bg-black text-white w-4/6 h-11 m-auto mt-10 rounded mx-auto uppercase">
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
}
