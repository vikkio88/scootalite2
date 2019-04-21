import React from "react";

const SvgLockOpen = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="lockOpenIconTitle lockOpenIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M7 7.625V7a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v4M5 11h14v10H5z" />
  </svg>
);

export default SvgLockOpen;
