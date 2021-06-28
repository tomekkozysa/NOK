import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import nextofkin from "../img/nextofkin.svg";
import "./Footer.css";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer-main">
        <div className="footer-copy">
          <span className="footer-copyrights">&copy; Next of Kin 2021 </span>
          <span className="footer-grads">This website was built by graduates from <a href="https://codeyourfuture.io">CodeYourFuture</a></span>
        </div>
      </footer>
    );
  }
};

export default Footer; 
