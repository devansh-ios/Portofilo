import React from 'react'
import './Project.css'
import Post from './Post'
const Project = ({color}) => {
  return (
    <>
    <div className={color ? "projectContainer" : "projectContainer_black"}> 
    
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>

    </div>
    </>
  )
}

export default Project