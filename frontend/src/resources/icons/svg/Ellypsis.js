import React from "react";

const SvgEllypsis = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="ellypsisIconTitle ellypsisIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={6} cy={12} r={1} />
    <circle cx={18} cy={12} r={1} />
  </svg>
);

export default SvgEllypsis;
