/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { updateChronoValues } from "../../../features/pomodoro/Pomodoro";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function UpdateTimeButton({ sign, type }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(updateChronoValues({ type, value: sign === "+" ? +60 : -60 }));
  }

  return (
    <div className="btnBox" onClick={handleUpdate}>
      <span>{sign === "+" ? <FaPlus /> : <FaMinus />}</span>
    </div>
  );
}

export default UpdateTimeButton;
