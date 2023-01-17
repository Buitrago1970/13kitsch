import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function checkout() {
  const cart = useSelector((state) => state.products.cart);
  const total = useSelector((state) => state.products.total);
  const [currentStep, setCurrentStep] = React.useState(3);
  const [showcart, setShowCart] = React.useState(false);
  const [mail, setMail] = React.useState("test@example.com");
  const [shipping, setShipping] = React.useState("PhysicalStore");
  let formattedTotal = total.toLocaleString("es-CO");

  return (
    <section className="min-h-screen">
      <div className="m-auto w-1/2  border-l border-r border-black ">
        {/* title */}
        <div className="text-center py-10 font-bold text-2xl border-b border-black">
          <p>PAGAR</p>
          <div className="font-normal text-xs text-gray-400 flex justify-center mt-2">
            <p>{cart.length} articulos</p>
            <p className="text-black ml-5">${formattedTotal} COP</p>
          </div>
          <p className="underline font-normal text-xs mt-2 cursor-pointer">
            Ver resumen del pedido
          </p>
        </div>
        {/* mail from */}
        {currentStep === 1 ? (
          <div className="py-10 border-b border-black flex flex-col ">
            <p className="text-center font-bold">1. Correo electronico</p>
            <div className="flex justify-center flex-col items-center my-10 mb-16">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Correo electronico</p>
                <p>*obligatorio</p>
              </div>
              <input
                type="text"
                className="w-9/12 border border-black h-11 rounded"
              />
            </div>

            <button className="bg-black text-white w-9/12 h-11 m-auto mt-10 rounded mx-auto uppercase">
              Continuar
            </button>
            <button className="bg-white text-black w-9/12 h-11 m-auto mt-5 rounded mx-auto border border-black uppercase">
              Iniciar sesion con google
            </button>
          </div>
        ) : (
          <div className="py-10 border-b border-black  ">
            <div className="flex justify-center text-center font-bold items-center">
              <p className="font-normal text-xs mr-2">✓</p>
              <p>1. Correo electronico</p>
            </div>
            <div className="flex flex-col items-center mt-5 text-xs">
              <p className="text-gray-400 mb-1">
                La confirmación de su pedido será enviada a:
              </p>
              <p>{mail}</p>
            </div>
          </div>
        )}

        {/* shipping */}
        {currentStep === 2 ? (
          <div className="py-10 border-b border-black flex flex-col ">
            <p className="text-center font-bold">2. Envio</p>
            {/* select shipping metod */}
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="w-3/5 border border-black rounded">
                <ul className="">
                  <li className="px-2 py-3 cursor-pointer hover:bg-gray-100">
                    <label className="flex items-center cursor-pointer">
                      {/* dot */}
                      <div className="px-2">
                        <input
                          value="PhysicalStore"
                          type="radio"
                          className="w-4 h-4"
                          name="radio"
                          defaultChecked={true}
                          onChange={(e) => setShipping(e.target.value)}
                        />
                      </div>
                      {/* text */}
                      <div className=" ">
                        <span className="">
                          <p className="text-sm  ">Recoger en tienda fisica</p>
                          <p className="text-gray-400 mb-1 text-xs">
                            Recoge tu pedido en la tienda que nos indiques.
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                  <li className="px-2 py-3 border-t border-black cursor-pointer  hover:bg-gray-100">
                    <label className="flex items-center cursor-pointer">
                      {/* dot */}
                      <div className="px-2">
                        <input
                          value="HomeDelivery"
                          type="radio"
                          className="w-4 h-4"
                          name="radio"
                          onChange={(e) => setShipping(e.target.value)}
                        />
                        {/* <span className=""></span> */}
                      </div>
                      {/* text */}
                      <div className=" ">
                        <span className="">
                          <p className="text-sm  ">enviar a mi domicilio</p>
                          <p className="text-gray-400 mb-1 text-xs">
                            Recibe tu pedido en la dirección que nos indiques.
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            {shipping === "PhysicalStore" ? (
              <>
                {" "}
                {/* pick up in physical store */}
                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="my-5 mb-10 flex flex-col text-center">
                    <h1 className="font-bold text-xl my-3">TIENDA</h1>
                    <div className="text-sm text-gray-400">
                      <p>Colombia - Bogota</p>
                      <p>Suba Calle 165a # 54c -95</p>
                      <p>Local 401</p>
                    </div>
                  </div>
                  <p className="font-bold">
                    POR FAVOR, INGRESE SU INFORMACIÓN DE RECOGIDA
                  </p>
                  <div className="w-full">
                    <div className="flex justify-center flex-col items-center my-10 mb-1">
                      <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                        <p>Nombre</p>
                        <p>*obligatorio</p>
                      </div>
                      <input
                        type="text"
                        className="w-9/12 border border-black h-11 rounded"
                      />
                    </div>
                    {/* phone number */}
                    <div className="flex justify-center w-full  max-w-[538px] m-auto">
                      <div className=" my-10 mb-16 w-[25%] mr-3">
                        <div className="flex justify-between  mb-1 text-gray-400 text-sm">
                          <p>Prefijo</p>
                        </div>
                        <input
                          type="text"
                          className=" border border-black h-11 rounded w-full"
                        />
                      </div>
                      <div className=" my-10 mb-16 w-[75%]">
                        <div className="flex justify-between  mb-1 text-gray-400 text-sm">
                          <p>Número de teléfono móvil</p>
                          <p>*obligatorio</p>
                        </div>
                        <input
                          type="text"
                          className=" border border-black h-11 rounded w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-100 px-4 py-4 rounded font-medium text-base w-9/12 text-center">
                    <p>!Tu pedio sera enviado a la tienda el 66 de enero!</p>
                  </div>
                  <button className="bg-black text-white w-9/12 h-11 m-auto mt-10 rounded mx-auto uppercase">
                    Guardar y continuar
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* send to my addres */}
                <div className="text-center text-sm mt-3 flex justify-center space-x-1">
                  <p className="text-gray-400">Entregar en: </p>
                  <p>Colombia.</p>
                  <Link href={"/checkout"}>
                    <p className="underline">Editar</p>
                  </Link>
                </div>
                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                    <p>Direccion</p>
                    <p>*obligatorio</p>
                  </div>
                  <input
                    type="text"
                    className="w-9/12 border border-black h-11 rounded"
                  />
                </div>
                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                    <p>Referencias adicionales </p>
                  </div>
                  <input
                    type="text"
                    className="w-9/12 border border-black h-20 rounded"
                  />
                </div>
                <button className="bg-black text-white w-9/12 h-11 m-auto mt-10 rounded mx-auto uppercase">
                  Continuar
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="py-5 border-b border-black flex flex-col ">
            <p className="text-center font-bold text-gray-300">2. Envio</p>
          </div>
        )}

        {/* payment */}
        {currentStep === 3 ? (
          <div className="py-10 border-b border-black flex flex-col ">
            <p className="text-center font-bold">3. Pago</p>
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Nombre de la tarjeta</p>
                <p>*obligatorio</p>
              </div>
              <input
                type="text"
                className="w-9/12 border border-black h-11 rounded"
              />
            </div>
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Numero de la tarjeta</p>
                <p>*obligatorio</p>
              </div>
              <input
                type="text"
                className="w-9/12 border border-black h-11 rounded"
              />
            </div>
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Fecha de expiracion</p>
                <p>*obligatorio</p>
              </div>
              <input
                type="text"
                className="w-9/12 border border-black h-11 rounded"
              />
            </div>
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Codigo de seguridad</p>
                <p>*obligatorio</p>
              </div>
              <input
                type="text"
                className="w-9/12 border border-black h-11 rounded"
              />
            </div>
            <button className="bg-black text-white w-9/12 h-11 m-auto mt-10 rounded mx-auto uppercase">
              Continuar
            </button>
          </div>
        ) : (
          <div className="py-5  border-black flex flex-col ">
            <p className="text-center font-bold text-gray-300">3. Pago</p>
          </div>
        )}
        {/* review */}

        {showcart && (
          <div className="py-10 border-b border-black flex flex-col ">
            <p className="text-center font-bold">4. Resumen</p>
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Nombre del producto</p>
                <p>Precio</p>
              </div>
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Nombre del producto</p>
                <p>Precio</p>
              </div>
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Nombre del producto</p>
                <p>Precio</p>
              </div>
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Nombre del producto</p>
                <p>Precio</p>
              </div>
            </div>
            <div className="flex justify-center flex-col items-center mt-7">
              <div className="flex justify-between w-9/12 mb-1 text-gray-400 text-sm">
                <p>Total</p>
                <p>Precio</p>
              </div>
            </div>
            <button className="bg-black text-white w-9/12 h-11 m-auto mt-10 rounded mx-auto uppercase">
              Continuar
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
