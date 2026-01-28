import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import groq from "groq";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Hero from "../../components/hero/Hero";
import RoomBookingForm from "../../components/booking/room";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/legacy/image";
import PostInfo from "../../components/blog/postInfo";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { sanityClient } from "../../utils/SanityClient";
import { dateToString } from "../../utils/DateUtils";
import BlogItem from "../../components/blog";
import { useRouter } from "next/router";
import URLMaker from "../../utils/URLMaker";
import { useAppContext } from "../../utils/Context";
import InternalLinkButton from "../../components/buttons/InternalLinkButton";
import ExternalLinkButton from "../../components/buttons/ExternalLinkButton";

function urlFor(source) {
  return imageUrlBuilder(sanityClient)
    .image(source)
    .fit("max")
    .auto("format")
    .url();
}

function urlForOGImage(source) {
  return imageUrlBuilder(sanityClient)
    .image(source)
    .width(1200)
    .height(630)
    .url();
}

const SanityImage = (image) => {
  const imageProps = useNextSanityImage(sanityClient, image.asset);
  if (!imageProps) return null;
  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
      alt={image?.alt || " "}
      title={image?.title || " "}
      loading="lazy"
    />
  );
};

const Post = ({ post, recomendedPosts }) => {
  const { handleLinksClick } = useAppContext();

  const router = useRouter();
  const { scroll } = useLocomotiveScroll();

  const components = {
    types: {
      image: ({ value }) => {
        return <SanityImage {...value} />;
      },
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="blog_list">{children}</ul>,
      number: ({ children }) => <ol className="blog_o_list">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => <ol className="blog_list">{children}</ol>,
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z"
              fillRule="nonzero"
            />
          </svg>
          <span>{children}</span>
        </li>
      ),

      number: ({ children }) => (
        <li>
          <span>{children}</span>
        </li>
      ),

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
    block: {
      normal: ({ children }) => <p className="paragraph">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),
    },
    marks: {
      internalLink: ({ value, children }) => (
        <InternalLinkButton
          href={value.url}
          onClick={(e) => handleLinksClick(value.url, e)}
          title={children}
        />
      ),
      link: ({ value, children }) => (
        <ExternalLinkButton href={value.href} onClick={null} title={children} />
      ),
    },
  };

  useEffect(() => {
    scroll && scroll.scrollTo(0, { duration: 0, disableLerp: true });
  }, [router.query.slug]);

  return (
    <>
      <style jsx>
        {`
          .blog_post {
            display: flex;
            flex-direction: column;
          }
          .image_wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 400px;
          }
          .img {
            position: absolute;
            -webkit-transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
            transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
            width: 100%;
            height: 450px;
            object-fit: cover;
          }
          .blog_post:hover img {
            transform: translateY(-30px);
          }
          .blog_category {
            color: var(--bg-text-color-fade);
            display: block;
            font-size: var(--fs-desktop);
            text-transform: uppercase;
            margin-top: 10px;
          }
          .blog_category:after {
            content: "";
            height: 2px;
            width: 30px;
            background-color: var(--wood-color);
            display: block;
            margin-top: 6px;
            left: 0;
          }
          .blog_title {
            font-size: var(--fs-tit-desktop);
            color: var(--bg-color1);
            margin: 8px 0 15px 0;
            font-weight: 400;
          }
          .blog_date {
            font-size: var(--fs-mobile);
            color: var(--gray-color);
            display: inline-block;
          }
          .feature__title {
            font-size: var(--fs-tit-desktop);
            mix-blend-mode: difference;
            margin-bottom: 40px;
            font-weight: 100;
            text-transform: uppercase;
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
        `}
      </style>

      <div>
        <Head>
          <title>{post?.metaTitle}</title>
          <meta name="description" content={post?.metaDescription} />
          <meta name="keywords" content={post?.metaKeywords} />
          <meta property="og:title" content={post?.metaTitle} />
          <meta property="og:description" content={post?.metaDescription} />
          <meta property="og:image" content={urlForOGImage(post?.mainImage)} />
          <meta property="og:url" content={URLMaker(router.asPath)} />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <Hero image={urlFor(post?.mainImage)} title={post?.title} />

        <main className={styles.main}>
          <div className={styles.container_blog}>
            <section className="section mt-10" data-scroll>
              {/* dsjlksjflksjflksdj Author : {post?.name}
              Categories - {post?.categories?.[0]}
              <img src={urlFor(post?.authorImage).width(30).url()} /> */}
              <PostInfo
                createdBy={post.authorName}
                createdOn={dateToString(post.publishedAt)}
                readTime={post.readTime}
                shareLink={URLMaker(router.asPath)}
              />
              <PortableText value={post?.body} components={components} />
            </section>
          </div>

          <section
            className="section mt-10"
            style={{ backgroundColor: "#fff" }}
            data-scroll
          >
            <div className={styles.container}>
              <div className="feature__title font__parata">Read Next</div>
              <div className="blog_grid">
                {recomendedPosts?.map((post, index) => (
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
            </div>

            <section className="section mt-10"></section>
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
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "authorName": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  publishedAt,
  "url":slug.current,
  mainImage,
  readTime,
  body,
  metaTitle,
  metaDescription,
  metaKeywords
  }`;

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await sanityClient.fetch(query, { slug });

  const recomendedPosts = await sanityClient.fetch(
    `*[_type == "post" && slug.current != $currentSlug && publishedAt <= now()] | order(_rand) [0...3]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    publishedAt,
    "url":slug.current,
    mainImage,
    body
  }`,
    { currentSlug: slug }
  );

  if (!post) {
    return {
      notFound: true, // Return a 404 error page
    };
  }

  return {
    props: {
      post,
      recomendedPosts,
    },
    revalidate: 300,
  };
}

export default Post;
