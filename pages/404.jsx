
import Head from 'next/head'
import Link from 'next/link'
import RoomBookingForm from '../components/booking/room';
import Hero from '../components/hero/Hero';
import styles from '../styles/Home.module.css'
export default function NotFound() {


    return (
        <>


            <div>
                <Head>
                    <title>Page Not Found</title>

                    <link rel="icon" href="/images/favicon.ico" />
                </Head>

                <Hero image="/images/404.webp" title="Page Not Found" description="We are sorry, the page you are looking for isn't available." />

                <main className={styles.main}>


                    <section className="section mt-10" style={{ backgroundColor: "#fff" }} data-scroll>
                        <div className={styles.container}>

                            <RoomBookingForm />
                        </div>
                    </section>

                </main>

            </div>
        </>
    );
}
