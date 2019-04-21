import React from "react";

const SvgTimer = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="timerIconTitle timerIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6.587 4.809A9 9 0 1 0 12 3v4m0 6L8 9" />
  </svg>
);

export default SvgTimer;
