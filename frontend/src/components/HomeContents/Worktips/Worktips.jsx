import React from 'react'
import { BiCool } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import "./Worktips.css"

const Worktips = () => {
  return (
    <div className='worktips'>
      <h2 className='--worktips-about'>Steps For The Perfect Meet</h2>
      <div className='--worktips-info'>
        <h1 className='--worktips-h1'>How It Works</h1>
        <p>Keep Calm & Meet People</p>
      </div>

      <div className='--worktips-review'>
        <div className='--worktips-section'>
          <h2><BiCool  size={40} color='indigo' /></h2>
          <h3>Book & Relax</h3>
          <p>On QuickLink our booking section is perfectly transparent and magnificent</p>
        </div>
        <div className='--worktips-section'>
          <h2><IoMdCheckmarkCircleOutline size={40} color='green' /></h2>
          <h3>Book & Relax</h3>
          <p>On QuickLink our booking section is perfectly transparent and magnificent</p>
        </div>
        <div className='--worktips-section'>
          <h2><FaRegThumbsUp size={40} color='blue' /></h2>
          <h3>Book & Relax</h3>
          <p>On QuickLink our booking section is perfectly transparent and magnificent</p>
        </div>
      </div>
    </div>
  )
}

export default Worktips