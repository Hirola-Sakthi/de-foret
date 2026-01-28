import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import gsap, { Power4, Strong, Expo } from "gsap";
const TextWithImage = ({ heading, bgtext, content }) => {
  const bgText = useRef();
  const hedLine = useRef();
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    gsap.to(bgText.current, {
      duration: 90,
      x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: bgText.current,
        scroller: scroll?.el,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    gsap.to(hedLine.current, {
      duration: 90,
      width: 500,
      x: 30,
      ease: "linear",
      scrollTrigger: {
        trigger: bgText.current,
        scroller: scroll?.el,
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      },
    });
  }, [scroll]);

  return (
    <div data-scroll>
      <style jsx>
        {`
          div {
            position: relative;
            padding: 0 30px;
          }
          .title {
            text-align: left;
            color: var(--typo-color, #fff);
            font-size:var(--fs-tit-desktop);
            text-transform:uppercase;
            z-index: 10;
            position: relative;
            font-weight:100;
          }
          .hedline {
            left: -5rem;
            position: absolute;
            top: 75px;
            height: 3px;
            width: 200px;
            background-color: var(--wood-color);
            z-index:2;
        }
        p {
          color: var(--typo-color,#fff);
          line-height:var(--lh-desktop);
          font-size:var(--fs-desktop);
          margin-top:50px;
          padding:0rem 10px 0rem 0;
        }
        .background__text
        {
            position:absolute;
            top:-15rem;
            left:-10rem;
            // font-size:17rem;
            font-size: clamp(6rem, 20vw, 14rem);
            font-weight:100;
             color:var(--bg-text-color);
             opacity:0.5;
             text-transform:uppercase;
 overflow: visible; 
               will-change: transform;
             
        }
         @media screen and (max-width: 768px) {
          div
          {
              position:relative;
              padding:0;
          }
          p {
            color: var(--typo-color, #fff);
            font-size: var(--fs-mobile,1.2rem);
            padding: 1rem 1rem 1rem 0;
            line-height: var(--lh-mobile);
          }
          .background__text {
            top: -7rem;
            left:-10rem;
           font-size: 10rem;
         
          }
        }
        `}
      </style>

      <h2 className="title font__parata">{heading}</h2>
      <span ref={hedLine} className="hedline "></span>
      <span ref={bgText} className="background__text font__parata">
        {bgtext}
      </span>

      {content.map((item, i) => (<p key={i}>{item}</p>))}
    </div>
  );
};

export default TextWithImage;
