import React, { useState, useEffect, useRef } from "react";
// import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import Image from "next/image";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { dateToString } from "../../utils/DateUtils";
import LinkButton from "../buttons/LinkButton";
import { useAppContext } from "../../utils/Context";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";
import { sanityClient } from "../../utils/SanityClient";
import { useNextSanityImage } from "next-sanity-image";

function urlFor(source) {
  return imageUrlBuilder(sanityClient)
    .image(source)
    .width(800)
    .fit("max")
    .auto("format");
}

const BlogItem = ({ image, title, category, createdOn, slug }) => {
  const { scroll } = useLocomotiveScroll();
  const { handleLinksClick } = useAppContext();
  const imageProps = useNextSanityImage(sanityClient, image);

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

          @media screen and (max-width: 768px) {
          }
        `}
      </style>

      <style jsx global>
        {`
          .img {
            position: absolute;
            -webkit-transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
            transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
          }
          .blog_post:hover .img {
            transform: translateY(-30px) !important;
          }
        `}
      </style>
      <div className="blog_post">
        <Link legacyBehavior href={"/blog/" + slug}>
          <a
            className="cursor__hover"
            onClick={(e) => handleLinksClick("/blog/" + slug, e)}
          >
            <div className="image_wrapper">
              <Image
                loader={imageProps?.loader}
                {...imageProps}
                alt={image.alt}
                title={image.title}
                className="cursor__hover img"
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
                id="pop"
              />
            </div>
          </a>
        </Link>

        <span className="blog_category">{category}</span>
        <h3 className="blog_title">
          <Link legacyBehavior href={"/blog/" + slug}>
            <a
              className="cursor__hover"
              onClick={(e) => handleLinksClick("/blog/" + slug, e)}
            >
              {title}
            </a>
          </Link>
        </h3>
        <span className="blog_date">{dateToString(createdOn)}</span>
      </div>
    </>
  );
};

export default BlogItem;
