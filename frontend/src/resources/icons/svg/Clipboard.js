import React from "react";

const SvgClipboard = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="clipboardIconTitle clipboardIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M15 3h4v18H5V3h4" />
    <path d="M14 4h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z" />
  </svg>
);

export default SvgClipboard;
