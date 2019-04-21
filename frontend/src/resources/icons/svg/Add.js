import React from "react";

const SvgAdd = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="addIconTitle addIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 12H7m5 5V7" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgAdd;
