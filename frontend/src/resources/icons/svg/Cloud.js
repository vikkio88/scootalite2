import React from "react";

const SvgCloud = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cloudIconTitle cloudIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6.5 18a4.5 4.5 0 1 1 1.21-8.835 6.002 6.002 0 0 1 11.21 1.86 3.5 3.5 0 0 1-.42 6.975h-12z" />
  </svg>
);

export default SvgCloud;
