import React from "react";
import Layout from "../../components/Layout";
import "./contact.css";


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

          <address  className="contact-page-detail contact-address">
          +44 20 33130 9004<br />
                King's court <br />
                2-16 Goodge Street<br />
                London W1T 2QA<br />
            </address>



            <a class="contact-page-email"
            href="mailto:info@nextofkin.com">info@kinpartners.com</a>
            
          
          {/* <h2 className="contact-page-headline social-headline">Social</h2>
          <ul className="social-links">
            <li className="social-link">facebook</li>
            <li className="social-link">twitter</li>
            <li className="social-link">instagram</li>
            <li className="social-link">youtube</li>
            <li className="social-link">linkedin</li>
          </ul> */}
        </div>
      </Layout>
    );
  }
}
