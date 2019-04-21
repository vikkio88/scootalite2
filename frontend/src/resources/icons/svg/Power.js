import React from "react";

const SvgPower = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="powerIconTitle powerIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 2v9m6.364-5.364a9 9 0 1 1-12.728 0" />
  </svg>
);

export default SvgPower;
