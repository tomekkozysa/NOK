import React from "react";


    


const Hero = class extends React.Component {

  constructor(props) {
    super(props);
    this.mouseRef = React.createRef();
    this.evTimeStamp = Date.now();

  }



  
  mfMouseHandler = (e)=>{


        if(Date.now() - this.evTimeStamp < 100){
            console.log('cancel event')
        }
     
        let mainframe = this.mouseRef.current;
        
        let centerX = mainframe.offsetWidth/2;
        let centerY = mainframe.offsetHeight/2;
      
        let distanceX = Math.abs(centerX-e.x);
        let distanceY = Math.abs(centerY-e.y);


        let width = mainframe.offsetWidth-distanceX;
        let height = mainframe.offsetHeight-distanceY;

        let left = Math.abs(distanceX)+'px';
        let right = (mainframe.offsetWidth-distanceX)+'px';
      
        let top = (distanceY/2) - 60 + 'px';
        let bottom = (mainframe.offsetHeight-(distanceY)/2)+'px'
    
        // if( left< 20 || right <20 || top <20 || bottom <20 ){
        //     return;
        // }

        
        
    document.documentElement.style.setProperty('--clip-top', top); 
    document.documentElement.style.setProperty('--clip-right', right); 
    document.documentElement.style.setProperty('--clip-bottom', bottom); 
    document.documentElement.style.setProperty('--clip-left', left); 
    // sx variables are used by the gradient rectangle
    document.documentElement.style.setProperty('--sx', (centerX-e.x)/10+'px'); 
    document.documentElement.style.setProperty('--sy', (centerY-e.y)/10+'px'); 
    // mx var is used in transformation that follows the mouse
    document.documentElement.style.setProperty('--mx', (e.x - centerX)/1.4+'px'); 
  
    this.evTimeStamp = Date.now();
  };
  
  
  
  
  componentWillMount() {

    //window.addEventListener("mousemove", this.mfMouseHandler);
  }
  
  componentWillUnmount() {
    //window.removeEventListener("mousemove", this.mfMouseHandler);
  }
  
  
  render() {
    return (
      
        <section ref={this.mouseRef}  className="home-page-hero">
            <div className="hero-background"></div> 
            
          <div className="hero-copy">
        positioning statement <br />
        can be longer than three words

        <div className="hero-cta-link">
            play showreel
        </div>


        </div>

       
        
        
        </section>
      


    );
  }
};

export default Hero;
