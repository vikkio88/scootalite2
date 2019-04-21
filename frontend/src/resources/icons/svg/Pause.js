import React from "react";

const SvgPause = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="pauseIconTitle pauseIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 4h4v16H5zM15 4h4v16h-4z" />
  </svg>
);

export default SvgPause;
