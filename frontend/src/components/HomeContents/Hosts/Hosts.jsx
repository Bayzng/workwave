import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import hostWork from "../../../assets/painter.jpeg";
import "./Hosts.css";

const Hosts = () => {
  return (
    <div className='Host'>
        <div className='--host-hero'>
            <h3 className='--host-search'>Top Search</h3>
            <h2>Find Expertize</h2>
            <p>Let's Connect You</p>
        </div>
        <div className='--Host-section'>
            <div className='--Host-section-list'>
                <h3 className='--Host-trends'>Trends</h3>
                <h3>People</h3>
                <h3>Booked</h3>
            </div>
            <div>
                <h3 className='--Host-recent'>Recent People</h3>
            </div>
        </div>
        <div className='--Host-main'>
            <div className='--Host-details'>
                <img src={hostWork} alt="" />
                <div className='--Host-check'>
                    <div>
                        <h3>User Profession</h3>
                        <p><FaLocationDot /> Location</p>
                    </div>
                    <div className='--Host-amount'>
                        <h3>#10,000</h3>
                    </div>
                </div>
                <div className='--Host-rating'>
                    <div>
                        <h2>A. Adebayo</h2>
                    </div>
                    <div>
                        <h2><CiStar />0.0</h2>
                    </div>
                </div>
            </div>

            {/* second */}

            <div className='--Host-details'>
                <img src={hostWork} alt="" />
                <div className='--Host-check'>
                    <div>
                        <h3>User Profession</h3>
                        <p><FaLocationDot /> Location</p>
                    </div>
                    <div className='--Host-amount'>
                        <h3>#10,000</h3>
                    </div>
                </div>
                <div className='--Host-rating'>
                    <div>
                        <h2>A. Adebayo</h2>
                    </div>
                    <div>
                        <h2><CiStar /> 0.0</h2>
                    </div>
                </div>
            </div>

            {/* third */}

            <div className='--Host-details'>
                <img src={hostWork} alt="" />
                <div className='--Host-check'>
                    <div>
                        <h3>User Profession</h3>
                        <p><FaLocationDot /> Location</p>
                    </div>
                    <div className='--Host-amount'>
                        <h3>#10,000</h3>
                    </div>
                </div>
                <div className='--Host-rating'>
                    <div>
                        <h2>A. Adebayo</h2>
                    </div>
                    <div>
                        <h2><CiStar />0.0</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hosts