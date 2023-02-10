import React from "react";
import M_Cash from "../DiferentsModals/M_Cash";
// import M_Whatsapp from "../DiferentsModals/M_Whatsapp";
import M_Nequi from "../DiferentsModals/M_Nequi";

export default function modal({ showModal, setShowModal, payment }) {
  if (showModal === true) {
    if (payment === "efectivo") {
      return <M_Cash setShowModal={setShowModal} />;
    }
    // if (payment === "whatsapp") {
    //   return <M_Whatsapp setShowModal={setShowModal} />;
    // }
    if (payment === "nequi") {
      return <M_Nequi setShowModal={setShowModal} />;
    }
  } else {
    return null;
  }
}
