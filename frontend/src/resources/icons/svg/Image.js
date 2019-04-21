import React from "react";

const SvgImage = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="imageIconTitle imageIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 3h18v18H3z" />
    <path strokeLinecap="round" d="M3 14l4-4 11 11" />
    <circle cx={13.5} cy={7.5} r={2.5} />
    <path strokeLinecap="round" d="M13.5 16.5L21 9" />
  </svg>
);

export default SvgImage;
