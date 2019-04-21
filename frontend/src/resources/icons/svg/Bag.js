import React from "react";

const SvgBag = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="bagIconTitle bagIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 7h14v12H5zM8 7a4 4 0 1 1 8 0" />
  </svg>
);

export default SvgBag;
