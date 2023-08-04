import React from 'react'
import './Circle.css'
const Circle = ({title,img}) => {
  return (
    <div className='circle'>
    <p className='circle_outline'>
    <img src={img} alt="storyImage"/>
    </p>
    <p>{title}</p>
    </div>
  )
}

export default Circle