import React from "react";
import { Link } from "gatsby";
import "./Navigation.css";

const Navigation = ({ active, toggleHamburger }) => {
  return (
    <nav role="main" className={`navigation ${active}`}>
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <Link
            onClick={toggleHamburger}
            className="navigation-list-link"
            to="/"
          >
            work
          </Link>
        </li>

        <li className="navigation-list-item">
          <Link
            onClick={toggleHamburger}
            className="navigation-list-link"
            to="/about"
          >
            about
          </Link>
        </li>

        <li className="navigation-list-item">
          <Link
            className="navigation-list-link"
            to="/contact"
            onClick={toggleHamburger}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
