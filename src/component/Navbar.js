import React from "react";
import Intro from "./Intro";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Project from "../component/project/Project" 
import LightModeIcon from "@mui/icons-material/LightMode";
import "./Navbar.css";
import { useState } from "react";
import Story from "./Story";
const Navbar = () => {
  const [color, setColor] = useState(true);
  return (
    <>
      <div className={color ? "newNavbar" : "navbar"}>
        <div className="logo">
          <p>_ _devansh_kumar_</p>
        </div>

        {/*toggle night mode in my protfolio*/}

        <div className="icons_nav">
          {color ? (
            <NightsStayIcon onClick={() => setColor(false)} className="icons" />
          ) : (
            <LightModeIcon
              className="icons"
              onClick={() => {
                setColor(true);
              }}
            />
          )}
        </div>
      </div>
      <Intro color={color} />
      <Story color={color} />
      <Project color={color}/>
    </>
  );
};

export default Navbar;
