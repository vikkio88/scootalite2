import React from "react";

const SvgBell = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="bellIconTitle bellIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinejoin="round"
      d="M18 9v5c0 2 .667 3.333 2 4H4c1.333-.667 2-2 2-4V9h0a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6z"
    />
    <path d="M10 18a2 2 0 1 0 4 0" />
  </svg>
);

export default SvgBell;
