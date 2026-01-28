import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import gsap, { Power4, Strong, Expo } from 'gsap';
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin';
import LinkButton from '../buttons/LinkButton';
import Myimage from '../images/image';


const ScrollImage = (props) => {

    const imageContainer = useRef(null);
    const image = useRef(null);
    const heading = useRef(null);
    const linkButton = useRef(null);

    const t1 = gsap.timeline();

    return (
        <>
            <style jsx>
                {`
        .image__container
        {
            position:relative;
            width:550px;
            height:600px;
             overflow:hidden;
            z-index:40;
        }
        .image__container__overlay
        {
            position:absolute;
            width:100%;
           height:100%;
           top:0;
           right:0;
           background-color:#fff;
           z-index:1;
          
        }
        .img
        {
            position:absolute;
            width:600px;
            height:600px;
            object-fit: cover;
        }
        .image__side
        {
            position:relative;
          
        }  
        .text_side
        {
           
            max-width:90%;
            margin-top:50px;
            z-index:2;
        }
        .text__content
        {
        background:transparent;
        height:108%;
        padding:15px 30px;
        }
        .text__content__heading
        {
            font-size:4rem;
            color:var( --bg-text-color);
        }
        .text__content p
        {
            margin-top:50px;
            font-size:var(--fs-desktop);
            line-height:var(--lh-desktop);
            padding: 0;
        }
        @media screen and (max-width: 1000px) {
            .image__side
            { 
                margin-left:0;
            } 
            .image__container
            {                    
                width:100%; 
                height:450px;                 
                
            }
            .img
            {
                
                width:400px;
                height:500px;
              
            }
            .text_side
            {
                margin-left:0;
                max-width:100%;
                margin-top:10px;
            }
            .text__content
        {
        padding:15px 30px;
        }
           
          }
            @media screen and (max-width: 766px) {
                 .image__side
                { 
                    margin-left:0;
                    padding:30px;
                    
                }  
                .image__container
                {                    
                    width:calc(100% - 0); 
                    height:450px;    
                              
                    overflow:hidden;    
                }
                .img
                {
                    
                    width:100%;
                    height:500px;
                  
                }
                .text_side
                {
                    margin-left:30px;
                    max-width:calc(100% - 60px);
                    margin-top:0;
                    z-index:2;
                    color:var(--bg-text-color);
                }
                .text__content
                {
               
               padding-left:0;
                }
                .text__content__heading
                {
                    font-size:2.8rem;
                    color:#fff;
                }
                .text__content p
                {
                    font-size:var(--fs-mobile,1.2rem);
                    line-height:var(--lh-mobile);
                    padding:2px 0;
                    color:#fff;
                    opacity:1;
                }
              }


        `}
            </style>
            <div className='grid grid--cols-2'>
                <div className="image__side">

                    <div ref={imageContainer} className='image__container' >

                        <img ref={image} className='img' data-scroll data-scroll-speed="-1.1" src={props.image} alt="" />
                    </div>


                </div>
                <div className='text_side'>
                    <div className="text__content" >
                        <h2 ref={heading} className='text__content__heading font__parata'>{props.title}</h2>
                        <p>{props.description}</p>

                    </div>
                </div>

            </div>
        </>);
}

export default ScrollImage;