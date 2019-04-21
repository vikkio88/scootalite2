import React from "react";

const SvgTime = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="timeIconTitle timeIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 5v7l4 4" />
  </svg>
);

export default SvgTime;
