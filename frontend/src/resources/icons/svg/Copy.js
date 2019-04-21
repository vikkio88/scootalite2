import React from "react";

const SvgCopy = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="copyIconTitle copyIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 7h12v14H8z" />
    <path d="M16 3H4v14" />
  </svg>
);

export default SvgCopy;
