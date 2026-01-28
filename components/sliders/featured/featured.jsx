import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import cx from "classnames";
import style from "./featured.module.css";
import { gsap, Power4 } from "gsap";
import LinkButton from "../../buttons/LinkButton";
import { useAppContext } from "../../../utils/Context";
import Myimage from "../../images/image";
export default function Featured({ media: featured }) {
  const { handleLinksClick } = useAppContext();
  const titleText = useRef(null);
  const options = { selected: "selected__slide" };
  const classNames = ClassNames(options);
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: false,
      inViewThreshold: 0.5,
      loop: false,
      speed: 8,
    },
    [classNames]
  );
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

  gsap.registerEffect({
    name: "swapText",
    effect: (targets, config) => {
      let tl = gsap.timeline({ delay: config.delay });
      tl.to(targets, { x: 50, opacity: 0, duration: config.duration / 2 });
      tl.add(() => (targets[0].innerText = config.text));
      tl.fromTo(
        targets,
        { x: -40, opacity: 0.7, duration: config.duration },
        { x: 0, opacity: 1, delay: 0.3 },
        ">"
      );
      return tl;
    },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "animateButton",
    effect: (targets, config) => {
      let tl = gsap.timeline({ delay: config.delay });
      tl.to(targets, { x: 50, opacity: 0, duration: config.duration / 2 });
      tl.fromTo(
        targets,
        { x: -40, opacity: 0.7, duration: config.duration },
        { x: 0, opacity: 1, delay: 0.3 },
        ">"
      );
      return tl;
    },
    extendTimeline: true,
  });

  useLayoutEffect(() => {
    gsap.effects.swapText(".feature__title", {
      text: featured[selectedIndex].title,
      duration: 0.6,
    });
    gsap.effects.swapText(".feature__content", {
      text: featured[selectedIndex].description,
      duration: 1,
    });
    gsap.effects.animateButton(".feature__link", { duration: 1.3 });
  }, [selectedIndex]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    setScrollPercentage(embla.scrollProgress() * 100);
  }, [embla]);
  const onSettle = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
      embla.on("scroll", onScroll);
      onScroll();
      embla.on("settle", onSettle);
      onSettle();

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
    <>
      <style jsx>
        {`
         .feature__title{
            text-align: left;
            color: var(--typo-color, #fff);
            font-size: var(--fs-tit-desktop);
            text-transform: uppercase;
            z-index: 10;
            position: relative;
            max-width: 350px;
            min-height: 94px;
          }
  @media (min-width: 1024px) {
    .feature__title {
      white-space: nowrap;
    }
  }
           } 
          .hedline {
            left: -2rem;
            position: absolute;
            top: 7.1rem;
            height: 3px;
            width: 200px;
            background-color: var(--wood-color);
            z-index: 2;
          }
          p {
            color: var(--typo-color, #fff);
            line-height: var(--lh-desktop);
            font-size:var(--fs-desktop,1.4rem);
            margin-top: 20px;
            padding: 1rem 5rem 1rem 0;
          }
          .background__text {
            position: absolute;
            top: -15rem;
            left: 15rem;
            font-size: 19rem;
            font-weight: 100;
            color: var(--bg-text-color);
            opacity: 0.5;
          }

          @media screen and (max-width: 768px) {
            .text__section {
              order: 2;
              margin-top: 50px;
            }
            .feature__title
            {
              color:#fff;
            }
            p{
              padding: 0;
             font-size:var(--fs-mobile,1.2rem);
            }
            .feature__title{
              min-height: 0;
            }
           
          }
        `}
      </style>
      <div className="grid grid--cols-2">
        <div className="text__section">
          <div className={style.feature__title__section}>
            <PrevButton onClick={scrollPrev} enabled={true} />
            <h2 className="feature__title font__parata" ref={titleText}></h2>
            <p className="feature__content"></p>
          </div>
          {featured[selectedIndex].link && (
            <div div className="feature__link">
              <LinkButton
                href={featured[selectedIndex].link.url}
                onClick={(e) =>
                  handleLinksClick(featured[selectedIndex].link.url, e)
                }
                title={featured[selectedIndex].link.title}
              />
            </div>
          )}
        </div>
        <div>
          {/* Slider start */}
          <div className={style.embla}>
            <NextButton onClick={scrollNext} enabled={true} />

            <div className={style.embla__viewport} ref={viewportRef}>
              <div className={cx(style.embla__container, "popp")}>
                {featured.map((item, i) => (
                  <div className={style.embla__slide} key={i}>
                    <div className={style.embla__slide__inner}>
                      <div
                        className={style.embla__slide__img}
                        style={{
                          transform: `translateX(${
                            scrollPercentage - imageSlides[i]
                          }%)`,
                        }}
                      >
                        <Myimage src={item.image?.src} />
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
            <div className={style.scroll__buttons}></div>
          </div>
        </div>
      </div>
    </>
  );
}

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

const DotButton = ({ selected, onClick }) => (
  <button
    className={[cx(style.embla__dot, { [style.is_selected]: selected })]}
    onClick={onClick}
  />
);
