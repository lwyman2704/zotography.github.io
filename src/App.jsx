import Background from "./Components/Background/background.jsx";
import { useEffect, useState } from 'react'
import Navbar from "./Components/Navbar/navbar.jsx";
import Hero from "./Components/Hero/hero.jsx";

const App = () => {

  let heroData = [
    {text1:"Welcome to",text2:"My Portfolio"}, //so that the text changes depending on the video or click
    {text1:"Welcome to",text2:"ZoTography"}, 
  ]
  const [heroCount, setHeroCount] = useState(0); //so we can play or pause video
  const [playStatus, setPlayStatus] = useState(false);//if true the video will play 

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===1?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/> 
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App