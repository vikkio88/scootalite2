import React from "react";

const SvgNew = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="newIconTitle newIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M19 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9" />
    <path d="M21.29 2.04l.67.67a2 2 0 0 1 0 2.83L12 15.5H8.5V12l9.96-9.96a2 2 0 0 1 2.83 0zm-4.04 1.21l3.5 3.5" />
  </svg>
);

export default SvgNew;
