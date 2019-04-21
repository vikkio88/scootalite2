import React from "react";

const SvgWindow = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="windowIconTitle windowIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M3 3h18v18H3z" />
    <path strokeLinecap="round" d="M6 6h0M9 6h0M12 6h0" />
    <path d="M21 9H3" />
  </svg>
);

export default SvgWindow;
