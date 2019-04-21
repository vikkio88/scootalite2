import React from "react";

const SvgGlasses = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="glassesIconTitle glassesIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M14 12c-.597-.667-1.264-1-2-1s-1.403.333-2 1"
    />
    <path d="M20 12h2M2 12h2" />
    <circle cx={7} cy={12} r={3} />
    <circle cx={17} cy={12} r={3} />
  </svg>
);

export default SvgGlasses;
