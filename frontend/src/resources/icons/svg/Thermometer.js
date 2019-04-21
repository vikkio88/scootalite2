import React from "react";

const SvgThermometer = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="thermometerIconTitle thermometerIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M10 13.535V5a2 2 0 1 1 4 0v8.535a4 4 0 1 1-4 0z" />
  </svg>
);

export default SvgThermometer;
