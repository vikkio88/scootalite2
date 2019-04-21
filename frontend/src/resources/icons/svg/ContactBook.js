import React from "react";

const SvgContactBook = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="contactBookIconTitle contactBookIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 3v18M20 3v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14z" />
    <path d="M8 17c0-2 3.333-1.667 4.667-3 .666-.667-1.334-.667-1.334-4 0-2.222.889-3.333 2.667-3.333 1.778 0 2.667 1.111 2.667 3.333 0 3.333-2 3.333-1.334 4C16.667 15.333 20 15 20 17" />
  </svg>
);

export default SvgContactBook;
