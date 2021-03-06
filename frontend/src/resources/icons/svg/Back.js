import React from "react";

const SvgBack = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="backIconTitle backIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14 14.74L21 19V5l-7 4.26V5L2 12l12 7v-4.26z" />
  </svg>
);

export default SvgBack;
