import React from "react";

const SvgSadFace = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="sadFaceIconTitle sadFaceIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path strokeLinecap="round" d="M9 9h0M15 9h0" />
    <path d="M8 16c1.333-.667 2.666-1 3.997-.999 1.335 0 2.67.332 4.003.999" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgSadFace;
