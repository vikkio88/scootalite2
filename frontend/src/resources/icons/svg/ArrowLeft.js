import React from "react";

const SvgArrowLeft = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowLeftIconTitle arrowLeftIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9 6l-6 6 6 6M21 12H4" />
    <path strokeLinecap="round" d="M3 12h1" />
  </svg>
);

export default SvgArrowLeft;
