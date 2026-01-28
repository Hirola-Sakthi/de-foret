import React from "react";
import styles from "./Footer.module.css";
import cx from "classnames";
import Image from "next/legacy/image";
import footerbrandimg from "./image/logobig.png";
import Link from "next/link";
import { useAppContext } from "../../utils/Context";
import Data from '../../data/json/pages/villas.json';


export default function Footer() {
  var footerbrand = {};

  const { rooms } = Data;
  const { handleLinksClick } = useAppContext();
  return (
    <>
      <div className={styles.footerMask}></div>
      <div className={styles.footercontainer}>
        <div className={cx(styles.grid, styles.gridx4)}>
          <div className={styles.footerbrand}>
            <Image src={footerbrandimg} alt="Deforet" />
          </div>
          <div className={styles.footerlinks}>
            <h2></h2>
            <div className={styles.border1}></div>
            <ul className={styles.ul}>
              <li>
                {" "}
                <Link legacyBehavior href="/">
                  <a
                    className="cursor__hover"
                    onClick={(e) => handleLinksClick("/", e)}
                  >
                    Home
                  </a>
                </Link>
              </li>

              {rooms.map((room, index) => (
                <li key={index}>
                  <Link legacyBehavior href="/">  
                  <a className="cursor__hover"
                  onClick={(e) => handleLinksClick(room.link.url, e)}
                  >
                    {room.title}
                  </a>
                  </Link>
                  </li>
                  ))}

            </ul>
          </div>
          <div className={styles.footerlinks}>
            <h2></h2>
            <div className={styles.border1}></div>
            <ul className={styles.ul}>
                            <li>
                <Link legacyBehavior href="/">
                  <a
                    className="cursor__hover"
                    onClick={(e) => handleLinksClick("/villas", e)}
                  >
                    Villas
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className="cursor__hover"
                    onClick={(e) => handleLinksClick("/dining", e)}
                  >
                    Dining
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className="cursor__hover"
                    onClick={(e) => handleLinksClick("/activities", e)}
                  >
                    Activities
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className="cursor__hover"
                    onClick={(e) => handleLinksClick("/blog", e)}
                  >
                    Blog
                  </a>
                </Link>
              </li>

              <li>
                <Link legacyBehavior href="/">
                  <a
                    className="cursor__hover"
                    onClick={(e) => handleLinksClick("/contact-us", e)}
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footeraddress}>
            <h2 className={styles.resortName}>De Foret</h2>
            <p className={styles.p}>
              Near Radha Nagar Beach, Havelock Island, Andaman and Nicobar
              Island, India - 744211
              <br />
              Hotel Desk - <a href="tel:+913192283267">+91 3192283267</a>
              <br />
              Hotel Desk -<a href="tel:+918001247000"> +91 800 124 7000</a>
              <br />
              Reservation Desk -{" "}
              <a href="tel:+918001246000">+91 800 124 6000</a>
            </p>

            {/* <span>Subscribe For Excuisite Offers</span>
            <div className={styles.inputgroup}>
              <input
                className={styles.input}
                placeholder="Enter Your Email"
                type="email"
              />
              <button className={styles.btn} type="submit">
                <svg viewBox="0 0 600 600">
                  <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z" />{" "}
                </svg>
              </button>
            </div> */}
            <ul className={cx(styles.ul, styles.social)}>
              <li>
                <Link legacyBehavior href="mailto:contact@deforetresorts.com">
                  <a title="mail">
                    {/* <svg className="cursor__hover" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path className="cursor__hover" d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" /></svg>
                     */}
                    <svg
                      className="cursor__hover"
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 23 23"
                      strokeWidth="1.5"
                      stroke="#111111"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                  </a>
                </Link>
              </li>

              {/* <li >
                <Link href="tel:+918001247000">
                  <a title="Call">
                    <svg viewBox="0 0 52 52">
                      <path className="cursor__hover" d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z" />
                    </svg>
                  </a>
                </Link>
              </li> */}
              <li>
                {" "}
                <Link
                  legacyBehavior
                  href="https://www.facebook.com/deforetresortsandaman"
                >
                  <a
                    title="Facebook"
                    className="cursor__hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="cursor__hover" viewBox="30 40 450 450">
                      <path
                        className="cursor__hover"
                        d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  legacyBehavior
                  href="https://www.instagram.com/deforetresorts/"
                >
                  <a
                    title="Instagram"
                    className="cursor__hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="cursor__hover" viewBox="30 40 450 450">
                      <g>
                        <path
                          className="cursor__hover"
                          d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"
                        />
                        <path
                          className="cursor__hover"
                          d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"
                        />
                        <circle
                          className="cursor__hover"
                          cx="351.5"
                          cy="160.5"
                          r="21.5"
                        />
                      </g>
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link legacyBehavior href="https://x.com/DeForetResorts">
                  <a
                    title="x"
                    className="cursor__hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <svg className="cursor__hover" viewBox="30 50 400 400">
                      <path
                        className="cursor__hover"
                        d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
                      />
                    </svg> */}

                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  legacyBehavior
                  href="https://www.youtube.com/channel/UC6z5TBZ3JBle8qHUNlJc4hw"
                >
                  <a
                    title="YouTube"
                    className="cursor__hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="cursor__hover" viewBox="100 60 350 350">
                      <path
                        className="cursor__hover"
                        d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  legacyBehavior
                  href="https://in.pinterest.com/DeForetResort/"
                >
                  <a
                    title="Pinterest"
                    className="cursor__hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="cursor__hover"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -5 30 30"
                    >
                      <path
                        className="cursor__hover"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-7 20c-.825 0-1.62-.125-2.369-.357.326-.531.813-1.402.994-2.098l.499-1.901c.261.498 1.023.918 1.833.918 2.414 0 4.152-2.219 4.152-4.976 0-2.643-2.157-4.62-4.933-4.62-3.452 0-5.286 2.317-5.286 4.841 0 1.174.625 2.634 1.624 3.1.151.07.232.039.268-.107l.222-.907c.019-.081.01-.15-.056-.23-.331-.4-.595-1.138-.595-1.825 0-1.765 1.336-3.472 3.612-3.472 1.965 0 3.341 1.339 3.341 3.255 0 2.164-1.093 3.663-2.515 3.663-.786 0-1.374-.649-1.185-1.446.226-.951.663-1.977.663-2.664 0-.614-.33-1.127-1.012-1.127-.803 0-1.448.831-1.448 1.943 0 .709.239 1.188.239 1.188s-.793 3.353-.938 3.977c-.161.691-.098 1.662-.028 2.294-2.974-1.165-5.082-4.06-5.082-7.449 0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  legacyBehavior
                  href="https://www.tripadvisor.in/Hotel_Review-g503691-d20096069-Reviews-De_Foret-Havelock_Island_Andaman_and_Nicobar_Islands.html"
                >
                  <a
                    title="Trip Advisor"
                    className="cursor__hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="cursor__hover"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 -50 2304 1008"
                    >
                      <path
                        className="cursor__hover"
                        fill="currentColor"
                        d="M651 805q0 39-27.5 66.5T558 899q-39 0-66.5-27.5T464 805q0-38 27.5-65.5T558 712q38 0 65.5 27.5T651 805zm1154-1q0 39-27.5 66.5T1711 898t-66.5-27.5T1617 804t27.5-66t66.5-27t66.5 27t27.5 66zm-1040 1q0-79-56.5-136T572 612t-136.5 56.5T379 805t56.5 136.5T572 998t136.5-56.5T765 805zm1153-1q0-80-56.5-136.5T1725 611q-79 0-136 56.5T1532 804t56.5 136.5T1725 997t136.5-56.5T1918 804zm-1068 1q0 116-81.5 197.5T572 1084q-116 0-197.5-82T293 805t82-196.5T572 527t196.5 81.5T850 805zm1154-1q0 115-81.5 196.5T1725 1082q-115 0-196.5-81.5T1447 804t81.5-196.5T1725 526q116 0 197.5 81.5T2004 804zm-964 3q0-191-135.5-326.5T578 345q-125 0-231 62T179 575.5T117 807t62 231.5T347 1207t231 62q191 0 326.5-135.5T1040 807zm668-573q-254-111-556-111q-319 0-573 110q117 0 223 45.5T984.5 401t122 183t45.5 223q0-115 43.5-219.5t118-180.5T1491 284t217-50zm479 573q0-191-135-326.5T1726 345t-326.5 135.5T1264 807t135.5 326.5T1726 1269t326-135.5T2187 807zm-266-566h383q-44 51-75 114.5T2189 470q110 151 110 337q0 156-77 288t-209 208.5t-287 76.5q-133 0-249-56t-196-155q-47 56-129 179q-11-22-53.5-82.5T1024 1168q-80 99-196.5 155.5T578 1380q-155 0-287-76.5T82 1095T5 807q0-186 110-337q-9-51-40-114.5T0 241h365Q514 141 720 84.5T1152 28q224 0 421 56t348 157z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom} style={{ textAlign: "center" , display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className={styles.copy} style={{marginTop: "16px"}}>
          <Link legacyBehavior href="/">
  <a title="Made with care and love">
    © 2025 • All Rights Reserved by De Foret Resort
  </a>
</Link>

          </div>
          {/* <div className={styles.creator}>
            Website by{" "}
            <Link legacyBehavior href="https://thethirdsanta.com">
              <a target="_blank" title="Made with care and love">
                Third Santa
              </a>
            </Link>{" "}
            &amp;
            <Link legacyBehavior href="https://prosafesolutions.in">
              <a target="_blank" title="Made with care and love">
                {" "}
                Prosafe Solutions
              </a>
            </Link>
          </div> */}
        </div>
        <div className={styles.footerOverlay}></div>
      </div>
    </>
  );
}
