import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import storeLogo from "../assets/media/store-logo.png"

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={storeLogo} alt="Store Logo" />
      </div>
      <nav className="header-nav">
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Link to="/cart" className="header-cart"> <IoCartOutline size={24} /> </Link>
      </nav>
    </header>
  );
}

export default Header;