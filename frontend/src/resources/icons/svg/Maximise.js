import React from "react";

const SvgMaximise = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="maximiseIconTitle maximiseIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 16v5h-5M8 21H3v-5M16 3h5v5M3 8V3h5" />
  </svg>
);

export default SvgMaximise;
