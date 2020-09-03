import React from "react";

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "./hero.css";






const heroQuery = graphql`
  query HeroQuery {
    
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
    
  }
`;



const Hero = () => {

  const data = useStaticQuery(heroQuery);
  const { HeroStatement, ShowreelCTA, videoUrl } = data.markdownRemark.frontmatter;
  

  const playShowreel = () =>{

  }

    return (
      
        <section className="home-page-hero">
          <div className="hero-background">
          
          </div> 
            
          <div className="hero-copy"> 

            <h2>{HeroStatement}</h2>

            <a className="hero-cta-link" onclick={playShowreel}>
              {ShowreelCTA}
            </a>         

        </div>

        <div className="hero-showreel">
          <video controls autoplay="false" className="hero-videoplayer">
            <source src={videoUrl}  
            type="video/mp4" />
          </video>
        </div>
        
        </section>
    
    );

    

  
};

export default Hero;
