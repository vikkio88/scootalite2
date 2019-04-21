import React from "react";

const SvgSignal = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="signalAltIconTitle signalAltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18 5C11.373 5 6 10.373 6 17m12-8a8 8 0 0 0-8 8m8-4a4 4 0 0 0-4 4" />
  </svg>
);

export default SvgSignal;
