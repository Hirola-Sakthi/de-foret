import { useEffect } from 'react';


import Head from 'next/head'
import Image from 'next/image'
import cx from 'classnames';
import styles from '../../styles/Home.module.css'

import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Carousel from '../../components/sliders/carousel/Carousel';
import Myimage from '../../components/images/image';
import TextWithImage from '../../components/typography/textwithimage'
import Hero from '../../components/hero/Hero';
import ScrollImage from '../../components/scrollimage';
import RoomBookingForm from '../../components/booking/room';
import Data from '../../data/json/pages/dining.json';
export async function getStaticProps() {
    return { props: { data: Data } }
}


export default function Dining({ data }) {

    const { hero, heading, video, slider, reveal, featured, reviews, chef } = data;

    const { scroll } = useLocomotiveScroll();

    const goToSecondPart = (event) => {
        event.preventDefault();
        scroll && scroll.scrollTo("#second-part");
    };
    const goToTop = (event) => {
        event.preventDefault()


    }

    useEffect(() => {
        scroll && scroll.scrollTo(0, { duration: 0, disableLerp: true });
    }, [scroll]);




    return (
        <>


            <div>
                <Head>
                    <title>Luxurious Dining - Beach Resort at Havelock Island - Andaman Best Resort | De Foret</title>
                    <meta name="description" content="The DeForet Resorts at Havelock Islands offering luxurious dining facilities such as (breakfast and dinner options) Romantic Dinner, Floating Dinner, etc. Contact Us for Bookings +91 800 124 6000" />
                   <meta name = "keywords" content = "Luxurious Dining, Beach Resort at Havelock Island, Andaman Best Resort, De Foret, De Foret Resorts, andaman nicobar beach resort, Havelock Island Resort, andaman beach resort" />
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

                                <Carousel media={slider} />

                            </div>
                        </div>

                        <section className="section mt-10" >

                        </section>

                        {/* <div className={cx(styles.chef__position, "mt-20")}>
                            <div className={cx(styles.container, styles.chef)}>

                                <ScrollImage image={chef.image}
                                    title={chef.title}
                                    description={chef.description} />

                            </div>
                        </div> */}

                    </section>

                    {/* <div className={styles.container}>

                        <section className="section mt-40" >

                        </section>
                    </div> */}

                    <section className="section mt-20" style={{ backgroundColor: "#fff" }} data-scroll>
                        <div className={styles.container}>

                            <RoomBookingForm />
                        </div>
                    </section>
                </main>

            </div>
        </>
    );
}
