import React, { useEffect } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Modal from "../components/Modal/Modal";
import axios from "axios";

export default function Checkout() {
  const cart = useSelector((state) => state.products.cart);
  const total = useSelector((state) => state.products.total);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [prefix, setPrefix] = React.useState("+57");
  const [address, setAddress] = React.useState("");
  const [reference, setReference] = React.useState("");
  const [shipping, setShipping] = React.useState("");
  const [payment, setPayment] = React.useState("nequi");
  const [showModal, setShowModal] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState("");
  const router = useRouter();

  // const [convertedAmount, setConvertedAmount] = React.useState("");
  // useEffect(() => {
  //   //get the value of cop to usd
  //   const getUsdValue = async () => {
  //     const response = await axios.get(
  //       "https://openexchangerates.org/api/latest.json?app_id=beddf67fdfe94dd68bfedbdf7b9d47ab"
  //     );
  //     const usdValue = response.data.rates.COP;
  //     //round usd value
  //     const usdValueRounded = Math.round(usdValue * 100) / 100;
  //     //convert total to usd
  //     const totalToUsd = total / usdValueRounded;
  //     //round total to usd
  //     const totalToUsdRounded = Math.round(totalToUsd * 100) / 100;

  //     //convert total to usd string
  //     const totalToUsdString = totalToUsdRounded.toString();
  //     //set converted amount
  //     setConvertedAmount(totalToUsdString);
  //   };
  //   getUsdValue();
  // }, [total]);

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
      return address.length > 4;
    };
    if (infoIsValid(address)) {
      setCurrentStep(3);
    } else {
      alert("Complete la direccion");
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
  // cal total price
  useEffect(() => {
    let totalPrice = 0;

    if (cart.length > 0) {
      cart.forEach((product) => {
        totalPrice += product.product.price * product.quantity;
      });
    }
    setTotalPrice(totalPrice);
  }, [cart]);
  let formattedTotal = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleSendOrderNequi = () => {
    const productsName = cart.map((product) => product.product.name);
    const productsPrice = cart.map((product) =>
      product.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
    const productsQuantity = cart.map((product) => product.quantity);

    const productsTable = `| Producto                     | Precio  | Cantidad |\n${productsName
      .map((name, index) => {
        return `
        ${name}  -   $${productsPrice[index]}  -  ${productsQuantity[index]}
          `;
      })

      .join("")} total: $${formattedTotal}`;

    const message = `¡Hola! Espero que estés teniendo un excelente día. Quería realizar el pago por la plataforma Nequi por mi pedido.
      
      Aquí está el detalle de mi pedido:
      ${productsTable}
      Por favor, confírmame los detalles para proceder con el pago. ¡Gracias!`;

    //send whatsapp message
    window.open(
      `https://wa.me/+573105706238?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    //create order object
    const orderId = Math.round(Math.random() * 1000000);
    const orderInfo = {
      cart,
      total,
      orderId,
    };
    const userInfo = {
      mail,
      name,
      phone,
      prefix,
      address,
      reference,
      shipping,
      payment,
    };
  };
  const handleSendOrderWhasapp = () => {
    const productsName = cart.map((product) => product.product.name);
    const productsPrice = cart.map((product) =>
      product.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
    const productsQuantity = cart.map((product) => product.quantity);

    const productsTable = `| Producto                     | Precio  | Cantidad |\n${productsName
      .map((name, index) => {
        return `
        ${name}  -   $${productsPrice[index]}  -  ${productsQuantity[index]}
          `;
      })

      .join("")} total: $${formattedTotal}`;

    const message = `¡Hola! Espero que estés teniendo un excelente día. Quiero realizar el pago de mi pedido a través de WhatsApp.
      
      Aquí está el detalle de mi pedido:
      ${productsTable}
      Por favor, confírmame los detalles para proceder con el pago. ¡Gracias!`;

    //send whatsapp message
    window.open(
      `https://wa.me/+573105706238?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    //create order object
    const orderId = Math.round(Math.random() * 1000000);
    const orderInfo = {
      cart,
      total,
      orderId,
    };
    const userInfo = {
      mail,
      name,
      phone,
      prefix,
      address,
      reference,
      shipping,
      payment,
    };
  };

  const handleSendOrderAgainstDelivery = () => {
    //create order object
    const orderId = Math.round(Math.random() * 1000000);
    const orderInfo = {
      cart,
      total,
      orderId,
    };
    const userInfo = {
      mail,
      name,
      phone,
      prefix,
      address,
      reference,
      shipping,
      payment,
    };
    //send order to backend
    // axios
    //   .post(urlPostOrder, {
    //     data: {
    //       orderInfo,
    //       userInfo,
    //       email: mail,
    //     },
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       //save de order in local storage
    //       localStorage.setItem("order", JSON.stringify(response.data));
    //       console.log(response.data);
    //       alert("Orden enviada");
    //       //redirect to success page
    //       router.push("/success");
    //     }
    //   })
    //   .catch((error) => {
    //     // La petición falló
    //     alert("Error al enviar el pedido", error);
    //     console.log(error);
    //   });
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
          <p
            className="underline font-normal text-xs mt-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
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
                className="w-5/6 border border-black h-11 rounded md:w-9/12 p-3"
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
                          className="w-4 h-4 "
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
                {/* pick up in physical store */}
                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="my-5 p-5  flex flex-col text-center md:px-28">
                    <h1 className="text-xl font-bold my-5 ">
                      Formulario de entrega
                    </h1>
                    <p className="mb-5">
                      Si deseas recoger tu pedido en nuestra tienda física, por
                      favor indícanos tu nombre y número celular para
                      contactarte si hay algún inconveniente
                    </p>
                    <p>Te esperamos en nuestra dirección: </p>
                    <div className="text-sm text-gray-400 ">
                      <p>Colombia - Bogotá</p>
                      <p>Suba Calle 165a # 54c -95</p>
                      <p>Local 401</p>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-center flex-col items-center my-10 mb-1">
                      <div className="flex justify-between w-10/12  mb-1 text-gray-400 text-sm md:w-9/12">
                        <p>Nombre</p>
                        <p>*obligatorio</p>
                      </div>
                      <input
                        type="text"
                        className="w-10/12 border border-black h-11 rounded md:w-9/12 p-3"
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
                          className=" border border-black h-11 rounded w-full p-3"
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
                          className=" border border-black h-11 rounded w-full p-3"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200 border border-black px-4 py-4 rounded font-medium text-base w-9/12 text-center">
                    {" "}
                    <p>
                      Tu pedido estará listo para recoger en la tienda el 23 de
                      enero
                    </p>{" "}
                    <p> El horario de atención es de 7:00 AM a 7:00 PM </p>{" "}
                    <p>Gracias por tu preferencia</p>{" "}
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
                <div className="my-5 p-5  flex flex-col text-center md:px-28">
                  <h1 className="text-xl font-bold my-5 ">
                    Formulario de entrega
                  </h1>

                  <p>
                    ¡Estamos felices de enviarte el pedido a tu dirección! Por
                    favor, dinos tu nombre, la dirección donde quieres recibir
                    el pedido y alguna referencia adicional que nos ayude a
                    encontrarla. 😊
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center mt-7 mb-10">
                  <div className="flex justify-between w-5/6  mb-1 text-gray-400 text-sm  md:w-9/12">
                    <p>Nombre</p>
                    <p>*obligatorio</p>
                  </div>
                  <input
                    type="text"
                    className="w-5/6  border border-black h-11 rounded  md:w-9/12 p-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex justify-center flex-col items-center mt-7">
                  <div className="flex justify-between w-5/6 mb-1 text-gray-400 text-sm  md:w-9/12 p-3">
                    <p>Direccion</p>
                    <p>*obligatorio</p>
                  </div>
                  <input
                    type="text"
                    className="w-5/6 border border-black h-11 rounded  md:w-9/12 p-3 "
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
                    className="w-5/6 border border-black h-20 rounded  md:w-9/12 p-3"
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
              <div className="py-5  border-black flex flex-col border-b relative">
                <a
                  className="text-end text-sm underline absolute right-5 top-4 cursor-pointer"
                  onClick={() => {
                    setCurrentStep(2);
                  }}
                >
                  Editar
                </a>
                <p className="text-center font-bold ">2. Envio</p>
                <div className="flex justify-center items-center ">
                  <p className="text-gray-400 text-sm mr-2">✓</p>
                  <p className="text-sm">Recoger en tienda</p>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <p className="text-gray-400 text-sm mr-2">
                    Su pedido sera despachado a nombre de:
                  </p>
                  <p className="text-sm underline">Juan</p>
                </div>
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
                          Puedes recoger tu pedido desde el 31/01/2023 en:
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
                        <div className="flex">
                          <p className=" mb-2">Envio a nombre de: &nbsp;</p>
                          <p className="capitalize">{name}</p>
                        </div>
                        <p className="text-gray-400 mb-1">
                          Direccion de envio:
                        </p>
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
                        <div className="mx-2">
                          <Image
                            src="https://play-lh.googleusercontent.com/J2CfzgROe1_weYm7yNIffrAGsGeahADM6r2qMN3C9pNw-i0TJR71LGbVX9y2N7t6dw"
                            alt="Nequi icon"
                            width={35}
                            height={35}
                            quality={100}
                          />
                        </div>
                        {/* text */}
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">Nequi</p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Paga con Nequi desde WhatsApp, ¡fácil y rápido!
                            </p>
                          </span>
                        </div>
                      </label>
                    </li>
                    <li className="px-3  cursor-pointer hover:bg-gray-100 border-t border-black">
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
                            defaultChecked={false}
                          />
                        </div>
                        {/* image */}
                        <div className="mx-2">
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                            alt="Whatsapp icon"
                            width={35}
                            height={35}
                            quality={100}
                          />
                        </div>
                        {/* text */}
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">Whatsapp</p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Continúa el pago contactándonos a través de
                              WhatsApp
                            </p>
                          </span>
                        </div>
                      </label>
                    </li>
                    {/* <li className="px-3 border-t border-black cursor-pointer  hover:bg-gray-100">
                      <label className="flex items-center cursor-pointer h-16 w-full">
                        dot
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
                        image
                        <div className="mx-2">
                          <Image
                            src="https://cdn-icons-png.flaticon.com/512/2086/2086775.png"
                            alt="Cash icon"
                            width={35}
                            height={35}
                            quality={100}
                          />
                        </div>
                        text
                        <div className=" ">
                          <span className="">
                            <p className="text-sm  ">Efectivo contraentrega</p>
                            <p className="text-gray-400 mb-1 text-xs">
                              Paga con tarjetas de credito y debito o efectivo
                              en el momento de la entrega
                            </p>
                          </span>
                        </div>
                      </label>
                    </li> */}
                  </ul>
                </div>
                <button
                  className="bg-black text-white h-11 w-5/6 m-auto mt-10 rounded mx-auto uppercase md:w-9/12 "
                  onClick={() => {
                    handlePayment();
                  }}
                >
                  Continuar
                </button>
                {/* <div className="rounded w-5/6 md:w-3/4 my-14">
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AfSbdLR7pcbWlTPDGXj8tLs4we3dYDBOaTXdfgYCDnpyZ1QmUlsalbYK3mjWgSmw1ZmSM0K_RUuU7E2z",
                      components: "buttons",
                    }}
                  >
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              description: "Compra de productos",
                              amount: {
                                value: convertedAmount,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log(order, "order");
                      }}
                      onError={(err) => {
                        console.error(err);
                      }}
                      onCancel={(data) => {
                        console.log(data);
                      }}
                      style={{
                        shape: "rect",
                        color: "gold",
                        layout: "vertical",
                        label: "pay",
                        zIndex: -1,
                      }}
                    />
                  </PayPalScriptProvider>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-5  border-black flex flex-col border-b ">
            <p className="text-center font-bold text-gray-300">3. Pago</p>
          </div>
        )}
        {/* review */}
        {true && (
          <>
            <div
              className="flex justify-center text-center font-bold items-center border-b border-black py-3"
              id="final"
            >
              <p>RESUMEN DE PEDIDOS</p>
            </div>

            {cart.map((product) => (
              <div
                className="text-sm flex border-b border-black p-5 md:p-0"
                key={product.product.slug}
              >
                <div>
                  <Image
                    src={`https:${product.product.image[0].fields.file.url}`}
                    width={150}
                    height={150}
                    alt={product.product.name}
                    quality={100}
                    objectFit="cover"
                  />
                </div>
                <div className="p-2 ">
                  <div className="mb-3">
                    <p className="font-bold uppercase">
                      {product.product.name}
                    </p>
                    <p>
                      $
                      {product.product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                  </div>
                  <div>
                    <div className="flex space-x-1">
                      <p>Color:</p>
                      <p>{product.color}</p>
                    </div>
                    <div className="flex space-x-1">
                      <p>Tamaño:</p>
                      <p>{product.size}</p>
                    </div>
                    <div className="flex space-x-1">
                      <p>Cantidad:</p>
                      <p>{product.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-sm space-y-3 p-3">
              <div className="flex justify-between ">
                <p>SUBTOTAL</p>
                <p>$ {formattedTotal}</p>
              </div>
              <div className="flex justify-between ">
                <p>ENVÍO</p>
                <p>$ 0,00 </p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>TOTAL</p>
                <p>$ {formattedTotal}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        payment={payment}
        handleSendOrderNequi={handleSendOrderNequi}
        handleSendOrderWhasapp={handleSendOrderWhasapp}
        handleSendOrderAgainstDelivery={handleSendOrderAgainstDelivery}
        address={address}
        mail={mail}
        name={name}
      />
    </section>
  );
}
