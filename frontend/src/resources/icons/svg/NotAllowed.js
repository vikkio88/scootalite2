import React from "react";

const SvgNotAllowed = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="notAllowedIconTitle notAllowedIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M5 5l14 14" />
  </svg>
);

export default SvgNotAllowed;
