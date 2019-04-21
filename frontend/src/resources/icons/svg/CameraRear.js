import React from "react";

const SvgCameraRear = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cameraRearIconTitle cameraRearIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 12l2-2 2 2M8 13a4 4 0 0 0 4 4m4-4a4 4 0 0 0-4-4" />
    <path strokeLinecap="butt" d="M8 12v1m0-3v3m8 0v3" />
    <path d="M18 14l-2 2-2-2" />
    <path d="M8 7l.74-1.11A2 2 0 0 1 10.404 5h3.192a2 2 0 0 1 1.664.89L16 7h5v13H3V7h5z" />
  </svg>
);

export default SvgCameraRear;
