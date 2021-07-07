import React from "react";

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
