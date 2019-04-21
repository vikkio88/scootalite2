import React from "react";

const SvgSuitcase = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="suitcaseIconTitle suitcaseIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 7h18v12H3zM8 3h8v4H8z" />
  </svg>
);

export default SvgSuitcase;
