import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap, Expo } from 'gsap';

const LoaderMain = (props) => {

  const { show } = props;


  useEffect(() => {
    if (show)
      gsap.to(".loader__main", { opacity: 1, zIndex: 103 });
    else {
      gsap.to(".logo__loader", { y: -200, duration: 1.8, ease: Expo.easeInOut });
      gsap.to(".loader__main", { height: -1, opacity: 1, duration: 2.0, ease: Expo.easeInOut });
      // gsap.to(".loader__main", { zIndex: 100, delay: 2.5, ease: Expo.easeInOut }, ">");
    }

    return () => {

    }
  }, [show])



  return (

    <>
      <style jsx>
        {`
        .loader__main
        {
            position:fixed;
            scroll:none;
            background-color:rgb(44, 49, 59);
            left:0;
            top:0;
            width:100vw;
            height:100vh;
            z-index:103;
            display:flex;
            flex-direction: row;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;    }
        
        .loader {
            width: 100%;
            height: 2px;
            display: inline-block;
            position: relative;
            background: rgba(255, 255, 255, 0.15);
            overflow: hidden;
            border:0;
            z-index:103;
            margin-top:20px;
          }
          .loader::after {
            content: '';
            width: 100px;
            height: 2px;
            background: rgb(161, 77, 24);
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            animation: animloader 2.2s linear infinite;
          }
          
          @keyframes animloader {
            0% {
              left: 0;
              transform: translateX(-100%);
            }
            100% {
              left: 100%;
              transform: translateX(0%);
            }
          }
              
        `}
      </style>
      <div className='loader__main'>
        <div className='logo__loader'>
          <Image src="/images/logo2.png"  alt="Deforet Logo" width={190} height={150} priority="true" style={{ opacity: "0.2" }} />
          <span className="loader"></span>
        </div>

      </div>
    </>);
}

export default LoaderMain;