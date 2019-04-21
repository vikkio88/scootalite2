import React from "react";

const SvgCircle = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="circleIconTitle circleIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={8} />
  </svg>
);

export default SvgCircle;
