/* eslint-disable no-unused-vars */

import UpdateTimeButton from "./components/UpdateTimeButton";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";
import ToggleButton from "./components/ToggleButton";

function Pomodoro() {
  return (
    <div className="pomodoro">
      <div className="pomodoro-container">
        <h1>Pomodoro App</h1>
        <div className="boxes">
          <div className="box">
            <p>Sessions</p>
            <div className="btnsBox">
              <UpdateTimeButton sign={<FaMinus />} type={"session"} />
              <p>25</p>
              <UpdateTimeButton sign={<FaPlus />} type={"session"} />
            </div>
          </div>
          <div className="box">
            <p>Pauses</p>
            <div className="btnsBox">
              <UpdateTimeButton sign={<FaMinus />} type={"pauses"} />
              <p>5</p>
              <UpdateTimeButton sign={<FaPlus />} type={"pauses"} />
            </div>
          </div>
        </div>
        <div className="workBox">
          <h2>Work</h2>
          <p className="timeLeft" style={{ color: "#333" }}>
            25:00
          </p>
          <p>Passed cycle(s) : 0</p>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
