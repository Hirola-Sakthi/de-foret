import React from "react";
import Link from "next/link";
import { useAppContext } from "../../utils/Context";
const Logo = (props) => {
  const { handleLinksClick } = useAppContext();
  return (
    <>
      <style jsx>
        {`
          .header {
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
          }
          .logo {
            display: block;
            position: absolute;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            width: 140px;
            top: 20px;
            z-index: 89;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
          }
          .logo-wrap {
            width: 140px;
            height: 100px;
            overflow: hidden;
            -webkit-transition: all 0.65s cubic-bezier(0.86, 0, 0.07, 1);
            transition: all 0.65s cubic-bezier(0.86, 0, 0.07, 1);
          }
          .logo img {
            width: 100px;
            height: auto;
          }
          @media (max-width: 576px) {
            .logo-wrap {
              width: 100px;
              margin: 0 auto;
            }
          }

          @media (max-width: 540px) {
            .logo {
              top: 20px;
            }
          }
        `}
      </style>
      <div id="head" className="header ">
        <div className="navigation-mobile "></div>
        <Link legacyBehavior href="/">
          <a
            className="logo hover-target cursor__hover"
            id="main-logo"
            onClick={(e) => handleLinksClick("/", e)}
          >
            <div id="logo-wrap" className="logo-wrap logo__hide cursor__hover">
              <img src="/images/logo.png" alt="" className="cursor__hover" />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Logo;
