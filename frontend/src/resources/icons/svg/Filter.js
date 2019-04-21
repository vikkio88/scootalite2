import React from "react";

const SvgFilter = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="filterIconTitle filterIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10 12.261L4.028 3.972h16L14 12.329V17l-4 3z" />
  </svg>
);

export default SvgFilter;
