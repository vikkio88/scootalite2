import React from "react";

const SvgArrowRight = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowRightIconTitle arrowRightIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M15 18l6-6-6-6M3 12h17" />
    <path strokeLinecap="round" d="M21 12h-1" />
  </svg>
);

export default SvgArrowRight;
