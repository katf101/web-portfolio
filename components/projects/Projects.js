import React, { useState } from "react";
import Image from "next/image";
import css from "./projects.module.css";
import Router from "next/router";
// import foli from "../../public/images/folibox.png";

const Projects = () => {
  const onFoliPush = () => {
    Router.push("/project/foli");
  };
  const onGitCardPush = () => {
    Router.push("/project/gitcard");
  };
  const onGitPortfolioPush = () => {
    // Router.push("/project/portfolio");
  };

  return (
    <div className={css.main}>
      <h1>Project</h1>
      <div className={css.imageContainer}>
        <div className={css.image} onClick={onFoliPush}>
          <Image
            src="/images/folibox.png"
            alt="포트폴리오 1"
            width={410}
            height={485}
          />
        </div>
        <div className={css.image} onClick={onGitCardPush}>
          <Image
            src="/images/cardapp.png"
            alt="포트폴리오 2"
            width={410}
            height={485}
          />
        </div>
        <div className={css.image} onClick={onGitPortfolioPush}>
          <Image
            src="/images/webpofolbox.png"
            alt="포트폴리오 3"
            width={410}
            height={485}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
