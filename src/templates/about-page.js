import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "./about.css";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="about-page">
      <h2 className="about-page-title">{title}</h2>

      <div class="about-page-intro">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
      </div>

      {/* <PageContent className="about-page-content" content={content} /> */}
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};
const AboutPage = (props) => {
  console.log(props);
  const { markdownRemark: post } = props.data;

  return (
    <Layout>
      <section className="about-page">
        <h2 className="about-page-title">About</h2>

        <div className="about-page-intro">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.{" "}
          </p>
        </div>

        <div className="about-page-profiles">
          <div className="about-page-profile">
            <div className="profile-img-wrapper">
              <img
                className="profile-img"
                src={"/img/gr-orange-pink.png"}
                alt="Logo"
              />
            </div>
            <div className="about-page-profile-text">
              <p className="about-page-profile-text-copy">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>

          <div className="about-page-profile">
            <div className="profile-img-wrapper">
              <img
                className="profile-img"
                src={"/img/gr-orange-pink.png"}
                alt="Logo"
              />
            </div>
            <div className="about-page-profile-text">
              <p className="about-page-profile-text-copy">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>

          <div className="about-page-profile">
            <div className="profile-img-wrapper">
              <img
                className="profile-img"
                src={"/img/gr-orange-pink.png"}
                alt="Logo"
              />
            </div>
            <div className="about-page-profile-text">
              <p className="about-page-profile-text-copy">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title

        blocks {
          alt
          text
        }
      }
    }
  }
`;
