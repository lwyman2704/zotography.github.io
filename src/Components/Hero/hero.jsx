import './hero.css'
import playbutton from '../../assets/playicon.png'
import pausebutton from '../../assets/pauseicon.webp'
import arrowbutton from '../../assets/arrowbutton.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
    
    return (
        <div className='hero'>

            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>

            <div className="hero-explore">
                <p>Explore my Portfolio</p>
                <img src={arrowbutton} alt=""/>
            </div>

            <div className="hero-dot-play">

                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                </ul>

                <div className="hero-play">
                    <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pausebutton:playbutton} alt=""/>
                    <p>Play Portolio Background</p>
                </div>

            </div>

        </div>
    )
}

export default Hero