import React from "react";

const SvgExit = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="exitIconTitle exitIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18 15l3-3-3-3M11.5 12H20" />
    <path strokeLinecap="round" d="M21 12h-1" />
    <path d="M15 4v16H4V4z" />
  </svg>
);

export default SvgExit;
