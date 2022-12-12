import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";

export default function ProductPage() {
  const {
    query: { id },
  } = useRouter();

  return (
    <Layout>
      <section className="min-h-screen bg-black grid overflow-hidden grid-cols-2 grid-rows-1 text-white">
        <div className="border-r relative">
          <Image
            src="https://balenciaga.dam.kering.com/m/12e38bc725baafd4/Medium-725268TNU181000_F.jpg?v=3"
            alt="13Kitsch"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <article className="h-full">
          <div className="w-full h-1/5 border-b font-semibold text-center flex flex-col items-center">
            <p className="text-2xl my-6">SCOPE T-SHIRT</p>
            <p className="w-3/4 text-xs">
              Camiseta de pokemon de gran tamaño en algodón elástico y blando.
              Cuello redondo y diseño del pokemon charizard estampado en el
              pecho.{" "}
            </p>
          </div>
          <div className="border-b h-28 py-4">
            <div className="flex">
              <p className="mx-3">Color</p>
              <ul className="flex">
                <li className="mx-3">Rojo</li>
                <li className="mx-3">verde</li>
              </ul>
            </div>
            <div className="flex my-2">
              <div className="mx-3 bg-orange-500 rounded-full w-9 h-9 text-transparent">
                ••••
              </div>
              <div className="mx-3 bg-emerald-600 rounded-full w-9 h-9 text-transparent">
                ••••
              </div>
              <div className="mx-3 bg-fuchsia-800 rounded-full w-9 h-9 text-transparent">
                ••••
              </div>
            </div>
          </div>
          <div className="border-b h-24 p-3">
            <p className="">Talla(Col): XL</p>
            <div className="my-3 text-sm">
              <button className="w-12 h-8  mx-2 border rounded-lg">M</button>
              <button className="w-12 h-8 mx-2 border rounded-lg">L</button>
              <button className="w-12 h-8  mx-2 border rounded-lg">XL</button>
            </div>
          </div>
          <div className="border-b p-4 text-sm">
            <ul className=" mx-5 list-disc">
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>{" "}
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>{" "}
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>{" "}
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>{" "}
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>{" "}
              <li>Dimensions : L10,2 x H6,3 x W2,7 inch</li>
            </ul>
            <div className="mt-8">
              <p>Material: 100% calfskin</p>
              <p>Product ID: 69581423EJY1000</p>
            </div>
          </div>
          <div className="h-40 border-b my-4 flex flex-col items-center ">
            <p className="text-2xl text-center my-4">$ {"50.000"}</p>
            <button className="w-4/5 h-12 border">Colocar en el carrito</button>
          </div>
        </article>
      </section>
    </Layout>
  );
}
