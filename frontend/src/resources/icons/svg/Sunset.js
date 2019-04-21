import React from "react";

const SvgSunset = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="sunsetIconTitle sunsetIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9.354 17a4 4 0 1 1 5.292 0H9.354zM12 7V5m10 12H2h20zM5 14H2h3zm17 0h-3 3zm-5.293-4.172l2.121-2.12-2.12 2.12zm-12-2.12l2.121 2.12-2.12-2.12z" />
  </svg>
);

export default SvgSunset;
