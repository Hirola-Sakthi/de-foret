import React from 'react'
import Link from 'next/link';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function BottomNav({ onDining }) {

    const { scroll } = useLocomotiveScroll();
    const handleBookingClick = (e) => {
        e.preventDefault();
        if (scroll) {
            const bookingDiv = document.querySelector("#booking__div");
            if (bookingDiv)
                scroll.scrollTo(bookingDiv, { offset: "0" });
        }
    }
    return (
        <>
            <style jsx>
                {`
       
                .bottom__nav
        {
            display: none;
        }

        @media (max-width: 768px) {
            .bottom__nav
        {
  position: fixed;
z-index: 80;
bottom: 0;
width: 100%;
display:flex;
justify-content:space-around;
align-items:center;
background-color:var(--bg-color1);
        }
        .column
        {
            display: block;
-ms-flex-preferred-size: 0;
flex-basis: 0;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
-ms-flex-negative: 1;
flex-shrink: 1;
width: 50%;
text-align: center;
margin: 15px 0;
padding: 0 32px;
font-size:var(--fs-desktop);
color: var(--wood-color);
        }
        .column:nth-child(1)
        {
            border-right:1px solid var(--wood-color);
        }
        }
        `}
            </style>
            <div className='bottom__nav'>
                <div className="column">
                    <Link legacyBehavior  to="/" href="#">
                        <a className="top-book-now uppercase hover-target font-didot cursor__hover" onClick={(e) => { handleBookingClick(e) }}>BOOK ROOM </a></Link
                    >
                </div>
                <div className="column"> <Link legacyBehavior  to="/" href="#">
                    <a className="top-book-now uppercase hover-target font-didot cursor__hover" onClick={onDining}>BOOK TABLE </a></Link
                ></div>
            </div>
        </>

    )
}
