import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap, Expo } from 'gsap';

const Overlay = (props) => {

  const { show } = props;


  useEffect(() => {
    if (show) {
      gsap.to(".overlay", { zIndex: 103, duration: 0.03, opacity: 0 });
      gsap.to(".overlay", { opacity: 1, duration: 0.9, ease: "linear" }, "<");
    }
    else
      gsap.to(".overlay", { opacity: 0, zIndex: 0, duration: 1.5 });
    return () => {

    }
  }, [show])



  return (

    <>
      <style jsx>
        {`
        .overlay
        {
            position:fixed;
            scroll:none;
            background-color:rgb(44, 49, 59);
            left:0;
            top:0;
            width:100vw;
            height:100vh;
            zIndex:99;
            display:flex;
         
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .loader {
            width: 10%;
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
            width: 50px;
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
      <div className='overlay'>
        <span className="loader"></span>
      </div>
    </>);
}

export default Overlay;