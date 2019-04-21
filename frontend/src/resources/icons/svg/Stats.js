import React from "react";

const SvgStats = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="statsIconTitle statsIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 7h9m-9 5h12M6 17h6" />
  </svg>
);

export default SvgStats;
