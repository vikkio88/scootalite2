import React from "react";

const SvgCamera = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cameraIconTitle cameraIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M8 7l.74-1.11A2 2 0 0 1 10.404 5h3.192a2 2 0 0 1 1.664.89L16 7h5v11H3V7h5z" />
    <circle cx={12} cy={12} r={3} />
  </svg>
);

export default SvgCamera;
