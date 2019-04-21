import React from "react";

const SvgCursor = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cursorIconTitle cursorIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M7 20V4l12 12h-7l-5 5z" />
  </svg>
);

export default SvgCursor;
