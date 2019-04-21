import React from "react";

const SvgShield = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="shieldIconTitle shieldIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M19 14.737c0 2.386-2.333 4.474-7 6.263-4.667-1.79-7-3.877-7-6.263V5.789C8.136 4.596 10.47 4 12 4c1.53 0 3.864.596 7 1.79v8.947z" />
  </svg>
);

export default SvgShield;
