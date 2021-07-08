import React,{useState, useRef, useEffect} from "react";
import "./player.css";
import { Helmet } from "react-helmet";


const Player = ({id, closeClick}) => {

  

    return ( 

        <div className="player">
            <Helmet>
            <script src="https://player.vimeo.com/api/player.js"></script>
            </Helmet>

            <div className="player-frame">
                {/* <div className="player-frame-ratio">
                <iframe src={"https://player.vimeo.com/video/"+id}  width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div> */}

                    <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                    <iframe src={'https://player.vimeo.com/video/'+id+'?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} 
                    style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" allowFullScreen></iframe>
                          </div>
            

            <svg
              className="player-close-button"
              onClick={() => closeClick()}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="player-close-button-line-one"
                x1="0"
                y1="15"
                y2="15"
                x2="30"
                strokeWidth="3"
                stroke="var(--c-primary)"
              />
              <line
                className="player-close-button-line-two"
                x1="0"
                y1="15"
                y2="15"
                x2="30"
                strokeWidth="3"
                stroke="var(--c-primary)"
              />
            </svg>

        </div>
        </div>
      


    );
};
    
export default Player;



