import React from "react";

const SvgLockAlt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="lockAltIconTitle lockAltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 11h14v10H5zM12 3h0a5 5 0 0 1 5 5v3H7V8a5 5 0 0 1 5-5z" />
    <circle cx={12} cy={16} r={1} />
  </svg>
);

export default SvgLockAlt;
