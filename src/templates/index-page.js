import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Hero from "../components/Hero";
import "./index-page.css";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
    <div>

      <section className="home-page">
        <Hero />
        <section className="home-page-projects">

          <div className="home-page-projects-filter">
            <h2 className="projects-filter-headline">Our work</h2>
            <ul className="projects-filter-items">
              <li className="projects-filter-item">
                Commercial
      </li>
              <li className="projects-filter-item">
                Social
      </li>
              <li className="projects-filter-item">
                Long form
      </li>
            </ul>
          </div>


          <div className="nok-project isnot_expanded">
            <div className="project-img-wrapper">
              <img className="project-img" src={'/img/img1.png'} alt="Project featured image alt text" />
            </div>
            <div className="nok-project-text">
              <p className="nok-project-text-copy">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>

          <div className="nok-project isnot_expanded">
            <div className="project-img-wrapper">
              <img className="project-img" src={'/img/img2.png'} alt="Project featured image alt text" />
            </div>
            <div className="nok-project-text">
              <p className="nok-project-text-copy">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>


          <div className="nok-project isnot_expanded">
            <div className="project-img-wrapper">
              <img className="project-img" src={'/img/img3.png'} alt="Project featured image alt text" />
            </div>
            <div className="nok-project-text">
              <p className="nok-project-text-copy">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>

        </section>

      </section>


    </div>
  );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array
  // })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;


  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      // intro={frontmatter.intro}
      />
    </Layout>
  );



};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplateX {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
   
      }
    }
  }
`;
