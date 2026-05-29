import React from "react";
import "../css/Header.css";
import { NavLink, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import storeLogo from "../assets/media/store-logo.png"

function Header() {
  return (
    <header className="header">

      <nav className="header-nav">
        <div className="header-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </div>
        <div className="header-logo">
          <img src={storeLogo} alt="Store Logo" />
        </div>
        <Link to="/cart" className="header-cart"> <IoCartOutline size={24} /> </Link>
      </nav>
    </header>
  );
}

export default Header;