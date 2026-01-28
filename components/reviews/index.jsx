import React, { useState, useEffect, useCallback, useRef } from "react";
import style from "./Review.module.css";
import cx from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from 'embla-carousel-class-names';
import Autoplay from "embla-carousel-autoplay";
import { gsap } from "gsap";
import Myimage from "../images/image";
export default function Review({ reviews }) {

    const options = { selected: 'selected__slide' }
    const classNames = ClassNames(options)
    const autoplay = useRef(
        Autoplay(
            { delay: 5000, stopOnInteraction: true },
            (emblaRoot) => emblaRoot.parentElement
        )
    );

    const [viewportRef, embla] = useEmblaCarousel({
        skipSnaps: false,
        inViewThreshold: 0.5,
        loop: false,
        speed: 8,
    }, [autoplay.current, classNames]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [imageSlides, setImageSlides] = useState([]);

    const scrollPrev = useCallback(() => embla && (!embla.canScrollPrev()) ? (embla.scrollTo(embla.scrollSnapList().length - 1)) : embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => { embla && (!embla.canScrollNext()) ? (embla.scrollTo(0)) : embla.scrollNext() }, [embla]);
    const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
    const onSelect = useCallback(() => {
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla]);


    const onScroll = useCallback(() => {
        if (!embla) return;
        setScrollPercentage(embla.scrollProgress() * 100);
    }, [embla]);

    useEffect(() => {
        if (embla) {
            setScrollSnaps(embla.scrollSnapList());
            embla.on("select", onSelect);
            onSelect();
            embla.on("scroll", onScroll);
            onScroll();
            //  For Image slider parallex effect
            const slideNodes = embla.slideNodes();
            slideNodes.forEach((slide, index) => {
                setImageSlides(sliderr => [
                    ...sliderr,
                    index * (100 / (slideNodes.length - 1))
                ]);
            });
            // Parallex effect end
        }
    }, [embla, onScroll, onSelect]);

    return (
        <>
            <style jsx>
                {`
          

          
.position1 {
    transform: translate(-9vw, -15vw);
    
    background-size: 100% 100%;
  
    width: 6vw;
    height: 6vw;
   opacity:0.1;
    filter: blur(1px);
  }
  
  .position2 {
    transform: translate(-16vw, -2vw);
  
    background-size: 100% 100%;
    width: 5vw;
    height: 5vw;
  
    opacity: 0.1;
   
    filter: blur(1px);
  }
  .position3 {
    transform: translate(-4vw, 8vw);
  
    background-size: 100% 100%;
    opacity:0.1;
    width: 6vw;
    height: 6vw;
    filter: blur(1px);
  }

  
.position4 {
    transform: translate(7vw, -14vw);
  
    background-size: 100% 100%;
    width: 5vw;
    height: 5vw;
    opacity:0.1;
    filter: blur(1px);
  }
  .position5 {
    transform: translate(10vw, 11vw);
    
    background-size: 100% 100%;
    opacity:0.1;
    width: 5vw;
    height: 5vw;
    
    filter: blur(1px);
  }

  .position6 {
    transform: translate(14vw, -3vw);
   
    background-size: 100% 100%;
    width: 6vw;
    height: 6vw;
    opacity: 0.6;
    opacity:0.1;
    filter: blur(1px);
  }

  .review__active {
    transition: all 1s ease;
    filter: blur(0);
    opacity:1;
  }


  @media screen and (max-width: 768px) {
    
    .position1 {
      transform: translate(-30vw, -3vw);
      width: 50px;
      height: 50px;
    }
    .position2 {
        transform: translate(-9vw,-13vw);
        width: 50px;
      height: 50px;
    }
    .position3 {
      transform: translate(0vw, 4vw);
      width: 50px;
      height: 50px;
    }
    
    .position4 {
      transform: translate(35vw, -1vw);
      width: 50px;
      height: 50px;
    }
    .position5 {
        transform: translate(0vw,-17vw);
      width: 50px;
      height: 50px;
    }
   
    .position6 {
      transform: translate(14vw, 0vw);
      width: 50px;
      height: 50px;
    }
  }
  

            `}
            </style>

            <div className={style.testimonialcontainer}>
                <section className={cx(style.grid, style.gridx3)}>
                    <div className={style.people}>
                        <div className={cx(style.fly, "position1", { review__active: selectedIndex === 0 })}>
                            <Myimage className={style.position1} src={reviews[0]?.photo} />
                        </div>
                        <div className={cx(style.fly, "position2", { review__active: selectedIndex === 1 })}>
                            <Myimage className={style.position2} src={reviews[1]?.photo} />
                        </div>
                        <div className={cx(style.fly, "position3", { review__active: selectedIndex === 2 })}>
                            <Myimage className={style.position3} src={reviews[2]?.photo} />
                        </div>
                    </div>
                    <div className={style.embla}>
                        <div className={style.embla__viewport} ref={viewportRef}>
                            <div className={cx(style.embla__container, "popp")}>
                                {reviews.map((review, i) => (
                                    <div className={style.embla__slide} key={i}>
                                        <div className={style.embla__slide__inner}  >
                                            <div className={style.embla__slide__img}>
                                                <div className={style.quotecontainer}>
                                                    <div className={style.quote} data-scroll data-scroll-speed="2">
                                                        {review.comment}
                                                    </div>
                                                    <div className={style.author} data-scroll data-scroll-speed="2">
                                                        <h3>{review.name}</h3>
                                                        <span><a className="from-left cursor__hover" href="https://www.tripadvisor.in/Hotel_Review-g503691-d20096069-Reviews-De_Foret-Havelock_Island_Andaman_and_Nicobar_Islands.html" target="_blank" rel="noopener noreferrer">@ Trip Advisor</a></span>
                                                    </div>
                                                    {/* <div className={style.rating} data-scroll data-scroll-speed="2">
                                                        <div className={style.star}></div>
                                                        <div className={style.star}></div>
                                                        <div className={style.star}></div>
                                                        <div className={style.star}></div>
                                                        <div className={style.nostar}></div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className={style.embla__dots}>
                            {scrollSnaps.map((snap, index) => (
                                <DotButton
                                    selected={index === selectedIndex}
                                    onClick={() => scrollTo(index)}
                                    key={index}
                                />
                            ))}
                        </div>


                    </div>
                    <div className={style.people}>
                        <div className={cx(style.fly, style.newfly, "position4", { review__active: selectedIndex === 3 })}>
                            <Myimage className={style.position4} src={reviews[3]?.photo} />
                        </div>
                        <div className={cx(style.fly, style.newfly, "position5", { review__active: selectedIndex === 4 })}>
                            <Myimage className={style.position5} src={reviews[4]?.photo} />
                        </div>

                        <div
                            className={cx(style.fly, style.newfly, "position6", { review__active: selectedIndex === 5 })}
                        >
                            <Myimage className={style.position6} src={reviews[5]?.photo} />
                        </div>
                    </div>
                </section>
            </div>



        </>
    );
}



const PrevButton = ({ enabled, onClick }) => (
    <div onClick={onClick} className={cx(style.slider__left__button, "left__arrow")}>   </div>
);

const NextButton = ({ enabled, onClick }) => (
    <div onClick={onClick} className={cx(style.slider__right__button, "right__arrow")}></div>
);

const DotButton = ({ selected, onClick }) => (
    <button
        className={[cx(style.embla__dot, { [style.is_selected]: selected }, "cursor__hover")]}
        onClick={onClick}
    />
);

const getNumber = () => (7);