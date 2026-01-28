import { useEffect } from "react";

import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { useLocomotiveScroll } from "react-locomotive-scroll";
import Myimage from "../../components/images/image";
import TextWithImage from "../../components/typography/textwithimage";
import Hero from "../../components/hero/Hero";
import RoomBookingForm from "../../components/booking/room";
import ImageSlider from "../../components/sliders/image-slider";
import RoomFeature from "../../components/room-features";
import Data from "../../data/json/pages/de-belle-villa-with-private-pool-tropical-love-retreat.json";
import RateCards from "../../components/rate-cards/rateCards";
import cards from "../../data/json/pages/rates-data";
export async function getStaticProps() {
  return { props: { data: Data } };
}
export default function StandingVilla({ data }) {
  const { hero, heading, imageSlider, roomFeature } = data;
  const poolCardData = cards.filter((filtData) => filtData.primaryEntity === "privatePool")
  const { scroll } = useLocomotiveScroll();

  const goToSecondPart = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#second-part");
  };
  const goToTop = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    scroll && scroll.scrollTo(0, { duration: 0, disableLerp: true });
  }, [scroll]);

  return (
    <>
      <div>
        <Head>
          <title>
            Luxury Private Pool Villas | De Foret Resort, Havelock Island
          </title>
          <meta
            name="description"
            content="Escape to De Foret Resort in Havelock Island, where luxury meets serenity. Stay in exclusive private pool villas with premium amenities for the ultimate tropical getaway."
          />
          <meta
            name="keywords"
            content="De Belle Villa with Private Pool, Best Private Pool Villas In Andaman, andaman villa, Book A Resort, Best resort in havelock, De Foret Resort, De Foret, De Foret Resorts, Havelock Island Resort, 5 star resort in andaman, andaman and nicobar best resort, andaman luxury resorts,"
          />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <Hero
          image={hero.bgImage}
          title={hero.title}
          description={hero.description}
        />

        <main className={styles.main}>
          <div className={styles.container}>
            <section className="section mt-20" data-scroll>
              <div className="grid">
                <TextWithImage
                  heading={heading.title}
                  bgtext={heading.bgScrollText}
                  content={heading.description}
                />

                <Myimage
                  src={heading.image.src}
                  alt={heading.image.alt}
                  title={heading.image.title}
                  className={styles.myImage}
                />
              </div>
            </section>
          </div>

          <div className={styles.container}>
            <section className="section" data-scroll>
              <ImageSlider media={imageSlider} />
            </section>
          </div>

          <section
            className="section mt-5"
            style={{
              backgroundColor: "#fff",
              minHeight: "300px",
              padding: "50px 0",
            }}
            data-scroll
          >
            <RoomFeature
              title="VILLA FEATURES"
              left={roomFeature?.major}
              right={roomFeature?.minor}
            />
            <RateCards cards={poolCardData}/>
          </section>
          <section
            className="section mt-20"
            style={{ backgroundColor: "#fff" }}
            data-scroll
          >
            <div className={styles.container}>
              <RoomBookingForm />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
