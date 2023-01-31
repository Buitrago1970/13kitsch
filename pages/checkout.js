import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import Modal from "../components/Modal/Modal";

export default function Checkout() {
  const cart = useSelector((state) => state.products.cart);
  const total = useSelector((state) => state.products.total);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [showcart, setShowCart] = React.useState(false);
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [prefix, setPrefix] = React.useState("+57");
  const [address, setAddress] = React.useState("");
  const [reference, setReference] = React.useState("");
  const [shipping, setShipping] = React.useState("");
  const [payment, setPayment] = React.useState("nequi");
  const [showModal, setShowModal] = React.useState(false);
  let formattedTotal = total.toLocaleString("es-CO");

  const handleEmail = () => {
    //verify email
    const emailIsValid = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    //if email is ok, then go to next step
    if (emailIsValid(mail)) {
      setCurrentStep(2);
    } else {
      alert("Email no valido");
    }
  };
  //
  const handleShippingPhysicalStore = () => {
    //verify info
    const infoIsValid = (name, phone) => {
      return /^[a-zA-Z ]+$/.test(name) && /^[0-9]+$/.test(phone);
    };

    //if info is ok, then go to next step
    if (infoIsValid(name, phone)) {
      setCurrentStep(3);
    } else {
      alert("Informacion no valida");
    }
  };
  const handleShippingHome = () => {
    //verify info
    const infoIsValid = (address) => {
      return /^[a-zA-Z0-9 ]+$/.test(address);
    };
    if (infoIsValid(address)) {
      setCurrentStep(3);
    } else {
      alert("Informacion no valida");
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);
  const handlePayment = () => {
    setShowModal(true);
  };

  return (
    <section className="min-h-screen">
      <div className="m-auto w-full  border-l border-r border-black md:w-1/2 ">
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
              <div className="flex justify-between w-5/6 mb-1 text-gray-400 text-sm md:w-9/12">
                <p>Correo electronico</p>
                <p>*obligatorio</p>
              </div>
              <input
                type="text"
                className="w-5/6 border border-black h-11 rounded md:w-9/12"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <button
              className="bg-black text-white w-5/6  h-11 m-auto  rounded mx-auto uppercase md:w-9/12 md:mt-10"
              onClick={() => handleEmail()}
            >
              Continuar
            </button>
            <button className="bg-white text-black w-5/6 h-11 m-auto mt-5 rounded mx-auto border border-black uppercase md:w-9/12 ">
              Iniciar sesion con google
            </button>
          </div>
        ) : (
          <div className="py-14 border-b border-black  relative">
            <a
              className="text-end text-sm underline absolute right-5 bottom-36 cursor-pointer"
              onClick={() => {
                setCurrentStep(1);
              }}
            >
              Editar
            </a>
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
              <div className="w-10/12  border border-black rounded md:w-3/5">
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
            {shipping === "PhysicalStore" || shipping === "" ? (
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
                  <p className="font-bold p-2 text-center">
                    POR FAVOR, INGRESE SU INFORMACIÓN DE RECOGIDA
                  </p>
                  <div className="w-full">
                    <div className="flex justify-center flex-col items-center my-10 mb-1">
                      <div className="flex justify-between w-10/12  mb-1 text-gray-400 text-sm md:w-9/12">
                        <p>Nombre</p>
                        <p>*obligatorio</p>
                      </div>
                      <input
                        type="text"
                        className="w-10/12 border border-black h-11 rounded md:w-9/12"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {/* phone number */}
                    <div className="flex justify-center w-10/12 items-end  m-auto md:max-w-[538px] ">
                      <div className=" my-10 mb-16 w-[25%] mr-3">
                        <div className="flex justify-between  mb-1 text-gray-400 text-sm">
                          <p>Prefijo</p>
                        </div>
                        <input
                          type="text"
                          className=" border border-black h-11 rounded w-full"
                          value={prefix}
                          onChange={(e) => setPrefix(e.target.value)}
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
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-100 px-4 py-4 rounded font-medium text-base w-9/12 text-center">
                    <p>!Tu pedio sera enviado a la tienda el 66 de enero!</p>
                  </div>
                  <button
                    className="bg-black text-white w-5/6 mt-10  h-11 m-auto  rounded mx-auto uppercase md:w-9/12 "
                    onClick={() => {
                      handleShippingPhysicalStore();
                    }}
                  >
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
                <p className="font-bold text-center mt-14 mb-5">
                  POR FAVOR, INGRESE SU INFORMACIÓN DE ENTREGA
                </p>
                <div className="flex justify-center flex-col items-center mt-7 mb-10">
                  <div className="flex justify-between w-5/6  mb-1 text-gray-400 text-sm  md:w-9/12">
                    <p>Nombre</p>
                    <p>*obligatorio</p>
                  </div>
                  <input
                    type="text"
                    className="w-5/6  border border-black h-11 rounded  md:w-9/12"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="flex justify-between w-5/6 mb-1 text-gray-400 text-sm  md:w-9/12">
                    <p>Direccion</p>
                    <p>*obligatorio</p>
                  </div>
                  <input
                    type="text"
                    className="w-5/6 border border-black h-11 rounded  md:w-9/12"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="flex justify-between w-5/6 mb-1 text-gray-400 text-sm  md:w-9/12">
                    <p>Referencias adicionales </p>
                  </div>
                  <input
                    type="text"
                    className="w-5/6 border border-black h-20 rounded  md:w-9/12"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </div>
                <button
                  className="bg-black text-white w-5/6 h-11 m-auto mt-10 rounded mx-auto uppercase  md:w-9/12"
                  onClick={() => {
                    handleShippingHome();
                  }}
                >
                  Continuar
                </button>
              </>
            )}
          </div>
        ) : (
          <>
            {shipping === "" ? (
              <div className="py-5  border-black flex flex-col border-b">
                <p className="text-center font-bold text-gray-300">2.envio</p>
              </div>
            ) : (
              <div className="py-14 border-b border-black  relative">
                <a
                  className="text-end text-sm underline absolute right-5 top-4 cursor-pointer"
                  onClick={() => {
                    setCurrentStep(2);
                  }}
                >
                  Editar
                </a>
                {
                  // shipping to physical store
                  shipping === "PhysicalStore" ? (
                    <>
                      <div className="flex justify-center text-center font-bold items-center">
                        <p className="font-normal text-xs mr-2">✓</p>
                        <p>2. Envio</p>
                      </div>
                      <div className="flex flex-col items-center mt-5 text-sm">
                        <p className="text-gray-400 mb-1">
                          Tu pedido sera enviado a la tienda el 66 de enero
                        </p>
                        <p className=" mb-1">
                          Suba Calle 165a # 54c -95 Local 401
                        </p>
                        <p>{name}</p>
                        <p>{phone}</p>
                      </div>
                    </>
                  ) : (
                    // shipping to home
                    <>
                      <div className="flex justify-center text-center font-bold items-center">
                        <p className="font-normal text-xs mr-2">✓</p>
                        <p>2. Envio</p>
                      </div>
                      <div className="flex flex-col items-center mt-5 text-sm">
                        <p className="text-gray-400 mb-1">
                          Entrega a Domicilio
                        </p>
                        <p>ENVIO Gratis</p>
                        <p>Entrega Garantizada el 31/01/2023</p>
                      </div>
                      <div className="flex flex-col items-center mt-5 text-sm">
                        <p className="text-gray-400 mb-1">
                          Direccion de envio:
                        </p>
                        <p>{name}</p>
                        <p>{address}</p>
                        <p>{reference}</p>
                      </div>
                    </>
                  )
                }
              </div>
            )}
          </>
        )}

        {/* payment */}
        {currentStep === 3 ? (
          <div className="py-10 border-b border-black flex flex-col ">
            <p className="text-center font-bold">3. Pago</p>
            <div>
              <p className="mx-20 text-center font-semibold my-10 md:pl-2 md:text-left">
                Opciones de Pago
              </p>
              {/* payment options */}
              <div className="flex justify-center flex-col items-center mt-7">
                <div className=" border border-black rounded w-5/6 md:w-3/4">
                  <ul className="">
                    <li className="px-3  cursor-pointer hover:bg-gray-100">
                      <label className="flex items-center cursor-pointer h-16 w-full">
                        {/* dot */}
                        <div className="px-2">
                          <input
                            value="nequi"
                            type="radio"
                            className="w-4 h-4"
                            name="radio"
                            onChange={(e) => {
                              setPayment(e.target.value);
                            }}
                            defaultChecked={true}
                          />
                        </div>
                        {/* image */}
                        <div>
                          {/* <Image
                            src="https://play-lh.googleusercontent.com/J2CfzgROe1_weYm7yNIffrAGsGeahADM6r2qMN3C9pNw-i0TJR71LGbVX9y2N7t6dw"
                            alt=""
                            className="w-10 mx-2"
                            layout="fill"
                          /> */}
                        </div>
                        {/* text */}
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">Nequi</p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Paga por nequi con el numero whatsapp
                            </p>
                          </span>
                        </div>
                      </label>
                    </li>
                    <li className="px-3  border-t border-black cursor-pointer  hover:bg-gray-100">
                      <label className="flex items-center cursor-pointer h-16 w-full">
                        {/* dot */}
                        <div className="px-2">
                          <input
                            value="tarjeta"
                            type="radio"
                            className="w-4 h-4"
                            name="radio"
                            onChange={(e) => {
                              setPayment(e.target.value);
                            }}
                          />
                        </div>
                        {/* image */}
                        <div>
                          {/* <Image
                            src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
                            alt=""
                            className="w-10 mx-2"
                            layout="fill"
                          /> */}
                        </div>
                        {/* text */}
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">
                              tarjeta de Credito / debito
                            </p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Paga con tarjeta de credito o debito
                            </p>
                          </span>
                        </div>
                      </label>
                    </li>

                    <li className="px-3  border-t border-black cursor-pointer  hover:bg-gray-100">
                      <label className="flex items-center cursor-pointer h-16 w-full">
                        {/* dot */}
                        <div className="px-2">
                          <input
                            value="whatsapp"
                            type="radio"
                            className="w-4 h-4"
                            name="radio"
                            onChange={(e) => {
                              setPayment(e.target.value);
                            }}
                          />
                          {/* <span className=""></span> */}
                        </div>
                        {/* image */}
                        <div>
                          {/* <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
                            alt=""
                            className="w-10 mx-2"
                            layout="fill"
                          /> */}
                        </div>
                        {/* text */}
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">whatsapp</p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Paga por whatsapp
                            </p>
                          </span>
                        </div>
                      </label>
                    </li>
                    <li className="px-3 border-t border-black cursor-pointer  hover:bg-gray-100">
                      <label className="flex items-center cursor-pointer h-16 w-full">
                        {/* dot */}
                        <div className="px-2">
                          <input
                            value="efectivo"
                            type="radio"
                            className="w-4 h-4"
                            name="radio"
                            onChange={(e) => {
                              setPayment(e.target.value);
                            }}
                          />
                        </div>
                        {/* image */}
                        <div>
                          {/* <Image
                            src="https://cdn-icons-png.flaticon.com/512/2086/2086775.png"
                            alt=""
                            className="w-10 mx-2"
                          /> */}
                        </div>
                        {/* text */}
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">Efectivo contraentrega</p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Paga en efectivo contraentrega
                            </p>
                          </span>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              className="bg-black text-white h-11 w-5/6 m-auto mt-10 rounded mx-auto uppercase md:w-9/12 "
              onClick={() => {
                handlePayment();
              }}
            >
              Continuar
            </button>
          </div>
        ) : (
          <div className="py-5  border-black flex flex-col border-b ">
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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        payment={payment}
      />
    </section>
  );
}
