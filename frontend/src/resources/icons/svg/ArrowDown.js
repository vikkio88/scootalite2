import React from "react";

const SvgArrowDown = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowDownIconTitle arrowDownIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 15l6 6 6-6M12 3v17" />
    <path strokeLinecap="round" d="M12 21v-1" />
  </svg>
);

export default SvgArrowDown;
