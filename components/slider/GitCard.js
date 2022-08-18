import React, { useState, useRef, useEffect } from "react";
import css from "./GitCard.module.css";
import gitcardapp from "../../public/videos/gitcardapp.mp4";
import BtnSlider from "./icons/BtnSlider";

const GitCard = ({ onControll }) => {
  const [slideIdx, setSlideIdx] = useState(1);

  const dataName = [
    {
      id: 1,
      title: "깃허브 아이디로 Card 추가 기능",
      video: gitcardapp,
    },
  ];

  const githubClick = () => {
    window.open("https://github.com/katf101/Github-Card-App", "_blank");
  };

  return (
    <div className={css.main}>
      {/* <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
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
      </div>
      <div className={css.git_div} onClick={githubClick}>
        Github
      </div>
    </div>
  );
};
export default GitCard;
