import React from "react";

const SvgHorn = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="hornIconTitle hornIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinejoin="round"
      d="M6.5 9H12c2 0 4.333-1.667 7-5v15c-2.667-3.333-5-5-7-5H6.5h0A2.5 2.5 0 0 1 4 11.5h0A2.5 2.5 0 0 1 6.5 9z"
    />
    <path d="M7 14l2 6h4l-2-6zM11 9v5" />
  </svg>
);

export default SvgHorn;
