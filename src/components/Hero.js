import React,{useState, useRef, useEffect} from "react";
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
  const heroMedia =  useRef();
  var evTimeStamp = Date.now();
  

  const onCanPlay = (e) =>{

    console.log(e, 'onCanPlay', )
    e.currentTarget.play();
  }
  const onLoopReady = (e) =>{

    console.log(e, 'onCanPlay', )
    // e.currentTarget.play();
  }



  
  
const mfMouseHandler = (e)=>{


  let mainframe = heroMedia.current;

  let centerX = 200+mainframe.offsetWidth / 2;
  let centerY = 200+mainframe.offsetHeight / 2;

  let distanceX = Math.abs(centerX - e.x);
  let distanceY = Math.abs(centerY - e.y);

  

  let left = Math.abs(distanceX) + "px";
  let right = mainframe.offsetWidth - distanceX + "px";

  let top = distanceY / 1 + "px";
  let bottom = mainframe.offsetHeight - distanceY / 1 + "px";

  document.documentElement.style.setProperty("--clip-top", top);
  document.documentElement.style.setProperty("--clip-right", right);
  document.documentElement.style.setProperty("--clip-bottom", bottom);
  document.documentElement.style.setProperty("--clip-left", left);
  // sx variables are used by the gradient rectangle
  document.documentElement.style.setProperty(
    "--sx",
    (centerX - e.x) / 10 + "px"
  );
  document.documentElement.style.setProperty(
    "--sy",
    (centerY - e.y) / 10 + "px"
  );
  // mx var is used in transformation that follows the mouse
  document.documentElement.style.setProperty(
    "--mx",
    (e.x - centerX) / 1.4 + "px"
  );



};

  const playShowreelHandle = () => {
    setPlayShowreel(true);

  }

  return (!playShowreel ?

    <section className="home-page-hero">


      <div className="hero-background">

      </div>

      <div className="hero-copy">

        <h2>{HeroStatement}</h2>

        <a className="hero-cta-link" onClick={() => setPlayShowreel(true)}>
          {ShowreelCTA}
        </a>

      </div>


    </section>

    :

    <section className="hero-showreel">
      <video className="hero-videoplayer">
        <source src={videoUrl}
          type="video/mp4" />
      </video>
    </section>


  );




};

export default Hero;
