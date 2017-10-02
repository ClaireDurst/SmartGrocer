import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          SmartGrocer
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "active"
              : ""
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={window.location.pathname === "/recipes" ? "active" : ""}
        >
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className={window.location.pathname === "/plan" ? "active" : ""}>
          <Link to="/plan">Plan</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
