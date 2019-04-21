import React from "react";

const SvgBug = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="bugIconTitle bugIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M15 7a2 2 0 0 1 2 2v7.459a2 2 0 0 1-.853 1.638L12 21l-4.147-2.903A2 2 0 0 1 7 16.46v-7.46a2 2 0 0 1 2-2 3 3 0 0 1 6 0zM4 13h3M3 7l2 2h2M21 7l-2 2h-2M3 19l2-2h2M17 17h2l2 2h0M17 13h3" />
  </svg>
);

export default SvgBug;
