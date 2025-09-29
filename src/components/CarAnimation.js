import React from "react";
import "./CarAnimation.scss";

const CarAnimation = () => (
  <div className="car-animation">
    <div className="car-body">
      <div className="car-top"></div>
      <div className="car-main"></div>
      <div className="car-window"></div>
      <div className="car-wheel car-wheel-left"></div>
      <div className="car-wheel car-wheel-right"></div>
    </div>
    <div className="car-road"></div>
  </div>
);

export default CarAnimation;
