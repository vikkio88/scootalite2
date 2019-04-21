import React from "react";

const SvgBatteryMedium = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="batteryMediumIconTitle batteryMediumIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 14v-4M20 6H4v12h16zM12 14v-4m-4 4v-4" />
  </svg>
);

export default SvgBatteryMedium;
