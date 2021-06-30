import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "./index-page.css";
import { shuffle } from "../utils";

export const IndexPageTemplate = ({
  // image,
  title,
  // heading,
  // subheading,
  // mainpitch,
  // description,
  // intro,
  projects,
  HeroStatement,
  ShowreelCTA,
  videoUrl,
  blurbs,
  featuredProjects
}) => {
  return (
    <section className="home-page">
      <div className="home-page-links">
        {/* <Link className="home-page-link" to={'/work'}> work </Link><br /> */}
        {/* <Link className="home-page-link" to={'/about'}> about </Link> */}
        {/* <p className="home-page-link"> about </p>
        <p className="home-page-link"> work </p> */}
      </div>
      
      <div className="home-page-contact">
        <h3 className="home-page-contact-headline">contact</h3>
        <div className="home-page-contact-details">
          +44 20 33130 9004<br />
          King's court<br />
          2-16 Goodge Street<br />
          London W1T 2QA<br />
          <a class="home-page-mail-link" href="mailto:info@kinpartners.com">info@kinpartners.com</a><br />
        </div>
      </div>     
    </section>
  );
};

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array
  // })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const projects = data.projects.nodes;
  const featuredProjects = shuffle(data.featuredProjects.nodes);
  const { HeroStatement, ShowreelCTA, videoUrl, blurbs } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        projects={projects}
        HeroStatement={HeroStatement}
        ShowreelCTA={ShowreelCTA}
        videoUrl={videoUrl}
        blurbs={blurbs}
        featuredProjects={featuredProjects}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplateX {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
           title
        HeroStatement
        videoUrl 
        ShowreelCTA
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurbs{
          loopLink
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { slug: { regex: "/projects/" } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          category
          description
          title
          externalURL
          externalURLLabel
          featured
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
    featuredProjects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        fields: { slug: { regex: "/projects/" } }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        frontmatter {
          featured
          category
          description
          title
          externalURL
          externalURLLabel
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
`;
