import React from "react";
import Image from "next/image";
import css from "./Concat.module.css";

const Concat = () => {
  const gitClick = () => {
    window.open("https://github.com/katf101", "_blank");
  };
  const blogClick = () => {
    window.open("https://101devroom.tistory.com/", "_blank");
  };
  return (
    <section className={css.main}>
      <div className={css.container_image}>
        <div className={css.image}>
          <Image
            src="/images/my.jpg"
            // src='/images/site/max.png'
            alt="my profile image"
            width={200}
            height={200}
          />
        </div>
        <div className={css.container_concat}>
          <h1>Concat</h1>
          <div className={css.concat}>
            <div>생년월일: 1995.04.02</div>
            <div>Email: vawav11@gmail.com</div>
            <div>Phone: 010-3825-8768</div>
            <div>
              <button onClick={gitClick}>Github</button>
              <button onClick={blogClick}>Blog</button>
            </div>
          </div>
        </div>
      </div>
      <div className={css.container_intro}>
        <h1>Introduce</h1>
        <div className={css.myintro}>
          <h3>안녕하세요. 신입 웹 개발자 이한솔입니다. </h3>
          <div>같이 일하고 싶은 동료가 될 수있도록 노력합니다.</div>
          <div>저 만이 아닌 같이 성장 할 수 있는 방법을 항상 고민합니다.</div>
          <div>
            꾸준히 공부하고 발전해 나갈 수 있는 개발자가 되는 것이 목표입니다.
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Concat;
