/* eslint-disable no-unused-vars */

import { useState } from "react"
import LeftContainer from "./layouts/LeftContainer"
import ShadowList from "./layouts/ShadowList/ShadowList"
import BoxPanel from "./layouts/BoxPanel/BoxPanel"

function Boxy() {

  const [tabs, setTabs]= useState(0)

  const tabsList=[
    {name:"Shadow", component:<ShadowList/>},
    {name:"BoxPanel", component:<BoxPanel/>},
  
  ]



  return (
    <div className="boxy">
      <h1>Boxy</h1>
      <LeftContainer/>
    </div>
  )
}

export default Boxy
