import React from "react";

const SvgVertical = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="verticalIconTitle verticalIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 18V6m-5 12V6M7 18V6" />
  </svg>
);

export default SvgVertical;
