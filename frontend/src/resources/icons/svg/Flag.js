import React from "react";

const SvgFlag = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="flagIconTitle flagIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 20v-5c1.333-1.333 3-2 5-2 3 0 4 2 6 2 1 0 2-.333 3-1V5c-1 .667-2 1-3 1-2 0-3-2-6-2-2 0-3.667.667-5 2v9" />
  </svg>
);

export default SvgFlag;
