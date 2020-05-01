import React from "react";
import { Link } from "gatsby";
import nextofkin from "../img/nextofkin.svg";
import navbutton from "../img/navbutton.svg";
import "./Navigation.css";

const Navigation = class extends React.Component {


  render() {
    return (


      <nav role="main" className={`navigation ${this.props.active}`}>

        <ul className="navigation-list">

          <li className="navigation-list-item">
            <Link className="navigation-list-link" to="/">work</Link>
          </li>

          <li className="navigation-list-item">
            <Link className="navigation-list-link" to="/about">about</Link>
          </li>
          
          <li className="navigation-list-item">
            <Link className="navigation-list-link" to="/contact">contact</Link>
          </li>

          

        </ul>
      </nav>
    );
  }
};

export default Navigation;
