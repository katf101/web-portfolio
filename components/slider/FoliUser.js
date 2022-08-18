import React, { useState } from "react";
import css from "./FoliUser.module.css";
import signup from "../../public/videos/signup.mp4";
import logout from "../../public/videos/logout.mp4";
import login from "../../public/videos/login.mp4";
import BtnSlider from "./icons/BtnSlider";

const FoliUser = () => {
  const dataName = [
    {
      id: 1,
      title: "회원가입",
      video: signup,
    },
    {
      id: 2,
      title: "로그인",
      video: login,
    },
    {
      id: 3,
      title: "로그아웃",
      video: logout,
    },
  ];
  const [slideIdx, setSlideIdx] = useState(1);

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

  const githubClick = () => {
    window.open("https://github.com/katf101/Portfolio-Service", "_blank");
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
              <h3 className={css.title_name}>{obj.title}</h3>
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
          {Array.from({ length: 3 }).map((item, i) => (
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
      <div className={css.git_div} onClick={githubClick}>
        Github
      </div>
    </div>
  );
};

export default FoliUser;
