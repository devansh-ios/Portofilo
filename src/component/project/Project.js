import React from "react";
import "./Project.css";
import Post from "./Post";
import portfolio from "../../Images/postImages/portfolio.png";
import nasa from "../../Images/postImages/nasa.png";
import buyBooks from "../../Images/postImages/buyBooks.png";
import dogsper from "../../Images/postImages/dogsper.png";
import weather from "../../Images/postImages/weather.png";
import imageKart from "../../Images/postImages/imageKart.png";
const Project = ({ color }) => {
  return (
    <>
      <div className={color ? "projectContainer" : "projectContainer_black"}>
        <h1>Projects</h1>
        <hr></hr>
        <div className="postBag">
          <Post img={nasa} title="ReactSpace"  codeLink="https://codesandbox.io/s/determined-morning-lgf7mc" liveLink="https://lgf7mc.csb.app/"/>
          <Post img={portfolio} title="Portfolio" codeLink="https://github.com/devansh-ios/Portofilo"  liveLin="https://3devansh-portfolio3.netlify.app"k/>
          <Post img={buyBooks} title="BuyBooks"  codeLink="https://github.com/devansh-ios/BuyBook" liveLink="https://tgubm0.csb.app/"/>
          <Post img={imageKart} title="ImageKart" codeLink="https://github.com/devansh-ios/photosearch" liveLink="https://imagekart.netlify.app"/>
          <Post img={dogsper} title="DogSper"  codeLink="https://codesandbox.io/s/dogsper-pet-treat-website-v0sfh9" liveLink="https://v0sfh9.csb.app/"/>
          <Post img={weather} title="Weather teller app" codeLink="https://github.com/devansh-ios/weatherApp" liveLink="https://devansh-ios.github.io/weatherApp/"/>
        </div>
      </div>
    </>
  );
};

export default Project;
