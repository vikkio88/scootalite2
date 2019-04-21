import React from "react";

const SvgPlay = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="playIconTitle playIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M20 12L5 21V3z" />
  </svg>
);

export default SvgPlay;
