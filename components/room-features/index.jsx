import React from "react";
import MyIcon from "../icon/myIcon";
import { Plus } from "lucide-react";
const RoomFeature = ({ title, left, right, price }) => {
  return (
    <div>
      <style jsx>
        {`
          .feature__title {
            font-size: var(--fs-tit-desktop);
            mix-blend-mode: difference;
            margin-bottom: 40px;
            font-weight: 100;
            text-transform: uppercase;
          }
          .feature__flex {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .feature__flex__item {
            width: 100%;
          }

          ul {
            list-style: none;
            padding: 0;
          }
          .wrap {
            padding: 0 10%;
            color: #fff;
          }
          .right__item li svg {
            width: 20px;
            margin-right: 10px;
          }
          .left__item li {
            display: flex;
            justify-content: start;
            margin-top: 20px;
          }
          .left__item li span {
            font-size: 1.6rem;
            padding: 0 20px 0 5px;
            mix-blend-mode: difference;
          }

          .left__item li :global(.iconSpan) {
            font-size: 1.6rem;
            padding: 0 20px 0 5px;
          }
          .left__item li :global(.iconSpan svg) {
            fill: var(--wood-color);
          }

          .right__item li {
            display: flex;
            justify-content: start;
            margin-top: 20px;
            align-items: start;
          }
          .right__item li span {
            font-size: 1.5rem;
            max-width: 90%;
            mix-blend-mode: difference;
          }
          .right__item li svg {
            fill: var(--wood-color);
            width: 20px;
            height: 20px;
          }

          @media screen and (max-width: 766px) {
            .feature__flex {
              flex-direction: column;
            }
            .feature__title {
              font-size: var(--fs-subtit-desktop);
            }
          }
          .price__card {
            border: 1px solid rgba(255, 255, 255, 0.25);
            padding: 24px;
            margin-top: 40px;
            margin-bottom: 40px;
            border-radius: 14px;
            background: #f8f8f8;
            backdrop-filter: blur(8px);
            width: 50%;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
            display: block;
          }
          .price__card-2 {
            border: 1px solid rgba(255, 255, 255, 0.25);
            padding: 24px;
            margin-top: 25px;
            margin-bottom: 25px;
            border-radius: 14px;
            background: #f8f8f8;
            backdrop-filter: blur(8px);
            width: 50%;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
            display: none;
          }

          .price__label {
            font-size: 1.2rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 8px;
            color: #000;
            font-weight: 500;
          }

          .price__value {
            font-size: 3.4rem;
            font-weight: 400;
            color: var(--wood-color);
            display: flex;
            align-items: baseline;
            gap: 8px;
          }

          .price__value span {
            font-size: 1.4rem;
            opacity: 2;
          }

          .price__note {
            margin-top: 10px;
            font-size: 1.2rem;
            color: #000;
            font-weight: 500;
          }
          .price_icon {
            display: inline-flex;
            align-items: flex-end;
            gap: 4px;
            color: #000;
          }

          .price__note {
            white-space: nowrap;
          }

          @media (max-width: 1024px) {
            .price__card {
              width: 60%;
            }
          }
          @media (max-width: 768px) {
            .price__card {
              width: 70%;
            }
            .price__card-2 {
              width: 70%;
            }
          }
          @media (max-width: 600px) {
            .price__card {
              display: none;
            }
            .price__card-2 {
              display: block;
              width:100%
            }
          }
        `}
      </style>
      <div className="wrap">
        <div className="feature__title font__parata">{title}</div>
        <div className="feature__flex">
          <div className="feature__flex__item">
            <ul className="left__item">
              {left.map((iconItem, index) => (
                <li key={index}>
                  <MyIcon icon={iconItem.icon} className="iconSpan" />
                  <span>{iconItem.title}</span>
                </li>
              ))}
            </ul>
            {price && (
              <div className="price__card">
                <div className="price__label">Starting From</div>
                <div className="price__value">
                  ₹{price.amount}
                  <span>/ {price.unit}</span>
                </div>
                <span className="price_icon">
                  <Plus size={14} />
                  {price.note && (
                    <span className="price__note">{price.note}</span>
                  )}
                </span>
              </div>
            )}
          </div>

          <div className="feature__flex__item">
            {" "}
            <ul className="right__item">
              {right.map((item, index) => (
                <li key={index}>
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

                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {price && (
              <div className="price__card-2">
                <div className="price__label">Starting From</div>
                <div className="price__value">
                  ₹{price.amount}
                  <span>/ {price.unit}</span>
                </div>
                <span className="price_icon">
                  <Plus size={14} />
                  {price.note && (
                    <span className="price__note">{price.note}</span>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomFeature;
