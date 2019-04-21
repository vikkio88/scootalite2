import React from "react";

const SvgLocation = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="locationIconTitle locationIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 21c4-4.2 6-8.2 6-12A6 6 0 1 0 6 9c0 3.8 2 7.8 6 12z" />
    <circle cx={12} cy={9} r={1} />
  </svg>
);

export default SvgLocation;
