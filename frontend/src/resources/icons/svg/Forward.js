import React from "react";

const SvgForward = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="forwardIconTitle forwardIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10 14.74L3 19V5l7 4.26V5l12 7-12 7v-4.26z" />
  </svg>
);

export default SvgForward;
