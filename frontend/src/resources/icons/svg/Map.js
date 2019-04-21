import React from "react";

const SvgMap = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="mapIconTitle mapIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9 19l-6 2V5l6-2 6 2 6-2v15.5L15 21z" />
    <path strokeLinecap="round" d="M15 5v16M9 3v16" />
  </svg>
);

export default SvgMap;
