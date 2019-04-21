import React from "react";

const SvgNotebook = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="notebookIconTitle notebookIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9 8h5M18 3v18H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12z" />
    <path d="M5 19v-1a1 1 0 0 1 1-1h12" />
  </svg>
);

export default SvgNotebook;
