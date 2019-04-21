import React from "react";

const SvgKey = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="keyIconTitle keyIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 16v-4h-9" />
    <circle cx={7} cy={12} r={4} />
    <path d="M17 15v-3" />
  </svg>
);

export default SvgKey;
