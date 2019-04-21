import React from "react";

const SvgSmartphone = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="smartphoneIconTitle smartphoneIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinejoin="round"
      d="M18 3v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"
    />
    <path d="M11 19h2" />
  </svg>
);

export default SvgSmartphone;
