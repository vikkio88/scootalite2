import React from "react";

const SvgArrowLeftTop = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowLeftTopIconTitle arrowLeftTopIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 13V5h8" />
    <path strokeLinecap="round" d="M5 5l1 1" />
    <path d="M6 6l13 13" />
  </svg>
);

export default SvgArrowLeftTop;
