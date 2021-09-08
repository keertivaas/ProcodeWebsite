import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navlinks">
        <li>
          <a href="#" className="navlink">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            The Faculty
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            The Team
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Events
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Past Sessions
          </a>
        </li>
      </ul>
    </div>
  );
};
