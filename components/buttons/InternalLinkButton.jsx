import React from "react";
import Link from "next/link";
const InternalLinkButton = (props) => {
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

      <Link legacyBehavior href={props.href}>
        <a
          className="btn from-left cursor__hover"
          onClick={props.onClick}
          style={{ color: props.color }}
        >
          {props.title}
        </a>
      </Link>
    </>
  );
};

export default InternalLinkButton;
