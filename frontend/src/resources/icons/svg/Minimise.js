import React from "react";

const SvgMinimise = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="minimiseIconTitle minimiseIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 3v5H3M21 8h-5V3M3 16h5v5M16 21v-5h5" />
  </svg>
);

export default SvgMinimise;
