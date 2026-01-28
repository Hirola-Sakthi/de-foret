import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url, bgImage }) => {

  let [shouldPlay, updatePlayState] = useState(true);
  let [urlNumber, updateUrlNumber] = useState(1);
  let [urlNumberNext, updateNextUrlNumber] = useState(2);
  let [loadViewer, setViewer] = useState(false);

  const urls = {
    "1": "https://youtu.be/6JSYs7KfmL8?t=3",

  }

  const changeVisibility = (isVisible) => {
    if (isVisible)
      updatePlayState(true);
    else
      updatePlayState(false);
  }

  return (
    <>

      <style jsx>{`


.player-wrapper {
  position: relative;
margin-top:100px;
overflow:hidden;
height: 500px;
// padding-top: 56.25%;
}



      
       
       .player{
             position:absolute;
             left:5%;
            height: 700px;
            width:90%;
             background-image:url(${bgImage});
            top:-100px;
          }
          .player__play__button
          {
            position:absolute;
            top: 0;
            left: 0;
          display:flex;
          width:100%;
          justify-content:center;
          height:100%;
          align-items:center;
          }
          .player__play__button svg
          {
              cursor:pointer;
          }
          
         
          .video {
            padding: 0;
            margin-top: -100px;
          }
          
          @media (max-width: 600px) {
            .booking-form {
              top: -120px;
            }
            .video {
              padding: 0;
              margin-top: 0;
            }
            .player-wrapper {
            height: 350px;
            }
          }
          @media (max-width: 768px) {
            .player-wrapper {
            height: 450px;
            }
          
          }
          @media (max-width: 450px) {
            .player-wrapper {
            height: 250px;
            }
            .player{
            left:0;
             width:100%;
           }
           .player__play__button svg
           {
               width:70px;
           }
          }
            @media (max-width: 350px) {
              .player-wrapper {
              height: 250px;
              }
            }
        
          
        `}</style>

      <div className="player-wrapper" >

        {loadViewer === true ? <ReactPlayer url={url} className="react__player" muted={false} loop={false} playing="true"
          width={"100%"}
          height={"100%"}


          controls={true} pip="false" /> : (<>
            <div className="player" onClick={() => setViewer(true)} data-scroll data-scroll-speed="2"  >
            </div>
            <div className='player__play__button' onClick={() => setViewer(true)}> <svg className='cursor__hover' xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 26 26" fill="#fff">
              <polygon className="play-btn__svg cursor__hover" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
              <path className="play-btn__svg cursor__hover" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
            </svg> </div>
          </>
        )}
      </div>

    </>

  )
}

export default Video;



