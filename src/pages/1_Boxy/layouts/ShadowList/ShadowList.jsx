/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import shadows, { addShadow } from "../../../../features/boxy/shadows";
import Shadow from "./Shadow";

function ShadowList() {
  const dispatch = useDispatch();
  const shadows = useSelector((state) => state.shadows);

  return (
    <div className="boxPanelItem">
      <div className="titleButtonShadowList">
        <p>Customize Shadows</p>
        <button className="btnAddShadow" onClick={() => dispatch(addShadow())}>
          Add a shadow
        </button>
      </div>
      {shadows.map((shadow, index) => (
        <div className="titleButtonShadowList listShadow" key={shadow.id}>
          <Shadow panelNumber={index + 1} shadow={shadow} />
        </div>
      ))}
    </div>
  );
}

export default ShadowList;
