import React from "react";

const SvgBox = props => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="boxIconTitle boxIconDesc"
    stroke="#ff6e40"
    strokeLinecap="square"
    fill="none"
    color="#ff6e40"
    {...props}
  >
    <path d="M12 2l9 5v10l-9 5-9-5V7z" />
    <path strokeLinecap="round" d="M3 7l9 5 9-5M12 12v10" />
  </svg>
);

export default SvgBox;
