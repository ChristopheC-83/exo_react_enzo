/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ModalBtn from "./Modal/ModalBtn";
import getBoxShadowValue from "../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";

function Vizualisation() {
  const shadowValues = useSelector((state) => state.shadows);
  const boxProps = useSelector((state) => state.boxProps);

  console.log(getBoxShadowValue(shadowValues));

  return (
    <div className="vizualisation">
      <ModalBtn />
      <div
        className="square"
        style={{
          boxShadow: `${getBoxShadowValue(shadowValues).slice(0, -1)}`,
          borderRadius: `${boxProps[0].value}px `,
          height: `${boxProps[2].value}px `,
          width: `${boxProps[1].value}px `,
          backgroundColor: `${boxProps[3].value}`,
        }}
      ></div>
    </div>
  );
}

export default Vizualisation;
