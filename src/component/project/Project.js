import React from 'react'
import './Project.css'
import Post from './Post'
import portfolio from "../../Images/postImages/portfolio.png"
import nasa from "../../Images/postImages/nasa.png"
import buyBooks from "../../Images/postImages/buyBooks.png"
import dogsper from "../../Images/postImages/dogsper.png"
import weather from "../../Images/postImages/weather.png"
import imageKart from "../../Images/postImages/imageKart.png"
const Project = ({color}) => {
  return (
    <>
    
    <div className={color ? "projectContainer" : "projectContainer_black"}> 
    <h1>Projects</h1>
   <hr></hr>
   <div className='postBag'>
    <Post img={nasa} desc=""/>
    <Post img={portfolio}/>
    <Post img={buyBooks}/>
    <Post img={imageKart}/>
    <Post img={dogsper}/>
    <Post img={weather}/>
</div>
    </div>
    </>
  )
}

export default Project