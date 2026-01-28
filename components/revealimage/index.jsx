import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import gsap, { Power4, Strong, Expo } from 'gsap';
import LinkButton from '../buttons/LinkButton';
import Myimage from '../images/image';


const RevealImage = ({ media }) => {

    const imageContainer = useRef(null);
    const imageContainerOver = useRef(null);
    const image = useRef(null);
    const heading = useRef(null);
    const linkButton = useRef(null);
    const { scroll } = useLocomotiveScroll();
    const t1 = gsap.timeline();

    useEffect(() => {
        gsap.to(imageContainer.current, {
            x: 20, delay: 0.2, duration: 1, ease: Expo.easeInOut, scrollTrigger: {
                trigger: imageContainer.current,
                scroller: scroll?.el,
                start: "top bottom",
                end: "+=100",
                scrub: false,

                toggleActions: "restart none none reverse"
            }
        });
        gsap.to(".img img", {
            scale: 1.1, duration: 2.8, delay: -0.6, ease: Power4.easeInOut, scrollTrigger: {
                trigger: heading.current,
                scroller: scroll?.el,
                start: "top bottom",
                end: "bottom top",
                scrub: false,
                toggleActions: "restart none none reverse",
            }
        });
        gsap.to(imageContainerOver.current, {
            width: 0, delay: 0.3, duration: 1, ease: Expo.easeInOut, scrollTrigger: {
                trigger: imageContainer.current,
                scroller: scroll?.el,
                start: "top bottom",
                end: "+=100",
                scrub: false,
                toggleActions: "restart none none reverse"
            }
        });



        gsap.fromTo(heading.current, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, delay: 0.3, duration: 1, ease: Power4.easeInOut, scrollTrigger: {
                trigger: heading.current,
                scroller: scroll?.el,
                start: "top bottom",
                end: "bottom top",
                scrub: false,

                toggleActions: "restart none none reverse",
            }
        });
        gsap.fromTo(linkButton.current, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, delay: 0.3, duration: 1.3, ease: Power4.easeInOut, scrollTrigger: {
                trigger: heading.current,
                scroller: scroll?.el,
                start: "top bottom",
                end: "bottom top",
                scrub: false,

                toggleActions: "restart none none reverse",
            }
        });


    }, [scroll]);




    return (
        <>
            <style jsx>
                {`
        .image__container
        {
            position:relative;
            width:600px;
            height:700px;
            overflow:hidden;    
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
        :global(.img)
        {
            position:absolute;
            width:600px;
            height:600px;
        }
        .image__side
        {
            position:relative;
            margin-left:60px;
        }  
        .text_side
        {
            margin-left:-60px;
            max-width:90%;
            margin-top:50px;
            z-index:2;
        }
        .text__content
        {
        background:var(--bg-color);
        height:102%;
        padding:30px;
        }
        .text__content__heading
        {
            font-size: var(--fs-tit-desktop);
            text-transform: uppercase;
        }
        .text__content p
        {
            font-size:var(--fs-desktop);
            line-height:var(--lh-desktop);
            padding:20px 0 0 0;
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
            .text_side
            {
                margin-left:-30px;
                max-width:100%;
            }
          }
            @media screen and (max-width: 768px) {
                 .image__side
                { 
                    margin-left:0;
                    order:2;
                }  
                .image__container
                {                    
                    width:calc(100% - 40px); 
                    height:350px;                 
                    overflow:hidden;    
                }
                .text_side
                {
                    margin-left:20px;
                    max-width:calc(100% - 20px);
                    margin-top:0;
                    z-index:2;
                    color:var(--bg-text-color);
                }
                .text__content
                {
                background:#fff;
               padding-left:0;
               height: 100%;
               
                }
                .text__content__heading
                {
                    font-size:2.8rem;
                }
                .text__content p
                {
                    font-size:var(--fs-mobile,1.2rem);
                    line-height:var(--lh-mobile);
                    padding:2px 0;
                    color:var(--bg-text-color-fade);
                    opacity:1;
                }
                :global(.img)
                {
                
                    width:100%;
                    height:100%;
                }
              }


        `}
            </style>
            <div className='grid grid--cols-2'>
                <div className="image__side">

                    <div ref={imageContainer} className='image__container' >
                        <div ref={imageContainerOver} className='image__container__overlay'></div>
                        {/* <img ref={image}  /> */}
                        <div>
                            <Myimage ref={image} className='img' src={media.image?.src} alt="" />
                        </div>
                    </div>


                </div>
                <div className='text_side'>
                    <div className="text__content" data-scroll data-scroll-speed="1">
                        <h2 ref={heading} className='text__content__heading font__parata'>{media.title}</h2>
                        {
                            media.description.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }

                        {media.link && <div ref={linkButton} >
                            <LinkButton href={media.link.url} title={media.link.title} />
                        </div>}
                    </div>
                </div>

            </div>
        </>);
}

export default RevealImage;