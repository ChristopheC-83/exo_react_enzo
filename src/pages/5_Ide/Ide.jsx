/* eslint-disable no-unused-vars */
import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import SideBar from "./Components/SideBar";
import WorkSpace from "./Components/WorkSpace";

function Ide() {
  return (
    <div className="ide-container">
      <div className="ide-menu">
        <h1>
          the <b>SmartIDE</b>
        </h1>
        <div className="btn">
          <button>
            <AiOutlineEye /> Preview
          </button>
        </div>
        <div className="ide-hamb">
          <HiDotsVertical />
        </div>
      </div>
      <div className="ide-work">
        <SideBar />
        <div className="workspace">
          <WorkSpace />
        </div>
      </div>
    </div>
  );
}

export default Ide;
