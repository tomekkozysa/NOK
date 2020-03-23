import React from "react";
import Layout from "../../components/Layout";
import "./contact.css";
import conatctImage from "../../../static/img/contact.jpg";
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import twitter from "../../img/social/twitter.svg";
import vimeo from "../../img/social/vimeo.svg";
import youtube from "../../img/social/youtube.svg";
import linkedin from "../../img/social/linkedin.svg";

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
        <div className="contactMain">
          <h1 className="contactHeader">Contact</h1>
          <div className="gridContact">
            <div className="socialInfo">
              <a href="tel:+442035596554">+44 20 355 96554</a>
              <br />
              <br />
              <a href="mailto:info@nextofkin.com">someone@nextofkin.com</a>
              <br />
              <br />
              <a
                href="https://www.google.co.uk/maps/place/Code+Your+Future/@51.5329326,-0.0591323,17z/data=!3m1!4b1!4m5!3m4!1s0x48761dd12bb927a3:0xf3e50cf1e0d3a1a4!8m2!3d51.5329326!4d-0.0569436"
                target="_blank"
              >
                <address className="address">
                  The Green House<br></br>
                  244-254 Cambridge Heath Rd<br></br>
                  London<br></br>
                  E2 9DA<br></br>
                </address>
              </a>
            </div>
            <div className="socialPic">
              <img src={conatctImage} alt="office Building" />
            </div>
          </div>
          <h1 className="contactHeader">Social</h1>
          <div className="gridContact">
            <div className="socialIcons">
              <div className="socialIcon">
                <a title="facebook" href="https://facebook.com">
                  <img className="socialImag" src={facebook} alt="Facebook" />{" "}
                  Facebook
                </a>
              </div>
              <div className="socialIcon">
                <a title="twitter" href="https://twitter.com">
                  <img className="socialImag" src={twitter} alt="Twitter" />
                  {"   "}
                  Twitter
                </a>
              </div>
              <div className="socialIcon">
                <a title="instagram" href="https://instagram.com">
                  <img className="socialImag" src={instagram} alt="Instagram" />{" "}
                  Instagram
                </a>
              </div>
              <div className="socialIcon">
                <a title="vimeo" href="https://vimeo.com">
                  <img className="socialImag" src={vimeo} alt="Vimeo" /> Vimeo
                </a>
              </div>
              <div className="socialIcon">
                <a title="youtube" href="https://youtube.com">
                  <img className="socialImag" src={youtube} alt="Youtube" />{" "}
                  Youtube
                </a>
              </div>
              <div className="socialIcon">
                <a title="linkedin" href="https://linkedin.com">
                  <img className="socialImag" src={linkedin} alt="Linkedin" />{" "}
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
