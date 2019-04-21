import React from "react";

const SvgStack = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="stackIconTitle stackIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10 7h4m-8 5h12M3 17h18" />
  </svg>
);

export default SvgStack;
