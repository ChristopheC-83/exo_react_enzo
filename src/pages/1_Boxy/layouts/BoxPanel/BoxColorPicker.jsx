/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { updateBoxValue } from "../../../../features/boxy/boxProps";

function BoxColorPicker({ inputData }) {
  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(
      updateBoxValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    );
  }
  return (
    <div className="colorPicker">
      <p>{inputData.name}</p>
      <div className="inputColor">
        <input type="text" onChange={handleInputs} value={inputData.value} />
        <input type="color"  onChange={handleInputs} value={inputData.value} />
      </div>
    </div>
  );
}

export default BoxColorPicker;
