import React from "react";
import logo from "../../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="--footer-logo">
        <img src={logo} alt="" />
        <h2>QuickLink</h2>
      </div>
      <div className="--footer-content">
        <h3>About</h3>
        <h3>What We Do</h3>
        <h3>Connect</h3>
        <h3>Join Our Community</h3>
      </div>

      <div className="--footer-contents">
        <h3>People</h3>
        {/* <h3>Map</h3> */}
        <h3>View</h3>
        <form action="">
          <div className="news-two">
            <button className="news-button">
              <input type="email" name="email" placeholder="Enter Email Address..." required />
            </button>
            <button className="submit-button">Subscribe</button>
          </div>
        </form>
      </div>

      <div className="copyright">
        <h3>Copyright &copy; 2024 QuickLink. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
