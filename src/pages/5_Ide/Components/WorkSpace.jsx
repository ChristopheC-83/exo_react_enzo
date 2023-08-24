/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { updateCode } from "../../../features/ide/sideBar";
import React from "react";

function WorkSpace({ code, id }) {
  const dispatch = useDispatch();

  function handleTextearea(e) {
    dispatch(updateCode({ id, value: e.target.value }));
  }

  return (
    <textarea className="text-zone" spellCheck="false" value={code} onChange={handleTextearea}></textarea>
  );
}

export default WorkSpace;
