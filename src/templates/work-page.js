import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "./work-page.css";
// import { shuffle } from "../utils";
import ProjectsCollection from "../components/ProjectsCollection";



const WorkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const projects = data.projects.nodes;
  const CATEGORIES = ["Short Form and Commercial", "Films", "2020", "2021"];

  

  const cat_shorts = projects.filter( pr => {

      console.log(pr.frontmatter.category)
      if(pr.frontmatter.category){
        if(pr.frontmatter.category.length<1)
          { return false }  
        else 
          {return pr.frontmatter.category === CATEGORIES[0]}
      }
    }
  );

  const cat_films = projects.filter( pr => {
      if(pr.frontmatter.category){
        if(pr.frontmatter.category.length<1)
          { return false }  
        else 
          {return pr.frontmatter.category === CATEGORIES[1]}
      }
    }
  );

  const cat_20 = projects.filter( pr => {
      if(pr.frontmatter.category){
        if(pr.frontmatter.category.length<1)
          { return false }  
        else 
          {return pr.frontmatter.category === CATEGORIES[2]}
      }
    }
  );

  const cat_21 = projects.filter( pr => {
      if(pr.frontmatter.category){
        if(pr.frontmatter.category.length<1)
          { return false }  
        else 
          {return pr.frontmatter.category === CATEGORIES[3]}
      }
    }
  );

  
  // const { HeroStatement, ShowreelCTA, videoUrl, blurbs } = data.markdownRemark.frontmatter;

  return (
    <Layout>


<section className="work-page">    

      <h2 className="work-page-heading">Our work</h2>


      <div className="work-page-projects">

      <ProjectsCollection
          headline={"“In Production” 2021"}
          projects={cat_21}
        />

      <ProjectsCollection
          headline={"“In Production” 2020"}
          projects={cat_20}
        />
      <ProjectsCollection
          headline={"Previous Films from Next of Kin Producers"}
          projects={cat_films}
        />
      <ProjectsCollection
          headline={"Shorts & Commercials from Next of Kin Producers"}
          projects={cat_shorts}
        />
      </div>




    </section>



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
