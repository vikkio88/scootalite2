import React from "react";

const SvgDolar = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="dolarIconTitle dolarIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 4v2m0 12v2m3.5-12C15.167 6.667 14 6 12 6 9 6 8.5 7.957 8.5 9c0 4.14 7 1.965 7 6 0 1.043-.5 3-3.5 3-2 0-3.167-.667-3.5-2" />
  </svg>
);

export default SvgDolar;
