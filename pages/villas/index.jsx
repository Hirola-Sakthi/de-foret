import { useEffect } from 'react';


import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import { useLocomotiveScroll } from 'react-locomotive-scroll'
import cx from 'classnames';
import Carousel from '../../components/sliders/carousel/Carousel';
import Myimage from '../../components/images/image';
import TextWithImage from '../../components/typography/textwithimage';
import Hero from '../../components/hero/Hero';
import RoomBookingForm from '../../components/booking/room';
import Data from '../../data/json/pages/villas.json';
export async function getStaticProps() {
    return { props: { data: Data } }
}

export default function Home({ data }) {
    const { hero, heading, video, rooms, reveal, featured, reviews } = data;

    const { scroll } = useLocomotiveScroll();

    const goToSecondPart = (event) => {
        event.preventDefault()
        scroll && scroll.scrollTo('#second-part')
    }
    const goToTop = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        scroll && scroll.scrollTo(0, { duration: 0, disableLerp: true });
    }, [scroll]);

    return (
        <>
            <div>
                <Head>
                    <title>Book a Villa - Water Villa Andaman - Havelock Island Resort | De Foret</title>
                    <meta name="description" content="Book a Luxurious Villa at Havelock Island in Andaman. DeForet Resorts Contact Us for bookings. De Foret's main focus and goal is to make you happy and cozy. Have a good time while vacationing at our resort." />
                    <meta name = "keywords" content = "Water Villa Andaman, Book a Villa, De Foret Resort, Havelock Island Resort, De Foret, Beach Resort at Havelock Island, Andaman Best Resort, andaman beach resort" />
                    <link rel="icon" href="/images/favicon.ico" />
                </Head>

                <Hero image={hero.bgImage} title={hero.title} description={hero.description} />

                <main className={styles.main}>
                    {/* <Myimage src="https://i.picsum.photos/id/901/900/400.jpg?hmac=qkyi6SIz1DNx4pZGhPam9Vtqft_YzQ45QdHBEWtsYG8" className={styles.myImage} /> */}

                    {/* <Carousel slides={media}/> */}


                    <div className={styles.container}>

                        <section className='section mt-20' data-scroll >

                            <div className="grid grid--cols-2">
                                <TextWithImage heading={heading.title} bgtext={heading.bgScrollText} content={heading.description} />

                                <Myimage src={heading.image.src} alt={heading.image.alt} title={heading.image.title} className={styles.myImage} />
                            </div>
                        </section>
                    </div>

                    <section className='section mt-40' style={{ backgroundColor: "#fff" }} data-scroll >
                        <div className={styles.homeSlider__position}>
                            <div className={styles.homeSlider}>
                                <Carousel media={rooms} />
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className='mt-20' style={{ marginBottom: "-500px" }}>
                            </div>
                        </div>

                    </section>

                    <section className="section mt-20" style={{ backgroundColor: "#fff" }} data-scroll>
                        <div className={styles.container}>

                            <RoomBookingForm />
                        </div>
                    </section>
                </main>

            </div>
        </>

    )
}
