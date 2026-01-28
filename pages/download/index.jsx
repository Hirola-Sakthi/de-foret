// pages/download.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import RoomBookingForm from "../../components/booking/room";
import Hero from "../../components/hero/Hero";
import styles from "../../styles/Home.module.css";
const DownloadPage = () => {
  const router = useRouter();
  const { filename } = router.query;

  useEffect(() => {
    // if (!filename) {
    //   // Handle the case where the filename query parameter is missing or invalid
    //   router.push("/");
    //   return;
    // }

    // Simulate downloading the file (replace with your actual file URL)
    if (filename) {
      const fileURL = `/documents/${filename}`;
      const anchor = document.createElement("a");
      anchor.href = fileURL;
      anchor.target = "_blank";
      anchor.download = filename;
      anchor.click();
    }

    // Redirect to the homepage after a timer (e.g., 5 seconds)
    // const timer = setTimeout(() => {
    //   router.push("/");
    // }, 10000);

    // return () => clearTimeout(timer);
  }, [router, filename]);

  return (
    // <div>
    //   <p>Downloading {filename}...</p>
    // </div>
    <>
      <div>
        <Head>
          <title>File Download</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <Hero
          image="/images/404.webp"
          title="Download Successful"
          description="Explore Deforet"
          showHomeButton={true}
        />

        <main className={styles.main}>
          <section
            className="section mt-10"
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
};

export default DownloadPage;
