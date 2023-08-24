/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonTab from "./ButtonTab";
import WorkSpace from "./WorkSpace";
import Preview from "./Preview";
import { hidePreview } from "../../../features/ide/preview";

function SideBar() {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.codeUpdater);
  const previewData = useSelector((state) => state.preview);
  const [tabIndex, setTabIndex] = useState(sideBar[0].id);

  return (
    <>
      <div className="sidebar">
        {sideBar.map((tab) => (
          <ButtonTab
            key={tab.id}
            id={tab.id}
            toggleTab={(id) => setTabIndex(id)}
            buttonContent={tab.buttonContent}
            imgURL={tab.imgURL}
          />
        ))}
      </div>
      <div className="workspace">
        <WorkSpace
          id={tabIndex}
          code={sideBar.find((obj) => obj.id === tabIndex).code}
        />
        {previewData.preview && <Preview />}
      </div>
    </>
  );
}

export default SideBar;
