import React from "react";

const SvgSunCloud = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="sunCloudIconTitle sunCloudIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6.417 18a3.75 3.75 0 1 1 1.009-7.363 5.001 5.001 0 0 1 9.342 1.55A2.917 2.917 0 0 1 16.417 18h-10z" />
    <path
      strokeLinecap="butt"
      d="M18.034 12.832A4.003 4.003 0 0 0 20.882 9 4 4 0 0 0 13 8.032"
    />
  </svg>
);

export default SvgSunCloud;
