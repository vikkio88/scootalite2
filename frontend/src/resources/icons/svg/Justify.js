import React from "react";

const SvgJustify = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="justifyIconTitle justifyIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 10h12M6 6h12M6 14h12M6 18h12" />
  </svg>
);

export default SvgJustify;
