import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function M_Cash({ setShowModal }) {
  return (
    <div className="w-screen fixed inset-0 z-50  bg-transparent-black flex">
      <div className="min-w-[300px] my-5 bg-white rounded m-auto md:w-[600px] md:h-[650px]">
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
            <div className="w-20 mx-auto flex justify-center">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2086/2086775.png"
                alt="Pago Contra Entrega"
                width={70}
                height={70}
              />
            </div>
            <h1 className="text-center font-bold text-3xl">Efectivo</h1>
          </div>
          <p className="text-center font-medium ">
            Querido cliente, estamos encantados de ofrecerle la opción de pago
            contra entrega para su comodidad y tranquilidad. Usted puede elegir
            pagar en <strong>efectivo</strong>, con{" "}
            <strong>tarjeta de crédito</strong> o <strong>débito</strong> al
            momento de la entrega en la dirección especificada: xxxxxxxxx a
            nombre de xxxxx. Nos aseguramos de que solo pague por su compra
            cuando haya recibido su pedido y esté completamente satisfecho con
            él. La entrega se realizará en un plazo de 7 días hábiles después de
            haber confirmado su pedido. ¡Agradecemos su elección y estamos a su
            disposición para cualquier pregunta o consulta!
          </p>
          <div
            className="flex justify-center items-center my-10 "
            onClick={() => {
              setShowModal(false);
            }}
          >
            <Link href="/Success">
              <button className="border border-black w-64 h-10 bg-green-500 text-white uppercase text-sm rounded-xl hover:opacity-95 shadow-md hover:shadow-none">
                Confirmar pedido
              </button>
            </Link>
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
