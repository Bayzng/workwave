import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleTouchOutside = (event) => {
      if (menuOpen && !event.target.closest(".nav")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("touchstart", handleTouchOutside);
    } else {
      window.removeEventListener("touchstart", handleTouchOutside);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar">
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <h2 className="artchain">QuickLick</h2>
        <ul>
          <li className="--nav-list-one">App</li>
          <li className="--nav-list-two">Developers</li>
          <li className="--nav-list-three">About</li>
          <li className="--nav-list-four">Blog</li>
        </ul>
        <button className="explore">Register</button>
        {menuOpen ? (
          <IoMdClose className="menu-icon" onClick={toggleMenu} />
        ) : (
          <IoMdMenu className="menu-icon" onClick={toggleMenu} />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
