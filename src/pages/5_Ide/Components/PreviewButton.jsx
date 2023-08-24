/* eslint-disable no-unused-vars */

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../../../features/ide/preview";

function PreviewButton() {
  const dispatch = useDispatch();
  const previewData = useSelector((state) => state.preview);

  return (
    <div>
      <button
      onClick={()=>dispatch(togglePreview())}
      >
        {previewData.preview ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        <span>{previewData.preview ? " Hide" : " Show"} Preview</span>
      </button>
    </div>
  );
}

export default PreviewButton;
