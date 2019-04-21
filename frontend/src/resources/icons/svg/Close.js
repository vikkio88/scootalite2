import React from "react";

const SvgClose = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="closeIconTitle closeIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6.343 6.343l11.314 11.314m-11.314 0L17.657 6.343" />
  </svg>
);

export default SvgClose;
