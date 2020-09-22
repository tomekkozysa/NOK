import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ProjectsSection from "../components/ProjectsSection";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
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
  blurbs
}) => {
  return (
    <section className="home-page">
      <Hero 
        HeroStatement={HeroStatement}
        ShowreelCTA={ShowreelCTA}
        videoUrl={videoUrl}
        blurbs={blurbs}/>
      <ProjectsSection projects={projects} />
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
  const projects = shuffle(data.projects.nodes);
  const { HeroStatement, ShowreelCTA, videoUrl, blurbs } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <IndexPageTemplate
        // image={frontmatter.image}
        title={frontmatter.title}
        projects={projects}
        HeroStatement={HeroStatement}
        ShowreelCTA={ShowreelCTA}
        videoUrl={videoUrl}
        blurbs={blurbs}
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
