/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.codeUpdater);
  console.log(sideBar);

  return (
    <div className="sidebar">
      <button>HTML</button>
      <button>CSS</button>
      <button>JS</button>
    </div>
  );
}

export default SideBar;
