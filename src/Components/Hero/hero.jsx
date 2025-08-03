import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import playbutton from '../../assets/playicon.png';
import pausebutton from '../../assets/pauseicon.webp';

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <h1>{heroData.text1}<br />{heroData.text2}</h1>
            </div>

            <div className="hero-explore">
                <Link to="/services" className="hero-btn">
                    Explore Services
                </Link>
            </div>

            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(3)} className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(4)} className={heroCount === 4 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(5)} className={heroCount === 5 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>

                <div className="hero-play-pause"> {/* Corrected class name */}
                    <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pausebutton : playbutton} alt="Play/Pause" />
                    <p>Switch to Video Background</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;