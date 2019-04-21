import React from "react";

const SvgCalendar = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="calendarIconTitle calendarIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 5h18v16H3zM21 10H3m5-3V3m8 4V3" />
  </svg>
);

export default SvgCalendar;
