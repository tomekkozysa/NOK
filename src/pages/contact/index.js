import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import "./contact.css";
// import { Link } from "gatsby";

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
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <div className="content ">
                <div className="container ">
                  <div className="columns">
                    <div className="column is-4">
                      <div className="contact">
                        <h1>Next Of Kin</h1>
                        <address className="address">
                          The Green House<br></br>
                          244-254 Cambridge Heath Rd<br></br>
                          London<br></br>
                          E2 9DA<br></br>
                        </address>
                        <a href="mailto:info@nextofkin.com">
                          info@nextofkin.com
                        </a>
                        <br></br>
                        <a href="tel:+442035596554">+44 20 355 96554</a>
                      </div>
                    </div>

                    <div className="column is-4 contact">
                      <br></br>
                      <br></br>
                      Name Surname<br></br>
                      Executive Producer<br></br>
                      <a href="mailto:info@nextofkin.com">
                        someone@nextofkin.com
                      </a>
                      <br></br>
                    </div>
                    <div className="column is-4 contact">
                      <br></br>
                      <br></br>
                      Name Surname <br></br>
                      Managing Partner<br></br>
                      <a href="mailto:info@nextofkin.com">name@nextofkin.com</a>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
