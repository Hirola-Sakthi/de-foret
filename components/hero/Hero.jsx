import React, { useEffect, useLayoutEffect } from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import Image from "next/image";
import { gsap, Power2, Power4 } from "gsap";
import Logo from "./logo";
import LinkButton from "../buttons/LinkButton";
const Hero = (props) => {
  const animateImage = () => {
    // gsap.to(".bg-image", {
    //   scale: 1.05,
    //   duration: 3,
    //   ease: Power4.out,
    // });
  };
  return (
    <>
      <style jsx>{`
        .bg-image {
          transform: matrix(1, 0, 0, 1, 0, 0);
        }
      `}</style>
      <Logo />
      <section id="hero" data-scroll data-scroll-speed="-5">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__image}>
            {/* <img src={props.image} /> */}
            <Image
              src={props.image}
              alt="Picture of the author"
              layout="fill"
              className="bg-image"
              placeholder="empty"
              priority="true"
              onLoadingComplete={(h) => {
                animateImage();
              }}
              objectFit="cover"
            />
          </div>
          <div className={styles.bg__overlay} style={{ opacity: 0.3 }}></div>
          <div className={styles.bg__overlay__grad}></div>
          <div className={cx(styles.hero__content)}>
            <h1
              data-v-34c9772f=""
              className={cx(
                styles.title,
                styles.q_blur,
                "font__parata",
                "blur__text"
              )}
            >
              <span style={{ opacity: 1 }} className={styles.unblur}>
                {props.title}
              </span>
            </h1>
            <p className="blur__text">{props.description}</p>
            {props.showHomeButton && (
              <LinkButton href="/" title="Visit Home Page" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
