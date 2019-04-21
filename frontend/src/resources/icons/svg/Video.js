import React from "react";

const SvgVideo = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="videoIconTitle videoIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18 12l-9 4.9V7z" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgVideo;
