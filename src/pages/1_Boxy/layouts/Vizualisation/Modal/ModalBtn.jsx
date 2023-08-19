/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

function ModalBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="modalBtn" onClick={() => setShowModal(!showModal)}>
        <p>Get the code</p>
      </button>
      {showModal &&
        createPortal(
          <ModalResult closeModal={() => setShowModal(!showModal)} />,
          document.body // emplacement de l'apparition de la modale
        )}
    </>
  );
}

export default ModalBtn;
