import React from "react";
import M_Cash from "../DiferentsModals/M_Cash";
// import M_Whatsapp from "../DiferentsModals/M_Whatsapp";
import M_Nequi from "../DiferentsModals/M_Nequi";

export default function modal({
  showModal,
  setShowModal,
  payment,
  handleSendOrderAgainstDelivery,
  handleSendOrderNequi,
  address,
  mail,
  name,
}) {
  if (showModal === true) {
    if (payment === "efectivo") {
      return (
        <M_Cash
          setShowModal={setShowModal}
          handleSendOrderAgainstDelivery={handleSendOrderAgainstDelivery}
          address={address}
          mail={mail}
          name={name}
        />
      );
    }
    // if (payment === "whatsapp") {
    //   return <M_Whatsapp setShowModal={setShowModal} />;
    // }
    if (payment === "nequi") {
      return (
        <M_Nequi
          setShowModal={setShowModal}
          handleSendOrderNequi={handleSendOrderNequi}
        />
      );
    }
  } else {
    return null;
  }
}
