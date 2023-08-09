import { Button } from '@mui/material'
import React from 'react'
import './Post.css'
const Post = ({img,desc}) => {
  return (
    <>
    <div className='postContainer'>
    
    
    <img className='imageContainer' src={img} alt="projectsImage"/>
     <p>{desc}</p>
    <div className='button_container'>
    <Button variant="contained">LIVE</Button>
    <Button variant="contained" >CODE</Button>
    </div>
  </div>

    </>
    )
}

export default Post