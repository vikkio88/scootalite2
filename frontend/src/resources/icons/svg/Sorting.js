import React from "react";

const SvgSorting = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="sortingIconTitle sortingIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 8.333l4-4 4 4h0M16 15.667l-4 4-4-4h0" />
  </svg>
);

export default SvgSorting;
