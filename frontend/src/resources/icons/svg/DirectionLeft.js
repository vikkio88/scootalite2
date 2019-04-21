import React from "react";

const SvgDirectionLeft = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="directionLeftIconTitle directionLeftIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M6 7h7.167C17.056 7 19 8.944 19 12.833V21" />
    <path d="M8 10L5 7l3-3h0" />
  </svg>
);

export default SvgDirectionLeft;
