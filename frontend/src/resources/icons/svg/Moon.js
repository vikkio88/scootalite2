import React from "react";

const SvgMoon = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="moonIconTitle moonIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10.424 3a8 8 0 0 0 10.152 10.152A8 8 0 1 1 10.424 3z" />
  </svg>
);

export default SvgMoon;
