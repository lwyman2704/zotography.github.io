import React from "react"
import './background.css' 
import video1 from '../../assets/bckvideoreduced.mp4'
import image1 from '../../assets/bckgrndimg.png'
import image2 from '../../assets/3rdphoto.jpg'


const Background = ({playStatus, heroCount}) => {
    
  if (playStatus){ // if the playstatus is true then we return and the video
    return (
        <video className='background fade-in' autoPlay loop muted> 
            <source src={video1} type='video/mp4'/>
        </video>
    )
    } 
    else if (heroCount === 0){
        return <img src={image2} className='background fade-in' alt="" />
    }
    else if (heroCount === 1){
        return <img src={image1} className='background fade-in' alt="" />
    }
  
    return null;
};

export default Background