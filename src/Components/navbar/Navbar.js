import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" style={{ color: "white" }}>
          <li>HOME</li>
        </Link>
        <Link to="/covid" style={{ color: "white" }}>
          <li>COVID-19</li>
        </Link>
        <Link to="/weather" style={{ color: "white" }}>
          <li>WEATHER</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
