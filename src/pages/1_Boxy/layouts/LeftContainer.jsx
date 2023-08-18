/* eslint-disable no-unused-vars */
import { useState } from "react";
import ShadowList from "./ShadowList/ShadowList";
import BoxPanel from "./BoxPanel/BoxPanel";

function LeftContainer() {
  const [tabs, setTabs] = useState(0);

  const tabsList = [
    { name: "Shadow", component: <ShadowList /> },
    { name: "BoxPanel", component: <BoxPanel /> },
  ];
  return (
    <div className="leftContainer">
      <div className="tabs">
        {tabsList.map((tab, index) => (
          <button
            key={index}
            className={`tabsItem ${index === tabs && "tabsItemFocus"}`}
            onClick={() => setTabs(index)}
          >
            <p>{tab.name}</p>
          </button>
        ))}
      </div>
      <div className="contentLeftContainer">
            {tabsList[tabs].component}

      </div>
    </div>
  );
}

export default LeftContainer;
