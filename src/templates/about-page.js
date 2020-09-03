import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
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
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};
const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);
  return (
    <Layout>
      <section className="about-page">
        <h2 className="about-page-title">About</h2>

        <div className="about-page-intro">
          <p>{post.frontmatter.aboutIntro}</p>
        </div>

        <div className="about-page-profiles">
          {post.frontmatter.pageCopy.blurbs.map((blurb, key) => {
            return (
              <div key={key} className="about-page-profile">
                <div className="profile-img-wrapper">
                  <Img
                    className="profile-img"
                    alt="Logo"
                    fluid={blurb.image.childImageSharp.fluid}
                  />
                </div>
                <div className="about-page-profile-text">
                  <p className="about-page-profile-text-copy">{blurb.text} </p>
                </div>
              </div>
            );
          })}
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
        aboutIntro
        pageCopy {
          blurbs {
            text
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
