import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
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
          <button className="openbtn" onClick={() => this.toggleHamburger()}>
            <b>X</b>
          </button>
          <Link className="sidebarLink" to="/">
            Home
          </Link>
          <Link className="sidebarLink" to="/about">
            About
          </Link>
          <Link className="sidebarLink" to="/products">
            Products
          </Link>
          <Link className="sidebarLink" to="/blog">
            Blog
          </Link>
          <Link className="sidebarLink" to="/contact">
            Contact
          </Link>
        </div>
        <button
          className="openbtnTransparent"
          onClick={() => this.toggleHamburger()}
        >
          ☰
        </button>
      </div>
    );
  }
};

export default Navbar;
