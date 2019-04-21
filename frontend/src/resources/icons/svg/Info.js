import React from "react";

const SvgInfo = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="infoIconTitle infoIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 12v3M12 9h0" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgInfo;
