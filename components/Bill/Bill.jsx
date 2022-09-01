import React from "react";

export default function Bill() {
  return (
    <div className="border-b h-64">
      <div className="w-full p-8">
        <ul>
          <li>
            <div className="flex justify-between font-semibold">
              <span>Envio</span>
              <span>COP 0.000</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between font-semibold mt-2">
              <span>Envio</span>
              <span>COP 0.000</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between font-semibold mt-6">
              <span>Envio</span>
              <span>COP 0.000</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-black  h-14 w-96 text-white">
          Avanzar al pago
        </button>
      </div>
    </div>
  );
}
