import React from "react";

const SvgCircleArrowLeft = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="circleArrowLeftIconTitle circleArrowLeftIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10.5 15l-3-3 3-3M16.5 12H9" />
    <path strokeLinecap="round" d="M7.5 12H9" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgCircleArrowLeft;
