import React from 'react'
import './Story.css'
import Circle from './Circle.js'
import github from "../Images/Octicons-mark-github.svg.png"
import html from "../Images/html.jpg"
import gfg from "../Images/gfg.png"
import codesandbox from "../Images/codesand.png"
import leetcode from "../Images/LeetCode_logo_black.png"
import css_battle from "../Images/css_battle.png"
const Story = ({color}) => {
  return (
    <div className={color ? "storyContainer" : "storyContainer_black"}>
     <div className='circleContainer'>
     <Circle title="About Me" img=""/>
     <Circle title="Skills" img={html}/>
     <Circle title="GitHub" img={github}/>
     <Circle title="GfG" img={gfg}/>
     <Circle title="LeetCode"  img={leetcode}/>
     <Circle title="CodeSandBox" img={codesandbox}/>
     <Circle title="CSS Battle" img={css_battle}/>
    


     </div>
    </div>
  )
}

export default Story