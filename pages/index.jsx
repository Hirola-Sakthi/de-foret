import React, { useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import cx from 'classnames';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import styles from '../styles/Home.module.css'
import Carousel from '../components/sliders/carousel/Carousel';
import FeaturedSlider from '../components/sliders/featured/featured';
import Video from '../components/video/Video';
import Hero from '../components/hero/Hero';
import TextWithImage from '../components/typography/textwithimage';
import RoomFeature from '../components/room-features';
import Review from '../components/reviews';
import RevealImage from '../components/revealimage';
import Myimage from '../components/images/image';
import RoomBookingForm from '../components/booking/room';


const media = [{ title: "Floating breakfast", image: "/images/1.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorum. Velit, obcaecati in nostrum explicabo commodi mollitia praesentium voluptas nulla cumque fuga harum!", link: "/villas/villa-details", icons: [{ title: "128 Sqmt", icon: "cube" }, { title: "2 Adult", icon: "group" }] },

{ title: "Luxory In terms of mathematics", image: "/images/2.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorum. Velit, obcaecati in nostrum explicabo commodi mollitia praesentium voluptas nulla cumque fuga harum!", link: "/villas/villa-details", icons: [{ title: "128 Sqmt", icon: "cube" }, { title: "2 Adult", icon: "group" }] }];

import Data from '../data/json/pages/index.json';
export async function getStaticProps() {
  return { props: { data: Data } }
}




const Index = ({ data }) => {
  const { hero, heading, video, rooms, reveal, featured, reviews } = data;
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    scroll && scroll.scrollTo(0, { duration: 0, disableLerp: true });
  }, [scroll]);

  return (
    <div>
      <Head>
        <title>Best resort at havelock island - Andaman Best Resort | De Foret Resort</title>
        <meta name="description" content="We the DeForet Resorts at Havelock Island In Andaman & Nicobar Islands, offering with luxurious perfect stay in Villas, Duplex with lots of Activities, Dining facilities etc. We are actively work towards providing the best experience to our guests. And this one of the best resort at andaman islands, Contact us for Bookings. " />
        <meta name="keywords" content="Beach resort at havelock island, Andaman Best Resort, De Foret Resort, andaman beach resort, andaman resort, book a resort, Water Villa Andaman, Havelock Island Resort, 5 star resort in andaman, andaman and nicobar best resort, andaman luxury resorts, resort near radhanagar beach," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero image={hero.bgImage} title={hero.title} description={hero.description} />
      <main className={styles.main}>
        <div className={styles.container}>

          <section className='section mt-20' data-scroll >

            <div className="grid grid--cols-2">
              <TextWithImage heading={heading.title} bgtext={heading.bgScrollText} content={heading.description} />

              <Myimage src={heading.image.src} alt={heading.image.alt} title={heading.image.title} className={styles.myImage} />
            </div>


          </section>

          <section className='section mt-20' data-scroll >
            <Video url={video.url} bgImage={video.bgImage} />
          </section>
        </div>

        <section className='section mt-40' style={{ backgroundColor: "#fff" }} data-scroll >
          <div className={styles.homeSlider__position}>
            <div className={styles.homeSlider}>

              <Carousel media={rooms} />

            </div>
          </div>

          <div className='mt-20'>
            <RevealImage media={reveal} />
          </div>

          <div className={cx(styles.homeFeature__position, "mt-20")}>
            <div className={cx(styles.container, styles.featured)}>

              <FeaturedSlider media={featured} />

            </div>
          </div>

        </section>

        <div className={cx(styles.container)}>
          <section className="section mt-40 review__margin" data-scroll>
            <Review reviews={reviews} />
          </section>
        </div>

        <section className="section mt-10" style={{ backgroundColor: "#fff" }} data-scroll>
          <div className={styles.container}>

            <RoomBookingForm />
          </div>
        </section>
        {/* <div className={styles.container}> */}

        {/* </div> */}

      </main>
      {/* <footer className={styles.footer}>
  
    
    <span className={styles.logo}>
      <Image src="/images/logo.png" alt="Vercel Logo" width={30} height={30} />
    </span>
 
</footer> */}

    </div>


  );
}

export default Index;