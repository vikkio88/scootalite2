import React from "react";

const SvgPlaceholder = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="placeholderIconTitle placeholderIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 3h18v18H3z" />
    <path strokeLinecap="round" d="M21 21L3 3l18 18zm0-18L3 21 21 3z" />
  </svg>
);

export default SvgPlaceholder;
