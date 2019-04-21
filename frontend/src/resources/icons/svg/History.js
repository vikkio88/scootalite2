import React from "react";

const SvgHistory = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="historyIconTitle historyIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M1 12l2 2 2-2M12 7v5l3 3" />
    <path d="M12 21a9 9 0 1 0-9-9v1" />
  </svg>
);

export default SvgHistory;
