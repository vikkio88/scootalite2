import React from "react";

const SvgTool = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="toolIconTitle toolIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M9.743 13.743a6 6 0 0 1-7.158-8.33L6.95 9.778 9.778 6.95 5.413 2.585a6 6 0 0 1 8.057 7.885l7.116 7.116a2 2 0 0 1 0 2.828l-.672.672a2 2 0 0 1-2.828 0l-7.343-7.343z" />
  </svg>
);

export default SvgTool;
