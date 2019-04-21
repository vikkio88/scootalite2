import React from "react";

const SvgSearch = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="searchIconTitle searchIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14.412 14.412L20 20" />
    <circle cx={10} cy={10} r={6} />
  </svg>
);

export default SvgSearch;
