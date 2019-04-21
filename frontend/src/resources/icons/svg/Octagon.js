import React from "react";

const SvgOctagon = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="octagonIconTitle octagonIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M16 3l5 5v8l-5 5H8l-5-5V8l5-5z" />
  </svg>
);

export default SvgOctagon;
