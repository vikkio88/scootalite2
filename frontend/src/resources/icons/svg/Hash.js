import React from "react";

const SvgHash = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="hashIconTitle hashIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M11 3L5 21M19 3l-6 18M3 16h16M5 8h16" />
  </svg>
);

export default SvgHash;
