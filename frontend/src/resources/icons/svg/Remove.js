import React from "react";

const SvgRemove = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="removeIconTitle removeIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 12H7" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgRemove;
