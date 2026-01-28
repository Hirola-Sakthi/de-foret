import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from 'embla-carousel-class-names';
import cx from 'classnames';
import { useAppContext } from "../../../utils/Context";
import style from "./Carousel.module.css";
import { gsap } from "gsap";
import Image from "next/image";
import LinkButton from "../../buttons/LinkButton";
import InlineIcons from "../../icon/inlineicons";
import Myimage from "../../images/image";
const Carousel = (props) => {
  const { handleLinksClick } = useAppContext();
  const options = { selected: 'selected__slide' }
  const classNames = ClassNames(options)
  const [emblaRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    inViewThreshold: 0.5,
    loop: false,
    speed: 8,
  }, [classNames]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [imageSlides, setImageSlides] = useState([]);

  const scrollPrev = useCallback(() => embla && (!embla.canScrollPrev()) ? (embla.scrollTo(embla.scrollSnapList().length - 1)) : embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => { embla && (!embla.canScrollNext()) ? (embla.scrollTo(0)) : embla.scrollNext() }, [embla]);
  const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
  const onSelect = useCallback(() => {
    setSelectedIndex(embla.selectedScrollSnap());
    gsap.fromTo('.selected__slide .slider__up', { y: 0, opacity: 0 }, { y: -30, opacity: 1, duration: 1, delay: 0.9, stagger: 0.3, ease: "power4.out", });
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
    <div className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={cx(style.embla__container, "popp")}>
          {props.media.map((item, i) => (
            <div className={style.embla__slide} key={item.title}>
              <div className={style.embla__slide__inner}  >
                <div className={style.embla__slide__img} style={props.media.length > 2 ? { transform: `translateX(${scrollPercentage - imageSlides[i]}%)` } : {}}>
                  <Myimage src={item.image?.src} alt={item.image?.alt} title={item.image?.title}/>
                </div>
                <div className={cx(style.slider__overlay)}></div>

                {/* style={{ transform: `translateX(${scrollPercentage - imageSlides[i]}%)` }} */}
                <div className={cx(style.slider__content)} >
                  <h3 className={cx(style.content_heading, "font__parata", "slider__up")}>{item.title}</h3>
                  {
                    item?.icons?.length > 0 ? <div className="slider__up">
                      <InlineIcons iconsList={item.icons} />
                    </div> : null
                  }

                  <p className={cx(style.content_text, "slider__up")}>{item.description}</p>

                  {
                    item?.link &&


                    <div className={cx(style.content_link, "slider__up")}>
                      <LinkButton color="#fff" href={item.link.url} onClick={(e) => handleLinksClick(item.link.url, e)} title={item.link.title} />
                    </div>}
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
      <div className={style.scroll__buttons}>
        <PrevButton onClick={scrollPrev} enabled={true} />
        <NextButton onClick={scrollNext} enabled={true} />
      </div>

    </div>

  );
}


export default Carousel;

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


