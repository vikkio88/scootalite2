import React from "react";

const SvgExplore = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="exploreIconTitle exploreIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14.121 14.121L7.05 16.95l2.829-7.071L16.95 7.05z" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgExplore;
