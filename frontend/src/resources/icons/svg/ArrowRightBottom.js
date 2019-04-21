import React from "react";

const SvgArrowRightBottom = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowRightBottomIconTitle arrowRightBottomIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M19 11v8h-8" />
    <path strokeLinecap="round" d="M19 19l-1-1" />
    <path d="M18 18L5 5" />
  </svg>
);

export default SvgArrowRightBottom;
