import React from "react";

const SvgRectangle = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="rectangleIconTitle rectangleIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 3h18v18H3z" />
  </svg>
);

export default SvgRectangle;
