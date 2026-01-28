import { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import cx from "classnames";
import { createClient } from "next-sanity";
import styles from "../../styles/Home.module.css";

import { useLocomotiveScroll } from "react-locomotive-scroll";
import Carousel from "../../components/sliders/carousel/Carousel";
import Myimage from "../../components/images/image";
import TextWithImage from "../../components/typography/textwithimage";
import Hero from "../../components/hero/Hero";
import ScrollImage from "../../components/scrollimage";
import RoomBookingForm from "../../components/booking/room";
import BlogItem from "../../components/blog";
import Data from "../../data/json/pages/blog.json";
import { sanityClient } from "../../utils/SanityClient";
import { useRouter } from "next/router";
import { useRef } from "react";

export async function getStaticProps() {
  const posts =
    await sanityClient.fetch(`*[_type == "post" && publishedAt <= now()] | order(publishedAt desc){
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    publishedAt,
    "url":slug.current,
    mainImage,
    body
  }`);
  return { props: { data: Data, posts: posts }, revalidate: 300 };
}

export default function Blogs({ data, posts }) {
  const { hero, heading, video, slider, reveal, featured, reviews, chef } =
    data;
  const { scroll } = useLocomotiveScroll();

  const router = useRouter();
  const blogSectionRef = useRef(null);
  const { query } = router;
  const pageNumber = query.pageNumber ? parseInt(query.pageNumber, 10) : 1;
  const postsPerPage = 9;

  // Scroll to the Blog Section when page changes
  useEffect(() => {
    if (scroll) {
      const blogSection = blogSectionRef.current;
      if (blogSection) scroll.scrollTo(blogSection, { offset: "-50" });
    }
  }, [pageNumber]);

  // Calculate starting and ending indexes for the current page
  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = pageNumber * postsPerPage;

  // Validate the page number
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const isValidPageNumber =
    Number.isInteger(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages;
  // Handle cases where the page number is not found or invalid
  // if (!isValidPageNumber) {
  //   return <div>Invalid page number or page not found.</div>;
  // }

  // Slice the allPosts array based on the calculated indexes
  const displayedPosts = posts.slice(startIndex, endIndex);

  // Validate the displayedPosts array
  // if (displayedPosts.length === 0) {
  //   return <div>No posts to display on this page.</div>;
  // }

  // Disable previous button on the first page
  const isPreviousDisabled = pageNumber === 1;

  // Disable next button on the last page
  const isNextDisabled = pageNumber === totalPages;

  // Function to handle page number click
  const handlePageNumberClick = (pageNumber, e) => {
    e.preventDefault();
    router.push(`/blog?pageNumber=${pageNumber}`, undefined, { scroll: false });
  };

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
      <style jsx>
        {`
          .img {
            width: 300px;
            height: 400px;
            object-fit: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
          }

          @media screen and (max-width: 768px) {
            .heading {
              max-width: 100%;
            }

            .booking__form {
              grid-template-columns: 100%;
              width: 400px;
            }
            .right__border {
              border: 0;
            }
            .grid__merger {
              grid-area: 4;
            }
            .title {
              font-size: 1.4rem;
            }
            .center__align__form {
              display: flex;
              justify-content: center;
            }
          }

          .pager {
            margin: 8rem 0 0 0;
            font-size: 0;
            text-align: center;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;  
          }
          .pager__item {
            display: inline-block;
            vertical-align: top;
            font-size: 1.125rem;
            font-weight: bold;
            margin: 0 10px;
          }
          .pager__item.active .pager__link {
          
            color: #fff;
            text-decoration: none;
          }
          .pager__item--prev button,
          .pager__item--next button {
            width: 100%;
            height: 100%;
          }
          .pager__item--prev svg,
          .pager__item--next svg {
            width: 10px;
height: 15px;
          }
          .pager__item--next .pager__link svg {
            transform: rotate(180deg);
            transform-origin: center center;
          }
          .pager__link {
            position: relative;
            display: block;
            text-align: center;
            width: 2.625rem;
            height: 2.625rem;
            line-height: 2.625rem;
            margin-left: -1px;
            color: var(--bg-color);
            text-decoration: none;
            transition: 0.3s;
            outline:none;
            border: none;
            background-color:transparent;
            padding:10px;
            border-radius:50%;
          }

          .pager__link svg g path
          {
            fill: var(--bg-color);
          }
          .pager__link:disabled
          {
            color: var(--gray-color);
            pointer-events:none;
          }
          .pager__link:disabled svg g path
          {
            fill: var(--gray-color);
          }

          .navigate
          {
          display: flex;
          justify-content: center;
          align-items: center;
          }
          @media screen and (max-width: 576px) {
            .pager__item {
              position: absolute;
              top: -9999px;
              left: -9999px;
              position: initial;
              top: initial;
              left: initial;
            }
           
            }
            .pager__item.active + li {
              position: initial;
              top: initial;
              left: initial;
            }
          }
        `}
      </style>

      <div>
        <Head>
          <title>Blog - Discover Inspiring Stories | De Foret</title>
          <meta
            name="description"
            content="Explore our resort blog and discover a world of inspiring stories, captivating destinations, and unforgettable experiences. Dive into the realm of travel adventures and get inspired to embark on your next journey."
          />
          <meta
            name="keywords"
            content="De Foret blog, travel stories, captivating destinations, inspiring experiences, travel adventures"
          />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <Hero
          image={hero.bgImage}
          title={hero.title}
          description={hero.description}
        />

        <main className={styles.main}>
          {/* <Myimage src="https://i.picsum.photos/id/901/900/400.jpg?hmac=qkyi6SIz1DNx4pZGhPam9Vtqft_YzQ45QdHBEWtsYG8" className={styles.myImage} /> */}

          {/* <Carousel slides={media}/> */}

          <div className={styles.container}>
            <section className="section mt-20" data-scroll>
              <div className="grid">
                <TextWithImage
                  heading={heading.title}
                  bgtext={heading.bgScrollText}
                  content={heading.description}
                />
              </div>
            </section>
          </div>

          <section
            className="section mt-40"
            style={{ backgroundColor: "#fff" }}
            data-scroll
          >
            <div className={styles.homeSlider__position}>
              <div className={styles.homeSlider}>
                <div
                  className={styles.container}
                  ref={blogSectionRef}
                  id="blog-section-marker"
                >
                  <div className="blog_grid">
                    {displayedPosts?.map((post, index) => (
                      <BlogItem
                        key={post.url}
                        title={post.title}
                        createdOn={post.publishedAt}
                        category={post.categories?.[0]}
                        slug={post.url}
                        image={post.mainImage}
                      />
                    ))}
                  </div>
                  {totalPages > 1 ? (
                    <nav>
                      <ul className="pager">
                        <li className="pager__item pager__item--prev">
                          <button
                            className="pager__link navigate cursor__hover"
                            href=""
                            onClick={(e) =>
                              handlePageNumberClick(pageNumber - 1, e)
                            }
                            style={{
                              pointerEvents: isPreviousDisabled
                                ? "none"
                                : "auto",
                              cursor: isPreviousDisabled ? "none" : "pointer",
                            }}
                            disabled={isPreviousDisabled}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="12"
                              viewbox="0 0 8 12"
                              className="cursor__hover"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  className="cursor__hover"
                                  fill="#33313C"
                                  d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </li>

                        {Array.from({ length: totalPages }, (_, index) => (
                          <li key={index} className="pager__item">
                            <button
                              className="pager__link navigate cursor__hover"
                              href=""
                              onClick={(e) =>
                                handlePageNumberClick(index + 1, e)
                              }
                              style={{
                                marginLeft: "0.5rem",
                                pointerEvents:
                                  pageNumber === index + 1 ? "none" : "auto",
                                cursor:
                                  pageNumber === index + 1 ? "none" : "pointer",
                                border:
                                  pageNumber === index + 1
                                    ? "solid 3px var(--wood-color)"
                                    : "solid 3px transparent",
                              }}
                              disabled={pageNumber === index + 1}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                        <li className="pager__item pager__item--next">
                          <button
                            className="pager__link navigate cursor__hover"
                            href=""
                            onClick={(e) =>
                              handlePageNumberClick(pageNumber + 1, e)
                            }
                            style={{
                              pointerEvents: isNextDisabled ? "none" : "auto",
                              cursor: isNextDisabled ? "none" : "pointer",
                            }}
                            disabled={isNextDisabled}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="12"
                              viewbox="0 0 8 12"
                              className="cursor__hover"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  fill="#33313C"
                                  className="cursor__hover"
                                  d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  ) : null}
                </div>
              </div>
            </div>

            <section className="section mt-10"></section>
          </section>

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
}
