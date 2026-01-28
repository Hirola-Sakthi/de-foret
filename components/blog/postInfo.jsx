import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function PostInfo({
  createdBy,
  createdOn,
  readTime,
  shareLink,
}) {
  // Share URL for Facebook
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`;
  // Share URL for Twitter
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareLink}`;

  return (
    <>
      <style jsx>
        {`
          .postInfo {
            display: flex;
            font-size: 14px;
            width: 100%;
            justify-content: space-evenly;
            margin-bottom: 10rem;
            flex-wrap: wrap;
          }
          .item {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }
          .placeholder {
            font-size: 1rem;
            color: var(--wood-color);
          }
          .link {
            display: flex;
            gap: 10px;
          }
          .svg {
            fill: #fff;
            width: 1.8rem;
            height: 1.8rem;
            background-color: transparent;
            transition: 0.5s;
          }

          @media screen and (max-width: 480px) {
            .item {
              flex-basis: 50%;
            }
          }
        `}
      </style>
      <div>
        <div className="postInfo">
          <div className="item">
            <div className="author">{createdBy}</div>
            <span className="placeholder">Written By</span>
          </div>
          <div className="item">
            <div className="author">{createdOn}</div>
            <span className="placeholder">Created</span>
          </div>
          <div className="item">
            <div className="author">{readTime || 5} Min</div>
            <span className="placeholder">Read</span>
          </div>
          <div className="item">
            <div className="link">
              <Link legacyBehavior href={facebookShareUrl} passHref>
                <a
                  target="_blank"
                  className="cursor__hover"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <svg className="svg cursor__hover" viewBox="30 40 450 450">
                    <path
                      className="cursor__hover"
                      d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"
                    />
                  </svg>
                </a>
              </Link>

              <Link legacyBehavior href={twitterShareUrl} passHref>
                <a
                  target="_blank"
                  className="cursor__hover"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <svg className="svg cursor__hover" viewBox="30 50 400 400">
                    <path
                      className="cursor__hover"
                      d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <span className="placeholder">Share</span>
          </div>
        </div>
      </div>
    </>
  );
}
