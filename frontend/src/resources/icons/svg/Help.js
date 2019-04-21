import React from "react";

const SvgHelp = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="helpIconTitle helpIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 14c0-2 1.576-2.335 2.119-2.876a3 3 0 1 0-4.952-3.113M12 17h0" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default SvgHelp;
