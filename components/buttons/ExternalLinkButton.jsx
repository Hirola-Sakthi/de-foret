import React from "react";
import Link from "next/link";
const ExternalLinkButton = (props) => {
  return (
    <>
      <style jsx>
        {`
          .btn {
            position: relative;
            font-size: 1.4rem;
            color: var(--wood-color);
            transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
            cursor: pointer;
            user-select: none;
            border-bottom: solid 1px var(--wood-color);
          }

          .btn:hover {
            transition-delay: 0.3s;
          }
        `}
      </style>

      <Link legacyBehavior href={props.href} passHref>
        <a
          target="_blank"
          className="btn from-left cursor__hover"
          onClick={props.onClick}
          style={{ color: props.color }}
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      </Link>
    </>
  );
};

export default ExternalLinkButton;
