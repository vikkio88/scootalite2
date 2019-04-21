import React from "react";

const SvgPerson = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="personIconTitle personIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M4 20c0-3 4-3 6-5 1-1-2-1-2-6 0-3.333 1.333-5 4-5s4 1.667 4 5c0 5-3 5-2 6 2 2 6 2 6 5" />
  </svg>
);

export default SvgPerson;
