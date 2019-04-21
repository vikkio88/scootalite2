import React from "react";

const SvgAnchor = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="anchorIconTitle anchorIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 20V7m-3 3h6" />
    <circle cx={12} cy={5} r={2} />
    <path d="M20 14c-1.333 4-4 6-8 6s-6.667-2-8-6" />
  </svg>
);

export default SvgAnchor;
