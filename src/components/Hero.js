import React,{useState} from "react";

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
  const [playShowreel, setPlayShowreel] = useState(false);


  const playShowreelHandle = () =>{
    setPlayShowreel(true);
  }

    return ( !playShowreel ? 

        <section className="home-page-hero">

        
          <div className="hero-background">
          
          </div> 
            
          <div className="hero-copy"> 

            <h2>{HeroStatement}</h2>

            <a className="hero-cta-link" onClick={ ()=> setPlayShowreel(true) }>
              {ShowreelCTA}
            </a>         

        </div> 

        
        </section>
        
        :
        
        <section className="hero-showreel">
        <video controls autoplay="false" className="hero-videoplayer">
          <source src={videoUrl}  
          type="video/mp4" />
        </video>
        </section>

    
    );

    

  
};

export default Hero;
