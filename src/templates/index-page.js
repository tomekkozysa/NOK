import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
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
  products,
}) => (
  <div>
    {console.log("products in IndexPageTemplate", products)}
    <section className="home-page">
      <Hero />
      <section className="home-page-projects">
        <div className="home-page-projects-filter">
          <h2 className="projects-filter-headline">Our work</h2>
          <ul className="projects-filter-items">
            <li className="projects-filter-item">Commercial</li>
            <li className="projects-filter-item">Social</li>
            <li className="projects-filter-item">Long form</li>
          </ul>
        </div>

        {products.map(({ frontmatter: product }, index) => (
          <div key={index} className="nok-project isnot_expanded">
            <div className="project-img-wrapper">
              <Img
                fluid={product.image.childImageSharp.fluid}
                alt={product.heading}
              />
            </div>
            <div className="nok-project-text">
              <p className="nok-project-text-copy">{product.description}</p>
            </div>
          </div>
        ))}
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
  const products = data.products.nodes;
  console.log(data);
  console.log("products from querry", products);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        products={products}
        // intro={frontmatter.intro}
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
    products: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { slug: { regex: "/products/" } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          category
          description
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
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
