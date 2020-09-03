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

<<<<<<< HEAD
      {/* <PageContent className="about-page-content" content={content} /> */}
=======
>>>>>>> 9cb5e8557f30c6de7d9fd102377f3f10a98c170a
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};
<<<<<<< HEAD
const AboutPage = (props) => {
  console.log(props);
  const { markdownRemark: post } = props.data;

=======
const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post)
>>>>>>> 9cb5e8557f30c6de7d9fd102377f3f10a98c170a
  return (
    <Layout>
      <section className="about-page">
        <h2 className="about-page-title">About</h2>

        <div className="about-page-intro">
<<<<<<< HEAD
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
=======
          <p>{post.frontmatter.aboutIntro}</p>
        </div>

        <div className="about-page-profiles">

          {post.frontmatter.pageCopy.blurbs.map((blurb, key) => {
            return (<div key={key} className="about-page-profile">
              <div className="profile-img-wrapper">
                <Img className="profile-img" alt="Logo" fluid={blurb.image.childImageSharp.fluid} />

              </div>
              <div className="about-page-profile-text">
                <p className="about-page-profile-text-copy">{blurb.text} </p>
              </div>
            </div>)
          })
          }


>>>>>>> 9cb5e8557f30c6de7d9fd102377f3f10a98c170a
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
<<<<<<< HEAD
        title

        blocks {
          alt
          text
=======
        aboutIntro
        pageCopy{
          blurbs{
            text
            image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          }
>>>>>>> 9cb5e8557f30c6de7d9fd102377f3f10a98c170a
        }
      }
    }
}
`;