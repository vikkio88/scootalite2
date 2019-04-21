import React from "react";

const SvgPrint = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="printIconTitle printIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M17 14v7H7v-7zM17 3v6H7V3z" />
    <path d="M7 18H3V9h18v9h-4" />
  </svg>
);

export default SvgPrint;
