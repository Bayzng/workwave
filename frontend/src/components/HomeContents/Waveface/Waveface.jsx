import React from "react";
import wavebg from "../../../assets/wavebg.jpg";
import wavebayz from "../../../assets/bayz.png";
import "./Waveface.css";

const Waveface = () => {
  return (
    <div className="waveface">
      <h3 className="--waveface-info">QuickLink Faces</h3>
      <h2 className="--waveface-best">Best Host Of QuickLink</h2>

      <div className="--waveface-">

        <div className="--waveface-hosts slideOne">
          <img src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className="--waveface-bayz">
            <img src={wavebayz} alt="" />
            <div className="--waveface-details">
              <h3>Abdulakeem Adebayo</h3>
              <p>CEO QuickLink</p>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="--waveface-hosts slideTwo">
          <img src="https://images.unsplash.com/photo-1718471472310-77a63c5fad95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D" alt="" />

          <div className="--waveface-bayz">
            <img src={wavebayz} alt="" />
            <div className="--waveface-details">
              <h3>Abdulakeem Adebayo</h3>
              <p>CEO QuickLink</p>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="--waveface-hosts slideThree">
          <img src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className="--waveface-bayz">
            <img src={wavebayz} alt="" />
            <div className="--waveface-details">
              <h3>Abdulakeem Adebayo</h3>
              <p>CEO QuickLink</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Waveface;
