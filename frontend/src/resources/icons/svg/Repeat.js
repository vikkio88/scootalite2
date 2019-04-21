import React from "react";

const SvgRepeat = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="repeatIconTitle repeatIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M2 13.04V11a6 6 0 0 1 6-6h13" />
    <path d="M20 3l2 2-2 2h0M22 9.98v2.04a6 6 0 0 1-6 6H3" />
    <path d="M4 20.02l-2-2 2-2h0" />
  </svg>
);

export default SvgRepeat;
