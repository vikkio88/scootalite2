import React from "react";

const SvgChevronDown = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="chevronDownIconTitle chevronDownIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 10l6 6 6-6" />
  </svg>
);

export default SvgChevronDown;
