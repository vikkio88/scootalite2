import React from "react";

const SvgCrossing = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="crossingIconTitle crossingIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5.715 20.387l8.737-10.89A4 4 0 0 1 17.572 8H21" />
    <path d="M19 5l3 3-3 3h0M3 8h3.428a4 4 0 0 1 3.12 1.497l8.737 10.89" />
    <path d="M5 11L2 8l3-3" />
  </svg>
);

export default SvgCrossing;
