/* eslint-disable no-unused-vars */
import React from "react";
import Loaders from "../../Components/Loaders";
import CardMeteo from "./cardMeteo";


function Meteo() {


  return (
    <div className="meteo">
      <h1>Meteo</h1>
        {/* {loading && <Loaders/>} */}
        <CardMeteo/>
    </div>
  );
}

export default Meteo;
