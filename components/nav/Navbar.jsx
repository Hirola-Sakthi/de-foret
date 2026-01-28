import React from 'react'
import Link from 'next/link';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const NavBar = ({ state, onChange, onDiningClick }) => {
  const { scroll } = useLocomotiveScroll();
  const handleBookingClick = (e) => {
    e.preventDefault();
    if (scroll) {
      const bookingDiv = document.querySelector("#booking__div");
      if (bookingDiv)
        scroll.scrollTo(bookingDiv, { offset: "-50" });
    }
  }
  return (
    <>
      <style jsx>{`

        .top-menu-container {
            position: fixed;
            z-index: 90;
            top: 60px;
            padding: 0 65px;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            mix-blend-mode: difference;
          }
          .top-menu-container .top-nav-menu {
            padding-right: 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-align-items: center;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            height: 20px;
         
          
          }
          .top-menu-container .top-nav-menu .hamburger-menu span.line {
            width: 40px;
            height: 2px;
            background: #fff;
            display: block;
            position: relative;
            top: 0;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
          }
          .top-menu-container .top-nav-menu .hamburger-menu span.line:nth-child(2) {
            margin-top: 15px;
          }
          .top-menu-container .top-nav-menu .hamburger-menu  {
            padding: 6px 2px;
          }
          .top-menu-container .top-nav-menu .menu-text {
            overflow: hidden;
            // pointer-events: none !important;
            height: 20px;
          }
          .top-menu-container .top-nav-menu .menu-text.hide {
            display: none;
          }
          
          .top-menu-container .right-nav {
            font-size: 1.6rem;
            letter-spacing: 3.27px;
            line-height: 18px;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            opacity: 1;
            visibility: visible;
            text-decoration:none;
            color:var(--heading-color,#fff);
           
          }
          .hover-target {
            cursor: pointer;
          }
          .uppercase {
            text-transform: uppercase;
          }
          .top-menu-container .right-nav .top-book-table {
            margin-left: 40px;
          }
          @media (max-width: 768px) {
            .top-menu-container .right-nav {
              display: none;
            }
            .top-menu-container
           {
            justify-content: end;
            -webkit-justify-content: end;
            padding: 0px 10px;
           }
           .top-menu-container .top-nav-menu .hamburger-menu span.line {
            width: 30px;
          }
          .top-menu-container .top-nav-menu .hamburger-menu span.line:nth-child(2) {
            margin-top: 15px;
          }
          .top-menu-container {
            top: 30px;  
          }
          .top-menu-container .top-nav-menu {
            padding-right: 10px;
          }
      
          }
        `}

      </style>

      <div id="nav" className="top-menu-container" data-scroll data-scroll-sticky data-scroll-target="#nav">
        <div id="right-book-nav" className="right-nav">
          <Link legacyBehavior  to="/" href="#">
            <a className="top-book-now uppercase hover-target font-didot cursor__hover" onClick={(e) => { handleBookingClick(e) }}>BOOK ROOM </a></Link
          >

          <span className="top-book-table uppercase hover-target font-didot cursor__hover"
            onClick={onDiningClick}>BOOK TABLE</span
          >
        </div>
        <div id="top-nav" className="top-nav-menu">
          <div className="hamburger-menu hover-target cursor__hover" onClick={onChange}>
            <span className="line line1 cursor__hover"></span>
            <span className="line line2 cursor__hover"></span>
          </div>
          <div className="menu-text hide">
            <span className="close-menu font-didot hover-target">CLOSE</span>
          </div>
        </div>
      </div>

    </>
  );
}

export default NavBar;