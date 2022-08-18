import React, { useState } from "react";
import css from "./FoliPost.module.css";
import add from "../../public/videos/add.mp4";
import remove from "../../public/videos/remove.mp4";
import update from "../../public/videos/update.mp4";
import image from "../../public/videos/image.mp4";
import BtnSlider from "./icons/BtnSlider";

const FoliPost = () => {
  const dataName = [
    {
      id: 6,
      title: "게시글(이력서) 올리기",
      video: add,
    },
    {
      id: 7,
      title: "게시글(이력서) 삭제",
      video: remove,
    },
    {
      id: 8,
      title: "게시글(이력서) 수정",
      video: update,
    },
    {
      id: 4,
      title: "프로필 사진 업데이트",
      video: image,
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
          {Array.from({ length: 4 }).map((item, i) => (
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
export default FoliPost;
