import React from "react";

const SvgColours = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="coloursIconTitle coloursIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <circle cx={12} cy={9} r={5} />
    <circle cx={9} cy={14} r={5} />
    <circle cx={15} cy={14} r={5} />
  </svg>
);

export default SvgColours;
