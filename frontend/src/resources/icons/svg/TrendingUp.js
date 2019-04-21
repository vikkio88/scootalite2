import React from "react";

const SvgTrendingUp = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="trendingUpIconTitle trendingUpIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 17l6-6 4 4 7.405-7.405" />
    <path strokeLinecap="round" d="M20.405 7.595L21 7" />
    <path d="M21 10V7h-3" />
  </svg>
);

export default SvgTrendingUp;
