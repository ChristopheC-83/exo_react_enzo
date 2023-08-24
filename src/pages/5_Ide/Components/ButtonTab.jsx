/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { hidePreview } from "../../../features/ide/preview";

function ButtonTab({ id, toggleTab, buttonContent, imgURL }) {
  const dispatch = useDispatch();
  return (
    <button
      className="btn-ide-sideBar"
      onClick={() => {
        toggleTab(id)
        dispatch(hidePreview());
      }}
    >
      <img src={imgURL} alt="" />
      <span>{buttonContent}</span>
    </button>
  );
}

export default ButtonTab;
