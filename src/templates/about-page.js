import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import "./about.css";




export const AboutPageTemplate = ({ aboutIntro, blurbs, isTemplate }) => {
  return (
    <section className="about-page">

      <h2 className="about-page-title">
        About
      </h2>

      <div className="about-page-intro">
        <p>{aboutIntro}</p>
      </div>

      <div className="about-page-profiles">

        {blurbs.map((blurb, key) => {
          return (<div key={key} className="about-page-profile">
            <div className="profile-img-wrapper">
              {isTemplate ? <img src={blurb.image} /> : <Img

                placeholderStyle={{ opacity: 0 }}
                backgroundColor='#333'
                className="profile-img" alt="Logo" fluid={blurb.image.childImageSharp.fluid} />
              }
            </div>
            <div className="about-page-profile-text">
              <p className="about-page-profile-text-copy">{blurb.text} </p>
            </div>
          </div>)
        })
        }


      </div>



    </section>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post)
  return (
    <Layout>
      < AboutPageTemplate
        aboutIntro={post.frontmatter.aboutIntro}
        blurbs={post.frontmatter.pageCopy.blurbs}
        isTemplate={false}
      />

    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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
        }
      }
    }
}
`;