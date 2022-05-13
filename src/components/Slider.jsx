import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const dataSlider = [
  "https://i.ibb.co/MM7F8Xz/Slider2.jpg",
  "https://i.ibb.co/VqT0spb/Slider1.png",
  "https://i.ibb.co/k6SD30F/Slider3.jpg",
];

export const Slider = () => {
  const [slider, setSliderState] = useState(0);
  const handleSlider = (side) => {
    const sliders = dataSlider.length - 1;

    if (side === "left") {
      slider - 1 >= 0 ? setSliderState(slider - 1) : setSliderState(sliders);
    } else {
      const numberSlide = slider + 1;
      numberSlide > sliders ? setSliderState(0) : setSliderState(numberSlide);
    }
  };
  return (
    <div className="wrapper">
      <div className="slider">
        <ArrowLeftOutlinedIcon
          className="slider__left"
          onClick={() => handleSlider("left")}
        />
        <img src={dataSlider[slider]} alt="Slider" />
        <ArrowRightOutlinedIcon
          className="slider__right"
          onClick={() => handleSlider("right")}
        />
      </div>
    </div>
  );
};
