import React from 'react'
import happy from "../../../assets/happyTwo.avif"
import connectImageTwo from "../../../assets/connect.png"
import connectImageThree from "../../../assets/connectTwo.jpeg"
import "./Explore.css"

const Explore = () => {
  return (
    <div className='explore'>
      <h2 className='--explore-connect'>About us</h2>
      <div className='--explore-expertise'>
        <h1 className='--explore-h1'>Connect With Your Expertise <br /> All Around The World</h1>
      </div>
      <div className='--explore-content'>

        <div className='--explore-imgs'>
          <img src={happy} alt="connect" />
        </div>

        <div className='--explore-first'>
          <div>
            <p className='numberOne'>01</p>
            <h3>Connect with people and expand your career</h3>
            <p>At QuickLink, You'll enjoy unlimited connections to connect with millions of people.</p>
          </div>
          <div>
            <p className='numberTwo'>02</p>
            <h3>Connect with people and expand your career</h3>
            <p>At QuickLink, You'll enjoy unlimited connections to connect with millions of people.</p>
          </div>
          <div>
            <p className='numberThree'>03</p>
            <h3>Connect with people and expand your career</h3>
            <p>At QuickLink, You'll enjoy unlimited connections to connect with millions of people.</p>
          </div>
          <div className='--explore-button '> 
            <button>Connect</button>
          </div>
        </div>
        <div className='--explore-img'>
          <img src={connectImageTwo} alt="connect" />
        </div>

        <div className='--explore-imgs'>
          <img style={{marginTop: '2rem'}} src={connectImageThree} alt="connect" />
        </div>

      </div>
    </div>
  )
}

export default Explore