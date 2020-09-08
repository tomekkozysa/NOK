import React from "react";
import { Link } from "gatsby";
import nextofkin from "../img/nextofkin.svg";
import navbutton from "../img/navbutton.svg";
import "./Header.css";
import Navigation from "../components/Navigation";
// import Img from "gatsby-image"
// import {useStaticQuery,graphql} from "gatsby"

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {

    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is_active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );

    console.log('H:', this.state.navBarActiveClass)
  };

  render() {
    return (
      <header className="header-main">
        <hgroup className="header-content">

          <div className="header-logo">
            <img src={nextofkin} alt="NextOfKin" />

          </div>
          <div className="nav-toggle">

            <img className="nav-toggle-button" src={navbutton} alt="NextOfKin" onClick={() => this.toggleHamburger()} />
          </div>
        </hgroup>


        <Navigation active={this.state.navBarActiveClass} />
      </header>

    );
  }
};

export default Header;
