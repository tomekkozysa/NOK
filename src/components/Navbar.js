import React from "react";
import { Link } from "gatsby";
import "./Navbar.css";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

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

        <div className="socialIcons">
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
      </div>
    );
  }
};

export default Navbar;
