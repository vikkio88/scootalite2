import React from "react";

const SvgZoomIn = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="zoomInIconTitle zoomInIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M4 20l5.588-5.588M14 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM16.667 10h-5.334M14 7.333v5.334" />
  </svg>
);

export default SvgZoomIn;
