/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../../../features/boxy/shadows";

function ShadowRange({ inputData, shadowID }) {

  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(updateShadowValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value,
      shadowID
    }));
  }

  
  return (
    <div className="boxRange">
      <div className="nameValue">
        {inputData.name}
        <div className="inputBoxRange">
          <input
            type="number"
            onChange={handleInputs}
            value={inputData.value}
          />
          <p>px</p>
        </div>
      </div>
      <div className="rangeBoxRange">
        <input
          type="range"
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          onChange={handleInputs}
          value={inputData.value}
        />
        <div className="barreCentrale"></div>
      </div>
    </div>
  );
}

export default ShadowRange
