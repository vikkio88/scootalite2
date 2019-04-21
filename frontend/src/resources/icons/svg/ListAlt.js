import React from "react";

const SvgListAlt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="listAltIconTitle listAltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 15h14M5 19h14M5 5h14v6H5z" />
  </svg>
);

export default SvgListAlt;
