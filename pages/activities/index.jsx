import { useEffect } from 'react';


import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Myimage from '../../components/images/image';
import Carousel from '../../components/sliders/carousel/Carousel';
import TextWithImage from '../../components/typography/textwithimage';
import Hero from '../../components/hero/Hero';
import RoomBookingForm from '../../components/booking/room';
import ImageSlider from '../../components/sliders/image-slider';
import RoomFeature from '../../components/room-features';
import Data from '../../data/json/pages/activities.json';
export async function getStaticProps() {
    return { props: { data: Data } }
}
export default function Activities({ data }) {
    const { hero, heading, imageSlider, placeOfInterest, activities } = data;
    const { scroll } = useLocomotiveScroll();

    const goToSecondPart = (event) => {
        event.preventDefault();
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
                    <title>Activities at Resorts - Andaman Havelock Island Resorts | De Foret</title>
                    <meta name="description" content="Activites in our DeForet Resorts at Havelock Island In Andaman & Nicobar Islands are Comfortable stay, Romantic Dinner, Floating Dinner, In Water Villas and Duplex and much more. Contact Us for Bookings +91 800 124 6000" />
                    <meta name = "keywords" content = "Activities at Resorts, Andaman Havelock Island Resorts, De Foret, De Foret Resorts, Beach resort at havelock island, Andaman Best Resort, De Foret Resort, andaman beach resort, andaman resort, book a resort, Water Villa Andaman, Havelock Island Resort," />
                    <link rel="icon" href="/images/favicon.ico" />
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
                    </div>
                    <section className='section mt-10' style={{ backgroundColor: "var(--bg-color)", minHeight: "300px", padding: "50px 0" }} data-scroll >
                        <RoomFeature title="PLACE OF INTEREST" left={placeOfInterest?.major} right={placeOfInterest?.minor} />
                    </section>

                    <section className='section mt-40' style={{ backgroundColor: "#fff" }} data-scroll >
                        <div className={styles.homeSlider__position}>
                            <div className={styles.homeSlider}>
                                <Carousel media={activities} />
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
