import React from "react";

const SvgZoomOut = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="zoomOutIconTitle zoomOutIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM16.667 10h-5.334M4 20l5.588-5.588" />
  </svg>
);

export default SvgZoomOut;
