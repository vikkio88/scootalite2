import React from "react";

const SvgRefresh = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="refreshIconTitle refreshIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M22 12l-3 3-3-3" />
    <path d="M11 20a8 8 0 1 1 8-8v2" />
  </svg>
);

export default SvgRefresh;
