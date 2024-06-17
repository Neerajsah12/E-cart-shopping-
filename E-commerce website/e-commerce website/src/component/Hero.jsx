import React from "react";
import "./Hero.css"
import arrow_icon from "./image/arrow.png"
import hero_image from "./image/hero_image.png";



function Hero(){
  return(
    <>
    <div className="hero">
      <div className="hero-left">
         <h2>NEW ARRIVAL</h2>
      
      
      <p>Collections</p>
      <p>ForEveryone</p>
      
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
      

      <div className="hero-right">
        <img src={hero_image} alt="" />

      </div>
    </div>
    </>
  )
}


export default Hero;