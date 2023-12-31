import React from "react";
import "./Intro.css";
import pp from "../Images/pp.jpg";
import { useState } from "react";
import { Button } from "@mui/material";
import ConnectOverlay from "./Overlay/ConnectOverlay";
const Intro = ({ color }) => {
  const[showOverlay,setOverlay]=useState(false);
  const toggleOverlay=()=>{
    setOverlay(!showOverlay);
  }
  
  return (
    <div className={color ? "introContainer" : "introContainer_black"}>
      <div className="secondContainer">
        <img className="pp" src={pp} alt="pp" />

        <div className="follower-info">
          <p>
            <span>6 {">"}</span> Projects
          </p>
          <p>
            <span>100 {">"}</span> Leetcode
          </p>
          <p>
            <span>10 {">"}</span> Certificates  
          </p>
        </div>
      </div>

      <div className="intro">
        <p>devansh</p>
        <p> Front - end Developer </p>
        
      </div>
      <div className="button_div">
        <Button>
          <a href="https://drive.google.com/file/d/1fR_ZZ_lHrLmAzWbXaVsUTxXZoKVgXC3L/view?usp=sharing"
          style={{textDecoration:'none',color:"white"}}
          target="_blanck">
            Download Resume 
          </a>
        </Button>
        <Button onClick={toggleOverlay}> {showOverlay?'Cancel':'Connect +'}</Button>
   
        {showOverlay && <ConnectOverlay/>}
        </div>
    </div>
  );
};

export default Intro;
