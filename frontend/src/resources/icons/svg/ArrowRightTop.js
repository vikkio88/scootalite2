import React from "react";

const SvgArrowRightTop = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowRightTopIconTitle arrowRightTopIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M19 13V5h-8" />
    <path strokeLinecap="round" d="M19 5l-1 1" />
    <path d="M18 6L5 19" />
  </svg>
);

export default SvgArrowRightTop;
