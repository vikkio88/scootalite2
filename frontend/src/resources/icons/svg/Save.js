import React from "react";

const SvgSave = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="saveIconTitle saveIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17.293 3.293L21 7v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.586a1 1 0 0 1 .707.293z" />
    <path d="M7 13h10v8H7zM8 3h8v5H8z" />
  </svg>
);

export default SvgSave;
