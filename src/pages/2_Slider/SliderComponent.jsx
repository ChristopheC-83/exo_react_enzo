/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiControlPlay } from "react-icons/tfi";
import { TfiControlPause } from "react-icons/tfi";
import { useState, useEffect } from "react";
import sliderData from "./data/sliderData";

function SliderComponent() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [play, setPlay] = useState(true);

  function toggleImage(indexPayload) {
    setSliderIndex((state) => {
      if (indexPayload + state > sliderData.length - 1) {
        return 0;
      } else if (indexPayload + state < 0) {
        return sliderData.length - 1;
      } else {
        return state + indexPayload;
      }
    });
  }

  useEffect(() => {
    if (play) {
      const intervalID = setInterval(() => toggleImage(1), 1500);
      return () => clearInterval(intervalID);
    }
  }, [play]);

  return (
    <>
      <p className="index-info">
        {sliderData[sliderIndex].id} / {sliderData.length}
      </p>
      <div className="img-slider">
        <p className="info-img">{sliderData[sliderIndex].description}</p>
        <img
          src={`public/images/2_slider/${sliderData[sliderIndex].url}`}
          alt={sliderData[sliderIndex].description}
          className="img-slider"
        />
        <div
          onClick={() => toggleImage(-1)}
          className="btn btn-left"
          alt="image précédente"
        >
          <TfiArrowCircleLeft />
        </div>
        <div
          onClick={() => toggleImage(1)}
          className="btn btn-right"
          alt="image suivante"
        >
          <TfiArrowCircleRight />
        </div>
        <div
          className="btn btn-play"
          onClick={() => setPlay(!play)}
          alt="arrêt lecture défilement"
        >
          {play ? <TfiControlPause /> : <TfiControlPlay />}
        </div>
      </div>
    </>
  );
}

export default SliderComponent;
