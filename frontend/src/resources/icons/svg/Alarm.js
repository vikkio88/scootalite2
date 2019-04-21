import React from "react";

const SvgAlarm = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="alarmIconTitle alarmIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={13} r={9} />
    <path d="M12 8v5l3 3M19 2l3 3M2 5l3-3" />
  </svg>
);

export default SvgAlarm;
