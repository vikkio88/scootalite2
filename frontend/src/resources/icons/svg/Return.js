import React from "react";

const SvgReturn = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="returnIconTitle returnIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M19 8v3a2 2 0 0 1-2 2H6" />
    <path d="M8 16l-3-3 3-3" />
  </svg>
);

export default SvgReturn;
