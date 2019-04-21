import React from "react";

const SvgControls = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="controlsIconTitle controlsIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 18V6m-5 12V6M7 18V6M5 8h4m1 8h4m1-4h4" />
  </svg>
);

export default SvgControls;
