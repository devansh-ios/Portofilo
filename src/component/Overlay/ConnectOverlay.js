import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import './Co.css'

const ConnectOverlay = () => {
  return (
    <div className="socialContainer">
     <div><a href="https://www.linkedin.com/in/devansh-kumar-9798b21ba/" target="_blanck"> <LinkedInIcon sx={{ fontSize: 40 }}  /></a></div>
     <div> <a href="https://www.instagram.com/__devansh_kumar_/" target="_blanck"><InstagramIcon sx={{ fontSize: 40 }} /></a></div>
      <div><a href="mailTo:devansh.dev2592002@gmail.com" target="_blanck"><EmailIcon sx={{ fontSize: 40 }} /></a></div>

    </div>
  );
};

export default ConnectOverlay;
