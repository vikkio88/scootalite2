import React from "react";

const SvgBatteryLow = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="batteryLowIconTitle batteryLowIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 14v-4M20 6H4v12h16zM8 14v-4" />
  </svg>
);

export default SvgBatteryLow;
