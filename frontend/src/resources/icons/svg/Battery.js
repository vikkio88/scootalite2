import React from "react";

const SvgBattery = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="batteryIconTitle batteryIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 14v-4M20 6H4v12h16z" />
  </svg>
);

export default SvgBattery;
