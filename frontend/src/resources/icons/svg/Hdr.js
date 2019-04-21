import React from "react";

const SvgHdr = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="hdrIconTitle hdrIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18 12h1l2 3" />
    <path d="M7 9v6m3-6v6h2c1.333 0 2-1 2-3s-.667-3-2-3h-2zm7 6V9h3c.667 0 1 .5 1 1.5s-.333 1.5-1 1.5h-3M7 12H3m0-3v6" />
  </svg>
);

export default SvgHdr;
