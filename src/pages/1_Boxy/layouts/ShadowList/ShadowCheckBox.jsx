/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateShadowCheckBox } from "../../../../features/boxy/shadows";

function ShadowCheckBox({ name, shadowID }) {
  const dispatch = useDispatch();
  const checkboxShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowID)
  );

  return (
    <>
      <input
        className="shadowCheckBox"
        onChange={() => dispatch(updateShadowCheckBox({ shadowID, name }))}
        type="checkbox"
        checked={checkboxShadow[name]}
        name=""
        id={`checkbox-${name}-${shadowID}`}
      />
      <label
        htmlFor={`checkbox-${name}-${shadowID}`}
        className="shadowCheckBoxLabel"
      >
        {/* 1ere lettre en majuscule */}
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  );
}

export default ShadowCheckBox;
