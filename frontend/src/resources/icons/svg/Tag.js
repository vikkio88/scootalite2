import React from "react";

const SvgTag = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="tagIconTitle tagIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 18l-6-6 6-6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8z" />
  </svg>
);

export default SvgTag;
