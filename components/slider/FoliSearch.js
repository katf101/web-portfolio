import React, { useState, useRef, useEffect } from "react";
import css from "./FoliSearch.module.css";
import pagenation from "../../public/videos/pagenation.mp4";
import search from "../../public/videos/search&posts.mp4";
import BtnSlider from "./icons/BtnSlider";

const FoliSearch = ({ onControll }) => {
  const [slideIdx, setSlideIdx] = useState(1);

  const dataName = [
    {
      id: 1,
      title: "페이지네이션",
      video: pagenation,
    },
    {
      id: 2,
      title: "검색 필터 기능",
      video: search,
    },
  ];

  const nextSlide = () => {
    if (slideIdx !== dataName.length) {
      setSlideIdx(slideIdx + 1);
      console.log("next", slideIdx);
    } else if (slideIdx === dataName.length) {
      setSlideIdx(1);
      console.log("next", slideIdx);
    }
  };

  const prevSlide = () => {
    if (slideIdx !== 1) {
      setSlideIdx(slideIdx - 1);
      console.log("prev", slideIdx);
    } else if (slideIdx === 1) {
      setSlideIdx(dataName.length);
      console.log("prev", slideIdx);
    }
  };

  const moveDot = (i) => {
    setSlideIdx(i);
  };

  return (
    <div className={css.main}>
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className={css.slider}>
        {dataName.map((obj, i) => {
          return (
            <div
              key={obj.id}
              className={slideIdx === i + 1 ? css.activeAnim : css.slide}
            >
              <h3>{obj.title}</h3>
              <video
                className="video"
                width={800}
                height={500}
                autoPlay={true}
                preload="metadata"
                loop
                muted
              >
                <source src={obj.video} />
              </video>
            </div>
          );
        })}
        <div className={css.containerdDots}>
          {Array.from({ length: 2 }).map((item, i) => (
            <div
              key={i}
              onClick={() => moveDot(i + 1)}
              // className={css.dot}
              className={slideIdx === i + 1 ? css.active : css.dot}
            ></div>
          ))}
        </div>
      </div>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
    </div>
  );
};
export default FoliSearch;
