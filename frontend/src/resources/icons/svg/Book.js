import React from "react";

const SvgBook = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="bookIconTitle bookIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M19 3v18H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h11z" />
    <path d="M5 18a3 3 0 0 1 3-3h11" />
  </svg>
);

export default SvgBook;
