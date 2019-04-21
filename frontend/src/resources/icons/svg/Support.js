import React from "react";

const SvgSupport = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="supportIconTitle supportIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 12h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4a9 9 0 0 0-18 0v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3" />
    <path d="M21 14v4c0 2-.667 3-2 3h-5" />
  </svg>
);

export default SvgSupport;
