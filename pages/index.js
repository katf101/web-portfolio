import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Concat from "../components/main/Concat";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Intro from "../components/main/Intro";
import Router from "next/router";

const MyPage = () => {
  const concatRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const introRef = useRef();

  useEffect(() => {
    console.log(Router.query);
    if (Router.query.name === "project") {
      scrollToSection(projectsRef);
    } else if (Router.query.name === "skills") {
      scrollToSection(skillsRef);
    } else if (Router.query.name === "intro") {
      scrollToSection(concatRef);
    } else if (Router.query.name === "career") {
      scrollToSection(introRef);
    }
  });

  useEffect(() => {
    const cancelWheel = (e) => concatRef.current && e.preventDefault();
    document.body.addEventListener("wheel", cancelWheel, { passive: false });
    return () => document.body.removeEventListener("wheel", cancelWheel);
  }, []);

  const onConcatWheel = (e) => {
    if (e.deltaY > 0) {
      scrollToSection(skillsRef);
    }
  };
  const onSkillsWheel = (e) => {
    if (e.deltaY > 0) {
      scrollToSection(projectsRef);
    } else {
      scrollToSection(concatRef);
    }
  };
  const onProjectsWheel = (e) => {
    if (e.deltaY < 0) {
      scrollToSection(skillsRef);
    } else {
      scrollToSection(introRef);
    }
  };
  const onIntroWheel = (e) => {
    if (e.deltaY < 0) {
      scrollToSection(projectsRef);
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
      <Head>
        <title>LeeHansol | Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
      </Head>
      <div className="concat" ref={concatRef} onWheel={onConcatWheel}>
        <Concat />
      </div>
      <div className="skills" ref={skillsRef} onWheel={onSkillsWheel}>
        <Skills />
      </div>
      <div className="projects" ref={projectsRef} onWheel={onProjectsWheel}>
        <Projects />
      </div>
      <div className="intro" ref={introRef} onWheel={onIntroWheel}>
        <Intro />
      </div>
    </div>
  );
};

export default MyPage;
