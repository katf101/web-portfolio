import React from "react";
import Image from "next/image";
import css from "./skills.module.css";

const frontSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Next",
];
const backSkills = ["Node", "Express", "Mysql", "Sequelize", "Django"];
const deploySkills = ["AWS"];
const versionSkills = ["Git", "Github", "Sourcetree"];
const etc = ["Figma", "Slack", "Notion", "AWS"];

const Skills = () => {
  return (
    <div className={css.main}>
      <h1>Skills</h1>
      <div className={css.skill_main}>
        <div className={css.skill_container}>
          <h2 className={css.position}>Frontend</h2>
          <div className={css.front_skill_div}>
            {frontSkills.map((skill, i) => {
              return <p className={css.skill_name}># {skill}</p>;
            })}
          </div>
        </div>
        <div className={css.skill_container}>
          <h2 className={css.position}>Backend</h2>
          <div className={css.front_skill_div}>
            {backSkills.map((skill, i) => {
              return <p className={css.skill_name}># {skill}</p>;
            })}
          </div>
        </div>

        <div className={css.skill_container}>
          <h2 className={css.position}>Version-controll</h2>
          <div className={css.front_skill_div}>
            {versionSkills.map((skill, i) => {
              return <p className={css.skill_name}># {skill}</p>;
            })}
          </div>
        </div>
        <div className={css.skill_container}>
          <h2 className={css.position}>etc.</h2>
          <div className={css.front_skill_div}>
            {etc.map((skill, i) => {
              return <p className={css.skill_name}># {skill}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
