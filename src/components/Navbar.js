import React from "react";
import Characters from "./categories/Characters";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
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
