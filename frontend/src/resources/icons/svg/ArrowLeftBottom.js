import React from "react";

const SvgArrowLeftBottom = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowLeftBottomIconTitle arrowLeftBottomIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 11v8h8" />
    <path strokeLinecap="round" d="M5 19l1-1" />
    <path d="M6 18L19 5" />
  </svg>
);

export default SvgArrowLeftBottom;
