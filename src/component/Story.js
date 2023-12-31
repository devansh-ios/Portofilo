import React from "react";
import "./Story.css";
import Circle from "./Circle.js";
import githubImg from "../Images/Octicons-mark-github.svg.png";
import html from "../Images/html.png";
import gfgImage from "../Images/gfg.png";
import codesandbox from "../Images/codesand.png";
import devansh from "../Images/devanshkiphoto (1).jpg";
import css_battle from "../Images/css_battle.png";
import { useState } from "react";
import { aboutMe, skills, github, gfg, codeSandi, CSSBattle } from "./data";
import Overlay from "./Overlay/Overlay";
const Story = ({ color }) => {
  const [show, setAbout_overlay] = useState(false);
  const [showSkills, setSkills_overlay] = useState(false);
  const [showGithub, setGitHub_overlay] = useState(false);
  const [showGfg, setGfg_overlay] = useState(false);

  const [showCsb, setCSb_overlay] = useState(false);
  const [showCss, setCSS_overlay] = useState(false);

  const toggleOverlay = () => {
    setAbout_overlay((current) => !current);
  };
  const toggleSkills = () => {
    setSkills_overlay((current) => !current);
  };
  const toggleGithub = () => {
    setGitHub_overlay((current) => !current);
  };
  const toggleGfg = () => {
    setGfg_overlay((current) => !current);
  };

  const toggleCsb = () => {
    setCSb_overlay((current) => !current);
  };
  const toogleCSS = () => {
    setCSS_overlay((current) => !current);
  };

  return (
    <div className={color ? "storyContainer" : "storyContainer_black"}>
      <div className="circleContainer">
        {show && <Overlay desc={aboutMe} />}
        {showSkills && <Overlay desc={skills} />}
        {showGithub && <Overlay desc={github} />}
        {showGfg && <Overlay desc={gfg} />}

        {showCsb && <Overlay desc={codeSandi} />}
        {showCss && <Overlay desc={CSSBattle} />}
        <div onClick={toggleOverlay}>
          <Circle title="About Me" img={devansh} />
        </div>
        <div onClick={toggleSkills}>
          <Circle title="Skills" img={html} />
        </div>
        <div onClick={toggleGithub}>
          <Circle title="GitHub" img={githubImg} />
        </div>
        <div onClick={toggleGfg}>
          <Circle title="GfG" img={gfgImage} />
        </div>
        <div onClick={toggleCsb}>
          <Circle title="CodeSandBox" img={codesandbox} />
        </div>

        <div onClick={toogleCSS}>
          <Circle title="CSS Battle" img={css_battle} />
        </div>
      </div>
    </div>
  );
};

export default Story;
