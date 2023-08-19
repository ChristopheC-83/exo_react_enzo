/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import getBoxShadowValue from "../../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ModalResult({ closeModal }) {
  const shadowValues = useSelector((state) => state.shadows);

  useEffect(() => {
    // bloc scroll si overlay visible
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);

  let runningAnimation = false;

  function handleCopy(e) {
    if (!runningAnimation) {
      e.target.textContent = "Copié !";
      setTimeout(() => {
        e.target.textContent = "Copy";
        runningAnimation = false;
      }, 1250);
    }
    navigator.clipboard.writeText(`box-shadow:${getBoxShadowValue(shadowValues)}`);
  }
  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modalResult" onClick={(e) => e.stopPropagation()}>
        <div className="textEtBtn">
          <p>Ton code est là 🎉</p>
          <div className="boutons">
            <button onClick={handleCopy}>Copy</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
        <div className="leCode">
          <strong>box-shadow :</strong> {getBoxShadowValue(shadowValues)}
        </div>
      </div>
    </div>
  );
}

export default ModalResult;
