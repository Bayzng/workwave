import React, { useEffect, useRef } from "react";
import wavebg from "../../../assets/wavebg.jpg";
import bayz from "../../../assets/bayz.png";
import "./Waveface.css";

const Waveface = () => {
  const slideIndex = useRef(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".--Waveface-ite");
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    const interval = setInterval(nextSlide, 3000);

    showSlide(currentIndex);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Waveface">
      <h2>Best Host On WorkWave</h2>
      <div className="--Workwave-section">
        <div className="--Waveface-item">
          <div className="--Waveface-bg">
            <img src={wavebg} alt="background" />
          </div>
          <div className="--Waveface-bayz">
            <div className="--Waveface-flex">
              <div className="--Waveface-content">
                <img src={bayz} alt="bayz" />
                <h2>Abdulakeem Adebayo</h2>
                <p>CEO WorkWave</p>
              </div>
              <div className="--Waveface-content">
                <img src={bayz} alt="bayz" />
                <h2>Abdulakeem Adebayo</h2>
                <p>CEO WorkWave</p>
              </div>
              <div className="--Waveface-content rm">
                <img src={bayz} alt="bayz" />
                <h2>Abdulakeem Adebayo</h2>
                <p>CEO WorkWave</p>
              </div>
              <div className="--Waveface-content rm">
                <img src={bayz} alt="bayz" />
                <h2>Abdulakeem Adebayo</h2>
                <p>CEO WorkWave</p>
              </div>
              <div className="--Waveface-content rm">
                <img src={bayz} alt="bayz" />
                <h2>Abdulakeem Adebayo</h2>
                <p>CEO WorkWave</p>
              </div>
            </div>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Waveface;
