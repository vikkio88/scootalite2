import React from "react";

const SvgUndo = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="undoIconTitle undoIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 15H3v-5M5 13c5-5 12.575-4.275 16 1" />
    <path strokeLinecap="round" d="M3 15l2-2" />
  </svg>
);

export default SvgUndo;
