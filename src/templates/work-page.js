import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "./work-page.css";
import { shuffle } from "../utils";
import ProjectsSection from "../components/ProjectsSection";

export const WorkPageTemplate = ({
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
    <section className="work-page">
     
     
     <ProjectsSection
        projects={projects}
        featuredProjects={projects} />



    </section>
  );
};

WorkPageTemplate.propTypes = {
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

const WorkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const projects = data.projects.nodes;
  const featuredProjects = shuffle(data.featuredProjects.nodes);
  const { HeroStatement, ShowreelCTA, videoUrl, blurbs } = data.markdownRemark.frontmatter;

  return (
    <Layout>

      <WorkPageTemplate
        title={frontmatter.title}
        projects={projects}
        // HeroStatement={HeroStatement}
        // ShowreelCTA={ShowreelCTA}
        // videoUrl={videoUrl}
        // blurbs={blurbs}
        featuredProjects={featuredProjects}
      />

    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkPageTemplate {
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
