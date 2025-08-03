import React from 'react';
import './background.css';
import video1 from '../../assets/bckvideoreduced.mp4';
import image1 from '../../assets/sample6.jpg';
import image2 from '../../assets/3rdphoto.jpg';
import image3 from '../../assets/sample1.jpg';
import image4 from '../../assets/sample2.jpg';
import image5 from '../../assets/sample3.jpg';
import image6 from '../../assets/sample4.jpg';
import dame1 from '../../assets/dame1.JPG';
import dame2cpy from '../../assets/dame2cpy.png';
import kalani2 from '../../assets/kalani2cpy.JPG';
import sample2 from '../../assets/sample2.jpg';


const Background = ({ playStatus, heroCount, isHomePage }) => {
    return (
        <div className="background-container">
            <div className={`background-overlay ${!isHomePage ? 'active' : ''}`}></div>

            <video
                className={playStatus ? 'background active' : 'background'}
                autoPlay
                loop
                muted
            >
                <source src={video1} type='video/mp4' />
            </video>
            <img
                src={image5}
                className={heroCount === 0 && !playStatus ? 'background active' : 'background'}
                alt="Background"
            />
            <img
                src={image2}
                className={heroCount === 1 && !playStatus ? 'background active' : 'background'}
                alt="Background"
            />
            <img
                src={image3}
                className={heroCount === 2 && !playStatus ? 'background active' : 'background'}
                alt="Background"
            />
            <img
                src={sample2}
                className={heroCount === 3 && !playStatus ? 'background active' : 'background'}
                alt="Background"
            />
            <img
                src={kalani2}
                className={heroCount === 4 && !playStatus ? 'background active' : 'background'}
                alt="Background"
            />
            <img
                src={dame1}
                className={heroCount === 5 && !playStatus ? 'background active' : 'background'}
                alt="Background"
            />
        </div>
    );
};

export default Background;