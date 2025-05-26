import React, { useState } from "react";
import "./Navbar.css"; // We'll create this next

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Shay-Lynn</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}