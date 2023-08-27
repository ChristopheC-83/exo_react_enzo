/* eslint-disable no-unused-vars */

import { GrPowerReset } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { startChrono, resetChrono } from "../../../features/pomodoro/Pomodoro";

function ToggleButton() {
  const dispatch = useDispatch();
  const chronoValues = useSelector((state) => state.pomodoro);

  function toggleChrono() {
    if (!chronoValues.isPlaying) {
      dispatch(startChrono());
    } else {
      dispatch(resetChrono());
    }
  }

  return (
    <button onClick={toggleChrono} className="btnWork">
      {chronoValues.isPlaying ? (
        <>
          Reset <GrPowerReset />
        </>
      ) : (
        <>
          Start <BsPlay />
        </>
      )}
    </button>
  );
}

export default ToggleButton;
