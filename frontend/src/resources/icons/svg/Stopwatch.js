import React from "react";

const SvgStopwatch = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="stopwatchIconTitle stopwatchIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={13} r={8} />
    <path d="M12 9v4m6-6l2-2m-5-3H9" />
  </svg>
);

export default SvgStopwatch;
