import { useRef, useEffect, useState } from "react";
import FoliUser from "../../components/slider/FoliUser";
import FoliPost from "../../components/slider/FoliPost";
import FoliSearch from "../../components/slider/FoliSearch";

const foli = () => {
  const [controller, setController] = useState({
    video1: true,
    video2: false,
    video3: false,
  });

  const userRef = useRef();
  const searchRef = useRef();
  const postRef = useRef();

  useEffect(() => {
    const cancelWheel = (e) => userRef.current && e.preventDefault();
    document.body.addEventListener("wheel", cancelWheel, { passive: false });
    return () => document.body.removeEventListener("wheel", cancelWheel);
  }, []);

  // div1
  const onFoliUserWheel = (e) => {
    if (e.deltaY > 0) {
      scrollToSection(searchRef);
      setController({ ...controller, video2: true });
    }
  };
  // div2
  const onFoliSearchWheel = (e) => {
    if (e.deltaY > 0) {
      scrollToSection(postRef);
    } else {
      scrollToSection(userRef);
    }
  };
  // div3
  const onFoliPostWheel = (e) => {
    if (e.deltaY < 0) {
      scrollToSection(searchRef);
      setController({ ...controller, video2: false });
    }
  };

  const scrollToSection = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div ref={userRef} onWheel={onFoliUserWheel}>
        <FoliUser onControll={controller} />
      </div>
      <div ref={searchRef} onWheel={onFoliSearchWheel}>
        <FoliSearch onControll={controller} />
      </div>
      <div ref={postRef} onWheel={onFoliPostWheel}>
        <FoliPost onControll={controller} />
      </div>
    </div>
  );
};

export default foli;
