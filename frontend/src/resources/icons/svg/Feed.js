import React from "react";

const SvgFeed = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="feedIconTitle feedIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={7.5} cy={7.5} r={2.5} />
    <path d="M22 13H2M18 6h-5m5 3h-5M5 2h14a3 3 0 0 1 3 3v17H2V5a3 3 0 0 1 3-3z" />
  </svg>
);

export default SvgFeed;
