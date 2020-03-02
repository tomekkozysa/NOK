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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

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

              {/* <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                // The `form-name` hidden field is required to support form submissions without JavaScript
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
