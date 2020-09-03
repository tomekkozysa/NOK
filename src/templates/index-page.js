import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ProjectsSection from "../components/ProjectsSection";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import "./index-page.css";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  // projects,
}) => {
  return (
    <section className="home-page">
      <Hero />
      <ProjectsSection />
    </section>
  );
};

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
  // const projects = data.projects.nodes;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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

// export const pageQuery = graphql`
//   query IndexPageTemplateX {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//       }
//     }
//   }
// `;
