import React from "react";

const SvgCrop = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cropIconTitle cropIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 3v14H3" />
    <path d="M7 21V7h14" />
  </svg>
);

export default SvgCrop;
