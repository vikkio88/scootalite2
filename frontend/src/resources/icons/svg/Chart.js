import React from "react";

const SvgChart = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="chartIconTitle chartIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M2 12v9h4v-9zM18 7v14h4V7zM10 3v18h4V3z" />
  </svg>
);

export default SvgChart;
