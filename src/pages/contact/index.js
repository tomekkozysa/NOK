import React from "react";
import Layout from "../../components/Layout";
import "./contact.css";
import conatctImage from "../../../static/img/contact.jpg";


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  render() {
    return (
      <Layout>
        <div className="contact-page">
          <h2 className="contact-page-headline">Contact</h2>
          <ul className="contact-page-primary-details">
            <li className="contact-page-detail">
            <a href="tel:+442035596554">+44 20 355 96554</a>
            </li>
            <li className="contact-page-detail">
            <a href="mailto:info@nextofkin.com">someone@nextofkin.com</a>
            </li>
            
          </ul>
          <address  className="contact-page-detail contact-address">
                The Green House <br />
                244-254 Cambridge Heath Rd<br />
                London<br />
                E2 9DA<br />
            </address>

          <h2 className="contact-page-headline social-headline">Social</h2>
          <ul className="social-links">
            <li className="social-link">facebook</li>
            <li className="social-link">twitter</li>
            <li className="social-link">instagram</li>
            <li className="social-link">youtube</li>
            <li className="social-link">linkedin</li>
          </ul>
        </div>
      </Layout>
    );
  }
}
