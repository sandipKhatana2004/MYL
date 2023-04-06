import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="logo">
          <h1 className="nav-links ">
            <Link style={{ textDecoration: "none" }} className="Hover" to="/">
              MYL
            </Link>
          </h1>
        </div>
        <div className="nav-links">
          <div className="menu">
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="Hover"
                to="/timemanagement"
              >
                Time-Management
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="Hover"
                to="/todo"
              >
                To-Do
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="Hover"
                to="/notetaking"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="Hover"
                to="/goals"
              >
                Goals
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="Hover "
                to="/everydayread"
              >
                EveryDayRead
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="Hover"
                to="/jarnuling"
              >
                Jarnuling
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
