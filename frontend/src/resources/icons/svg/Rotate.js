import React from "react";

const SvgRotate = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="rotateIconTitle rotateIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M22 12l-3 3-3-3M2 12l3-3 3 3" />
    <path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10" />
    <path strokeLinecap="round" d="M5 10V9M19 15v-1" />
  </svg>
);

export default SvgRotate;
