import React from "react";

const SvgUser = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="userIconTitle userIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M5.5 19.5c2.333-1 3.833-1.833 4.5-2.5 1-1-2-1-2-6 0-3.333 1.333-5 4-5s4 1.667 4 5c0 5-3 5-2 6 .667.667 2.167 1.5 4.5 2.5"
    />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgUser;
