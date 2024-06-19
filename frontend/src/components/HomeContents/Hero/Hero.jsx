import React from 'react'
import heroImage from "../../../assets/heroImage.jpeg"
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='--hero-connect'>
        <h1>Let's Promote Your Expertise, <br /> Connect With Your Perfect Match</h1>
      </div>
      <div className='--hero-image'>
        <img src={heroImage} alt="image" />
      </div>
      <div className='--hero-content'>
        <div className='--hero-slider'>
          <p>Stays</p>
          <p>News</p>
          <p>Nearby</p>
          <p>Connect</p>
        </div>
        <div className='--hero-location'>
          <h3> <FaLocationDot /> Location</h3>
          <h3> <IoPeople /> People</h3>
        </div>
        <div className='--hero-search'>
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Hero