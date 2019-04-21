import React from "react";

const SvgVolumeQuiet = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="volumeQuietIconTitle volumeQuietIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M13 5v14l-5-4H3V9h5z" />
    <path strokeLinecap="round" d="M13 14c1.5-1 1.5-3 0-4" />
    <path d="M16 16c2.086-2.086 2.086-5.914 0-8" />
  </svg>
);

export default SvgVolumeQuiet;
