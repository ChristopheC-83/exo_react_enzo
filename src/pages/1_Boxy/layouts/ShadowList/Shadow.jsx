/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShadow } from "../../../../features/boxy/shadows";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";

function Shadow({ panelNumber, shadow }) {
  const [toggleShadow, setToggleShadow] = useState(false);

  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    }
  });

  return (
    <div className="shadow">
      <button
        className="btnShadowItem"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <h4>Shadow {panelNumber}</h4>
        {!toggleShadow ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      {toggleShadow && (
        <>
          <div className="upToggleShadow">
            <div className="checkboxShadow">
              {/* <Checkbox/>
            <Checkbox/> */}
            </div>
            <div className="spacerShadow"></div>
            <button className="btnAddShadow" style={{ backgroundColor: "red" }}>
              Remove
            </button>
          </div>
          <div className="shadowInfo">{shadowInputs}</div>
        </>
      )}
    </div>
  );
}

export default Shadow;
