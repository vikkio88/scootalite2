import React from "react";

const SvgPlus = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="plusIconTitle plusIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M20 12H4m8-8v16" />
  </svg>
);

export default SvgPlus;
