import React from "react";

const SvgEntrance = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="entranceIconTitle entranceIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M11 15l3-3-3-3M4.5 12H13" />
    <path strokeLinecap="round" d="M14 12h-1" />
    <path d="M18 4v16H7V4z" />
  </svg>
);

export default SvgEntrance;
