import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import cx from "classnames";
import style from "./imageslider.module.css";
import { gsap } from "gsap";
import Myimage from "../../images/image";
const ImageSlider = ({ media }) => {
  const options = { selected: "selected__slide" };
  const classNames = ClassNames(options);
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: false,
      inViewThreshold: 0.5,
      loop: false,
      speed: 10,
    },
    [classNames]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [imageSlides, setImageSlides] = useState([]);

  const scrollPrev = useCallback(
    () =>
      embla && !embla.canScrollPrev()
        ? embla.scrollTo(embla.scrollSnapList().length - 1)
        : embla.scrollPrev(),
    [embla]
  );
  const scrollNext = useCallback(() => {
    embla && !embla.canScrollNext() ? embla.scrollTo(0) : embla.scrollNext();
  }, [embla]);
  const scrollTo = useCallback((index) => embla.scrollTo(index), [embla]);
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
        setImageSlides((sliderr) => [
          ...sliderr,
          index * (100 / (slideNodes.length - 1)),
        ]);
      });
      // Parallex effect end
    }
  }, [embla, onScroll, onSelect]);

  return (
    <div className={style.embla}>
      <div className={style.embla__viewport} ref={viewportRef}>
        <div className={cx(style.embla__container, "popp")}>
          {media.map((image, i) => (
            <div className={style.embla__slide} key={i}>
              <div className={style.embla__slide__inner}>
                {/* <img src={image.src} className={style.embla__slide__img} style={{ transform: `translateX(${scrollPercentage - imageSlides[i]}%)` }} /> */}

                <div
                  className={style.embla__slide__img}
                  style={
                    media.length > 2
                      ? {
                          transform: `translateX(${
                            scrollPercentage - imageSlides[i]
                          }%)`,
                        }
                      : {}
                  }
                >
                  <Myimage
                    src={image?.src}
                    alt={image.alt}
                    title={image.title}
                    fit="contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.scroll__buttons}>
        <PrevButton onClick={scrollPrev} enabled={true} />
        <NextButton onClick={scrollNext} enabled={true} />
      </div>
      <ul className={style.slider__bottom__controls}>
        <li>
          <span onClick={scrollPrev} className="cursor__hover">
            <svg
              className="cursor__hover"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
            </svg>
          </span>
        </li>
        <li>
          {selectedIndex + 1} / {embla && embla.scrollSnapList().length}
        </li>
        <li>
          <span onClick={scrollNext} className="cursor__hover">
            <svg
              className="cursor__hover"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ImageSlider;

const PrevButton = ({ enabled, onClick }) => (
  <div
    onClick={onClick}
    className={cx(style.slider__left__button, "left__arrow")}
  ></div>
);

const NextButton = ({ enabled, onClick }) => (
  <div
    onClick={onClick}
    className={cx(style.slider__right__button, "right__arrow")}
  ></div>
);
