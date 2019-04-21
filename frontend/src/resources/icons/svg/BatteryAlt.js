import React from "react";

const SvgBatteryAlt = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="batteryAltIconTitle batteryAltIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M14 3h-4M6 4v17h12V4z" />
  </svg>
);

export default SvgBatteryAlt;
