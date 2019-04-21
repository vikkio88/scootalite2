import React from "react";

const SvgList = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="listIconTitle listIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10 7h8m-8 5h8m-8 5h8M7 7h0M7 12h0M7 17h0" />
  </svg>
);

export default SvgList;
