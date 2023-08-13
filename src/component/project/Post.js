import { Button } from '@mui/material'
import React from 'react'
import './Post.css'

const Post = ({img,title,codeLink,liveLink}) => {
  return (
    <>
    <div className='postContainer'>
    
 <p className='heading'>{title}</p><br/><br/>
    <img className='imageContainer' src={img} alt="projectsImage"/>
    <div className='button_container'>
    <Button variant="contained"><a href={liveLink} target='_blanck'>LIVE</a></Button>
    <Button variant="contained" ><a href={codeLink} target="_blanck">CODE</a></Button>
    </div>
  </div>

    </>
    )
}

export default Post