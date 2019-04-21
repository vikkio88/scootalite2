import React from "react";

const SvgDanger = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="dangerIconTitle dangerIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 10v3M12 16h0M12.862 4.465l8.252 14.028A1 1 0 0 1 20.252 20H3.748a1 1 0 0 1-.862-1.507l8.252-14.028a1 1 0 0 1 1.724 0z" />
  </svg>
);

export default SvgDanger;
