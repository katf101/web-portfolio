import React from "react";
import css from "./Btn.module.css";

const BtnSlider = ({ direction, moveSlide }) => {
  //   console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? css.btnNext : css.btnPrev}
    >
      {direction === "next" ? <div>👉</div> : <div>👈</div>}
    </button>
  );
};

export default BtnSlider;
