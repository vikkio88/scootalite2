import React from "react";

const SvgBackLeft = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="backLeftIconTitle backLeftIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 17v-2c0-4.97 3.806-9 8.5-9s8.5 4.03 8.5 9" />
    <path d="M8 15l-3 3-3-3" />
  </svg>
);

export default SvgBackLeft;
