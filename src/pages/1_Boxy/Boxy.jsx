/* eslint-disable no-unused-vars */

import { useState } from "react"
import LeftContainer from "./layouts/LeftContainer"
import ShadowList from "./layouts/ShadowList/ShadowList"
import BoxPanel from "./layouts/BoxPanel/BoxPanel"
import Vizualisation from "./layouts/Vizualisation/Vizualisation"

function Boxy() {

  const [tabs, setTabs]= useState(0)

  const tabsList=[
    {name:"Shadow", component:<ShadowList/>},
    {name:"BoxPanel", component:<BoxPanel/>},
  
  ]



  return (
    <>
      <h1>Boxy</h1>
    <div className="boxy">
      <LeftContainer/>
      <Vizualisation/>
    </div></>
  )
}

export default Boxy
