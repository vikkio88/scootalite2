import React from "react";

const SvgLink = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="linkIconTitle linkIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9 7H7a5 5 0 0 0 0 10h2M8 12h8M15 17h2a5 5 0 0 0 0-10h-2" />
  </svg>
);

export default SvgLink;
