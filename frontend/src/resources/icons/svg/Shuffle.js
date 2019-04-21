import React from "react";

const SvgShuffle = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="shuffleIconTitle shuffleIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 8h-3.23a6 6 0 0 0-4.909 2.551l-2.064 2.938a6 6 0 0 1-4.91 2.55H2" />
    <path d="M21 16.04h-3.23a6 6 0 0 1-4.909-2.551l-2.064-2.938A6 6 0 0 0 5.887 8H3M20 6l2 2-2 2h0" />
    <path d="M20 14l2 2-2 2h0" />
  </svg>
);

export default SvgShuffle;
