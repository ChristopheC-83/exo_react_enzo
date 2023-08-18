/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import BoxRange from "./BoxRange";
import BoxColorPicker from "./BoxColorPicker";

function BoxPanel() {
  const boxState = useSelector((state) => state.boxProps);

  const boxInputs = boxState.map((input, index) => {
    if (input.type === "range") {
      return <BoxRange key={index} inputData={input} />;
    } else if (input.type === "color") {
      return <BoxColorPicker key={index} inputData={input} />;
    }
  });

  return (
    <div className="boxPanelItem">
      <h2>Box Properties</h2>

      {boxInputs}
    </div>
  );
}

export default BoxPanel;
