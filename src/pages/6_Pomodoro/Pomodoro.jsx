/* eslint-disable no-unused-vars */

import UpdateTimeButton from "./components/UpdateTimeButton";
import { GrPowerReset } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";
import ToggleButton from "./components/ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import getFormatedValue from "../../utils/pomodoro/getFormatedValue";

function Pomodoro() {
  const chronoValues = useSelector((state) => state.pomodoro);

  return (
    <div className="pomodoro">
      <div className="pomodoro-container">
        <h1>Pomodoro App</h1>
        <div className="boxes">
          <div className="box">
            <p>Sessions</p>
            <div className="btnsBox">
              <UpdateTimeButton sign="-" type={"session"} />
              <p>{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign="+" type={"session"} />
            </div>
          </div>
          <div className="box">
            <p>Pauses</p>
            <div className="btnsBox">
              <UpdateTimeButton sign="-" type={"pause"} />
              <p>{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign="+" type={"pause"} />
            </div>
          </div>
        </div>
        <div className="workBox">
          <h2>
            {chronoValues.displayedValue.heading
              ? chronoValues.displayedValue.heading
              : "..."}
          </h2>
          <p className="timeLeft" style={{ color: "#333" }}>
            {getFormatedValue(chronoValues.displayedValue.value)}
          </p>
          <p>
            Passed cycle(s) :{chronoValues.cycles ? chronoValues.cycles : 0}
          </p>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
