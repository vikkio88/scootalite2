import React from "react";

const SvgCircleArrowRight = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="circleArrowRightIconTitle circleArrowRightIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M13.5 9l3 3-3 3M7.5 12H15" />
    <path strokeLinecap="round" d="M16.5 12H15" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgCircleArrowRight;
