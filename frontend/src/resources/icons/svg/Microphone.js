import React from "react";

const SvgMicrophone = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="microphoneIconTitle microphoneIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 12a5 5 0 0 1-10 0m5 5v4" />
    <rect width={4} height={10} x={10} y={4} rx={2} />
  </svg>
);

export default SvgMicrophone;
