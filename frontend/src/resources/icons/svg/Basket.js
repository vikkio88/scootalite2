import React from "react";

const SvgBasket = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="basketIconTitle basketIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14 4l6 6-1.372 9H5.372L4 10l6-6" />
    <path strokeLinecap="round" d="M4 10h16" />
  </svg>
);

export default SvgBasket;
