import React from "react";

const SvgBatteryCharging = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="batteryChargingIconTitle batteryChargingIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M21 14v-4M20 6H4v12h16z" />
    <path d="M12 9l2 3h-4l2 3" />
  </svg>
);

export default SvgBatteryCharging;
