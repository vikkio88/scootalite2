import React from "react";

const SvgTurnLeft = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="turnLeftIconTitle turnLeftIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M4.715 9h3.347C14.655 9 20 13.098 20 19.387" />
    <path d="M9 14L4 9l5-5h0" />
  </svg>
);

export default SvgTurnLeft;
