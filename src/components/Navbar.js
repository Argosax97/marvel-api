import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Marvel Logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="logo_container">
        <h3 className="user_name">Alexander H.</h3>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        <Link to="/login" className="link">
          <div>Log In</div>
        </Link>
      </div>
      <nav>
        <ul>
          <Link to="/characters" className="link">
            <li>Characters</li>
          </Link>
          <Link to="/comics" className="link">
            <li>Comics</li>
          </Link>
          <Link to="/creators" className="link">
            <li>Creators</li>
          </Link>
          <Link to="/events" className="link">
            <li>Events</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
