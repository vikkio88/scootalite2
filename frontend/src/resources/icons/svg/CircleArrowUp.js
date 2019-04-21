import React from "react";

const SvgCircleArrowUp = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowUpIconTitle arrowUpIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9 10.5l3-3 3 3M12 16.5V9" />
    <path strokeLinecap="round" d="M12 7.5V9" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgCircleArrowUp;
