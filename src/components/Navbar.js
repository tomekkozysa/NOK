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
          <button className="openbtn" onClick={() => this.toggleHamburger()}>
            ☰
          </button>
          <div className="navLog">
            <svg
              max-width="70"
              height="56"
              viewBox="0 0 70 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="70"
                height="55"
              >
                <path
                  d="M0.000366211 0H69.7237V54.9904H0.000366211V0Z"
                  fill="#E2719F"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.3378 48.5162C46.6858 47.9068 50.5001 46.0027 53.3988 43.1086L42.3378 28.485V48.5162ZM18.8425 27.4949C18.8425 36.4821 23.7243 43.8703 31.0476 47.0692L21.1308 32.3696C20.4439 28.485 20.7496 24.6767 21.7412 22.0113L36.0061 43.0326H36.1581V6.47363C26.0887 7.99713 18.8425 16.6037 18.8425 27.4949ZM0.000366211 54.1522V0.837675H6.94195L15.7907 13.5572C20.3678 5.40717 29.0645 0 39.286 0C45.8468 0 51.4151 1.75178 55.9923 5.4836L52.1786 10.5866C49.3559 8.2254 46.2281 7.0071 42.3378 6.47363V26.962L61.7902 0.837675H69.7239L49.2789 27.7237L57.2891 38.0056C58.891 34.9591 59.8066 31.3791 59.8066 27.4949C59.8066 24.2202 59.5774 21.4019 58.4338 18.6601L62.8573 12.9478C65.4514 17.2131 66.52 22.0113 66.52 27.4949C66.52 33.512 64.6889 39.072 61.5611 43.5656L69.7239 54.1522H61.7902L57.3656 48.288C52.5598 52.4768 46.3046 54.9904 39.286 54.9904C23.8769 54.9904 12.1295 42.7279 12.1295 27.4949C12.1295 25.2102 12.4342 23.0014 12.8914 20.869L6.40763 11.3483H6.25555V54.1522H0.000366211Z"
                  fill="#A0191E"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
