import React from "react";

const SvgHamburger = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="hamburgerIconTitle hamburgerIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 7h12M6 12h12M6 17h12" />
  </svg>
);

export default SvgHamburger;
