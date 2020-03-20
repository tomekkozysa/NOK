import React from "react";
import { Link } from "gatsby";
import nextofkin from "../img/nextofkin.svg";
import "./Navbar.css";

const Navbar = class extends React.Component {
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
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <div>
        <div className={`sidebar ${this.state.navBarActiveClass}`}>
          {/* <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => this.toggleHamburger()}
          >
            ×
          </a> */}
          <button className="closbtn" onClick={() => this.toggleHamburger()}>
            <b>x</b>
          </button>
          <br />
          <br />
          <Link className="sidebarLink" to="/">
            NextofKIN?
          </Link>
          {/* <Link className="sidebarLink" to="/products">
            Products
          </Link> */}
          <Link className="sidebarLink" to="/blog">
            Stories
          </Link>
          <Link className="sidebarLink" to="/contact">
            Contact
          </Link>
          <Link className="sidebarLink" to="/about">
            About
          </Link>
        </div>
        <div className="navLine">
          <div className="navLog">
            <img src={nextofkin} alt="NextOfKin" />
          </div>
          <button className="openbtn" onClick={() => this.toggleHamburger()}>
            <b>+</b>
          </button>
        </div>
      </div>
    );
  }
};

export default Navbar;
