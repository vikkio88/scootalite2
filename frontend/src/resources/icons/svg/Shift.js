import React from "react";

const SvgShift = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="shiftIconTitle shiftIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M5 21h14H5zm11-9v5H8v-5H3l9-9 9 9h-5z" />
  </svg>
);

export default SvgShift;
