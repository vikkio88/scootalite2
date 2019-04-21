import React from "react";

const SvgVolumeOff = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="volumeOffIconTitle volumeOffIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M13 5v14l-5-4H3V9h5z" />
    <path strokeLinecap="round" d="M13 14c1.5-1 1.5-3 0-4" />
  </svg>
);

export default SvgVolumeOff;
