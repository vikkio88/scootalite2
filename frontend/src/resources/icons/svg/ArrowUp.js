import React from "react";

const SvgArrowUp = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="arrowUpIconTitle arrowUpIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M18 9l-6-6-6 6M12 21V4" />
    <path strokeLinecap="round" d="M12 3v1" />
  </svg>
);

export default SvgArrowUp;
