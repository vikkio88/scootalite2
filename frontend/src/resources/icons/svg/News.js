import React from "react";

const SvgNews = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="newsIconTitle newsIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M22 5v12c0 1.333-.667 2-2 2s-2-.667-2-2V5H2v11c0 2 1 3 3 3h15M6 14h1m4 0h3m-8-4h8" />
  </svg>
);

export default SvgNews;
