import React from "react";

const SvgTrendingDown = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="trendingDownIconTitle trendingDownIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 7l6 6 4-4 7.405 7.405" />
    <path strokeLinecap="round" d="M20.405 16.405L21 17" />
    <path d="M21 14v3h-3" />
  </svg>
);

export default SvgTrendingDown;
