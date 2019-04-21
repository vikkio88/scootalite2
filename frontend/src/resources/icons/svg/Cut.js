import React from "react";

const SvgCut = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cutIconTitle cutIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 18l12-9m0 6L3 6" />
    <circle cx={18} cy={7} r={3} />
    <circle cx={18} cy={17} r={3} />
  </svg>
);

export default SvgCut;
