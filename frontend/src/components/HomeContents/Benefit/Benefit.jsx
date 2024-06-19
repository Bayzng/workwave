import React from 'react'
import workads from "../../../assets/workads.png"
import "./Benefit.css"

const Benefit = () => {
  return (
    <div className='Benefit'>
      <div className='--Benefit-img'>
        <div>
          <img src={workads} alt="" />
        </div>
      </div>
      <div className='--Benfit-connect'>
        <h3>Experience Unlimited Connect</h3>
        <h2>Meet Expertise <br /> Connect Expertise <br /> Around The World</h2>

        <div>
          <button className='--Benefit-button'>Community Meet</button>
        </div>
      </div>
    </div>
  )
}

export default Benefit