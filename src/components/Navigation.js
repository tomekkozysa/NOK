import React from "react";
import { Link } from "gatsby";
import "./Navigation.css";

const Navigation = ({ active, toggleNav }) => {
  const navLinks = [
    { path: "/", linkName: "work" },
    { path: "/about", linkName: "about" },
    { path: "/contact", linkName: "contact" },
  ];

  return (
    <nav role="main" className={`navigation ${active}`}>
      <ul className="navigation-list">
        {navLinks.map(({ path, linkName }, index) => (
          <li className="navigation-list-item" key={index}>
            <Link
              onClick={toggleNav}
              className="navigation-list-link"
              to={path}
            >
              {linkName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
