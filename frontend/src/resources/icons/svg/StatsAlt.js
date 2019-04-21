import React from "react";

const SvgStatsAlt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="statsAltIconTitle statsAltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14 6H8m13 4H8m-4 8V6m14 8H8m2 4H8" />
  </svg>
);

export default SvgStatsAlt;
