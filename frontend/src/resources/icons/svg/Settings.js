import React from "react";

const SvgSettings = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="settingsIconTitle settingsIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5.035 12.705a7.083 7.083 0 0 1 0-1.41l-1.83-2.063 2-3.464 2.702.553c.38-.275.79-.512 1.222-.707L10 3h4l.871 2.614c.433.195.842.432 1.222.707l2.701-.553 2 3.464-1.83 2.063a7.083 7.083 0 0 1 0 1.41l1.83 2.063-2 3.464-2.701-.553c-.38.275-.79.512-1.222.707L14 21h-4l-.871-2.614a6.993 6.993 0 0 1-1.222-.707l-2.701.553-2-3.464 1.83-2.063z" />
    <circle cx={12} cy={12} r={1} />
  </svg>
);

export default SvgSettings;
