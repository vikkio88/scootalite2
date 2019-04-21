import React from "react";

const SvgLineChart = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="lineChartIconTitle lineChartIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 16l5-5" />
    <circle cx={9} cy={10} r={1} />
    <circle cx={14} cy={15} r={1} />
    <path d="M10 11l3 3m2 0l6-6" />
  </svg>
);

export default SvgLineChart;
