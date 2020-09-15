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






const Hero = ({ onHeroUpdate }) => {

  const data = useStaticQuery(heroQuery);
  const { HeroStatement, ShowreelCTA, videoUrl, blurbs } = data.markdownRemark.frontmatter;
  const [playShowreel, setPlayShowreel] = useState(false);

  const heroMedia =  useRef();
  const showreelPlayer =  useRef();
  var evTimeStamp = Date.now();

  /* one day, this could be a randomised selection */
  const loopUrl = blurbs[0].loopLink;


  const onShowreelReady = (e) =>{}
  const onLoopReady = (e) =>{}

  const onShowreelEnded = (e) =>{
    closeShowreelHandle();
  }

  
 
  const closeShowreelHandle = () =>{
    setPlayShowreel(false); 
    showreelPlayer.current.pause();
    showreelPlayer.current.currentTime=0;
  
  }
  
  const playShowreelHandle = () =>{
  
    setPlayShowreel(true); 
    showreelPlayer.current.play();
  }

  useEffect(() => {

    heroMedia.current.addEventListener('mousemove',mfMouseHandler);
    console.log("Behavior before the component is added to the DOM");
    
    return () => {
      console.log('removing ev listener')
      heroMedia.current.removeEventListener('mousemove',mfMouseHandler);
    }

    
  }, []);



  const mfMouseHandler = (e)=>{

    if(playShowreel){
      return;
    }

    let mainframe = heroMedia.current;
  
    let centerX = mainframe.offsetWidth / 2;
    let centerY = (mainframe.offsetHeight / 2 ) + 120;
  
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
  
  
  };
  
  
  

    return ( 


      <section className="home-page-hero" ref={heroMedia} >  
        <section className={playShowreel ? "hero-loop is_hidden" : "hero-loop is_playing"} >        
          <div className="hero-background" >
          
          <video muted autoPlay loop
            className="hero-loopplayer"
            onCanPlay={onLoopReady}
          >
            <source src={loopUrl} type="video/mp4" />
          </video>

          </div> 
            
          <div className="hero-copy">
            <h2 className="hero-statement">{HeroStatement}</h2>
            <a className="hero-cta-link" onClick={ ()=> {
              playShowreelHandle();
                
              }
               }>
              {ShowreelCTA}
            </a>         

        </div>
        </section>
       
      
        <section className={playShowreel ? "hero-showreel is_playing" : "hero-showreel is_hidden"} >                

          <video 
            controls
            
            className="hero-videoplayer" 
            ref={showreelPlayer}
            onCanPlay={(e)=> onShowreelReady(e)}
            onEnded={(e)=> onShowreelEnded(e)}          
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          <div className="hero-close">
            <a className="hero-close-link" onClick={ ()=> closeShowreelHandle() }>close showreel</a> 
          </div>

        </section>


        </section>


    );
};
    
export default Hero;
