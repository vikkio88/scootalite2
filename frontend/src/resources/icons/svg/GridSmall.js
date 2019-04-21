import React from "react";

const SvgGridSmall = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="gridSmallIconTitle gridSmallIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 6h4v4H6zM13 6h4v4h-4zM6 13h4v4H6zM13 13h4v4h-4z" />
  </svg>
);

export default SvgGridSmall;
