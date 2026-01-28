import react, { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap, Power2, Power4 } from "gsap";
const Cursor = (props) => {
  const { scroll } = useLocomotiveScroll();

  const [isMobile, setMobile] = useState(false);
  const isMobileDevice = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  useEffect(() => {

    // document.querySelector(".right__arrow").addEventListener("mouseover", (e) => handleCursor(e));
    // document.querySelector(".left__arrow").addEventListener("mouseover", (e) => handleCursor(e));
    // document.querySelector(".cursor__hover").addEventListener("mouseover", (e) => handleCursor(e));

    // document.querySelector(".right__arrow").addEventListener("mouseout", (e) => handleCursor(e));
    // document.querySelector(".left__arrow").addEventListener("mouseout", (e) => handleCursor(e));
    // document.querySelector(".cursor__hover").addEventListener("mouseout", (e) => handleCursor(e));
    //document.body.addEventListener("mouseover", (e) => mouseMove(e));
    //document.body.addEventListener("mouseout", (e) => mouseMove(e));

    return () => {
      // document.querySelector(".right__arrow").removeEventListener("mouseover", (e) => handleCursor(e));
      // document.querySelector(".left__arrow").removeEventListener("mouseover", (e) => handleCursor(e));
      // document.querySelector(".cursor__hover").removeEventListener("mouseover", (e) => handleCursor(e));
      // document.querySelector(".right__arrow").removeEventListener("mouseout", (e) => handleCursor(e));
      // document.querySelector(".left__arrow").removeEventListener("mouseout", (e) => handleCursor(e));
      // document.querySelector(".cursor__hover").removeEventListener("mouseout", (e) => handleCursor(e));
      // document.body.removeEventListener("mouseover", (e) => mouseMove(e));
      // document.body.removeEventListener("mouseout", (e) => mouseMove(e));
    }
  }, []);


  useEffect(() => {
    //document.querySelector(".right__arrow").addEventListener("mouseover", (e) => handleCursor(e));
    //document.querySelector(".right__arrow").addEventListener("mouseout", (e) => { console.log("Move"); handleCursor(e) });

    if (!isMobileDevice()) {
      window.addEventListener("mousemove", (e) => mouseMove(e));
      document.body.addEventListener("mouseover", (e) => mouseMove(e));
    }
    else {
      window.removeEventListener("mousemove", (e) => mouseMove(e));
      document.body.removeEventListener("mouseout", (e) => mouseMove(e));
    }



    setMobile(isMobileDevice());
    // document.body.addEventListener("mouseout", (e) => mouseMove(e));

    //window.addEventListener("mouseout", (e) => handleCursor(e));

    //document.addEventListener("mouseover", (e) => handleCursor(e));
    //if(scroll)
    //    scroll.on("scroll", (e)=>{console.log("Gandu",scroll.target.el)});
    // scroll & scroll.on("on" , (e)=>scrollP(e));
    return () => {
      window.removeEventListener("mousemove", (e) => mouseMove(e));

      // document.body.removeEventListener("mouseover", (e) => mouseMove(e));
      document.body.removeEventListener("mouseout", (e) => mouseMove(e));
      // document.querySelector(".right__arrow").removeEventListener("mouseover", (e) => handleCursor(e));
      // document.querySelector(".right__arrow").removeEventListener("mouseout", (e) => { console.log("Move"); handleCursor(e) });
    }
  }, []);
  const mouseMove = (e) => {

    handleCursor(e);


  };


  function handleCursor(e) {
    const target = e.target;
    const style = window.getComputedStyle(
      document.querySelector("[data-scroll-container]")
    );
    const matrix = new WebKitCSSMatrix(style.transform);
    gsap.to(".cursor", {
      x: e.clientX,
      y: e.clientY - matrix.m42,
      yPercent: -50,
      xPercent: -50,
      duration: 0.3,
      ease: Power4.out,
    });
    gsap.to(".gg-chevron-right", {
      x: e.clientX,
      y: e.clientY - matrix.m42,
      yPercent: -50,
      xPercent: -50,
      duration: 0.2,
      ease: Power4.out,
    });
    gsap.to(".gg-chevron-left", {
      x: e.clientX,
      y: e.clientY - matrix.m42,
      yPercent: -50,
      xPercent: -50,
      duration: 0.2,
      ease: Power4.out,
    });
    if (target.classList.contains("right__arrow")) //mouse code for right arrow
    {
      gsap.to(".gg-chevron-right", {
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(".gg-chevron-left", {
        opacity: 0
      });
      gsap.to(".cursor", {
        opacity: 1,
        duration: 0.3,
        width: "110px",
        height: "110px",
        ease: Power4.out,
        background: 'none',
      });

    } else if (target.classList.contains("left__arrow")) //mouse code for left arrow
    {
      gsap.to(".gg-chevron-left", {
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(".gg-chevron-right", {
        opacity: 0
      });
      gsap.to(".cursor", {
        opacity: 1,
        duration: 0.3,
        width: "110px",
        height: "110px",
        ease: Power4.out,
        'mix-blend-mode': 'none',
        background: 'none',
      });
    }

    else if (target.classList.contains("cursor__hover")) {
      gsap.to(".cursor", {
        duration: 0.3,
        ease: Power4.out,
        width: "90px",
        height: "90px",
        'mix-blend-mode': 'difference',
        background: "#fff",
        border: "none"
      });
    }
    else {
      gsap.to(".gg-chevron-left", {
        opacity: 0
      });
      gsap.to(".gg-chevron-right", {
        opacity: 0
      });
      gsap.to(".cursor",
        {
          duration: 0.3,
          opacity: 1,
          width: "30px",
          height: "30px",
          ease: Power4.out,
          'mix-blend-mode': 'normal',
          background: 'none',
          border: "2px solid var(--wood-color)"
        });
    }

  }
  return (
    <>
      <style jsx>
        {`
           .cursor {
            width: 30px;
            height: 30px;
            position: fixed;
            border: 2px solid var(--wood-color);
            border-radius: 50%;
            opacity: 1;
           pointer-events:none;
           cursor:pointer;
            z-index: 102;
            // box-shadow: 2px -3px 41px -1px rgba(250, 250, 250, 0.64);
          }
          .gg-chevron-left {
            width: 70px;
            height: 70px;
            position: absolute;
            opacity: 0;
           
            z-index: 20;
  
            pointer-events:none;
          }
          .gg-chevron-left svg , .gg-chevron-right svg {
            fill:var(--wood-color);
          }
          .gg-chevron-right {
            width: 70px;
            height: 70px;
            position: absolute;
            opacity: 0;
           
            z-index: 20;
            pointer-events:none;
            
          }
          
           `}
      </style>
      {isMobile === false ? <div>
        <div className="cursor"></div>
        <div className="gg-chevron-left">
          <svg width="70" height="70" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
        </div>
        <div className="gg-chevron-right">
          <svg width="70" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
        </div>
      </div> : null
      }
    </>
  );
  // }
}

export default Cursor;